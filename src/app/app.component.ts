import {Component, NgModule, ElementRef, OnInit, OnDestroy, Input, ViewContainerRef, Output, EventEmitter} from '@angular/core';
import {GitHubUserService} from './git-hub-user.service';
// import {ToasterModule, ToasterService, ToasterConfig} from 'angular2-toaster';
import {ToastrModule} from 'ngx-toastr';
import {Subscription} from 'rxjs';
// import { version, name } from '../../package.json';

import {ToastrService} from 'ngx-toastr';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'GitHub Users';
  version: string = '1.0.10';
  // public version: string = version;
  // public title: string = name;

  @Input() baseUsername = ''; // this.defaultBaseUsername;
  @Input() isCaching: boolean = true;
  cachingStatus = {
    userWasCached: false,
    followingsWasCached: false,
    followersWasCached: false,
    useCached: false
  };

  @Output() onStatusChange = new EventEmitter();
  private UserServiceStatusRef: Subscription = null;

  /*public toasterconfig: ToasterConfig =
    new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: true,
      timeout: 10000
    });*/

  /**
   *
   */
  constructor(
    private userService: GitHubUserService,
    //    public toasterService: ToasterService
    private toastr: ToastrService
  ) {
    // this.baseUsername = this.defaultBaseUsername;
    this.baseUsername = this.userService.getUserBasename();
    //   this.toasterService = ToastrService;
    console.log('constructor: isCaching:', this.isCaching);
  }

  /**
   *
   */
  ngOnInit() {
    this.loadFollowings(this.baseUsername);
    this.loadFollowers(this.baseUsername);

    this.UserServiceStatusRef = this.userService.cachedChange$.subscribe((status) => {
      this.onStatusChange.emit(status);
    });

    this.toastr.success('Lorem', `Hello`);

  }

  ngOnDestroy() {
  }

  /*onStatusChange(field: string, value: boolean) {
    console.log('!!! onStatusChange:', field, value);
    this.cachingStatus[field] = value;
  }*/
  cacheServiceChange(field: string, value: boolean) {
    console.log('!!! cacheServiceChange:', field, value);
    this.cachingStatus[field] = value;
    this.toastr.success('Caching ' + value);
  }

  onStatusChangeEvent(status) {
    // const properties = Array.from(status);
    console.log(status);
    /*
        for (const [key, value] of Object.entries(status)) {
          console.log(`${key}: ${value}`);
        }*/

  }

  /**
   *
   */
  changeBaseUsernameToDefault() {
    this.baseUsername = this.userService.getUserBasenameDefault();
    // this.baseUsername = this.defaultBaseUsername;
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

  changeCaching(value: boolean) {
    console.log('changeCaching ' + value);
    this.userService.useCached = value;
    this.toastr.success('Caching ' + value);
    this.toastr.success('Caching ' + (value ? 'On' : 'Off'));
  }

  userFollowsBack(username: string) {

  }
}
