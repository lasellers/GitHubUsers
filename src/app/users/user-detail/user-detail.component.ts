import {Component, OnInit} from '@angular/core';
import {GitHubUserService} from '../../git-hub-user.service';
import {faMinusCircle, faCloudDownloadAlt, faExchangeAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  faMinusCircle;

  constructor(
    protected userService: GitHubUserService
  ) {
    //  faMinusCircle = faMinusCircle;
  }

  ngOnInit() {
  }

}
