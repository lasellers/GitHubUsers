import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Gist } from '../gist.model';
import { GitHubGistService } from '../github-gist.service';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit, OnDestroy {
  @Output() errorMessage$ = new EventEmitter(true);
  gist: Gist;

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
  }

  // gistEvent(data): void {
  //  this.gist = data;
  // }

  ngOnDestroy(): void {
    this.gistService.gist$.unsubscribe();
  }

}
