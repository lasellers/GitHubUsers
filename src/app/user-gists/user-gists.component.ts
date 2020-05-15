import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {GitHubUserService} from '../git-hub-user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.css']
})
export class UserGistsComponent implements OnInit, OnDestroy {
  @Input() baseUsername;

  constructor(
    public userService: GitHubUserService,
    private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.userService.getGists();
    // this.toast.info(this.baseUsername, 'User Followings');
    console.log('ngOnInit UserGistsComponent: baseUsername ' + this.baseUsername);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
