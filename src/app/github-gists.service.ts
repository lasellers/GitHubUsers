import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Gist } from './gist.model';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GitHubUserService } from './github-user.service';
import { Gists } from "./gists.model";

/**
 * Note: We could eliminate a lot of the event emitters etc in the services and just use
 * a public variable, however, part of the point of this repo is experimenting with
 * observables and the like...
 */
@Injectable({
  providedIn: 'root'
})
export class GitHubGistsService {

  constructor(
    private http: HttpClient,
    private userService: GitHubUserService
  ) {
  }

  @Output() errorMessage$ = new EventEmitter(true);
  @Output() gistsCached$ = new EventEmitter(true);
  @Output() gists$ = new EventEmitter(true);

  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;

  // These are resolved async
  public apiCalls: number = 0;

  /**
   * Converts the raw gists data from the api into a simplified object type (called Gist)
   */
  public static processGistsToArray(rawGists: any, isCached: boolean): Gist[] {
    // If not an array of data, abort early with an empty array
    if (!Array.isArray(rawGists)) {
      return [];
    }
    // process raw gists api data into new array
    const processedGists = [];
    for (const gist of rawGists) {
      for (const key in gist.files) {
        if (gist.files.hasOwnProperty(key)) {
          const file = gist.files[key];
          if (file.hasOwnProperty('raw_url')) {
            processedGists.push({
              id: gist.id,
              url: file.url,
              contentUrl: file.raw_url,
              filename: file.filename,
              language: file.language,
              size: file.size,
              content: gist,
              cached: isCached
            });
          }
        }
      }
    }
    return processedGists;
  }

  /**
   *
   * @param username
   */
  public isGistsCached(username: string): boolean {
    return (localStorage.getItem('gists_' + username) !== null);
  }

  /**
   *
   * @param username
   */
  clearGistsCache(username: string): void {
    localStorage.removeItem('gists_' + username);
    this.gistsCached$.emit(false);
  }

  /**
   * Gets the list of gists for a specified username.
   *
   * Note that the raw gists format is always converted to a simplier version that is returned.
   * It's the simple version we cache in local storage.
   *
   * @param username
   */
  public getGists(username: string): Observable<any> {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('gists_' + username);
      if (cachedObj !== null) {
        const gists = JSON.parse(cachedObj);
        // emit that gists was cached
        this.gistsCached$.emit(true);
        return of<Gist>(gists);
      }
    }

    if(this.cacheOnly) return of();

    return this.http.get<Gists>(this.userService.getApiUrl() + username + '/gists').pipe(
      delay(0),
      map((results) => GitHubGistsService.processGistsToArray(results, false)),
      map((gists) => {
        this.apiCalls++;
        if (this.isCaching) {
          localStorage.setItem('gists_' + username, JSON.stringify(gists));
        }
        // emit that gists was not cached
        this.gistsCached$.emit(false);
        return gists;
      })
    );
  }

}
