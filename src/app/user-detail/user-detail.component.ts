import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { GitHubUserService } from '../github-user.service';
import { User } from '../user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() baseUsername;
  @Output() notifyChangeBaseUsername: EventEmitter<string> = new EventEmitter<string>();
  public user: User = {};

  constructor(
    public userService: GitHubUserService
  ) {
  }

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });

    this.userService.getUser(this.baseUsername).subscribe((user) => {
        this.userService.user$.emit(user);
      },
      error => {
        this.userService.errorMessage$.emit(error);
      });

    setTimeout(() => {
      document.querySelector('.card').classList.add('card-open');
    }, 0);

  }

  isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  changeBaseUsername(username: string): void {
    this.notifyChangeBaseUsername.emit(username);
  }

}
