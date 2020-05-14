import {Component, NgModule, ElementRef, OnInit, OnDestroy, Input, ViewContainerRef, Output, EventEmitter} from '@angular/core';
import {GitHubUserService} from './git-hub-user.service';
import {ToastrModule} from 'ngx-toastr';
import {Subscription} from 'rxjs';
// @ts-ignore
import packageJson from '../../package.json';

import {ToastrService} from 'ngx-toastr';
import {faMinusCircle, faCloudDownloadAlt, faExchangeAlt} from '@fortawesome/free-solid-svg-icons';
import {UserDetailComponent} from './users/user-detail/user-detail.component';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public version: string = packageJson.version;
  public title: string = packageJson.name;

  baseUsername: string = this.userService.getUserBasenameDefault();
  @Input() isCaching: boolean = true;
  cachingStatus = {
    userWasCached: false,
    followingsWasCached: false,
    followersWasCached: false,
    useCached: false
  };

  @Output() statusChange = new EventEmitter();
  private UserServiceStatusRef: Subscription = null;

  /**
   *
   */
  constructor(
    private userService: GitHubUserService,
    private toast: ToastrService
  ) {
    console.log('constructor: isCaching:', this.isCaching);
    this.baseUsername = this.userService.getUserBasenameDefault();
    console.log('constructor: baseUsername:', this.baseUsername);
  }

  /**
   *
   */
  ngOnInit() {
    this.loadFollowings(this.baseUsername);
    this.loadFollowers(this.baseUsername);

    this.UserServiceStatusRef = this.userService.cachedChange$.subscribe((status) => {
      console.log('Emitting statusChange ...');
      this.statusChange.emit(status);
    });

    this.toast.success(this.version, this.title);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  /*statusChange(field: string, value: boolean) {
    console.log('!!! statusChange:', field, value);
    this.cachingStatus[field] = value;
  }*/
  cacheServiceChange(field: string, value: boolean) {
    console.log('!!! cacheServiceChange:', field, value);
    this.cachingStatus[field] = value;
    this.toast.success('Caching ' + value);
  }

  onStatusChange(status) {
    // const properties = Array.from(status);
    console.log('statusChange -> onStatusChange:', status);
    /*
        for (const [key, value] of Object.entries(status)) {
          console.log(`${key}: ${value}`);
        }*/
    this.toast.success('onStatusChange ' + status);
  }

  onRootUsername(username: string) {
    this.toast.info('onRootUsername ' + username);
    this.baseUsername = username;
    this.loadFollowings(this.baseUsername);
    this.loadFollowers(this.baseUsername);
  }

  /**
   *
   */
  changeBaseUsernameToDefault() {
    this.baseUsername = this.userService.getUserBasenameDefault();
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
    this.toast.success('Change baseUsername ' + this.baseUsername);
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
    this.toast.success('Caching ' + (value ? 'On' : 'Off'));
  }

  userFollowsBack(username: string) {

  }
}
