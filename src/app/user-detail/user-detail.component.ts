import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { GitHubUserService } from '../github-user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() baseUsername;
  @Output() notifyChangeBaseUsername: EventEmitter<string> = new EventEmitter<string>();
  private user = {};

  constructor(
    public userService: GitHubUserService
  ) {
  }

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });

    this.userService.getUser(this.baseUsername);
  }

  changeBaseUsername(username: string): void {
    this.notifyChangeBaseUsername.emit(username);
  }

}
