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
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;
  @Output() notifyMessage: EventEmitter<object> = new EventEmitter<object>();
  public gists: Gist[] = [];
  wasCached: boolean = false;
  cached: boolean = false;

  constructor(
    public gistsService: GitHubGistsService,
    public gistService: GitHubGistService
  ) {
  }

  ngOnInit(): void {
    this.gistsService.gists$.subscribe(gists => {
      this.gists = gists;
    });

    // initial load
    this.gistsService.getGists(this.baseUsername).subscribe(
      gists => {
        this.gists = gists;
      },
      error => {
        this.errorMessage$.emit(error);
      });

    this.gistsService.gistsCached$.subscribe(cached => {
      this.wasCached = cached;
      if (this.wasCached) {
        this.notifyMessage.emit({message: `Gists: ${this.baseUsername} CACHED`, type:'cached', title:''})
      } else {
        this.notifyMessage.emit({message: `Gists: ${this.baseUsername} NOT CACHED`, type:'not-cached', title:''})
      }
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
