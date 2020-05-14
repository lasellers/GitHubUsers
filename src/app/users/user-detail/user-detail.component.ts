import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {GitHubUserService} from '../../git-hub-user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Output() notifyRootUsername: EventEmitter<string> = new EventEmitter<string>();
  @Input() username;

  constructor(
    protected userService: GitHubUserService
  ) {
  }

  ngOnInit() {
  }

  makeUserRoot(username2: string) {
    console.log('Emit: makeUserRoot ...');
    this.notifyRootUsername.emit(username2); // {username: username}
  }

}
