import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Subject, Subscription } from "rxjs";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { Gist } from './gist.model';

/**
 * Note: We could eliminate a lot of the event emitters etc in the services and just use
 * a public variable, however, part of the point of this repo is experimenting with
 * observables and the like...
 */
@Injectable({
  providedIn: 'root'
})
export class GitHubGistService {
  @Output() errorMessage$ = new EventEmitter(true);

  // These are resolved async
  public apiCalls: number = 0;
  @Input() isCaching: boolean = true;

  // @Output() gist$ = new EventEmitter(true);
  public gist$ = new Subject();

  // public gistObs$ = this.gist$.asObservable();

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

  /*
  public getGist1(gist: Gist): Subscription {
    if (this.isCaching) {
      const content = localStorage.getItem('gist_' + gist.id + gist.filename);
      if (content !== null) {
        gist = {...gist, content: content, cached: true, wasCached: true};
        this.gist$.next(gist);
        return; // this.gist$.subscribe(gist => gist);
      }
    }

    return this.http.get(gist.contentUrl, {responseType: 'text'}).pipe(
      delay(0),
      map((res) => res))
      .subscribe(
        content => {
          this.apiCalls++;
          gist = {...gist, content: content, cached: true, wasCached: false};
          if (gist.size < (1024 * 32)) {
            if (this.isCaching) {
              localStorage.setItem('gist_' + gist.id + gist.filename, content);
            }
          }
          this.gist$.next(gist);
        },
        error => {
          this.apiCalls++;
          this.errorMessage$.emit(error);
        }); // ,
    // () => console.log('getGist finished'));
  } */

  public getGist(gist: Gist): void {
    if (this.isCaching) {
      const content = localStorage.getItem('gist_' + gist.id + gist.filename);
      if (content !== null) {
        gist = {...gist, content: content, cached: true, wasCached: true};
        this.gist$.next(gist);
        return;
      }
    }

    this.http.get(gist.contentUrl, {responseType: 'text'}).pipe(
      delay(0),
      map((res) => {
          this.apiCalls++;
          gist = {...gist, content: res, cached: true, wasCached: false};
          if (this.isCaching && gist.size < (1024 * 32)) { /* store 32kb max if caching */
            localStorage.setItem('gist_' + gist.id + gist.filename, res);
          }
          return gist;
        }
      ))
      .subscribe(
        gist => {
          this.gist$.next(gist);
        },
        error => {
          this.errorMessage$.emit(error);
        });
  }

}
