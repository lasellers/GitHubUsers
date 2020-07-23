import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../../github-user.service';
import { GitHubFollowingsService } from '../../github-followings.service';

@Component({
  selector: 'app-user-followings',
  templateUrl: './user-followings.component.html',
  styleUrls: ['./user-followings.component.css']
})
export class UserFollowingsComponent implements OnInit, OnDestroy {
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
  public followings = [];

  constructor(
    public userService: GitHubUserService,
    public followingsService: GitHubFollowingsService
  ) {
  }

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.cachedUsers[user.login] = user.wasCached;
    });

    //
    this.followingsService.followings$.subscribe(followings => {
      this.followings = followings;

      for (const user of this.followings) {
        if (this.isUserWasCached(user.login)) {
          this.cachedUsers[user.login] = true;
        }
      }
    });

    this.followingsService.followingsCached$.subscribe(cached => {
      this.wasCached = cached;
      if (this.wasCached) {
        this.notifyMessage.emit({message: `Followings: ${this.baseUsername} CACHED`, type: 'cached', title: ''})
      } else {
        this.notifyMessage.emit({message: `Followings: ${this.baseUsername} NOT CACHED`, type: 'not-cached', title: ''})
      }
    });

    // initial load
    this.followingsService.getFollowings(this.baseUsername).subscribe(followings => {
        this.followingsService.followings$.emit(followings);
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
