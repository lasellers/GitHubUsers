import {map} from 'rxjs/operators';
import {EventEmitter, Injectable, Output, OnDestroy} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
// import { Subscription } from 'rxjs/Subscription';
import {Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

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
    //    public toasterService: ToasterService
    private toast: ToastrService
  ) {
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
      this.userWasCachedChange.emit(this.userWasCached);
      this.cachedChangeSource$.next({userWasCached: this.userWasCached});
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
      // this.followersWasCachedChange.emit(this.followersWasCached);
      this.cachedChangeSource$.next({followersWasCached: this.followersWasCached});
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
      // this.followingsWasCachedChange.emit(this.followingsWasCached);
      this.cachedChangeSource$.next({followingsWasCached: this.followingsWasCached});
    }
  }

  /**
   *
   */
  getUser(username: string): void {
    console.log('GitHubUserService:getUser username:' + username);

    if (this.useCached) {
      const cachedObj = localStorage.getItem('user_' + username);
      if (cachedObj !== null) {
        this.user = JSON.parse(cachedObj);
        this.userWasCached = true;
        // this.userWasCachedChange.emit(this.userWasCached);
        this.cachedChangeSource$.next({userWasCached: this.userWasCached});
        console.log('Cached User: ', this.user);
        return;
      }
    }

    this.http.get(this.apiUrl + username).pipe(
      map((res: HttpResponse<any>) => res)) // res.json())
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
  }

  /**
   *
   */
  getFollowings(username: string): void {
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
        return;
      }
    }

    this.http.get(this.apiUrl + username + '/following').pipe(
      map((res: HttpResponse<any>) => res)) //  res.json())
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
  }

  /**
   *
   */
  getFollowers(username: string): void {
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
        return;
      }
    }

    this.http.get(this.apiUrl + username + '/followers').pipe(
      map((res: HttpResponse<any>) => res)) //  res.json())
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
