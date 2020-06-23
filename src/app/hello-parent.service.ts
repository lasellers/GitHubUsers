import { Injectable } from '@angular/core';
import { HelloService } from './hello.service';

@Injectable({
  providedIn: 'root'
})
export class HelloParentService {

  constructor(public helloService: HelloService) {
  }

  public getText(): string {
    return this.helloService.getText();
  }

  public getParentText(): string {
    return 'Hello Parent World';
  }

}
