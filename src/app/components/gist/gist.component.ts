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
  gist: Gist;
  wasCached: boolean = false;
  cached: boolean = false;

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
          this.gistEvent(data);
        }
      },
      error => {
        this.errorMessage$.emit(error);
        //   this.onErrorMessage(error);
      }
    );

  }

  gistEvent(data: Gist): void {
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

  ngOnDestroy(): void {
    this.gistService.gist$.unsubscribe();
  }

}
