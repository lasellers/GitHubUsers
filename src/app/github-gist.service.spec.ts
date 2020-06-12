import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { GitHubGistService } from './github-gist.service';
import { Gist } from './gist.model';

describe('Github Gist Service', () => {

  let gistService: GitHubGistService;

  let httpClient: HttpClientTestingModule;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    httpClient = new HttpClientTestingModule();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubGistService,
        {provider: HttpClient, useValue: httpClient}]
    });

    httpMock = TestBed.inject(HttpTestingController);
    gistService = TestBed.inject(GitHubGistService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('setup', () => {

    it('should be created', () => {
      expect(gistService).toBeTruthy();
    });

  });

  describe('setup', () => {

    it('should get uncached api', () => {
      const gistResponseContent = `Lorem Ipsum
Lorem Ipsum 2`;
      const gist: Gist = {
        id: '123',
        contentUrl: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        filename: 'units.txt',
        language: 'Text',
        url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        size: 123,
        wasCached: true,
        content: ``,
        cached: true
      };

      localStorage.removeItem('gist_' + gist.id + gist.filename);
      gistService.isCaching = false;

      gistService.gist$.subscribe((gistResponse: Gist) => {
        expect(gistResponse.content).toEqual(gistResponseContent);
        expect(gistResponse.wasCached).toEqual(false);
        expect(gistService.apiCalls).toBe(1);
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

      const gist: Gist = {
        id: '321',
        contentUrl: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        filename: 'units.txt',
        language: 'Text',
        url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        size: 321,
        wasCached: true,
        content: ``,
        cached: true
      };

      localStorage.removeItem('gist_' + gist.id + gist.filename);
      gistService.isCaching = true;
      localStorage.setItem('gist_' + gist.id + gist.filename, gistResponseContent);

      gistService.gist$.subscribe((gistResponse: Gist) => {
        expect(gistResponse.content).toEqual(gistResponseContent);
        expect(gistResponse.wasCached).toEqual(true);
        expect(gistService.apiCalls).toBe(0);
      }, error => {
        console.log('error:', error);
      });

      gistService.getGist(gist).subscribe(
        gistResponse => {
          this.gistService.gist$.next(gistResponse);
        },
        error => {
          this.errorMessage$.emit(error);
        });

      const req = httpMock.expectNone(gist.contentUrl);
    });

  });

  describe('setup', () => {

    it('should get uncached api', () => {
      const gistResponseContent = `Lorem Ipsum
Lorem Ipsum 2`;
      const gist: Gist = {
        id: '123',
        contentUrl: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        filename: 'units.txt',
        language: 'Text',
        url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        size: 123,
        wasCached: true,
        content: ``,
        cached: true
      };

      localStorage.removeItem('gist_' + gist.id + gist.filename);
      gistService.isCaching = false;

      /*
      gistService.gist$.subscribe((gistResponse: Gist) => {
        expect(gistResponse.content).toEqual(gistResponseContent);
        expect(gistResponse.wasCached).toEqual(false);
        expect(gistService.apiCalls).toBe(1);
      }, error => {
        console.log('error:', error);
      });
       */

      spyOn(gistService.gist$, 'next'); // .and.returnValue(of());

      const gistServiceObs = gistService.getGist(gist);
      expect(gistServiceObs.constructor.name).toEqual('Observable');

      gistServiceObs.subscribe(gistResponse => {
        expect(gistResponse.content).toEqual(gistResponseContent);
        expect(gistResponse.wasCached).toEqual(false);
        expect(gistService.apiCalls).toBe(1);
        expect(gistService.gist$.next).not.toHaveBeenCalled();
        // expect(gistService.gist$.next).toHaveBeenCalledWith(GIST);
      });

      //
      const req = httpMock.expectOne(gist.contentUrl);
      expect(req.cancelled).toBe(false);
      expect(req.request.method).toBe('GET');
      req.flush(gistResponseContent);
    });

    it('should get cached api', () => {
      const gistResponseContent = `Lorem Ipsum Cached`;

      const gist: Gist = {
        id: '321',
        contentUrl: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        filename: 'units.txt',
        language: 'Text',
        url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        size: 321,
        wasCached: true,
        content: ``,
        cached: true
      };

      localStorage.removeItem('gist_' + gist.id + gist.filename);
      gistService.isCaching = true;
      localStorage.setItem('gist_' + gist.id + gist.filename, gistResponseContent);

      gistService.gist$.subscribe((gistResponse: Gist) => {
        expect(gistResponse.content).toEqual(gistResponseContent);
        expect(gistResponse.wasCached).toEqual(true);
        expect(gistService.apiCalls).toBe(0);
      }, error => {
        console.log('error:', error);
      });

      gistService.getGist(gist);

      const req = httpMock.expectNone(gist.contentUrl);
    });

  });

});
