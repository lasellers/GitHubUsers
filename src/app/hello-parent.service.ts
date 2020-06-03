import { Injectable } from '@angular/core';
import { HelloService } from './hello.service';

@Injectable({
  providedIn: 'root'
})
export class HelloParentService {

  constructor(public helloService: HelloService) {
  }

  public getText() {
    return this.helloService.getText();
  }

  public getParentText() {
    return 'Hello Parent World';
  }

}
