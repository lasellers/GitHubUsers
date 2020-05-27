import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { delay, map } from "rxjs/operators";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { GitHubUserService } from "./git-hub-user.service";

@Injectable({
  providedIn: 'root'
})
export class GithubFollowingsService {
  @Output() errorMessage$ = new EventEmitter(true);
  // These are resolved async
  public apiCalls: number = 0;

  //
  @Input() isCaching: boolean = true;
  @Output() followingsCached$ = new EventEmitter(true);
  @Output() followings$ = new EventEmitter(true);

  constructor(
    private http: HttpClient,
    private userService: GitHubUserService
  ) {
  }

  clearFollowingsCache(username: string): void {
    if (username != null) {
      localStorage.removeItem('followings_' + username);
      this.followingsCached$.emit(status);
    }
  }

  public isFollowingsCached(username: string): boolean {
    return (localStorage.getItem('followings_' + username) !== null);
  }

  public getFollowings(username: string): void {
    console.log('getFollowings ' + username);
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followings_' + username);
      if (cachedObj !== null) {
        const followings = JSON.parse(cachedObj);
        this.followingsCached$.emit(true);
        this.followings$.emit(followings);
        return;
      }
    }

    this.http.get(this.userService.getApiUrl()  + username + '/following').pipe(
      delay(0),
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followings => {
          this.apiCalls++;
          this.followingsCached$.emit(false);
          this.followings$.emit(followings);
          localStorage.setItem('followings_' + username, JSON.stringify(followings));
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        } // ,
        // () => console.log('getFollowings finished')
      );
  }
}
