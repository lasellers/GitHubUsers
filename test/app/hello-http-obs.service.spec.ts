import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { HelloHttpObsService } from '../../src/app/hello-http-obs.service';
import { User } from '../../src/app/user.model';

describe('HelloHttpObsService', () => {
  let service: HelloHttpObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HelloHttpObsService,
        HttpClient
      ]
    })
    ;
    service = TestBed.inject(HelloHttpObsService);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getApi() works live', () => {
    expect(service).toBeTruthy();
    service.obs$.subscribe((user: User) => {
      expect(service.obs$).not.toBeNull();
      expect(user).not.toBeNull();
      expect(user.id).toBe(2235644);
    });
    service.getApi();
  });

})
;

describe('HelloHttpObsService mocked', () => {
  let service: HelloHttpObsService;
  let httpMock: HttpTestingController; // HttpClientTestingModule;

  const USER = {
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
        HelloHttpObsService,
        {provide: HttpClient, useClass: MockHttpClient}
      ]
    });
    service = TestBed.inject(HelloHttpObsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('HelloHttpObsService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('httpMock should be created', () => {
    expect(httpMock).toBeTruthy();
  });

  it('getApi() works with mocked USER', () => {
    expect(service).toBeTruthy();
    service.obs$.subscribe((user: User) => {
      expect(user).not.toBeNull();
      expect(service.obs$).not.toBeNull();
      expect(user.id).toEqual(1);
      expect(user.login).toEqual('mock');
      expect(user.followers).toEqual(1);
      expect(user.following).toEqual(2);
    });
    service.getApi();
  });

})
;
