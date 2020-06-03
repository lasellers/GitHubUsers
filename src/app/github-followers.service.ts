import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GitHubUserService } from './github-user.service';

/**
 * Note: We could eliminate a lot of the event emitters etc in the services and just use
 * a public variable, however, part of the point of this repo is experimenting with
 * observables and the like...
 */
@Injectable({
  providedIn: 'root'
})
export class GitHubFollowersService {
  @Output() errorMessage$ = new EventEmitter(true);
  @Input() isCaching: boolean = true;
  @Output() followersCached$ = new EventEmitter(true);
  @Output() followers$ = new EventEmitter(true);

  // These are resolved async
  public apiCalls: number = 0;

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

  public getFollowers(username: string): Subscription {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followers_' + username);
      if (cachedObj !== null) {
        const followers = JSON.parse(cachedObj);
        this.followersCached$.emit(true);
        this.followers$.emit(followers);
        return; // of(followers).subscribe();
      }
    }

    return this.http.get(this.userService.getApiUrl() + username + '/followers').pipe(
      delay(0),
      map((res: HttpResponse<any>) => res),
      map((followers) => {
        this.apiCalls++;
        if (this.isCaching) {
          localStorage.setItem('followers_' + username, JSON.stringify(followers));
        }
        return followers;
      })
    ).subscribe(followers => {
        this.followersCached$.emit(false);
        this.followers$.emit(followers);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );
  }

}
