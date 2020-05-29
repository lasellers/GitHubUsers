import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Subject } from "rxjs";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { Gist } from './gist.model';

@Injectable({
  providedIn: 'root'
})
export class GithubGistService {
  @Output() errorMessage$ = new EventEmitter(true);

  // These are resolved async
  public apiCalls: number = 0;
  @Input() isCaching: boolean = true;

  // @Output() gist$ = new EventEmitter(true);
  public gist$ = new Subject();
  public gistObs$ = this.gist$.asObservable();

  constructor(
    private http: HttpClient
  ) {
  }

  public isGistCached(gist): boolean {
    return (localStorage.getItem('gist_' + gist.id + gist.filename) !== null);
  }

  clearGistCache(gist): void {
    localStorage.removeItem('gist_' + gist.id + gist.filename);
    if (typeof gist === 'object') {
      gist = Gist.constructor(); // this.blankGist();
    }
    this.gist$.next(gist);
  }

  public getGist(gist: Gist): void {
    if (this.isCaching) {
      const content = localStorage.getItem('gist_' + gist.id + gist.filename);
      if (content !== null) {
        console.log('cached getGist:', gist);
        gist.content = content;
        gist.cached = true;
        gist.wasCached = true;
        this.gist$.next(gist);
        return;
      }
    }

    this.http.get(gist.contentUrl, {responseType: 'text'}).pipe(
      delay(0),
      map((res) => res))
      .subscribe(
        content => {
          this.apiCalls++;
          gist.content = content;
          gist.cached = true;
          gist.wasCached = false;
          if (gist.size < (1024 * 32)) { /* store 32kb max */
            if (this.isCaching) {
              localStorage.setItem('gist_' + gist.id + gist.filename, content);
            }
          }
          console.log('uncached getGist:', gist);
          this.gist$.next(gist);
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        }); // ,
    // () => console.log('getGist finished'));
  }
}
