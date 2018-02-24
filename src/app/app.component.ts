import { Component, NgModule, ElementRef, OnInit, Input, ViewContainerRef } from '@angular/core';
import { GitHubUserService } from './git-hub-user.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'GitHub Users';
  //defaultBaseUsername: string = 'lasellers';
  version: string = "1.0.5";

  @Input() baseUsername = ""; //this.defaultBaseUsername;

  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    showCloseButton: true,
    tapToDismiss: true,
    timeout: 10000
  });

  /**
   * 
   */
  constructor(
    private userService: GitHubUserService,
    public toasterService: ToasterService
  ) {
    //this.baseUsername = this.defaultBaseUsername;
    this.baseUsername = this.userService.getUserBasename();
    this.toasterService = toasterService;
  }

  /**
   * 
   */
  changeBaseUsernameToDefault() {
    this.baseUsername = this.userService.getUserBasename();
    //this.baseUsername = this.defaultBaseUsername;
    this.loadFollowings(this.baseUsername);
    this.loadFollowers(this.baseUsername);
  }

  /**
   * 
   */
  changeBaseUsername(username: string) {
    this.baseUsername = username;
    this.loadFollowings(this.baseUsername);
    this.loadFollowers(this.baseUsername);
  }

  /**
   * 
   */
  loadFollowings(username: string) {
    console.log('AppComponent:loadFollowings');
    this.userService.getFollowings(username);
  }

  /**
   * 
   */
  loadFollowers(username: string) {
    console.log('AppComponent:loadFollowers');
    this.userService.getFollowers(username);
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
    this.loadFollowings(this.baseUsername);
    this.loadFollowers(this.baseUsername);
  }

}
