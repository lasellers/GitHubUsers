import {Component, NgModule, ElementRef, OnInit, OnDestroy, Input, ViewContainerRef, Output, EventEmitter} from '@angular/core';
import {GitHubUserService} from './git-hub-user.service';
import {ToastrService} from 'ngx-toastr';
// @ts-ignore
import packageJson from '../../package.json';
import {faMinusCircle, faCloudDownloadAlt, faExchangeAlt} from '@fortawesome/free-solid-svg-icons';
import {BytesPipe} from './bytes.pipe';
import {Gist} from './gist';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public version: string = packageJson.version;
  public title: string = packageJson.name;

  gist = {
    content: '',
    cached: false,
    id: ''
  }; // : Gist;
  baseUsername: string = this.userService.getUserBasenameDefault();
  cachingStatus = {
    userWasCached: false,
    followingsWasCached: false,
    followersWasCached: false,
    gistsWasCached: false,
    gistWasCached: false,
    useCached: false
  };

  @Input() isCaching: boolean = true;

  /**
   *
   */
  constructor(
    public userService: GitHubUserService,
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
    this.toast.success(this.version, this.title, {
      timeOut: 12000
    });

    this.userService.loadUser(this.baseUsername);

    this.userService.cacheStatusUser$.subscribe(data => {
      console.log('subscribe cacheStatusUser$:', data);
      this.toast.info('Cache User: ' + data.toString());
      this.cachingStatus.userWasCached = data;
    });

    this.userService.cacheStatusFollowers$.subscribe(data => {
      console.log('subscribe cacheStatusFollowers$:', data);
      this.toast.info('Cache Followers: ' + data.toString());
      this.cachingStatus.followersWasCached = data;
    });

    this.userService.cacheStatusFollowings$.subscribe(data => {
      console.log('subscribe cacheStatusFollowings$:', data);
      this.toast.info('Cache Followings: ' + data.toString());
      this.cachingStatus.followingsWasCached = data;
    });

    this.userService.cacheStatusGists$.subscribe(data => {
      console.log('subscribe cacheStatusGists$:', data);
      this.toast.info('Cache Gists: ' + data.toString());
      this.cachingStatus.gistsWasCached = data;
    });

    this.userService.gistObserver$.subscribe(
      data => {
        console.log('Gist Event...');
        if (data === null) {
          this.toast.info('Clear gist cache');
        } else {
          this.gistEvent(data);
        }
      },
      error => {
        console.log('Error gist: ', error);
      }
    );
  }

  gistEvent(data) {
    console.log('subscribe gist$:', data.content, data.filename, data.size);
    this.gist = data;
    this.cachingStatus.gistWasCached = data.cached;
    const size = new BytesPipe().transform(data.size);
    this.toast.info(`${data.filename} (${size})`, '', {
      timeOut: 2000
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.userService.cacheStatusUser$.unsubscribe();
    this.userService.cacheStatusFollowers$.unsubscribe();
    this.userService.cacheStatusFollowings$.unsubscribe();
    this.userService.cacheStatusGists$.unsubscribe();

    this.userService.gistObserver$.unsubscribe();
  }

  clearCache() {
    localStorage.clear();
    this.toast.success('Cache cleared', 'App');
  }

  onBaseUsername(username: string) {
    this.toast.info('onBaseUsername ' + username, 'App');
    this.baseUsername = username;
    this.userService.loadUser(this.baseUsername);
  }

  /**
   *
   */
  changeBaseUsernameToDefault() {
    this.baseUsername = this.userService.getUserBasenameDefault();
    this.userService.loadUser(this.baseUsername);
    this.toast.success('Change baseUsername to default ' + this.baseUsername, 'App');
  }

  /**
   *
   */
  changeBaseUsername(username: string) {
    this.baseUsername = username;
    this.userService.loadUser(this.baseUsername);

    this.toast.success('Change baseUsername ' + this.baseUsername, 'App');
  }

  changeCaching(value: boolean) {
    console.log('changeCaching ' + value);
    this.userService.isCaching = value;
    this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
  }

}
