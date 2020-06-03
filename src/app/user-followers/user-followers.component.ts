import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../github-user.service';
import { GitHubFollowersService } from '../github-followers.service';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Input() filterString: string = '';
  @Output() notifyChangeBaseUsername = new EventEmitter();
  @Output() notifyShowBaseUsername = new EventEmitter();
  private cachedUsers = [];
  public followers = [];

  constructor(
    public userService: GitHubUserService,
    public followersService: GitHubFollowersService
  ) {
  }

  ngOnInit(): void {
    // probably should delay this a click
    this.userService.user$.subscribe(user => {
      // const [status, username] = statusUser;
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

    this.followersService.getFollowers(this.baseUsername);
  }

  ngOnDestroy(): void {
    this.userService.user$.unsubscribe();
  }

  isUserWasCached(username: string): boolean {
    return (username in this.cachedUsers);
  }

  changeBaseUsername(username: string): void {
    this.notifyChangeBaseUsername.emit(username);
  }

  showBaseUsername(username: string): void {
    this.notifyShowBaseUsername.emit(username);
  }

}
