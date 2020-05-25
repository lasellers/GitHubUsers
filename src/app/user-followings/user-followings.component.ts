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
  private cachedUsers = [];

  constructor(
    public userService: GitHubUserService
    ) {
  }

  /**
   *
   */
  ngOnInit(): void {
    this.userService.getFollowings();

    for(const user of this.userService.followings) {
      if(this.isUserWasCached(user.login)) {
        this.cachedUsers[user.login] = true;
      }
    }

    // probably should delay this a click
    this.userService.cacheStatusUser$.subscribe(data => {
      const [status, username] = data;
      this.cachedUsers[username] = status;
    });
  }

  /**
   *
   */
  ngOnDestroy(): void {
    this.userService.cacheStatusUser$.unsubscribe();
  }

  /**
   *
   * @param username
   */
  isUserWasCached(username: string): boolean {
    return (username in this.cachedUsers);
  }

  /**
   *
   * @param username
   */
  changeBaseUsername(username: string): void {
    this.baseUsername = username;
    this.userService.loadUser(this.baseUsername);
    this.notifyBaseUsername.emit(this.baseUsername);
  }

}
