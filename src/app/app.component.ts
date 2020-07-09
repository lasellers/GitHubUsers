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
import packageJson from '../../package.json';
import { BytesPipe } from './bytes.pipe';
import { GitHubGistsService } from './github-gists.service';
import { GitHubFollowersService } from './github-followers.service';
import { GitHubFollowingsService } from './github-followings.service';
import { GitHubGistService } from './github-gist.service';
import { Gist } from './gist.model';

console.clear();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @Output() errorMessage$ = new EventEmitter(true);

  public version: string = packageJson.version;
  public title: string = packageJson.name;
  public filterString: string = '';

  gist: Gist = new Gist(
  );
  @Input() baseUsername: string = this.userService.getUserBasenameDefault();
  cachingStatus = {
    userWasCached: false,
    followingsWasCached: false,
    followersWasCached: false,
    gistsWasCached: false,
    gistWasCached: false,
    useCached: false,
    users: []
  };

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
    this.baseUsername = this.userService.getUserBasenameDefault();
  }

  public loadUser(username: string): void {
    this.baseUsername = username;
    this.userService.getUser(username).subscribe((user) => {
        this.userService.user$.emit(user);
      },
      error => {
        this.userService.errorMessage$.emit(error);
      });
    this.followersService.getFollowers(username).subscribe(followers => {
        this.followersService.followersCached$.emit(false);
        this.followersService.followers$.emit(followers);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );
    this.followingsService.getFollowings(username).subscribe(followings => {
        this.followingsService.followingsCached$.emit(false);
        this.followingsService.followings$.emit(followings);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );
    this.gistsService.getGists(username).subscribe(
      gists => {
        console.log('app', gists);
        this.gistsService.gistsCached$.emit(false);
        this.gistsService.gists$.emit(gists);
      },
      error => {
        this.errorMessage$.emit(error);
      }
      );
    this.gistService.gist$.next({content: '', cached: true, wasCached: false});
  }

  public showUser(username: string): void {
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

    this.loadUser(this.baseUsername);

    this.userService.user$.subscribe(user => {
      // const [cached, username] = cachedUsername;
      const cached = user.wasCached;
      const username = user.login;
      this.cachingStatus.userWasCached = cached;
      this.cachingStatus.users[username] = cached;
      if (cached) {
        this.toast.success(`User: ${username} (cached)`);
      } else {
        this.toast.info(`User: ${username} (caching...)`);
      }
    });

    this.followersService.followersCached$.subscribe(cached => {
      this.cachingStatus.followersWasCached = cached;
      if (cached) {
        this.toast.success(`Followers: ${this.baseUsername} (cached) `);
      } else {
        this.toast.info(`Followers: ${this.baseUsername} (caching...)`);
      }
    });

    this.followingsService.followingsCached$.subscribe(cached => {
      this.cachingStatus.followingsWasCached = cached;
      if (cached) {
        this.toast.success(`Followings: ${this.baseUsername} (cached) `);
      } else {
        this.toast.info(`Followings: ${this.baseUsername} (caching...)`);
      }
    });

    this.gistsService.gistsCached$.subscribe(cached => {
      this.cachingStatus.gistsWasCached = cached;
      if (cached) {
        this.toast.success(`Gists: ${this.baseUsername} (cached) `);
      } else {
        this.toast.info(`Gists: ${this.baseUsername} (caching...)`);
      }
    });

    this.gistService.gist$.subscribe(
      data => {
        if (data === null) {
          this.toast.info('Clear gist cache');
        } else {
          this.gistEvent(data);
        }
      },
      error => {
        this.onErrorMessage(error);
      }
    );

    this.userService.errorMessage$.subscribe(data => {
      this.onErrorMessage(data);
    });
  }

  gistEvent(data: Gist): void {
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

  onErrorMessage(error: Response): void {
    console.log('error class ' + typeof error);
    const text: string = error.statusText || 'Internet Error';
    const message: string = `Error: (${error.status}) (${error.body}) ${text}`;
    console.error(`Error: ${message}`);
    this.toast.error(text, `Error: ${message} `);
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
    this.cachingStatus = {
      userWasCached: false,
      followingsWasCached: false,
      followersWasCached: false,
      gistsWasCached: false,
      gistWasCached: false,
      useCached: false,
      users: []
    };
    this.toast.success('Cache cleared');
  }

  // notifyChangeBaseUsername
  onChangeBaseUsername(username: string): void {
    this.loadUser(username);
    this.toast.info('onChangeBaseUsername: ' + username);
  }

  // notifyShowBaseUsername
  onShowBaseUsername(username: string): void {
    this.showUser(username);
    this.toast.info('onShowBaseUsername: ' + username);
  }

  changeBaseUsername(username: string): void {
    this.loadUser(username);
    this.toast.success('Change baseUsername: ' + this.baseUsername);
  }

  changeBaseUsernameToDefault(): void {
    this.loadUser(this.userService.getUserBasenameDefault());
    this.toast.success('Change baseUsername to default ' + this.baseUsername);
  }

  changeCaching(value: boolean): void {
    this.userService.isCaching = value;
    this.gistsService.isCaching = value;
    this.gistService.isCaching = value;
    this.followingsService.isCaching = value;
    this.followersService.isCaching = value;
    this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
  }

}
