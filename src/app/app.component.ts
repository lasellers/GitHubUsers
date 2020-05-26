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
    private toast: ToastrService
  ) {
    this.baseUsername = this.userService.getUserBasenameDefault();
  }

  ngOnInit() {
    this.toast.warning(this.version, this.title, {
      timeOut: 12000
    });

    this.userService.loadUser(this.baseUsername);

    this.userService.cacheStatusUser$.subscribe(cachedUsername => {
      const [cached, username] = cachedUsername;
      this.cachingStatus.userWasCached = cached;
      this.cachingStatus.users[username] = cached;
      if (cached) {
        this.toast.success('User: ' + username + ' (cached)');
      } else {
        this.toast.info('User: ' + username + ' (caching...)');
      }
    });

    this.userService.followersCached$.subscribe(cached => {
      this.cachingStatus.followersWasCached = cached;
      if (cached) {
        this.toast.success('Followers: (cached) ');
      } else {
        this.toast.info('Followers:  (caching...)');
      }
    });

    this.userService.followingsCached$.subscribe(cached => {
      this.cachingStatus.followingsWasCached = cached;
      if (cached) {
        this.toast.success('Followings: (cached) ');
      } else {
        this.toast.info('Followings:  (caching...)');
      }
    });

    this.userService.gistsCached$.subscribe(cached => {
      this.cachingStatus.gistsWasCached = cached;
      if (cached) {
        this.toast.success('Gists: (cached) ');
      } else {
        this.toast.info('Gists: (caching...)');
      }
    });

    const gistSub: Subscription = this.userService.gist$.subscribe(
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
    this.userService.cacheStatusUser$.unsubscribe();
    this.userService.followersCached$.unsubscribe();
    this.userService.followingsCached$.unsubscribe();
    this.userService.gistsCached$.unsubscribe();

    this.userService.gist$.unsubscribe();
  }

  clearCache() {
    localStorage.clear();
    this.userService.loadUser(this.baseUsername);
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

  // notifyBaseUsername
  onBaseUsername(username: string) {
    this.baseUsername = username;
    this.userService.loadUser(this.baseUsername);
    this.toast.info('onBaseUsername ' + this.baseUsername, 'App');
  }

  changeBaseUsernameToDefault() {
    this.baseUsername = this.userService.getUserBasenameDefault();
    this.userService.loadUser(this.baseUsername);
    this.toast.success('Change baseUsername to default ' + this.baseUsername, 'App');
  }

  changeBaseUsername(username: string) {
    this.baseUsername = username;
    this.userService.loadUser(this.baseUsername);
    this.toast.success('Change baseUsername ' + this.baseUsername, 'App');
  }

  changeCaching(value: boolean) {
    this.userService.isCaching = value;
    this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
  }

}
