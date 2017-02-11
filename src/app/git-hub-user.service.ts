import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Subscription } from 'rxjs/Subscription';

import {ToasterModule, ToasterService} from 'angular2-toaster';

@Injectable()
export class GitHubUserService {
 apiUrl = 'https://api.github.com/users/';

  user = null;
  followings = [];
  followers = [];

  /**
  * 
   */
  constructor(
    private http: Http
   ,public toasterService: ToasterService
  ) { }

  /**
   * 
   */
  getUser(username: string) { 
    console.log('GitHubUserService:getUser');

    const cachedObj = localStorage.getItem('user_' + username);
    if(cachedObj !== null) {
      console.log('Cached User: ');
      console.log(JSON.parse(cachedObj));
      this.user = JSON.parse(cachedObj);
      return {};
    }

    const obj = this.http.get( this.apiUrl + username)
     .map((res: Response) => res.json())
      .subscribe(
        user => {
          this.user = user;
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

    const cachedObj = localStorage.getItem('followings_' + username);
    if ( cachedObj !== null) {
      console.log('Cached Followings: ');
      console.log(JSON.parse(cachedObj));
      this.followings=JSON.parse(cachedObj);
      return {};
  }

    const obj = this.http.get( this.apiUrl + username + '/following')
      .map((res: Response) => res.json() )
      .subscribe(
        followings => {
          this.followings = Array.from(followings);
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

    const cachedObj = localStorage.getItem('followers_' + username);
    if ( cachedObj !== null) {
      console.log('Cached Followers: ');
      console.log(JSON.parse(cachedObj));
      this.followers = JSON.parse(cachedObj);
      return {};
  }

    const obj = this.http.get( this.apiUrl + username + '/followers')
      .map((res: Response) => res.json() )
      .subscribe(
       followers => {
          this.followers = Array.from(followers);
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
    const text: string = error.statusText||'Internet Error';
    console.error(`Error: (${error.status}) ${text}`);
    const message: string = `Error: (${error.status}) ${text}`;
   this.toasterService.pop('error', `Error: ${error.status}`, text);
  }

}
