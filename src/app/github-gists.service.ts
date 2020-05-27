import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Gist } from "./gist.model";
import { delay, map } from "rxjs/operators";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Subject } from "rxjs";
import { GitHubUserService } from "./git-hub-user.service";

@Injectable({
  providedIn: 'root'
})
export class GithubGistsService {
  @Output() errorMessage$ = new EventEmitter(true);

  // These are resolved async
  public apiCalls: number = 0;
  @Input() isCaching: boolean = true;

  public gists: any = [];

  @Output() gistsCached$ = new EventEmitter(true);
  @Output() gists$ = new EventEmitter(true);

  // @Output() gist$ = new EventEmitter(true);
  public gist$ = new Subject();
  public gistObs$ = this.gist$.asObservable();

  constructor(
    private http: HttpClient,
    private userService: GitHubUserService
  ) {
  }

  public isGistsCached(username: string): boolean {
    return (localStorage.getItem('gists_' + username) !== null);
  }

  public isGistCached(gist): boolean {
    return (localStorage.getItem('gist_' + gist.id + gist.filename) !== null);
  }

  clearGistsCache(): void {
    if (this.userService.getUserBasename() != null) {
      localStorage.removeItem('gists_' + this.userService.getUserBasename());
      this.gistsCached$.emit(false);
    }
  }

  clearGistCache(gist): void {
    localStorage.removeItem('gist_' + gist.id + gist.filename);
    if (typeof gist === 'object') {
      gist = Gist.constructor(); // this.blankGist();
    }
    this.gist$.next(gist);
  }

  public getGists(username: string): void {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('gists_' + username);
      if (cachedObj !== null) {
        const gists = JSON.parse(cachedObj);
        this.gists = GithubGistsService.processGistsToArray(gists, true);
        this.gistsCached$.emit(true);
        this.gists$.emit(this.gists);
        return;
      }
    }

    this.http.get(this.userService.getApiUrl() + username + '/gists').pipe(
      delay(0),
      map((results: HttpResponse<any>) => GithubGistsService.processGistsToArray(results, false)))
      .subscribe(
        gists => {
          this.apiCalls++;
          this.gists = gists;
          this.gistsCached$.emit(false);
          this.gists$.emit(this.gists);
          localStorage.setItem('gists_' + username, JSON.stringify(this.gists));
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        }); // ,
    // () => console.log('getGists finished'));
  }

  private static processGistsToArray(gists, isCached: boolean): any[] {
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

  public getGist(gist: Gist): void {
    if (this.isCaching) {
      const content = localStorage.getItem('gist_' + gist.id + gist.filename);
      if (content !== null) {
        gist.content = content;
        gist.cached = true;
        gist.wasCached = true;
        this.gist$.next(gist);
        return;
      }
    }

    this.http.get(gist.contentUrl, {responseType: 'text'}).pipe(
      delay(0),
      map((res) => res))
      .subscribe(
        content => {
          this.apiCalls++;
          gist.content = content;
          gist.cached = true;
          gist.wasCached = false;
          if (gist.size < (1024 * 32)) { /* store 32kb max */
            localStorage.setItem('gist_' + gist.id + gist.filename, content);
          }
          this.gist$.next(gist);
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        }); // ,
    // () => console.log('getGist finished'));
  }

}
