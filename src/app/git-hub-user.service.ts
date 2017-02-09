import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class GitHubUserService {
  apiUrl = 'https://api.github.com/users/';

  user = null;
  followings = [];

  /**
  * 
   */
  constructor(
    private http: Http
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
      error => console.error(' Error is : ' + error),
        () => console.log('getUser finished'));

    return obj;
   }

  /**
   * 
   */
  getFollowing(username: string) {
    console.log('GitHubUserService:getFollowing');

    const cachedObj = localStorage.getItem('followings_' + username);
    if( cachedObj !== null) {
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
       error => console.error(' Error is : ' + error),
        () => console.log('getFollowings finished')
        );

    return obj;
  }

}
