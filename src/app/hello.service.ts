import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() {
  }

  public getText() {
    return 'Hello World';
  }
}