import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() baseUsername;
  @Output() notifyChangeBaseUsername: EventEmitter<string> = new EventEmitter<string>();

  // private user = {};

  constructor(
    public userService: GitHubUserService
  ) {
  }

  ngOnInit() {
    //
    // this.userService.user$.subscribe(data => {
    //  this.user = data;
    // });
  }

  changeBaseUsername(username: string): void {
    this.baseUsername = username;
    this.notifyChangeBaseUsername.emit(this.baseUsername); // {username: username}
  }

}
