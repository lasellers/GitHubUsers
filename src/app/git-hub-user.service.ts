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

  //
  @Input() isCaching: boolean = true;

  // Make all of these async so we don't have a checked error
  // Note also, since this is a service, we can't just hook these up as output
  // on the component but must subscribe to them.
  @Output() userCached$ = new EventEmitter(true);

  @Output() user$ = new EventEmitter(true);
  @Output() errorMessage$ = new EventEmitter(true);

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

  public isUserCached(username: string): boolean {
    return (localStorage.getItem('user_' + username) !== null);
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

}
