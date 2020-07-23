import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { GitHubUserService } from '../../github-user.service';
import { User } from '../../user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() baseUsername;
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;
  @Input() wasCached: boolean = false;
  @Input() cached: boolean = false;
  @Output() notifySwitchToUser: EventEmitter<string> = new EventEmitter<string>();
  @Output() notifyMessage: EventEmitter<object> = new EventEmitter<object>();
  public user: User = {};

  constructor(
    public userService: GitHubUserService
  ) {
  }

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
      this.wasCached = user.wasCached;
      if (this.wasCached) {
        this.notifyMessage.emit({message: `User: ${user.login} CACHED`, type:'cached', title:''})
      } else {
        this.notifyMessage.emit({message: `User: ${user.login} NOT CACHED`, type:'not-cached', title:''})
      }
    });

    // initial load
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

  changeBaseUser(username: string): void {
    this.notifySwitchToUser.emit(username);
  }

}
