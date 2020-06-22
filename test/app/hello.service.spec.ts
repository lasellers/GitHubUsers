import { TestBed } from '@angular/core/testing';

import { HelloService } from '../../src/app/hello.service';

describe('HelloService', () => {
  let service: HelloService;

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
    class MockHelloService {
      public getText() {
        return 'Hello Mock';
      }
    }

    TestBed.configureTestingModule({
      providers: [
        {provide: HelloService, useClass: MockHelloService}
      ]
    });
    service = TestBed.inject(HelloService);
    expect(service.getText()).toEqual('Hello Mock');
  });

});
