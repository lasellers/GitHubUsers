import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders} from '@angular/common/http';
import {GithubGistService} from './github-gist.service';
import {Gist} from './gist.model';
import {GithubGistsService} from './github-gists.service';

describe('GithubGistService', () => {

  const gist: Gist = {
    id: '7d9ed3190275aa22cbfce66ae4476c1e',
    contentUrl: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
    filename: 'units.txt',
    language: 'Text',
    url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
    size: 68,
    wasCached: true,
    content: '',
    cached: true
  };

  const gistResponse = {
    body: `#50 - Smith
#8 - Johnson
#100 - Sanders
#1B - Adams
#1A - Kessenich`,
    headers: {}, // HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, headers: Map(0)},
    method: 'GET',
    params: {}, // HttpParams {updates: null, cloneFrom: null, encoder: HttpUrlEncodingCodec, map: null},
    reportProgress: false,
    responseType: 'text',
    url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
    urlWithParams: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
    withCredentials: false
  };

  let gistService: GithubGistService;
  let httpClient: HttpClientTestingModule;
  let httpMock: HttpTestingController;

  /*
  beforeEach(() => {
    TestBed.configureTestingModule({});
    gistService = TestBed.inject(GithubGistService);
  });*/

  beforeEach(() => {
    httpClient = new HttpClientTestingModule();
    // service = new GithubGistsService(httpClient, userServiceMock);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubGistsService,
        {provider: HttpClient, useValue: httpClient}]
    });
    gistService = TestBed.inject(GithubGistService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(gistService).toBeTruthy();
  });

  fit('should get live api', () => {
    gistService.isCaching = false;

    gistService.gist$.subscribe((event: HttpEvent<any>) => {
      console.log('event:', event);

      switch (event.type) {
        case HttpEventType.Response:
          console.log('body:', event.body);
          expect(event.body).toEqual(gistResponse.body);
          expect(event.ok).toBeTruthy();
      }
    }, error => {
      console.log('error:', error);
    });

    gistService.getGist(gist);
    console.log('sent');

    const req = httpMock.expectOne(gist.contentUrl);
    console.log('req:', req);
    expect(req.request.method).toBe('GET');
    req.flush(gist);
  });

  afterEach(() => {
    httpMock.verify();
  });

});

/*
it(
  'should get api',
  inject(
    [HttpTestingController, GithubGistService],
    (httpMock: HttpTestingController, gistService: GithubGistService) => {
      //
      gistService.gist$.subscribe((event: HttpEvent<any>) => {
        console.log('event:', event);

        switch (event.type) {
          case HttpEventType.Response:
            console.log('body:', event.body);
            expect(event.body).toEqual(mockGist);
        }
        //
      });

      service.isCaching = false;
      service.getGist(gist);
      console.log('gist:', gist);

      const mockReq = httpMock.expectOne(gist.contentUrl);
      console.log('mock request:', mockReq.request);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('text');
      expect(mockReq.request.method).toEqual('GET');
      expect(mockReq.request.withCredentials).toEqual(false);
      expect(mockReq.request.body).toEqual(mockGist.body);

      mockReq.flush(mockGist);

      httpMock.verify();
    }
  ));
*/
