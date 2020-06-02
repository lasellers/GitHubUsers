import { TestBed } from '@angular/core/testing';

import { HelloParentService } from './hello-parent.service';
import { HelloService } from "./hello.service";

fdescribe('HelloParentService', () => {
  let parentService: HelloParentService;
  let service: HelloService;

  beforeEach(() => {
  });

  it('service should be created', () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloParentService);
    expect(service).toBeTruthy();
  });

  it('getText()', () => {
    TestBed.configureTestingModule({});
    parentService = TestBed.inject(HelloParentService);
    expect(parentService.getText()).toEqual('Hello World');
  });

  it('getParentText()', () => {
    TestBed.configureTestingModule({});
    parentService = TestBed.inject(HelloParentService);
    expect(parentService.getParentText()).toEqual('Hello Parent World');
  });

  it('getText() mocked', () => {
    class mockHelloService {
      public getText() {
        return 'Hello Mock';
      }
    }

    class mockParentHelloService {
      public getText() {
        return 'Hello Mock';
      }

      public getParentText() {
        return 'Hello Parent Mock';
      }
    }

    TestBed.configureTestingModule({
      providers: [
        {provide: HelloService, useClass: mockHelloService},
        {provide: HelloParentService, useClass: mockParentHelloService}
      ]
    });
    parentService = TestBed.inject(HelloParentService);
    service = TestBed.inject(HelloService);
    expect(parentService.getText()).toEqual('Hello Mock');
    expect(parentService.getParentText()).toEqual('Hello Parent Mock');
  });

  it('getText() mocked and spied', () => {
    class mockHelloService {
      public getText() {
        return 'Hello Mock';
      }
    }

    class mockParentHelloService {
      public getText() {
        return 'Hello Mock';
      }

      public getParentText() {
        return 'Hello Parent Mock';
      }
    }

    TestBed.configureTestingModule({
      providers: [
        {provide: HelloService, useClass: mockHelloService},
        {provide: HelloParentService, useClass: mockParentHelloService}
      ]
    });
    parentService = TestBed.inject(HelloParentService);
    service = TestBed.inject(HelloService);
    spyOn(parentService, 'getParentText').and.callThrough();
    spyOn(parentService, 'getText').and.callThrough();
    expect(parentService.getText()).toEqual('Hello Mock');
    expect(parentService.getParentText()).toEqual('Hello Parent Mock');
    expect(parentService.getParentText).toHaveBeenCalled();
    expect(parentService.getText).toHaveBeenCalled();
  });

});
