import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { GitHubUserService } from './github-user.service';
import { ToastrService } from 'ngx-toastr';
import { GitHubGistsService } from './github-gists.service';
import { GitHubFollowersService } from './github-followers.service';
import { GitHubFollowingsService } from './github-followings.service';
import { GitHubGistService } from './github-gist.service';
import packageJson from '../../package.json';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @Output() errorMessage$ = new EventEmitter(true);
  @Input() baseUsername: string = this.userService.getBaseUserDefault();
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;

  public version: string = packageJson.version;
  public title: string = packageJson.fullName;
  public filterString: string = '';

  /**
   *
   */
  constructor(
    public userService: GitHubUserService,
    public gistService: GitHubGistService,
    public followersService: GitHubFollowersService,
    public followingsService: GitHubFollowingsService,
    public gistsService: GitHubGistsService,
    public toast: ToastrService,
  ) {
    this.baseUsername = this.userService.getBaseUserDefault();
  }

  /**
   * Main function to load a user completely -- including gists, followers, followings.
   *
   * @param username
   */
  public loadUser(username: string): void {
    this.baseUsername = username;

    this.onMessage({message: `loadUser: ${username}`, type: 'default', title: ''});

    this.userService.getUser(username).subscribe((user) => {
        this.userService.user$.emit(user);
      },
      error => {
        this.userService.errorMessage$.emit(error);
      });
    this.followersService.getFollowers(username).subscribe(followers => {
        this.followersService.followers$.emit(followers);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );
    this.followingsService.getFollowings(username).subscribe(followings => {
        this.followingsService.followings$.emit(followings);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );
    this.gistsService.getGists(username).subscribe(
      gists => {
        this.gistsService.gists$.emit(gists);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );
    // on user load, clear the gist that is showing...
    this.gistService.gist$.next(undefined);
  }

  /**
   * Unlike loadUser this only gets the user info, not the followings, followers or gists.
   *
   * @param username
   */
  public showUser(username: string): void {
    this.onMessage({message: `showUser: ${username}`, type: 'default', title: 'App'});
    this.userService.getUser(username).subscribe((user) => {
        this.userService.user$.emit(user);
      },
      error => {
        this.userService.errorMessage$.emit(error);
      });
  }

  ngOnInit(): void {
    /*this.toast.success(this.version, this.title, {
      timeOut: 6000
    });*/

    /*Notification.requestPermission().then(permission => {
      if(Notification.permission == 'granted') {
        let notify = new Notification(this.title + ' ' + this.version);
      }
    });*/
  }

  ngOnDestroy(): void {
    this.userService.user$.unsubscribe();
    this.followersService.followersCached$.unsubscribe();
    this.followingsService.followingsCached$.unsubscribe();
    this.gistsService.gistsCached$.unsubscribe();
    this.gistService.gist$.unsubscribe();
  }

  clearCache(): void {
    localStorage.clear();
    this.onMessage({message: 'Cache cleared ', type: 'default', title: 'App'});

    this.loadUser(this.baseUsername);
  }

  // notifyShowBaseUsername
  onShowUser(username: string): void {
    this.showUser(username);
    // this.onMessage({message: 'onShowUser: ' + username, type: 'default', title: 'App'});
  }

  // notifySwitchToUser
  onSwitchToUser(username: string): void {
    this.loadUser(username);
    // this.onMessage({message: 'onSwitchToUser: ' + username, type: 'default', title: 'App'});
  }

  switchToUserDefault(): void {
    const username = this.userService.getBaseUserDefault();
    this.loadUser(username);
    this.onMessage({message: 'Switch to user: ' + username, type: 'default', title: 'App'});
  }

  changeCaching(value: boolean): void {
    this.userService.isCaching = value;
    this.gistsService.isCaching = value;
    this.gistService.isCaching = value;
    this.followingsService.isCaching = value;
    this.followersService.isCaching = value;
    this.onMessage({message: 'Caching ' + (value ? 'On' : 'Off'), type: 'default', title: 'App'});
  }

  changeCacheOnly(value: boolean): void {
    this.userService.cacheOnly = value;
    this.gistsService.cacheOnly = value;
    this.gistService.cacheOnly = value;
    this.followingsService.cacheOnly = value;
    this.followersService.cacheOnly = value;
    this.onMessage({message: 'Cache Only ' + (value ? 'On' : 'Off'), type: 'default', title: 'App'});
  }

  onErrorMessage(error: Response): void {
    const text: string = error.statusText || 'Internet Error';
    const message: string = `Error: (${error.status}) (${error.body}) ${text} {typeof error}`;
    console.error(`Error: ${message}`);
    this.onMessage({message: `Error: ${message} `, type: 'error', title: 'App'});
  }

  onMessage(data = null): void {
    const {message, type, title} = data;
    switch (type) {
      case 'cached':
        this.toast.success(message, title, {
          timeOut: 2000,
        });
        break;
      case 'not-cached':
        this.toast.warning(message, title, {
          timeOut: 2000,
        });
        break;
      case 'error':
        this.toast.error(message, title, {
          timeOut: 2000,
        });
        break;
      default:
        this.toast.info(message, title, {
          timeOut: 2000,
        });
    }
  };

}
