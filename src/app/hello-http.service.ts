import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloHttpService {

  constructor(public http: HttpClient) {
  }

  getApi(): Observable<any> {
    return this.http.get<any>('https://api.github.com/users/lasellers');
  }

}
