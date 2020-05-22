import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() notifyBaseUsername = new EventEmitter();
  private cachedUsers = [];

  constructor(
    public userService: GitHubUserService,
    private toast: ToastrService) {
  }

  /**
   *
   */
  ngOnInit(): void {
    this.userService.getFollowers();

    for(const user of this.userService.followers) {
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
    this.toast.success('Change baseUsername ' + this.baseUsername, 'User List');
  }

}
