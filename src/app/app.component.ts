import {Component, NgModule, ElementRef, OnInit, OnDestroy, Input, ViewContainerRef, Output, EventEmitter} from '@angular/core';
import {GitHubUserService} from './git-hub-user.service';
import {ToastrService} from 'ngx-toastr';
// @ts-ignore
import packageJson from '../../package.json';
import {faMinusCircle, faCloudDownloadAlt, faExchangeAlt} from '@fortawesome/free-solid-svg-icons';

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
  cachingStatus = {
    userWasCached: false,
    followingsWasCached: false,
    followersWasCached: false,
    useCached: false
  };

  @Input() isCaching: boolean = true;
 // @Output() statusChange = new EventEmitter();

  /**
   *
   */
  constructor(
    private userService: GitHubUserService,
    private toast: ToastrService
  ) {
    this.baseUsername = this.userService.getUserBasenameDefault();
    console.log('constructor: isCaching:', this.isCaching);
    console.log('constructor: baseUsername:', this.baseUsername);
  }

  /**
   *
   */
  ngOnInit() {
    this.userService.getUser(this.baseUsername);
    this.userService.getFollowers(this.baseUsername);
    this.userService.getFollowings(this.baseUsername);

    this.toast.success(this.version, this.title);

    this.userService.cacheStatus$.subscribe(data => {
      console.log('cache status:', data);
      this.toast.info(JSON.stringify(data), 'Cache Status');
      this.cachingStatus = data;
    });

    this.userService.cacheStatusUser$.subscribe(data => {
      console.log('cacheStatusUser$:', data);
      this.toast.info(data.toString(), 'Cache Status User');
      this.cachingStatus.userWasCached = data;
    });

    this.userService.cacheStatusFollowers$.subscribe(data => {
      console.log('cacheStatusFollowers$:', data);
      this.toast.info(data.toString(), 'Cache Status Followers');
      this.cachingStatus.followersWasCached = data;
    });

    this.userService.cacheStatusFollowings$.subscribe(data => {
      console.log('cacheStatusFollowings$:', data);
      this.toast.info(data.toString(), 'Cache Status Followings');
      this.cachingStatus.followingsWasCached = data;
    });

    /* this.userService.cacheStatus2$.subscribe(data => {
       console.log('cache status 2:', data);
       this.toast.warning(JSON.stringify(data), 'Cache Status 2');
       // this.cachingStatus = data;
     });*/
    console.log('ngOnInit App');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.userService.cacheStatus$.unsubscribe();
    // this.userService.cacheStatus2$.unsubscribe();
  }

  cacheServiceChange(field: string, value: boolean) {
    console.log('!!! cacheServiceChange:', field, value);
    this.cachingStatus[field] = value;
    this.toast.success('Caching ' + value, 'App');
  }

 /* onStatusChange(status) {
    // const properties = Array.from(status);
    console.log('statusChange -> onStatusChange:', status);

        for (const [key, value] of Object.entries(status)) {
          console.log(`${key}: ${value}`);
        }
    this.toast.success('onStatusChange ' + status, 'App');
  }
  */

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
    this.userService.isCaching = value;
    this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
  }

  userFollowsBack(username: string) {

  }
}
