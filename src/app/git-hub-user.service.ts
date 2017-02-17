import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Subscription } from 'rxjs/Subscription';

import { ToasterModule, ToasterService } from 'angular2-toaster';

@Injectable()
export class GitHubUserService {
  apiUrl = 'https://api.github.com/users/';

  // current data
  baseUsername = null;

  user = null;
  followings = [];
  followers = [];

  // was cached flag
  userWasCached = false;
  followingsWasCached = false;
  followersWasCached = false;

  /**
  * 
   */
  constructor(
    private http: Http
    , public toasterService: ToasterService
  ) { }

  /**
   * 
   */
  clearUserCache() {
    console.log('clearUserCache ' + this.user.login);
    //     if("login" in this.user) {
    if (this.user.hasOwnProperty('login')) {
      localStorage.removeItem('user_' + this.user.login);
      this.userWasCached = false;
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
    }
  }
  /**
   * 
   */
  getUser(username: string) {
    console.log('GitHubUserService:getUser');

    const cachedObj = localStorage.getItem('user_' + username);
    if (cachedObj !== null) {
      this.user = JSON.parse(cachedObj);
      this.userWasCached = true;
      console.log('Cached User: ');
      console.log(this.user);
      return {};
    }

    const obj = this.http.get(this.apiUrl + username)
      .map((res: Response) => res.json())
      .subscribe(
      user => {
        this.user = user;
        this.userWasCached = false;
        localStorage.setItem('user_' + username, JSON.stringify(this.user));
        console.log(this.user);
      },
      error => {
        this.emitErrorMessage(error);
      },
      () => console.log('getUser finished'))
      ;

    return obj;
  }

  /**
   * 
   */
  getFollowings(username: string) {
    console.log('GitHubUserService:getFollowings');

    this.baseUsername = username;

    const cachedObj = localStorage.getItem('followings_' + username);
    if (cachedObj !== null) {
      this.followings = JSON.parse(cachedObj);
      this.followingsWasCached = true;
      console.log('Cached Followings: ');
      console.log(this.followings);
      return {};
    }

    const obj = this.http.get(this.apiUrl + username + '/following')
      .map((res: Response) => res.json())
      .subscribe(
      followings => {
        this.followings = Array.from(followings);
        this.followingsWasCached = false;
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
    console.log('GitHubUserService:getFollowers');

    this.baseUsername = username;

    const cachedObj = localStorage.getItem('followers_' + username);
    if (cachedObj !== null) {
      this.followers = JSON.parse(cachedObj);
      this.followersWasCached = true;
      console.log('Cached Followers: ');
      console.log(this.followers);
      return {};
    }

    const obj = this.http.get(this.apiUrl + username + '/followers')
      .map((res: Response) => res.json())
      .subscribe(
      followers => {
        this.followers = Array.from(followers);
        this.followersWasCached = false;
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
