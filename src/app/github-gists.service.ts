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

  // public gists: any = [];

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

  public getGists(username: string): void {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('gists_' + username);
      if (cachedObj !== null) {
        const gists = JSON.parse(cachedObj);
        this.gistsCached$.emit(true);
        // this.gists = gist;
        this.gists$.emit(gists);
        return;
      }
    }

    this.http.get(this.userService.getApiUrl() + username + '/gists').pipe(
      delay(0),
      map((results: HttpResponse<any>) => GithubGistsService.processGistsToArray(results, false)))
      .subscribe(
        gists => {
          this.apiCalls++;
          this.gistsCached$.emit(false);
          // this.gists = gist;
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

}
