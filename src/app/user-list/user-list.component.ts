import {Component, OnInit, OnDestroy, Output, EventEmitter, Input} from '@angular/core';
import {GitHubUserService} from '../git-hub-user.service';
import {ToastrService} from 'ngx-toastr';
import {ToastrModule} from 'ngx-toastr';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() statusChange = new EventEmitter();
  @Output() notifyBaseUsername = new EventEmitter();
  private UserServiceStatusRef: Subscription = null;

  constructor(
    protected userService: GitHubUserService,
    private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.userService.getUser(this.baseUsername);
    this.userService.getFollowers(this.baseUsername);
    this.userService.getFollowings(this.baseUsername);

    this.UserServiceStatusRef = this.userService.cachedChange$.subscribe((status) => {
      console.log('Emitting statusChange ...');
      this.statusChange.emit(status);
    });

    this.toast.info(this.baseUsername, 'User List');
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
