import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() notifyBaseUsername = new EventEmitter();
  private cachedUsers = [];
  public followers = [];

  constructor(
    public userService: GitHubUserService
    ) {
  }

  /**
   *
   */
  ngOnInit(): void {
    // probably should delay this a click
    this.userService.cacheStatusUser$.subscribe(statusUser => {
      const [status, username] = statusUser;
      this.cachedUsers[username] = status;
    });

    //
    this.userService.followers$.subscribe(followers => {
      this.followers = followers;

      for(const user of this.followers) {
        if(this.isUserWasCached(user.login)) {
          this.cachedUsers[user.login] = true;
        }
      }
    });

    this.userService.getFollowers();
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
    this.notifyBaseUsername.emit(this.baseUsername);
  }

}
