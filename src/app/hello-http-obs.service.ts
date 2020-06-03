import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloHttpObsService {
  public obs$ = new Subject();

  constructor(public http: HttpClient) {
  }

  getApi() {
    this.http.get<any>('https://api.github.com/users/lasellers').subscribe( (result) => {
      this.obs$.next(result);
    });
  }

}
