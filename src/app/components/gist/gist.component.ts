import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Gist } from '../../gist.model';
import { GitHubGistService } from '../../github-gist.service';
import { BytesPipe } from "../../bytes.pipe";
import { ToastMessage } from "../../toast-message.model";

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;
  @Input() wasCached: boolean = false;
  @Input() cached: boolean = false;

  @Output() errorMessage$ = new EventEmitter(true);
  @Output() notifyMessage: EventEmitter<ToastMessage> = new EventEmitter<ToastMessage>();
  @Output() notifyGitShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  public gist: Gist;

  constructor(
    public gistService: GitHubGistService
  ) {
  }

  ngOnInit(): void {
    this.gist = Gist.constructor();
    this.gistService.gist$.subscribe(
      data => {
        this.gist = data;
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );

    this.gistService.gist$.subscribe(
      data => {
        if (data === null) {
          const note: ToastMessage = {message: 'Clear gist cache', type: 'default', title: ''}
          this.notifyMessage.emit(note);
        } else {
          this.gistGistData(data);
        }
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );

  }

  gistGistData(data: Gist) {
    //
    if (typeof data === 'undefined') {
      this.wasCached = false;
      this.gist = {content: '', wasCached: false, cached: false};
      return;
    }

    //
    this.gist = data;
    this.wasCached = data.cached;
    const size = new BytesPipe().transform(data.size);
    if (this.wasCached) {
      this.notifyMessage.emit({message: `${data.filename} (${size}) CACHED`, type: 'cached', title: ''})
    } else {
      this.notifyMessage.emit({message: `${data.filename} (${size}) NOT CACHED`, type: 'not-cached', title: ''})
    }
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

  clearGistCache(gist: Gist): void {
    this.gistService.clearGistCache(gist);
    this.gistService.gist$.next(gist);
  }

  ngOnDestroy(): void {
    this.gistService.gist$.unsubscribe();
  }

}
