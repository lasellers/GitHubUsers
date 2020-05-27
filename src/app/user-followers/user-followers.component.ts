import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';
import { GithubFollowersService } from "../github-followers.service";

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() notifyChangeBaseUsername = new EventEmitter();
  @Output() notifyShowBaseUsername = new EventEmitter();
  public filterString: string = '';
  private cachedUsers = [];
  public followers = [];

  constructor(
    public userService: GitHubUserService,
    public followersService: GithubFollowersService
  ) {
  }

  ngOnInit(): void {
    // probably should delay this a click
    this.userService.userCached$.subscribe(statusUser => {
      const [status, username] = statusUser;
      this.cachedUsers[username] = status;
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
    this.userService.userCached$.unsubscribe();
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
