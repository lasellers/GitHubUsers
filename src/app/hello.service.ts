import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  public getText(): string {
    return 'Hello World';
  }
}
