import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';

@Component({
  selector: 'app-user-followings',
  templateUrl: './user-followings.component.html',
  styleUrls: ['./user-followings.component.css']
})
export class UserFollowingsComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() notifyBaseUsername = new EventEmitter();
  public filterString: string = '';
  private cachedUsers = [];
  public followings = [];

  constructor(
    public userService: GitHubUserService
  ) {
  }

  ngOnInit(): void {
    // probably should delay this a click
    this.userService.userCached$.subscribe(statusUser => {
      const [status, username] = statusUser;
      this.cachedUsers[username] = status;
    });

    //
    this.userService.followings$.subscribe(followings => {
      this.followings = followings;

      for (const user of this.followings) {
        if (this.isUserWasCached(user.login)) {
          this.cachedUsers[user.login] = true;
        }
      }
    });

    this.userService.getFollowings(this.baseUsername);
  }

  ngOnDestroy(): void {
    this.userService.userCached$.unsubscribe();
  }

  isUserWasCached(username: string): boolean {
    return (username in this.cachedUsers);
  }

  changeBaseUsername(username: string): void {
    // this.baseUsername = username;
    this.notifyBaseUsername.emit(username);
  }

}
