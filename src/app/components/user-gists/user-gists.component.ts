import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { GitHubGistsService } from '../../github-gists.service';
import { Gist } from '../../gist.model';
import { GitHubGistService } from '../../github-gist.service';
import { ToastMessage } from "../../toast-message.model";

@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.css']
})
export class UserGistsComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;
  @Input() wasCached: boolean = false;
  @Input() cached: boolean = false;

  @Output() errorMessage$ = new EventEmitter(true);
  @Output() notifyMessage: EventEmitter<ToastMessage> = new EventEmitter<ToastMessage>();
  @Output() notifyGitShow: EventEmitter<boolean> = new EventEmitter<boolean>();

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

    this.gistsService.gistsCached$.subscribe(cached => {
      this.wasCached = cached;
      if (this.wasCached) {
        this.notifyMessage.emit({message: `Gists: ${this.baseUsername} CACHED`, type: 'cached', title: ''})
      } else {
        this.notifyMessage.emit({message: `Gists: ${this.baseUsername} NOT CACHED`, type: 'not-cached', title: ''})
      }
    });

    // initial load
    this.gistsService.getGists(this.baseUsername).subscribe(
      gists => {
        this.gists = gists;
      },
      error => {
        this.errorMessage$.emit(error);
      });

  }

  getGist(gist: Gist) {
    this.gistService.getGist(gist).subscribe(
      gistResponse => {
        this.gistService.gist$.next(gistResponse);
        this.notifyGitShow.emit(true);
      },
      error => {
        this.errorMessage$.emit(error);
      });
  }

  ngOnDestroy() {
    this.gistsService.gists$.unsubscribe();
  }

}
