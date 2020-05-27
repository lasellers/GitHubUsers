import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';
import { GithubGistsService } from "../github-gists.service";
import { Gist } from "../gist.model";

@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.css']
})
export class UserGistsComponent implements OnInit, OnDestroy {
  @Input() baseUsername;

  public gists: Gist[];

  constructor(
    public userService: GitHubUserService,
    public gistService: GithubGistsService
  ) {
  }

  ngOnInit(): void {
    // this.userService.getGists();
    this.gistService.getGists(this.baseUsername);
  }

  ngOnDestroy() {
  }

}
