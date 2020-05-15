import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {GitHubUserService} from '../git-hub-user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() notifyBaseUsername = new EventEmitter();

  constructor(
    public userService: GitHubUserService,
    private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.userService.getFollowers(this.baseUsername);
    // this.toast.info(this.baseUsername, 'User Followers');
    console.log('ngOnInit UserFollowersComponent: baseUsername ' + this.baseUsername);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  /**
   *
   */
  loadFollowers(username: string) {
    console.log('AppComponent:loadFollowers');
    this.userService.getFollowers(username);
  }

  /**
   *
   */
  loadUser(username: string) {
    console.log('AppComponent:loadUser');
    this.userService.getUser(username);
  }

  /**
   *
   */
  changeBaseUsername(username: string) {
    this.baseUsername = username;
    this.userService.getUser(this.baseUsername);
    this.userService.getFollowers(this.baseUsername);
    this.userService.getFollowings(this.baseUsername);
    this.notifyBaseUsername.emit(this.baseUsername);
    this.toast.success('Change baseUsername ' + this.baseUsername, 'User List');
  }

}
