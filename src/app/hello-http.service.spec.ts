import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { HelloHttpService } from './hello-http.service';
import { User } from './user.model';

describe('HelloHttpService', () => {
  let service: HelloHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HelloHttpService,
        HttpClient
      ]
    })
    ;
    service = TestBed.inject(HelloHttpService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('getApi() call should work live', () => {
    expect(service).toBeTruthy();
    service.getApi().subscribe(user => {
      expect(user).not.toBeNull();
      expect(user.id).toBe(2235644);
    });
  });

})
;

describe('HelloHttpService mocked', () => {
  let service: HelloHttpService;
  let httpMock: HttpClientTestingModule;

  const USER: User = {
    id: 1,
    login: 'mock',
    followers: 1,
    following: 2,
    name: 'Mock P. Smith'
  };

  class MockHttpClient {
    public get() {
      return of(USER);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HelloHttpService,
        {provide: HttpClient, useClass: MockHttpClient}
      ]
    });
    service = TestBed.inject(HelloHttpService);
    httpMock = TestBed.inject(HttpClientTestingModule);
  });

  it('HelloHttpService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('httpMock should be created', () => {
    expect(httpMock).toBeTruthy();
  });

  it('getApi() works with mocked USER', () => {
    expect(service).toBeTruthy();
    service.getApi().subscribe((user: User) => {
      expect(user.id).toEqual(1);
      expect(user.login).toEqual('mock');
      expect(user.followers).toEqual(1);
      expect(user.following).toEqual(2);
    });
  });

})
;
