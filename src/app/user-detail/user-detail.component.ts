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
  @Output() notifyBaseUsername: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public userService: GitHubUserService
  ) {
  }

  ngOnInit() {
  }

  /**
   *
   * @param username
   */
  changeBaseUsername(username: string): void {
    this.baseUsername = username;
    this.notifyBaseUsername.emit(this.baseUsername); // {username: username}
  }

}
