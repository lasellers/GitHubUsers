import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { GithubGistService } from './github-gist.service';
import { Gist } from './gist.model';
import { GithubGistsService } from './github-gists.service';

describe('GithubGistService', () => {

  const gist: Gist = {
    id: '7d9ed3190275aa22cbfce66ae4476c1e',
    contentUrl: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
    filename: 'units.txt',
    language: 'Text',
    url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
    size: 123,
    wasCached: true,
    content: ``,
    cached: true
  };

  let gistService: GithubGistService;
  let httpClient: HttpClientTestingModule;
  let httpMock: HttpTestingController;

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

  it('should get uncached api', () => {
    const gistResponseContent = `Lorem Ipsum
Lorem Ipsum 2`;

    gistService.isCaching = false;

    gistService.gist$.subscribe((gistResponse: Gist) => {
      expect(gistResponse.content).toEqual(gistResponseContent);
      expect(gistResponse.cached).toEqual(false);
    }, error => {
      console.log('error:', error);
    });

    gistService.getGist(gist);

    const req = httpMock.expectOne(gist.contentUrl);
    expect(req.cancelled).toBe(false);
    expect(req.request.method).toBe('GET');
    req.flush(gistResponseContent);
  });

  it('should get cached api', () => {
    const gistResponseContent = `Lorem Ipsum Cached`;

    gistService.isCaching = true;
    localStorage.setItem('gist_' + gist.id + gist.filename, gistResponseContent);

    gistService.gist$.subscribe((gistResponse: Gist) => {
      expect(gistResponse.content).toEqual(gistResponseContent);
      expect(gistResponse.cached).toEqual(true);
    }, error => {
      console.log('error:', error);
    });

    gistService.getGist(gist);

    const req = httpMock.expectNone(gist.contentUrl);
  });

  afterEach(() => {
    httpMock.verify();
  });

});
