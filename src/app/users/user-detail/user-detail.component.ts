import {Component, OnInit} from '@angular/core';
import {GitHubUserService} from '../../git-hub-user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private userService: GitHubUserService
  ) {
  }

  ngOnInit() {
  }

}
