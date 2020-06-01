import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubUserService } from '../github-user.service';
import { GitHubGistsService } from "../github-gists.service";
import { Gist } from "../gist.model";
import { GithubGistService } from "../github-gist.service";

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
    public gistsService: GitHubGistsService,
    public gistService: GithubGistService
  ) {
  }

  ngOnInit(): void {
    this.gistsService.gists$.subscribe(gists => {
      this.gists = gists;
    });

    this.gistsService.getGists(this.baseUsername);
  }

  ngOnDestroy() {
    this.gistsService.gists$.unsubscribe();
  }

}
