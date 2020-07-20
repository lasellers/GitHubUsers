import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  @Output() public gist$ = new Subject();

  // These are resolved async
  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;
  public apiCalls: number = 0;

  // public gistObs$ = this.gist$.asObservable();

  constructor(
    private http: HttpClient
  ) {
  }

  public isGistCached(gist: Gist): boolean {
    return (localStorage.getItem('gist_' + gist.id + gist.filename) !== null);
  }

  clearGistCache(gist: Gist): void {
    localStorage.removeItem('gist_' + gist.id + gist.filename);
    if (typeof gist === 'object') {
      gist = Gist.constructor();
    }
    this.gist$.next(gist);
  }

  public getGist(gist: Gist): Observable<any> {
    if (this.isCaching) {
      const content = localStorage.getItem('gist_' + gist.id + gist.filename);
      if (content !== null) {
        gist = {...gist, content, cached: true, wasCached: true};
        return of(gist);
      }
    }

    if(this.cacheOnly) return of();

    return this.http.get(gist.contentUrl, {responseType: 'text'}).pipe(
      delay(0),
      map((gist2) => {
          this.apiCalls++;
          if (this.isCaching && gist.size < (1024 * 32)) { // store 32kb max if caching
            localStorage.setItem('gist_' + gist.id + gist.filename, gist2);
          }
          gist = {...gist, content: gist2, cached: true, wasCached: false};
          return gist;
        }
      ));
  }

}
