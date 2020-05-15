import {map} from 'rxjs/operators';
import {EventEmitter, Injectable, Input, Output, OnDestroy} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class GitHubUserService {
  apiUrl: string = 'https://api.github.com/users/';

  // current data
  defaultBaseUsername: string = 'lasellers';
  baseUsername: string = 'lasellers';

  user: any = null;
  followings: any = [];
  followers: any = [];

  // was cached flag
  userWasCached: boolean = false;
  followingsWasCached: boolean = false;
  followersWasCached: boolean = false;

  @Input() isCaching: boolean = true;

  @Output() cacheStatus$ = new EventEmitter();
  @Output() cacheStatusUser$ = new EventEmitter();
  @Output() cacheStatusFollowers$ = new EventEmitter();
  @Output() cacheStatusFollowings$ = new EventEmitter();

  // private cacheStatus2Source$ = new Subject();
  // public cacheStatus2$ = this.cacheStatus2Source$.asObservable();

  /**
   *
   */
  constructor(
    private http: HttpClient,
    private toast: ToastrService
  ) {
  }

  emitCacheStatus() {
    const data = {
      userWasCached: this.userWasCached,
      followingsWasCached: this.followingsWasCached,
      followersWasCached: this.followersWasCached,
      isCaching: this.isCaching
    };
    this.cacheStatus$.emit(data);
    // this.cacheStatus2Source$.next(data);
  }

  emitCacheStatusUser() {
    this.cacheStatusUser$.emit(this.userWasCached);
    // this.cacheStatus2Source$.next(this.userWasCached);
  }

  emitCacheStatusFollowers() {
    this.cacheStatusFollowers$.emit(this.followersWasCached);
    // this.cacheStatus2Source$.next(this.followersWasCached);
  }

  emitCacheStatusFollowings() {
    this.cacheStatusFollowings$.emit(this.followingsWasCached);
    // this.cacheStatus2Source$.next(this.followingsWasCached);
  }

  /**
   *
   */
  setUserBasename(baseUsername: string): void {
    this.baseUsername = baseUsername;
    console.log('setUserBasename ' + this.baseUsername);
  }

  /**
   *
   */
  getUserBasename() {
    console.log('getUserBasename ' + this.baseUsername);
    return this.baseUsername;
  }

  /**
   *
   */
  getUserBasenameDefault(): string {
    this.baseUsername = this.defaultBaseUsername;
    console.log('getUserBasenameDefault ' + this.baseUsername);
    return this.baseUsername;
  }

  /**
   *
   */
  clearUserCache(): void {
    console.log('clearUserCache ' + this.user.login);
    //     if("login" in this.user) {
    if (this.user.hasOwnProperty('login')) {
      localStorage.removeItem('user_' + this.user.login);
      this.userWasCached = false;
      this.emitCacheStatusUser();
    }
  }

  /**
   *
   */
  clearFollowersCache(): void {
    console.log('clearFollowersCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('followers_' + this.baseUsername);
      this.followersWasCached = false;
      this.emitCacheStatusFollowers();
    }
  }

  /**
   *
   */
  clearFollowingsCache(): void {
    console.log('clearFollowingsCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('followings_' + this.baseUsername);
      this.followingsWasCached = false;
      this.emitCacheStatusFollowings();
    }
  }

  /**
   *
   */
  getUser(username: string): void {
    console.log('GitHubUserService:getUser username:' + username);

    if (this.isCaching) {
      const cachedObj = localStorage.getItem('user_' + username);
      if (cachedObj !== null) {
        this.user = JSON.parse(cachedObj);
        this.userWasCached = true;
        this.emitCacheStatusUser();
        console.log('Cached User: ', this.user);
        return;
      }
    }

    this.http.get(this.apiUrl + username).pipe(
      map((res: HttpResponse<any>) => res)) // res.json()c)
      .subscribe(
        user => {
          this.user = user;
          this.userWasCached = false;
          this.emitCacheStatusUser();
          localStorage.setItem('user_' + username, JSON.stringify(this.user));
          console.log(this.user);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getUser finished'));
  }

  /**
   *
   */
  getFollowings(username: string): void {
    console.log('GitHubUserService:getFollowings username:' + username);

    this.baseUsername = username;

    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followings_' + username);
      if (cachedObj !== null) {
        this.followings = JSON.parse(cachedObj);
        this.followingsWasCached = true;
        this.emitCacheStatusFollowings();
        console.log('Cached Followings: ', this.followings);
        return;
      }
    }

    this.http.get(this.apiUrl + username + '/following').pipe(
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followings => {
//          this.followings = Array.from(followings);
          this.followings = followings;
          this.followingsWasCached = false;
          this.emitCacheStatusFollowings();
          localStorage.setItem('followings_' + username, JSON.stringify(this.followings));
          console.log(this.followings);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getFollowings finished')
      );
  }

  /**
   *
   */
  getFollowers(username: string): void {
    console.log('GitHubUserService:getFollowers username:' + username);

    this.baseUsername = username;

    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followers_' + username);
      if (cachedObj !== null) {
        this.followers = JSON.parse(cachedObj);
        this.followersWasCached = true;
        this.emitCacheStatusFollowers();
        console.log('Cached Followers: ', this.followers);
        return;
      }
    }

    this.http.get(this.apiUrl + username + '/followers').pipe(
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followers => {
//          this.followers = Array.from(followers);
          this.followers = followers;
          this.followersWasCached = false;
          this.emitCacheStatusFollowers();
          localStorage.setItem('followers_' + username, JSON.stringify(this.followers));
          console.log(this.followers);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getFollowers finished')
      );
  }

  isUserCached(username: string): boolean {
    // console.log('GitHubUserService:isUserCached');
    return (localStorage.getItem('user_' + username) !== null);
  }

  emitErrorMessage(error): void {
    // debugger;
    const text: string = error.statusText || 'Internet Error';
    console.error(`Error: (${error.status}) ${text}`);
    const message: string = `Error: (${error.status}) ${text}`;
    this.toast.error(text, `Error: ${error.status}`);
  }

}
