import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { of } from 'rxjs';
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
export class GitHubFollowingsService {
  @Output() errorMessage$ = new EventEmitter(true);
  @Input() isCaching: boolean = true;
  @Output() followingsCached$ = new EventEmitter(true);
  @Output() followings$ = new EventEmitter(true);

  // These are resolved async
  public apiCalls: number = 0;

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

  public getFollowings(username: string) {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followings_' + username);
      if (cachedObj !== null) {
        const followings = JSON.parse(cachedObj);
        return of(followings);
      }
    }

    return this.http.get(this.userService.getApiUrl() + username + '/following').pipe(
      delay(0),
      map((res: HttpResponse<any>) => res),
      map((followings) => {
        this.apiCalls++;
        if (this.isCaching) {
          localStorage.setItem('followings_' + username, JSON.stringify(followings));
        }
        return followings;
      })
    );
  }
}
