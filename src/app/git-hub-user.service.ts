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

  setUserBasename(baseUsername: string): void {
    this.baseUsername = baseUsername;
  }

  getUserBasename() {
    return this.baseUsername;
  }

  getUserBasenameDefault(): string {
    this.baseUsername = this.defaultBaseUsername;
    return this.baseUsername;
  }

  clearUserCache(): void {
    if (this.user.hasOwnProperty('login')) {
      localStorage.removeItem('user_' + this.user.login);
      this.emitCacheStatusUser(false);
    }
  }

  clearFollowersCache(): void {
    if (this.baseUsername != null) {
      localStorage.removeItem('followers_' + this.baseUsername);
      this.emitCacheStatusFollowers(false);
    }
  }

  clearFollowingsCache(): void {
    if (this.baseUsername != null) {
      localStorage.removeItem('followings_' + this.baseUsername);
      this.emitCacheStatusFollowings(false);
    }
  }

  clearGistsCache(): void {
    this.toast.info('Clear gist cache');
    if (this.baseUsername != null) {
      localStorage.removeItem('gists_' + this.baseUsername);
      this.emitCacheStatusGists(false);
    }
  }

  clearGistCache(gist): void {
    localStorage.removeItem('gist_' + gist.id + gist.filename);
    if (typeof gist === 'object') {
      gist = this.blankGist();
    }
    this.gistObserver$.next(gist);
  }

  blankGist(): Gist {
    const gist: Gist = {
      content: '',
      filename: '',
      size: 0,
      contentUrl: '',
      language: '',
      cached: false,
      wasCached: false,
      id: '',
      url: '',
    };
    return gist;
  }

  isUserCached(username: string): boolean {
    return (localStorage.getItem('user_' + username) !== null);
  }

  isFollowersCached(username: string): boolean {
    return (localStorage.getItem('followers_' + username) !== null);
  }

  isFollowingsCached(username: string): boolean {
    return (localStorage.getItem('followings' + username) !== null);
  }

  isGistsCached(username: string): boolean {
    return (localStorage.getItem('gists_' + username) !== null);
  }

  isGistCached(gist): boolean {
    return (localStorage.getItem('gist_' + gist.id + gist.filename) !== null);
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
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('user_' + username);
      if (cachedObj !== null) {
        this.user = JSON.parse(cachedObj);
        this.emitCacheStatusUser(true);
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
        },
        error => {
          this.emitErrorMessage(error);
        }); // ,
        // () => console.log('getUser finished'));
  }

  getFollowings(): void {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followings_' + this.baseUsername);
      if (cachedObj !== null) {
        this.followings = JSON.parse(cachedObj);
        this.emitCacheStatusFollowings(true);
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
        },
        error => {
          this.emitErrorMessage(error);
        } // ,
        // () => console.log('getFollowings finished')
      );
  }

  getFollowers(): void {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followers_' + this.baseUsername);
      if (cachedObj !== null) {
        this.followers = JSON.parse(cachedObj);
        this.emitCacheStatusFollowers(true);
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
        },
        error => {
          this.emitErrorMessage(error);
        } // ,
        // () => console.log('getFollowers finished')
      );
  }

  getGists(): void {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('gists_' + this.baseUsername);
      if (cachedObj !== null) {
        const gists = JSON.parse(cachedObj);
        this.emitCacheStatusGists(true);

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

          this.processGistsToArray(gists, false);
        },
        error => {
          this.emitErrorMessage(error);
        }); // ,
        // () => console.log('getGists finished'));
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
    if (this.isCaching) {
      const content = localStorage.getItem('gist_' + gist.id + gist.filename);
      if (content !== null) {
        gist.content = content;
        gist.cached = true;
        gist.wasCached = true;
        console.log('gist object:', gist);
        this.gistObserver$.next(gist);
        return;
      }
    }

    console.log('gist object 2:', gist);

    this.http.get(gist.contentUrl, {responseType: 'text'}).pipe(
      map((res) => res))
      .subscribe(
        content => {
          gist.content = content;
          gist.cached = true;
          gist.wasCached = false;
          if (gist.size < (1024 * 32)) { /* store 32kb max */
            localStorage.setItem('gist_' + gist.id + gist.filename, content);
          }
          console.log('gist object 3:', gist);
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
