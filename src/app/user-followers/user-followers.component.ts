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
  public filterString: string = '';
  private cachedUsers = [];
  public followers = [];

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
    this.userService.followers$.subscribe(followers => {
      this.followers = followers;

      for (const user of this.followers) {
        if (this.isUserWasCached(user.login)) {
          this.cachedUsers[user.login] = true;
        }
      }
    });

    this.userService.getFollowers(this.baseUsername);
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
