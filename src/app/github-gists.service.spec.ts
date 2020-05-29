import { inject, TestBed } from '@angular/core/testing';

import { GithubGistsService } from './github-gists.service';
import { GitHubUserService } from "./git-hub-user.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpEvent, HttpEventType } from "@angular/common/http";

class UserServiceMock {

}

xdescribe('GithubGistsService', () => {
  let service: GithubGistsService;
  let userService: UserServiceMock;
  let httpClient: HttpClientTestingModule;

  beforeEach(() => {
    httpClient = new HttpClientTestingModule();
    userService = new UserServiceMock();
    // service = new GithubGistsService(httpClient, userServiceMock);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubGistsService,
        {provider: HttpClient, useValue: httpClient}]
    });

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const mockUsers = [
    {name: 'Bob', website: 'www.yessss.com'},
    {name: 'Juliette', website: 'nope.com'}
  ];

  it(
    'should get api',
    inject(
      [HttpTestingController, GithubGistsService],
      (httpMock: HttpTestingController, gistsService: GithubGistsService) => {
        gistsService.gists$.subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              console.log(event.body);
              expect(event.body).toEqual(mockUsers);
          }
        });
        /*
                  const mockReq = httpMock.expectOne(gistsService.url);

                  expect(mockReq.cancelled).toBeFalsy();
                  expect(mockReq.request.responseType).toEqual('json');
                  mockReq.flush(mockUsers);
        */
        httpMock.verify();
      }
    ))
});

