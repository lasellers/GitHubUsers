import {Component, NgModule, ElementRef, OnInit, OnDestroy, Input, ViewContainerRef, Output, EventEmitter} from '@angular/core';
import {GitHubUserService} from './git-hub-user.service';
import {ToastrModule} from 'ngx-toastr';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
// @ts-ignore
import packageJson from '../../package.json';
import {faMinusCircle, faCloudDownloadAlt, faExchangeAlt} from '@fortawesome/free-solid-svg-icons';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {UserListComponent} from './user-list/user-list.component';

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
    this.userService.getFollowers(this.baseUsername);
    this.userService.getFollowings(this.baseUsername);

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
    this.toast.success('Caching ' + value, 'App');
  }

  onStatusChange(status) {
    // const properties = Array.from(status);
    console.log('statusChange -> onStatusChange:', status);
    /*
        for (const [key, value] of Object.entries(status)) {
          console.log(`${key}: ${value}`);
        }*/
    this.toast.success('onStatusChange ' + status, 'App');
  }

  onBaseUsername(username: string) {
    this.toast.info('onBaseUsername ' + username, 'App');
    this.baseUsername = username;
    this.userService.getFollowers(this.baseUsername);
    this.userService.getFollowings(this.baseUsername);
  }

  /**
   *
   */
  changeBaseUsernameToDefault() {
    this.baseUsername = this.userService.getUserBasenameDefault();
    this.userService.getFollowers(this.baseUsername);
    this.userService.getFollowings(this.baseUsername);
    this.toast.success('Change baseUsername to default ' + this.baseUsername, 'App');
  }


  /**
   *
   */
  changeBaseUsername(username: string) {
    this.baseUsername = username;
    this.userService.getUser(this.baseUsername);
    this.userService.getFollowers(this.baseUsername);
    this.userService.getFollowings(this.baseUsername);
    this.toast.success('Change baseUsername ' + this.baseUsername, 'App');
  }

  changeCaching(value: boolean) {
    console.log('changeCaching ' + value);
    this.userService.useCached = value;
    this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
  }

  userFollowsBack(username: string) {

  }
}
