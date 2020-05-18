import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';
import { ToastrService } from 'ngx-toastr';

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
    public userService: GitHubUserService,
    private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.userService.getFollowings();

    this.userService.cacheStatusUser$.subscribe(data => {
      const [status, username] = data;
      console.log('getFollowings User: ' + status + ' ' + username);
      this.cachedUsers[username] = status;
      console.log(this.cachedUsers);
    });
  }

  ngOnDestroy() {
    this.userService.cacheStatusUser$.unsubscribe();
  }

  isUserWasCached(username: string) {
    return (username in this.cachedUsers);
  }

  /**
   *
   */
  changeBaseUsername(username: string) {
    this.baseUsername = username;
    this.userService.loadUser(this.baseUsername);
    this.notifyBaseUsername.emit(this.baseUsername);
    this.toast.success('Change baseUsername ' + this.baseUsername, 'User List');
  }

}
