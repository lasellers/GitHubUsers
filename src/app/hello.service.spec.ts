import { TestBed } from '@angular/core/testing';

import { HelloService } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(() => {
  });

  it('service should be created', () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloService);
    expect(service).toBeTruthy();
  });

  it('getText()', () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloService);
    expect(service.getText()).toEqual('Hello World');
  });

  it('getText() mocked', () => {
    class mockHelloService {
      public getText() {
        return 'Hello Mock';
      }
    }

    TestBed.configureTestingModule({
      providers: [
        {provide: HelloService, useClass: mockHelloService}
      ]
    });
    service = TestBed.inject(HelloService);
    expect(service.getText()).toEqual('Hello Mock');
  });

});
