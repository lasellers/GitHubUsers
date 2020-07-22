import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Gist } from '../../gist.model';
import { GitHubGistService } from '../../github-gist.service';
import { BytesPipe } from "../../bytes.pipe";

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit, OnDestroy {
  @Input() baseUsername;
  @Output() errorMessage$ = new EventEmitter(true);
  @Output() notifyMessage: EventEmitter<object> = new EventEmitter<object>();
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;
  public gist: Gist;
  public wasCached: boolean = false;
  public cached: boolean = false;

  constructor(
    public gistService: GitHubGistService
  ) {
  }

  ngOnInit(): void {
    this.gist = Gist.constructor();
    this.gistService.gist$.subscribe(
      data => {
        this.gist = data as any;
        // this.gistEvent(data);
      },
      error => {
        this.errorMessage$.emit(error);
      }
    );

    this.gistService.gist$.subscribe(
      data => {
        if (data === null) {
          this.notifyMessage.emit({message: 'Clear gist cache', type: 'default', title: ''});
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

  ngOnDestroy(): void {
    this.gistService.gist$.unsubscribe();
  }

}
