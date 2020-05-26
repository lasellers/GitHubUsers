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
  public gists: any = [];

  //
  @Input() isCaching: boolean = true;

  // Make all of these async so we don't have a checked error
  // Note also, since this is a service, we can't just hook these up as output
  // on the component but must subscribe to them.
  @Output() cacheStatusUser$ = new EventEmitter(true);
  @Output() followersCached$ = new EventEmitter(true);
  @Output() followingsCached$ = new EventEmitter(true);
  @Output() gistsCached$ = new EventEmitter(true);

  @Output() followings$ = new EventEmitter(true);
  @Output() followers$ = new EventEmitter(true);
  @Output() gists$ = new EventEmitter(true);

  // @Output() gist$ = new EventEmitter(true);
  public gist$ = new Subject();
  public gistObs$ = this.gist$.asObservable();

  @Output() user$ = new EventEmitter(true);

  @Output() errorMessage$ = new EventEmitter(true);

  /**
   *
   */
  constructor(
    private http: HttpClient
  ) {
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
    this.cacheStatusUser$.emit([false, username]);
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

  public loadUser(username: string) {
    this.baseUsername = username;
    this.getUser(username);
    this.getFollowers();
    this.getFollowings();
    this.getGists();
  }

  public getUser(username: string): void {
    if (this.isCaching) {
      const cachedUserObj = localStorage.getItem('user_' + username);
      if (cachedUserObj !== null) {
        const user = JSON.parse(cachedUserObj);
        this.user = user;
        this.user$.emit(user);
        this.cacheStatusUser$.emit([true, username]);
        return;
      }
    }

    this.http.get(this.apiUrl + username).pipe(
      delay(0),
      map((res: HttpResponse<any>) => res)) // res.json())
      .subscribe(
        user => {
          this.apiCalls++;
          this.user = user;
          this.user$.emit(user);
          this.cacheStatusUser$.emit([false, username]);
          localStorage.setItem('user_' + username, JSON.stringify(user));
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        }); // ,
    // () => console.log('getUser finished'));
  }

  public getFollowings(): void {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followings_' + this.baseUsername);
      if (cachedObj !== null) {
        const followings = JSON.parse(cachedObj);
        this.followingsCached$.emit(true);
        this.followings$.emit(followings);
        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/following').pipe(
      delay(0),
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followings => {
          this.apiCalls++;
          this.followingsCached$.emit(false);
          this.followings$.emit(followings);
          localStorage.setItem('followings_' + this.baseUsername, JSON.stringify(followings));
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        } // ,
        // () => console.log('getFollowings finished')
      );
  }

  public getFollowers(): void {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('followers_' + this.baseUsername);
      if (cachedObj !== null) {
        const followers = JSON.parse(cachedObj);
        this.followersCached$.emit(true);
        this.followers$.emit(followers);
        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/followers').pipe(
      delay(0),
      map((res: HttpResponse<any>) => res)) //  res.json())
      .subscribe(followers => {
          this.apiCalls++;
          this.followersCached$.emit(false);
          this.followers$.emit(followers);
          localStorage.setItem('followers_' + this.baseUsername, JSON.stringify(followers));
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        } // ,
        // () => console.log('getFollowers finished')
      );
  }

  public isGistsCached(username: string): boolean {
    return (localStorage.getItem('gists_' + username) !== null);
  }

  public isGistCached(gist): boolean {
    return (localStorage.getItem('gist_' + gist.id + gist.filename) !== null);
  }

  clearGistsCache(): void {
    if (this.baseUsername != null) {
      localStorage.removeItem('gists_' + this.baseUsername);
      this.gistsCached$.emit(false);
    }
  }

  clearGistCache(gist): void {
    localStorage.removeItem('gist_' + gist.id + gist.filename);
    if (typeof gist === 'object') {
      gist = Gist.constructor(); // this.blankGist();
    }
    this.gist$.next(gist);
  }

  /*
  public blankGist(): Gist {
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
   */

  public getGists(): void {
    if (this.isCaching) {
      const cachedObj = localStorage.getItem('gists_' + this.baseUsername);
      if (cachedObj !== null) {
        const gists = JSON.parse(cachedObj);
        this.processGistsToArray(gists, true);
        return;
      }
    }

    this.http.get(this.apiUrl + this.baseUsername + '/gists').pipe(
      delay(0),
      map((res: HttpResponse<any>) => res)) // res.json()c)
      .subscribe(
        gists => {
          this.apiCalls++;
          localStorage.setItem('gists_' + this.baseUsername, JSON.stringify(gists));
          this.processGistsToArray(gists, false);
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        }); // ,
    // () => console.log('getGists finished'));
  }

  private processGistsToArray(gists, isCached: boolean): void {
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
    this.gistsCached$.emit(isCached);
    this.gists$.emit(this.gists);
  }

  public getGist(gist: Gist): void {
    if (this.isCaching) {
      const content = localStorage.getItem('gist_' + gist.id + gist.filename);
      if (content !== null) {
        gist.content = content;
        gist.cached = true;
        gist.wasCached = true;
        this.gist$.next(gist);
        return;
      }
    }

    this.http.get(gist.contentUrl, {responseType: 'text'}).pipe(
      delay(0),
      map((res) => res))
      .subscribe(
        content => {
          this.apiCalls++;
          gist.content = content;
          gist.cached = true;
          gist.wasCached = false;
          if (gist.size < (1024 * 32)) { /* store 32kb max */
            localStorage.setItem('gist_' + gist.id + gist.filename, content);
          }
          this.gist$.next(gist);
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        }); // ,
    // () => console.log('getGist finished'));
  }

}
