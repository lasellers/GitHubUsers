import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubGistsService } from '../github-gists.service';
import { Gist } from '../gist.model';
import { GitHubGistService } from '../github-gist.service';

@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.css']
})
export class UserGistsComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() errorMessage$ = new EventEmitter(true);
  @Output() gistsCached$ = new EventEmitter(true);
  @Output() gists$ = new EventEmitter(true);
  public gists: Gist[] = [];

  constructor(
    public gistsService: GitHubGistsService,
    public gistService: GitHubGistService
  ) {
  }

  ngOnInit(): void {
    this.gistsService.gists$.subscribe(gists => {
      this.gists = gists;
    });

    this.gistsService.getGists(this.baseUsername).subscribe(
      gists => {
        this.gistsCached$.emit(false);
        this.gists$.emit(gists);
      },
      error => {
        this.errorMessage$.emit(error);
      });
  }

  getGist(gist: Gist) {
    this.gistService.getGist(gist).subscribe(
      gistResponse => {
        this.gistService.gist$.next(gistResponse);
      },
      error => {
        this.errorMessage$.emit(error);
      });
  }

  ngOnDestroy() {
    this.gistsService.gists$.unsubscribe();
  }

}
