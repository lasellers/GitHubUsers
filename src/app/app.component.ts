import { Component, NgModule, ElementRef, OnInit, Input  } from '@angular/core';
import { GitHubUserService } from './git-hub-user.service';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GitHub Users';
  defaultBaseUsername = 'lasellers';

  @Input() baseUsername = this.defaultBaseUsername;

/**
 * 
 */
  constructor(
    private userService: GitHubUserService
  )
  {
       this.baseUsername = this.defaultBaseUsername;
  }

/**
 * 
 */
changeBaseUsernameToDefault()
{
  this.baseUsername = this.defaultBaseUsername;
  this.loadFollowing(this.baseUsername);
}

/**
 * 
 */
changeBaseUsername(username: string)
{
  this.baseUsername = username;
  this.loadFollowing(this.baseUsername);
}

/**
 * 
 */
  loadFollowing(username: string) {
    console.log('AppComponent:loadFollowing');
    this.userService.getFollowing(username);
}

/**
 * 
 */
  loadUser(username: string) {
    console.log('AppComponent:loadUser');
    this.userService.getUser(username);
}

/**
 * 
 */
 ngOnInit() {
   this.loadFollowing(this.baseUsername);
  }

}
