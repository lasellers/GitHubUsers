import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {GitHubUserService} from '../../git-hub-user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() baseUsername;
  @Output() notifyBaseUsername: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    protected userService: GitHubUserService,
    private toast: ToastrService
  ) {
  }

  ngOnInit() {
    this.userService.getUser(this.baseUsername);
    this.toast.info(this.baseUsername, 'User Detail');
  }

  changeBaseUsername(username2: string) {
    console.log('Emit: changeBaseUsername ...');
    this.baseUsername = username2;
    this.toast.success('Change baseUsername ' + this.baseUsername, 'User Detail');
    this.notifyBaseUsername.emit(this.baseUsername); // {username: username}
  }

}
