import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Gist } from './gist.model';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, Subscription } from 'rxjs';
import { GitHubUserService } from './github-user.service';

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

  // These are resolved async
  public apiCalls: number = 0;
  @Input() isCaching: boolean = true;

  private static processGistsToArray(gists, isCached: boolean): Gist[] {
    const processedGists = [];
    for (const gist of gists) {
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

  public isGistsCached(username: string): boolean {
    return (localStorage.getItem('gists_' + username) !== null);
  }

  clearGistsCache(username: string): void {
    localStorage.removeItem('gists_' + username);
    this.gistsCached$.emit(false);
  }

  public getGists(username: string): any {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('gists_' + username);
      if (cachedObj !== null) {
        const gists = JSON.parse(cachedObj);
        return of<Gist>(gists);
      }
    }

    return this.http.get<Gist>(this.userService.getApiUrl() + username + '/gists').pipe(
      delay(0),
      map((results) => GitHubGistsService.processGistsToArray(results, false)),
      map((gists) => {
        this.apiCalls++;
        if (this.isCaching) {
          localStorage.setItem('gists_' + username, JSON.stringify(gists));
        }
        return gists;
      })
    );
  }

}
