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
  gists: any = [];
  gist: any = [];

  // was cached flag
  userWasCached: boolean = false;
  followingsWasCached: boolean = false;
  followersWasCached: boolean = false;
  gistsWasCached: boolean = false;

  @Input() isCaching: boolean = true;

  @Output() cacheStatus$ = new EventEmitter();
  @Output() cacheStatusUser$ = new EventEmitter();
  @Output() cacheStatusFollowers$ = new EventEmitter();
  @Output() cacheStatusFollowings$ = new EventEmitter();
  @Output() cacheStatusGists$ = new EventEmitter();

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
      gistsWasCached: this.gistsWasCached,
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

  emitCacheStatusGists() {
    this.cacheStatusGists$.emit(this.gistsWasCached);
    // this.cacheStatus2Source$.next(this.gistsWasCached);
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

  getUserBasenameDefault(): string {
    this.baseUsername = this.defaultBaseUsername;
    console.log('getUserBasenameDefault ' + this.baseUsername);
    return this.baseUsername;
  }

  clearUserCache(): void {
    console.log('clearUserCache ' + this.user.login);
    if (this.user.hasOwnProperty('login')) {
      localStorage.removeItem('user_' + this.user.login);
      this.userWasCached = false;
      this.emitCacheStatusUser();
    }
  }

  clearFollowersCache(): void {
    console.log('clearFollowersCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('followers_' + this.baseUsername);
      this.followersWasCached = false;
      this.emitCacheStatusFollowers();
    }
  }

  clearFollowingsCache(): void {
    console.log('clearFollowingsCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('followings_' + this.baseUsername);
      this.followingsWasCached = false;
      this.emitCacheStatusFollowings();
    }
  }

  clearGistsCache(): void {
    console.log('clearGistsCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('gists_' + this.baseUsername);
      this.gistsWasCached = false;
      this.emitCacheStatusGists();
    }
  }

  clearGistCache(id: string): void {
    console.log('clearGistCache ' + id);
    if (this.baseUsername != null) {
      localStorage.removeItem('gist_' + id);
      // this.gistWasCached = false;
      // this.emitCacheStatusGist();
    }
  }

  isUserCached(username: string): boolean {
    // console.log('GitHubUserService:isUserCached');
    return (localStorage.getItem('user_' + username) !== null);
  }

  loadUser(username: string) {
    this.baseUsername = username;
    this.getUser();
    this.getFollowers();
    this.getFollowings();
    this.getGists();
  }

  getUser(): void {
    console.log('GitHubUserService:getUser ' + this.baseUsername);

    if (this.isCaching) {
      const cachedObj = localStorage.getItem('user_' + this.baseUsername);
      if (cachedObj !== null) {
        this.user = JSON.parse(cachedObj);
        this.userWasCached = true;
        this.emitCacheStatusUser();
        console.log('Cached User ' + this.baseUsername, this.user);
        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername).pipe(
      map((res: HttpResponse<any>) => res)) // res.json()c)
      .subscribe(
        user => {
          this.user = user;
          this.userWasCached = false;
          this.emitCacheStatusUser();
          localStorage.setItem('user_' + this.baseUsername, JSON.stringify(user));
          console.log(this.user);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getUser finished'));
  }

  getFollowings(): void {
    console.log('GitHubUserService:getFollowings ' + this.baseUsername);

    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followings_' + this.baseUsername);
      if (cachedObj !== null) {
        this.followings = JSON.parse(cachedObj);
        this.followingsWasCached = true;
        this.emitCacheStatusFollowings();
        console.log('Cached Followings ' + this.baseUsername, this.followings);
        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/following').pipe(
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followings => {
//          this.followings = Array.from(followings);
          this.followings = followings;
          this.followingsWasCached = false;
          this.emitCacheStatusFollowings();
          localStorage.setItem('followings_' + this.baseUsername, JSON.stringify(followings));
          console.log('Followings:', this.followings);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getFollowings finished')
      );
  }

  getFollowers(): void {
    console.log('GitHubUserService:getFollowers ' + this.baseUsername);

    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followers_' + this.baseUsername);
      if (cachedObj !== null) {
        this.followers = JSON.parse(cachedObj);
        this.followersWasCached = true;
        this.emitCacheStatusFollowers();
        console.log('Cached Followers ' + this.baseUsername, this.followers);
        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/followers').pipe(
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followers => {
//          this.followers = Array.from(followers);
          this.followers = followers;
          this.followersWasCached = false;
          this.emitCacheStatusFollowers();
          localStorage.setItem('followers_' + this.baseUsername, JSON.stringify(followers));
          console.log('Followers:', this.followers);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getFollowers finished')
      );
  }

  getGists(): void {
    console.log('GitHubUserService:getGists ' + this.baseUsername);

    if (this.isCaching) {
      const cachedObj = localStorage.getItem('gists_' + this.baseUsername);
      if (cachedObj !== null) {
        this.gists = JSON.parse(cachedObj);
        this.gistsWasCached = true;
        this.emitCacheStatusGists();
        console.log('Cached Gists ' + this.baseUsername, this.gists);

        this.getGistsLoop(this.gists);

        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/gists').pipe(
      map((res: HttpResponse<any>) => res)) // res.json()c)
      .subscribe(
        gists => {
          this.gists = gists;
          this.gistsWasCached = false;
          this.emitCacheStatusGists();
          localStorage.setItem('gists_' + this.baseUsername, JSON.stringify(gists));
          console.log('Gists:', this.gists);

          this.getGistsLoop(this.gists);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getGists finished'));
  }

  private getGistsLoop(gists) {
    this.gist = [];
    for (const gist of gists) {
      for (const key in gist.files) {
        if (gist.files.hasOwnProperty(key)) {
          const file = gist.files[key];
          if (file.hasOwnProperty('raw_url')) {
            this.getGist(file, gist.id);
          }
        }
      }
    }
  }

  private getGist(file, gistId: string): void {
    console.log('GitHubUserService:getGist ' + file.raw_url);

    if (this.isCaching) {
      const gist = localStorage.getItem('gist_' + gistId);
      if (gist !== null) {

        this.gist.push({
          id: gistId,
          url: file.raw_url,
          filename: file.filename,
          language: file.language,
          size: file.size,
          text: gist,
          cached: true
        });

        this.toast.info(`${file.filename} (${file.size})`, '', {
          timeOut: 2000
        });

        return;
      }
    }

    this.http.get(file.raw_url, {responseType: 'text'}).pipe(
      map((res) => res))
      .subscribe(
        gist => {
          localStorage.setItem('gist_' + gistId, gist);

          this.gist.push({
            id: gistId,
            url: file.raw_url,
            filename: file.filename,
            language: file.language,
            size: file.size,
            text: gist,
            cached: false
          });

          this.toast.info(`${file.filename} (${file.size})`, '', {
            timeOut: 2000
          });
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getGist finished'));
  }

  emitErrorMessage(error): void {
    // debugger;
    const text: string = error.statusText || 'Internet Error';
    const message: string = `Error: (${error.status}) (${error.message}) ${text}`;
    console.error(`Error: ${message}`);
    this.toast.error(text, `Error: ${message} `);
  }

}
