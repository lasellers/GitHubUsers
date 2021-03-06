import { delay, map } from 'rxjs/operators';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

/**
 * Note: As this is experimental, this service is both acting as a singleton in someways and also emitting data for capture by components.
 * Generally you'd only want to do one or the other, depending on the situation.
 */
@Injectable({providedIn: 'root'})
export class GitHubUserService {
  // current data
  private baseUsername: string = 'lasellers';

  // These are resolved async
  public apiCalls: number = 0;

  //
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;

  // Make all of these async so we don't have a checked error
  // Note also, since this is a service, we can't just hook these up as output
  // on the component but must subscribe to them.
  // @Output() userCached$ = new EventEmitter(true);

  @Output() user$ = new EventEmitter(true);
  @Output() errorMessage$ = new EventEmitter(true);

  constructor(
    public http: HttpClient
  ) {
  }

  getApiUrl(): string {
    return 'https://api.github.com/users/';
  }

  getUserBasename(): string {
    return this.baseUsername;
  }

  getBaseUserDefault(): string {
    return 'lasellers';
  }

  clearUserCache(username: string): void {
    // if (this.user.hasOwnProperty('login')) {
    //  localStorage.removeItem('user_' + this.user.login);
    //  this.emitCacheStatusUser(false, this.user.login);
    // }
    localStorage.removeItem('user_' + username);
    this.user$.emit({login: username, wasCached: false});
  }

  public isUserCached(username: string): boolean {
    return (localStorage.getItem('user_' + username) !== null);
  }

  public getUser(username: string): Observable<any> {
    if (this.isCaching) {
      const cachedUserObj = localStorage.getItem('user_' + username);
      if (cachedUserObj !== null) {
        const user = JSON.parse(cachedUserObj);
        return of({...user, wasCached: true});
      }
    }

    if(this.cacheOnly) return of();

    return this.http.get(this.getApiUrl() + username).pipe(
      delay(0),
      // map((res: HttpResponse<any>) => res),
      map((user: User) => {
          this.apiCalls++;
          if (this.isCaching) {
            localStorage.setItem('user_' + username, JSON.stringify(user));
          }
          return {...user, wasCached: false};
        }
      ));
  }
}
