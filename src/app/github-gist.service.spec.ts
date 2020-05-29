import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from "@angular/common/http";
import { GithubGistService } from './github-gist.service';
import { Gist } from "./gist.model";
import { GithubGistsService } from "./github-gists.service";

describe('GithubGistService', () => {
  let service: GithubGistService;
  let httpClient: HttpClientTestingModule;

  const gist: Gist = {
    id: "7d9ed3190275aa22cbfce66ae4476c1e",
    contentUrl: "https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt",
    filename: "units.txt",
    language: "Text",
    url: "https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt",
    size: 68,
    wasCached: true,
    content: '',
    cached: true
  }

  const mockGist = {
    body: `#50 - Smith
#8 - Johnson
#100 - Sanders
#1B - Adams
#1A - Kessenich`,
    headers: {}, // HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, headers: Map(0)},
  method: "GET",
  params: {}, // HttpParams {updates: null, cloneFrom: null, encoder: HttpUrlEncodingCodec, map: null},
  reportProgress: false,
  responseType: "text",
  url: "https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt",
  urlWithParams: "https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt",
  withCredentials: false
  }

 /* beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubGistService);
  }); */

  beforeEach(() => {
    httpClient = new HttpClientTestingModule();
    // service = new GithubGistsService(httpClient, userServiceMock);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubGistsService,
        {provider: HttpClient, useValue: httpClient}]
    });
    service = TestBed.inject(GithubGistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should get api',
    inject(
      [HttpTestingController, GithubGistService],
      (httpMock: HttpTestingController, gistService: GithubGistService) => {
        //
        gistService.gist$.subscribe((event: HttpEvent<any>) => {
          console.log("event:", event);

          switch (event.type) {
            case HttpEventType.Response:
              console.log("body:", event.body);
              expect(event.body).toEqual(mockGist);
          }
          //
        });

        service.isCaching = false;
        service.getGist(gist);
        console.log("gist:", gist);

        const mockReq = httpMock.expectOne(gist.contentUrl);
console.log("mock request:", mockReq.request);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('text');
        expect(mockReq.request.method).toEqual('GET');
        expect(mockReq.request.withCredentials).toEqual(false);
        expect(mockReq.request.body).toEqual(mockGist.body);

        mockReq.flush(mockGist);

        httpMock.verify();
      }
    ));

});
