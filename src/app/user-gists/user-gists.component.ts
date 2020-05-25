import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';

@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.css']
})
export class UserGistsComponent implements OnInit, OnDestroy {
  @Input() baseUsername;

  constructor(
    public userService: GitHubUserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getGists();
  }

  ngOnDestroy() {
  }

}
