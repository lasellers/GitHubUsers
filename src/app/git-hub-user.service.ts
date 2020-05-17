import { map } from 'rxjs/operators';
import { EventEmitter, Injectable, Input, Output, OnDestroy } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Gist } from './gist';

/**
 * Note: As this is experimental, this service is both acting as a singleton in someways and also emitting data for capture by components.
 * Generally you'd only want to do one or the other, depending on the situation.
 */
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

  @Input() isCaching: boolean = true;

  @Output() cacheStatusUser$ = new EventEmitter();
  @Output() cacheStatusFollowers$ = new EventEmitter();
  @Output() cacheStatusFollowings$ = new EventEmitter();
  @Output() cacheStatusGists$ = new EventEmitter();

  public gistObserver$ = new Subject();
  public gist$ = this.gistObserver$.asObservable();

  /**
   *
   */
  constructor(
    private http: HttpClient,
    private toast: ToastrService
  ) {
  }

  emitCacheStatusUser(status: boolean) {
    this.cacheStatusUser$.emit(status);
  }

  emitCacheStatusFollowers(status: boolean) {
    this.cacheStatusFollowers$.emit(status);
  }

  emitCacheStatusFollowings(status: boolean) {
    this.cacheStatusFollowings$.emit(status);
  }

  emitCacheStatusGists(status: boolean) {
    this.cacheStatusGists$.emit(status);
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
      this.emitCacheStatusUser(false);
    }
  }

  clearFollowersCache(): void {
    console.log('clearFollowersCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('followers_' + this.baseUsername);
      this.emitCacheStatusFollowers(false);
    }
  }

  clearFollowingsCache(): void {
    console.log('clearFollowingsCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('followings_' + this.baseUsername);
      this.emitCacheStatusFollowings(false);
    }
  }

  clearGistsCache(): void {
    this.toast.info('Clear gist cache');
    console.log('clearGistsCache ' + this.baseUsername);
    if (this.baseUsername != null) {
      localStorage.removeItem('gists_' + this.baseUsername);
      this.emitCacheStatusGists(false);
    }
  }

  clearGistCache(gist): void {
    console.log('clearGistCache ', gist);
    localStorage.removeItem('gist_' + gist.id + gist.filename);
    if (typeof gist === 'object') {
      gist.cached = false;
      gist.content = '';
      gist.filename = '';
      gist.size = '';
    }
    this.gistObserver$.next(gist);
  }

  isUserCached(username: string): boolean {
    // console.log('GitHubUserService:isUserCached');
    return (localStorage.getItem('user_' + username) !== null);
  }

  loadUser(username: string) {
    this.baseUsername = username;
    this.getUser(username);
    this.getFollowers();
    this.getFollowings();
    this.getGists();
  }

  loadUserOnly(username: string) {
    this.getUser(username);
  }

  getUser(username: string): void {
    console.log('GitHubUserService:getUser ' + username);

    if (this.isCaching) {
      const cachedObj = localStorage.getItem('user_' + username);
      if (cachedObj !== null) {
        this.user = JSON.parse(cachedObj);
        this.emitCacheStatusUser(true);
        console.log('Cached User ' + username, this.user);
        return;
      }
    }

    this.http.get(this.apiUrl + username).pipe(
      map((res: HttpResponse<any>) => res)) // res.json()c)
      .subscribe(
        user => {
          this.user = user;
          this.emitCacheStatusUser(false);
          localStorage.setItem('user_' + username, JSON.stringify(user));
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
        this.emitCacheStatusFollowings(true);
        console.log('Cached Followings ' + this.baseUsername, this.followings);
        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/following').pipe(
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followings => {
//          this.followings = Array.from(followings);
          this.followings = followings;
          this.emitCacheStatusFollowings(false);
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
        this.emitCacheStatusFollowers(true);
        console.log('Cached Followers ' + this.baseUsername, this.followers);
        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/followers').pipe(
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followers => {
//          this.followers = Array.from(followers);
          this.followers = followers;
          this.emitCacheStatusFollowers(false);
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
        const gists = JSON.parse(cachedObj);
        this.emitCacheStatusGists(true);
        console.log('Cached Gists ' + this.baseUsername, gists);

        this.processGistsToArray(gists, true);

        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/gists').pipe(
      map((res: HttpResponse<any>) => res)) // res.json()c)
      .subscribe(
        gists => {
          this.emitCacheStatusGists(false);
          localStorage.setItem('gists_' + this.baseUsername, JSON.stringify(gists));
          console.log('Gists:', this.gists);

          this.processGistsToArray(gists, false);
        },
        error => {
          this.emitErrorMessage(error);
        },
        () => console.log('getGists finished'));
  }

  private processGistsToArray(gists, isCached: boolean) {
    this.gists = [];
    for (const gist of gists) {
      for (const key in gist.files) {
        if (gist.files.hasOwnProperty(key)) {
          const file = gist.files[key];
          if (file.hasOwnProperty('raw_url')) {
            this.gists.push({
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
  }

  public getGist(gist: Gist): void {
    console.log('GitHubUserService:getGist ', gist);

    if (this.isCaching) {
      const content = localStorage.getItem('gist_' + gist.id + gist.filename);
      if (content !== null) {
        gist.content = content;
        this.gistObserver$.next(gist);
        return;
      }
    }

    console.log('gist object:', gist);

    this.http.get(gist.contentUrl, {responseType: 'text'}).pipe(
      map((res) => res))
      .subscribe(
        content => {
          gist.content = content;
          localStorage.setItem('gist_' + gist.id + gist.filename, content);
          this.gistObserver$.next(gist);
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
