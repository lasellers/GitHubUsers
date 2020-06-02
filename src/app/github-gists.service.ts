import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Gist } from "./gist.model";
import { delay, map, tap } from "rxjs/operators";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, of, Subscription } from 'rxjs';
import { GitHubUserService } from "./github-user.service";

/**
 * Note: We could eliminate a lot of the event emitters etc in the services and just use
 * a public variable, however, part of the point of this repo is experimenting with
 * observables and the like...
 */
@Injectable({
  providedIn: 'root'
})
export class GitHubGistsService {
  @Output() errorMessage$ = new EventEmitter(true);

  // These are resolved async
  public apiCalls: number = 0;
  @Input() isCaching: boolean = true;

  @Output() gistsCached$ = new EventEmitter(true);
  @Output() gists$ = new EventEmitter(true);

  constructor(
    private http: HttpClient,
    private userService: GitHubUserService
  ) {
  }

  public isGistsCached(username: string): boolean {
    return (localStorage.getItem('gists_' + username) !== null);
  }

  clearGistsCache(): void {
    if (this.userService.getUserBasename() != null) {
      localStorage.removeItem('gists_' + this.userService.getUserBasename());
      this.gistsCached$.emit(false);
    }
  }

  public getGists(username: string): any { // Subscription {
    console.log('get gists native ' + username);
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('gists_' + username);
      if (cachedObj !== null) {
        this.gistsCached$.emit(true);
        const gists = JSON.parse(cachedObj);
        this.gists$.emit(gists);
        return; // of<Gist>(gists).subscribe();
      }
    }

    return this.http.get<Gist>(this.userService.getApiUrl() + username + '/gists').pipe(
      delay(0),
      map((results) => GitHubGistsService.processGistsToArray(results, false))
    ).subscribe(
      gists => {
        this.apiCalls++;
        this.gistsCached$.emit(false);
        this.gists$.emit(gists);
        if (this.isCaching) {
          localStorage.setItem('gists_' + username, JSON.stringify(gists));
        }
      },
      error => {
        this.apiCalls++;
        this.errorMessage$.emit(error);
      }); // ,
    // () => console.log('getGists finished'));
  }

  private static processGistsToArray(gists, isCached: boolean): Gist[] {
    let processedGists = [];
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

}
