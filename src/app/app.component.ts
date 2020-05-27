import {
  Component,
  NgModule,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
  ViewContainerRef,
  Output,
  EventEmitter
} from '@angular/core';
import { GitHubUserService } from './git-hub-user.service';
import { ToastrService } from 'ngx-toastr';
// @ts-ignore
import packageJson from '../../package.json';
import { faMinusCircle, faCloudDownloadAlt, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { BytesPipe } from './bytes.pipe';
import { Gist } from './gist.model';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { GithubGistsService } from "./github-gists.service";
import { GithubFollowersService } from "./github-followers.service";
import { GithubFollowingsService } from "./github-followings.service";

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public version: string = packageJson.version;
  public title: string = packageJson.name;
  public filterString: string = '';

  gist = {
    content: '',
    cached: false,
    id: ''
  };
  baseUsername: string = this.userService.getUserBasenameDefault();
  cachingStatus = {
    userWasCached: false,
    followingsWasCached: false,
    followersWasCached: false,
    gistsWasCached: false,
    gistWasCached: false,
    useCached: false,
    users: []
  };

  // @Input() isCaching: boolean = true;

  /**
   *
   */
  constructor(
    public userService: GitHubUserService,
    public gistService: GithubGistsService,
    public followersService: GithubFollowersService,
    public followingsService: GithubFollowingsService,
    private toast: ToastrService
  ) {
    this.baseUsername = this.userService.getUserBasenameDefault();
  }

  public loadUser(username: string) {
    console.log('loadUser ' + username);
    this.baseUsername = username;
    console.log('loadUser ' + this.baseUsername);
    this.userService.getUser(username);
    this.followersService.getFollowers(username);
    this.followingsService.getFollowings(username);
    this.gistService.getGists(username);
  }

  public showUser(username: string) {
    console.log('showUser ' + username);
    this.userService.getUser(username);
  }

  ngOnInit() {
    this.toast.warning(this.version, this.title, {
      timeOut: 12000
    });

    this.loadUser(this.baseUsername);

    this.userService.userCached$.subscribe(cachedUsername => {
      const [cached, username] = cachedUsername;
      this.cachingStatus.userWasCached = cached;
      this.cachingStatus.users[username] = cached;
      if (cached) {
        this.toast.success('User: ' + username + ' (cached)');
      } else {
        this.toast.info('User: ' + username + ' (caching...)');
      }
    });

    this.followersService.followersCached$.subscribe(cached => {
      this.cachingStatus.followersWasCached = cached;
      if (cached) {
        this.toast.success('Followers: (cached) ');
      } else {
        this.toast.info('Followers:  (caching...)');
      }
    });

    this.followingsService.followingsCached$.subscribe(cached => {
      this.cachingStatus.followingsWasCached = cached;
      if (cached) {
        this.toast.success('Followings: (cached) ');
      } else {
        this.toast.info('Followings:  (caching...)');
      }
    });

    this.gistService.gistsCached$.subscribe(cached => {
      this.cachingStatus.gistsWasCached = cached;
      if (cached) {
        this.toast.success('Gists: (cached) ');
      } else {
        this.toast.info('Gists: (caching...)');
      }
    });

    const gistSub: Subscription = this.gistService.gist$.subscribe(
      data => {
        if (data === null) {
          this.toast.info('Clear gist cache');
        } else {
          this.gistEvent(data);
        }
      },
      error => {
        // console.log('Error gist: ', error);
        this.onErrorMessage(error);
      }
    );

    this.userService.errorMessage$.subscribe(data => {
      this.onErrorMessage(data);
    });
  }

  gistEvent(data) {
    this.gist = data;
    this.cachingStatus.gistWasCached = data.cached;
    const size = new BytesPipe().transform(data.size);
    if (data.cached) {
      this.toast.success(`${data.filename} (${size}) (cached)`, '', {
        timeOut: 2000
      });
    } else {
      this.toast.info(`${data.filename} (${size}) (caching...)`, '', {
        timeOut: 2000
      });
    }
  }

  onErrorMessage(error): void {
    const text: string = error.statusText || 'Internet Error';
    const message: string = `Error: (${error.status}) (${error.message}) ${text}`;
    console.error(`Error: ${message}`);
    this.toast.error(text, `Error: ${message} `);
  }

  ngOnDestroy() {
    this.userService.userCached$.unsubscribe();
    this.followersService.followersCached$.unsubscribe();
    this.followingsService.followingsCached$.unsubscribe();
    this.gistService.gistsCached$.unsubscribe();

    this.gistService.gist$.unsubscribe();
  }

  clearCache() {
    localStorage.clear();
    this.loadUser(this.baseUsername);
    this.cachingStatus = {
      userWasCached: false,
      followingsWasCached: false,
      followersWasCached: false,
      gistsWasCached: false,
      gistWasCached: false,
      useCached: false,
      users: []
    };
    this.toast.success('Cache cleared', 'App');
  }

  // notifyChangeBaseUsername
  onChangeBaseUsername(username: string) {
    this.loadUser(username);
    this.toast.info('onChangeBaseUsername: ' + username, 'App');
  }

  // notifyShowBaseUsername
  onShowBaseUsername(username: string) {
    this.showUser(username);
    this.toast.info('onShowBaseUsername: ' + username, 'App');
  }

  changeBaseUsername(username: string) {
    this.loadUser(username);
    this.toast.success('Change baseUsername: ' + this.baseUsername, 'App');
  }

  changeBaseUsernameToDefault() {
    // this.baseUsername = this.userService.getUserBasenameDefault();
    this.loadUser(this.userService.getUserBasenameDefault());
    this.toast.success('Change baseUsername to default ' + this.baseUsername, 'App');
  }

  changeCaching(value: boolean) {
    this.userService.isCaching = value;
    this.gistService.isCaching = value;
    this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
  }

}
