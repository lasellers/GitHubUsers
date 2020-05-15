import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {GitHubUserService} from '../git-hub-user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-followings',
  templateUrl: './user-followings.component.html',
  styleUrls: ['./user-followings.component.css']
})
export class UserFollowingsComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() notifyBaseUsername = new EventEmitter();

  constructor(
    public userService: GitHubUserService,
    private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.userService.getFollowings(this.baseUsername);
    // this.toast.info(this.baseUsername, 'User Followings');
    console.log('ngOnInit UserFollowingsComponent: baseUsername ' + this.baseUsername);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  /**
   *
   */
  loadFollowings(username: string) {
    console.log('AppComponent:loadFollowings');
    this.userService.getFollowings(username);
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
