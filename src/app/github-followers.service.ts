import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { delay, map } from "rxjs/operators";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { GitHubUserService } from "./git-hub-user.service";

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  @Output() errorMessage$ = new EventEmitter(true);
  // These are resolved async
  public apiCalls: number = 0;

  //
  @Input() isCaching: boolean = true;
  @Output() followersCached$ = new EventEmitter(true);
  @Output() followers$ = new EventEmitter(true);

  constructor(
    private http: HttpClient,
    private userService: GitHubUserService
  ) {
  }

  clearFollowersCache(username: string): void {
    if (username != null) {
      localStorage.removeItem('followers_' + username);
      this.followersCached$.emit(status);
    }
  }

  public isFollowersCached(username: string): boolean {
    return (localStorage.getItem('followers_' + username) !== null);
  }

  public getFollowers(username: string): void {
    console.log('getFollowers ' + username);
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followers_' + username);
      if (cachedObj !== null) {
        const followers = JSON.parse(cachedObj);
        this.followersCached$.emit(true);
        this.followers$.emit(followers);
        return;
      }
    }

    this.http.get(this.userService.getApiUrl()  + username + '/followers').pipe(
      delay(0),
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followers => {
          this.apiCalls++;
          this.followersCached$.emit(false);
          this.followers$.emit(followers);
          localStorage.setItem('followers_' + username, JSON.stringify(followers));
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        } // ,
        // () => console.log('getFollowers finished')
      );
  }

}
