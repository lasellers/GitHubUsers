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
import { BytesPipe } from './bytes.pipe';
import { GitHubGistsService } from './github-gists.service';
import { GitHubFollowersService } from './github-followers.service';
import { GitHubFollowingsService } from './github-followings.service';
import { GitHubGistService } from './github-gist.service';
import { Gist } from './gist.model';
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
  public title: string = packageJson.name;
  public filterString: string = '';

  gist: Gist = new Gist(
  );

  /**
   *
   */
  constructor(
    public userService: GitHubUserService,
    public gistService: GitHubGistService,
    public followersService: GitHubFollowersService,
    public followingsService: GitHubFollowingsService,
    public gistsService: GitHubGistsService,
    public toast: ToastrService
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

    this.toast.warning(`loadUser: ${username}`);

    this.userService.getUser(username).subscribe((user) => {
        this.userService.user$.emit(user);
        console.log(user);
      },
      error => {
        this.userService.errorMessage$.emit(error);
      });
    this.followersService.getFollowers(username).subscribe(followers => {
        console.log(followers);
        this.followersService.followers$.emit(followers);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );
    this.followingsService.getFollowings(username).subscribe(followings => {
        this.followingsService.followings$.emit(followings);
        console.log(followings);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );
    this.gistsService.getGists(username).subscribe(
      gists => {
        console.log(gists);
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
    this.toast.warning(`showUser: ${username}`);
    this.userService.getUser(username).subscribe((user) => {
        this.userService.user$.emit(user);
      },
      error => {
        this.userService.errorMessage$.emit(error);
      });
  }

  ngOnInit(): void {
    this.toast.warning(this.version, this.title, {
      timeOut: 12000
    });

    /*Notification.requestPermission().then(permission => {
      if(Notification.permission == 'granted') {
        let notify = new Notification(this.title + ' ' + this.version);
      }
    });*/
  }

  onErrorMessage(error: Response): void {
    console.log('error class ' + typeof error);
    const text: string = error.statusText || 'Internet Error';
    const message: string = `Error: (${error.status}) (${error.body}) ${text}`;
    console.error(`Error: ${message}`);
    this.toast.error(text, `Error: ${message} `);
  }

  onMessage(data): void {
    console.log(data);
   let {message, type, title} = data;
   switch(type) {
     case 'cached':
       this.toast.success(message, title);
       break;
     case 'not-cached':
       this.toast.warning(message, title);
       break;
     default:
       this.toast.info(message, title);
   }
  }

  ngOnDestroy(): void {
    this.userService.user$.unsubscribe();
    this.followersService.followersCached$.unsubscribe();
    this.followingsService.followingsCached$.unsubscribe();
    this.gistsService.gistsCached$.unsubscribe();
    this.gistService.gist$.unsubscribe();
  }

  clearGistCache(gist: Gist): void {
    this.gistService.clearGistCache(gist);
    this.gistService.gist$.next(gist);
  }

  clearCache(): void {
    localStorage.clear();

    this.loadUser(this.baseUsername);
    this.toast.success('Cache cleared');
  }

  // notifyShowBaseUsername
  onShowUser(username: string): void {
    this.showUser(username);
    this.toast.warning('onShowUser: ' + username);
  }

  // notifySwitchToUser
  onSwitchToUser(username: string): void {
    this.loadUser(username);
    this.toast.warning('onSwitchToUser: ' + username);
  }

  switchToUserDefault(): void {
    const username = this.userService.getBaseUserDefault();
    this.loadUser(username);
    this.toast.warning('Switch to user ' + username);
  }

  changeCaching(value: boolean): void {
    this.userService.isCaching = value;
    this.gistsService.isCaching = value;
    this.gistService.isCaching = value;
    this.followingsService.isCaching = value;
    this.followersService.isCaching = value;
    this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
  }

  changeCacheOnly(value: boolean): void {
    this.userService.cacheOnly = value;
    this.gistsService.cacheOnly = value;
    this.gistService.cacheOnly = value;
    this.followingsService.cacheOnly = value;
    this.followersService.cacheOnly = value;
    this.toast.success('Cache Only ' + (value ? 'On' : 'Off'), 'App');
  }

}
