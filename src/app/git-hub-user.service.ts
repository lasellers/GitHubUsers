import { delay, map } from 'rxjs/operators';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Gist } from './gist.model';

/**
 * Note: As this is experimental, this service is both acting as a singleton in someways and also emitting data for capture by components.
 * Generally you'd only want to do one or the other, depending on the situation.
 */
@Injectable({providedIn: 'root'})
export class GitHubUserService {
  private apiUrl: string = 'https://api.github.com/users/';

  // current data
  private defaultBaseUsername: string = 'lasellers';
  private baseUsername: string = 'lasellers';

  // These are resolved async
  public apiCalls: number = 0;

  public user: any = null;
//  public followings: any = [];
//  public followers: any = [];
//  public gists: any = [];

  //
  @Input() isCaching: boolean = true;

  // Make all of these async so we don't have a checked error
  // Note also, since this is a service, we can't just hook these up as output
  // on the component but must subscribe to them.
  @Output() userCached$ = new EventEmitter(true);
  @Output() followersCached$ = new EventEmitter(true);
  @Output() followingsCached$ = new EventEmitter(true);
  // @Output() gistsCached$ = new EventEmitter(true);

  @Output() followings$ = new EventEmitter(true);
  @Output() followers$ = new EventEmitter(true);
  // @Output() gists$ = new EventEmitter(true);

  // @Output() gist$ = new EventEmitter(true);
  // public gist$ = new Subject();
  // public gistObs$ = this.gist$.asObservable();

  @Output() user$ = new EventEmitter(true);
  @Output() errorMessage$ = new EventEmitter(true);

  /**
   *
   */
  constructor(
    private http: HttpClient
  ) {
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  getUserBasename(): string {
    return this.baseUsername;
  }

  getUserBasenameDefault(): string {
    return this.defaultBaseUsername;
  }

  clearUserCache(username: string): void {
    // if (this.user.hasOwnProperty('login')) {
    //  localStorage.removeItem('user_' + this.user.login);
    //  this.emitCacheStatusUser(false, this.user.login);
    // }
    localStorage.removeItem('user_' + username);
    this.userCached$.emit([false, username]);
  }

  clearFollowersCache(): void {
    if (this.baseUsername != null) {
      localStorage.removeItem('followers_' + this.baseUsername);
      this.followersCached$.emit(status);
    }
  }

  clearFollowingsCache(): void {
    if (this.baseUsername != null) {
      localStorage.removeItem('followings_' + this.baseUsername);
      this.followingsCached$.emit(status);
    }
  }

  public isUserCached(username: string): boolean {
    return (localStorage.getItem('user_' + username) !== null);
  }

  public isFollowersCached(username: string): boolean {
    return (localStorage.getItem('followers_' + username) !== null);
  }

  public isFollowingsCached(username: string): boolean {
    return (localStorage.getItem('followings' + username) !== null);
  }

  public getUser(username: string): void {
    console.log('getUser ' + username);
    if (this.isCaching) {
      const cachedUserObj = localStorage.getItem('user_' + username);
      if (cachedUserObj !== null) {
        const user = JSON.parse(cachedUserObj);
        this.user = user;
        this.user$.emit(user);
        this.userCached$.emit([true, username]);
        return;
      }
    }

    this.http.get(this.apiUrl + username).pipe(
      delay(0),
      map((res: HttpResponse<any>) => res))
      .subscribe(
        user => {
          this.apiCalls++;
          this.user = user;
          this.user$.emit(user);
          this.userCached$.emit([false, username]);
          localStorage.setItem('user_' + username, JSON.stringify(user));
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        }); // ,
    // () => console.log('getUser finished'));
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

    this.http.get(this.apiUrl + username + '/following').pipe(
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

    this.http.get(this.apiUrl + username + '/followers').pipe(
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
