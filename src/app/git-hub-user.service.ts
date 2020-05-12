import {EventEmitter, Injectable, Output, OnDestroy} from '@angular/core';
// import {Http, Response} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GitHubUserService {
  apiUrl: string = 'https://api.github.com/users/';

  // current data
  baseUsername: string = 'lasellers';
  defaultBaseUsername: string = 'lasellers';

  user: any = null;
  followings: any = [];
  followers: any = [];

  // was cached flag
  userWasCached: boolean = false;
  followingsWasCached: boolean = false;
  followersWasCached: boolean = false;
  useCached: boolean = true;

  @Output() userWasCachedChange = new EventEmitter();
  @Output() followingsWasCachedChange = new EventEmitter();
  @Output() followersWasCachedChange = new EventEmitter();
  @Output() useCachedChange = new EventEmitter();

  private cachedChangeSource$ = new Subject();
  public cachedChange$ = this.cachedChangeSource$.asObservable();

  /**
   *
   */
  constructor(
    private http: HttpClient,
    public toasterService: ToasterService
  ) {
  }

  /**
   *
   */
  setUserBasename(baseUsername: string) {
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
  getUserBasenameDefault() {
    this.baseUsername = this.defaultBaseUsername;
    console.log('getUserBasenameDefault ' + this.baseUsername);
    return this.baseUsername;
  }

  /**
   *
   */
  clearUserCache() {
    console.log('clearUserCache ' + this.user.login);
    //     if("login" in this.user) {
    if (this.user.hasOwnProperty('login')) {
      localStorage.removeItem('user_' + this.user.login);
      this.userWasCached = false;
      this.userWasCachedChange.emit(this.userWasCached);
      this.cachedChangeSource$.next({userWasCached: this.userWasCached});
    }
  }

  /**
   *
   */
  clearFollowersCache() {
    console.log('clearFollowersCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('followers_' + this.baseUsername);
      this.followersWasCached = false;
      // this.followersWasCachedChange.emit(this.followersWasCached);
      this.cachedChangeSource$.next({followersWasCached: this.followersWasCached});
    }
  }

  /**
   *
   */
  clearFollowingsCache() {
    console.log('clearFollowingsCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('followings_' + this.baseUsername);
      this.followingsWasCached = false;
      // this.followingsWasCachedChange.emit(this.followingsWasCached);
      this.cachedChangeSource$.next({followingsWasCached: this.followingsWasCached});
    }
  }

  /**
   *
   */
  getUser(username: string) {
    console.log('GitHubUserService:getUser username:' + username);

    if (this.useCached) {
      const cachedObj = localStorage.getItem('user_' + username);
      if (cachedObj !== null) {
        this.user = JSON.parse(cachedObj);
        this.userWasCached = true;
        // this.userWasCachedChange.emit(this.userWasCached);
        this.cachedChangeSource$.next({userWasCached: this.userWasCached});
        console.log('Cached User: ', this.user);
        return {};
      }
    }

    const obj = this.http.get(this.apiUrl + username)
      .map((res: HttpResponse<any>) => res) // res.json())
      .subscribe(
        user => {
          this.user = user;
          this.userWasCached = false;
          // this.userWasCachedChange.emit(this.userWasCached);
          this.cachedChangeSource$.next({userWasCached: this.userWasCached});
          localStorage.setItem('user_' + username, JSON.stringify(this.user));
          console.log(this.user);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getUser finished'));

    return obj;
  }

  /**
   *
   */
  getFollowings(username: string) {
    console.log('GitHubUserService:getFollowings username:' + username);

    this.baseUsername = username;

    if (this.useCached) {
      const cachedObj = localStorage.getItem('followings_' + username);
      if (cachedObj !== null) {
        this.followings = JSON.parse(cachedObj);
        this.followingsWasCached = true;
        // this.followingsWasCachedChange.emit(this.followingsWasCached);
        this.cachedChangeSource$.next({followingsWasCached: this.followingsWasCached});
        console.log('Cached Followings: ', this.followings);
        return {};
      }
    }

    const obj = this.http.get(this.apiUrl + username + '/following')
      .map((res: HttpResponse<any>) => res) //  res.json())
      .subscribe(followings => {
//          this.followings = Array.from(followings);
          this.followings = followings;
          this.followingsWasCached = false;
          // this.followingsWasCachedChange.emit(this.followingsWasCached);
          this.cachedChangeSource$.next({followingsWasCached: this.followingsWasCached});
          localStorage.setItem('followings_' + username, JSON.stringify(this.followings));
          console.log(this.followings);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getFollowings finished')
      );

    return obj;
  }

  /**
   *
   */
  getFollowers(username: string) {
    console.log('GitHubUserService:getFollowers username:' + username);

    this.baseUsername = username;

    if (this.useCached) {
      const cachedObj = localStorage.getItem('followers_' + username);
      if (cachedObj !== null) {
        this.followers = JSON.parse(cachedObj);
        this.followersWasCached = true;
        // this.followersWasCachedChange.emit(this.followersWasCached);
        this.cachedChangeSource$.next({followersWasCached: this.followersWasCached});
        console.log('Cached Followers: ', this.followers);
        return {};
      }
    }

    const obj = this.http.get(this.apiUrl + username + '/followers')
      .map((res: HttpResponse<any>) => res) //  res.json())
      .subscribe(followers => {
//          this.followers = Array.from(followers);
          this.followers = followers;
          this.followersWasCached = false;
          // this.followersWasCachedChange.emit(this.followersWasCached);
          this.cachedChangeSource$.next({followersWasCached: this.followersWasCached});
          localStorage.setItem('followers_' + username, JSON.stringify(this.followers));
          console.log(this.followers);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getFollowers finished')
      );

    return obj;
  }

  emitErrorMessage(error): void {
    // debugger;
    const text: string = error.statusText || 'Internet Error';
    console.error(`Error: (${error.status}) ${text}`);
    const message: string = `Error: (${error.status}) ${text}`;
    this.toasterService.pop('error', `Error: ${error.status}`, text);
  }

}
