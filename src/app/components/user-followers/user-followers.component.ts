import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../../github-user.service';
import { GitHubFollowersService } from '../../github-followers.service';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Input() filterString: string = '';
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;
  @Input() wasCached: boolean = false;
  @Input() cached: boolean = false;
  @Output() errorMessage$ = new EventEmitter(true);
  @Output() notifySwitchToUser = new EventEmitter();
  @Output() notifyShowBaseUsername = new EventEmitter();
  @Output() notifyMessage: EventEmitter<object> = new EventEmitter<object>();
  public cachedUsers = [];
  public followers = [];

  constructor(
    public userService: GitHubUserService,
    public followersService: GitHubFollowersService
  ) {
  }

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.cachedUsers[user.login] = user.wasCached;
    });

    //
    this.followersService.followers$.subscribe(followers => {
      this.followers = followers;
      for (const user of this.followers) {
        if (this.isUserWasCached(user.login)) {
          this.cachedUsers[user.login] = true;
        }
      }
    });

    this.followersService.followersCached$.subscribe(cached => {
      this.wasCached = cached;
      if (this.wasCached) {
        this.notifyMessage.emit({message: `Followers: ${this.baseUsername} CACHED`, type:'cached', title:''})
      } else {
        this.notifyMessage.emit({message: `Followers: ${this.baseUsername} NOT CACHED`, type:'not-cached', title:''})
      }
    });

    // initial load
    this.followersService.getFollowers(this.baseUsername).subscribe(followers => {
        this.followersService.followers$.emit(followers);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );

  }

  ngOnDestroy(): void {
    this.userService.user$.unsubscribe();
  }

  isUserWasCached(username: string): boolean {
    return (this.cachedUsers.includes(username));
  }

  changeBaseUser(username: string): void {
    this.notifySwitchToUser.emit(username);
  }

  showBaseUsername(username: string): void {
    this.notifyShowBaseUsername.emit(username);
  }

}
