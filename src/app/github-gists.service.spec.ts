import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpEvent, HttpEventType, HttpHandler } from '@angular/common/http';
import { GitHubGistsService } from './github-gists.service';
import { GitHubUserService } from './github-user.service';
import { Gists } from './gists.model';
import { of } from 'rxjs';

describe('Github Gists Service unmocked', () => {
  let userService: GitHubUserService;
  let gistsService: GitHubGistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // replaces for the standard module so we don't have testing complications.
      // These tests in this describe group aren't concerned with httpclient anyway.
      providers: [
        HttpClient,
        GitHubGistsService,
        GitHubUserService
      ]
    });

    userService = TestBed.inject(GitHubUserService);
    gistsService = TestBed.inject(GitHubGistsService);
  });

  describe('setup', () => {

    it('GitHub User Service should be created', () => {
      expect(userService).toBeTruthy();
    });

    it('GitHub Gists Service should be created', () => {
      expect(gistsService).toBeTruthy();
    });

  });

});

describe('Github Gists Service mocked', () => {
  let userService: GitHubUserService;
  let gistsService: GitHubGistsService;

  let httpClient: HttpClientTestingModule;
  let httpMock: HttpTestingController;

  const USER = {
    id: 1,
    login: 'mock',
    followers: 1,
    following: 2,
    name: 'Mock P. Smith'
  };

  const GISTS = [{
    id: 1,
    login: 'mock',
    type: 'USER'
  }, {
    id: 2,
    login: 'mock2',
    type: 'USER'
  }];

  class MockUserService {
    getApiUrl() {
      return 'http://localhost';
    }
  }

  class MockHttpClient {
    public get() {
      return of(GISTS);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubGistsService,
        {provider: HttpClient, useClass: MockHttpClient},
        {provider: GitHubUserService, useClass: MockUserService}
      ]
    });

    userService = TestBed.inject(GitHubUserService);
    gistsService = TestBed.inject(GitHubGistsService);

    httpMock = TestBed.inject(HttpTestingController);
  });

  /*beforeEach(
    inject([GitHubUserService], (service: GitHubUserService) => {
      userService = service;
    })
  );*/

  describe('setup', () => {

    it('GitHub User Service should be created', () => {
      expect(userService).toBeTruthy();
    });

    it('GitHub Gists Service should be created', () => {
      expect(gistsService).toBeTruthy();
    });

  });

  describe('clearGistsCache', (() => {

    it('clearGistsCache should work', () => {
      const username = 'lasellers';
      localStorage.setItem('gists_' + username, 'mocked');

      gistsService.clearGistsCache(username);

      const obj = localStorage.getItem('gists_' + username);
      expect(obj).not.toEqual('mocked');
    });

    it('clearGistsCache blank should work', () => {
      const username = '';
      localStorage.setItem('gists_' + username, 'mocked');

      gistsService.clearGistsCache(username);

      const obj = localStorage.getItem('gists_' + username);
      expect(obj).not.toEqual('mocked');
    });

  }));

  describe('isGistsCached', (() => {

    it('isGistsCached true when cached', () => {
      const username = 'lasellers';
      localStorage.setItem('gists_' + username, 'mocked');
      expect(gistsService.isGistsCached(username)).toBeTruthy();
    });

    it('isGistsCached false when not cached', () => {
      const username = 'lasellers';
      localStorage.removeItem('gists_' + username);
      expect(gistsService.isGistsCached(username)).toBeFalsy();
    });

  }));

  describe('getGists', (() => {

    it('getGists exists', () => {
      const username = 'lasellers';
      expect(typeof gistsService.getGists !== 'undefined').toBeTrue();
    });

    xit('getGists(lasellers) works', () => {
      const username = 'lasellers';
      // expect(gistsService.getGists(username)).toBeTrue();
    });

  }));

});



xdescribe('Github Gists Service mocked httpclient', () => {
  let userService: GitHubUserService;
  let gistsService: GitHubGistsService;

  let httpClient: HttpClientTestingModule;
  let httpMock: HttpTestingController;

  const USER = {
    id: 1,
    login: 'mock',
    followers: 1,
    following: 2,
    name: 'Mock P. Smith'
  };

  const GISTS = [{
    id: 1,
    login: 'mock',
    type: 'USER'
  }, {
    id: 2,
    login: 'mock2',
    type: 'USER'
  }];

  class MockUserService {
    getApiUrl() {
      return 'http://localhost';
    }
  }

  class MockHttpClient {
    public get() {
      return of(GISTS);
    }
  }

  beforeEach(() => {
    httpClient = new HttpClientTestingModule();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubGistsService,
        {provider: HttpClient, useClass: httpClient},
        {provider: GitHubUserService, useClass: MockUserService}
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);

    userService = TestBed.inject(GitHubUserService);
    gistsService = TestBed.inject(GitHubGistsService);
  });

  /*beforeEach(
    inject([GitHubUserService], (service: GitHubUserService) => {
      userService = service;
    })
  );*/


  /*
    const FakeGists = [{
      'id': '123',
      'contentUrl': 'url/sort3.cs',
      'filename': 'file1.txt',
      'language': 'text',
      'size': 4521,
      'content': {
        'url': 'https://api.github.com/gists/35543e1b77ed0da025076b7eaf230375',
        'forks_url': 'https://api.github.com/gists/35543e1b77ed0da025076b7eaf230375/forks',
        'commits_url': 'https://api.github.com/gists/35543e1b77ed0da025076b7eaf230375/commits',
        'id': '35543e1b77ed0da025076b7eaf230375',
        'node_id': 'MDQ6R2lzdDM1NTQzZTFiNzdlZDBkYTAyNTA3NmI3ZWFmMjMwMzc1',
        'git_pull_url': 'https://gist.github.com/35543e1b77ed0da025076b7eaf230375.git',
        'git_push_url': 'https://gist.github.com/35543e1b77ed0da025076b7eaf230375.git',
        'html_url': 'https://gist.github.com/35543e1b77ed0da025076b7eaf230375',
        'files': {
          'file1.txt': {
            'filename': 'file1.txt',
            'type': 'text/plain',
            'language': 'C#',
            'raw_url': 'url/sort3.cs',
            'size': 4521
          }
        },
        'public': true,
        'created_at': '2017-04-28T19:01:01Z',
        'updated_at': '2017-04-28T19:01:02Z',
        'description': 'sort3 c# + linq',
        'comments': 0,
        'user': null,
        'comments_url': 'https://api.github.com/gists/35543e1b77ed0da025076b7eaf230375/comments',
        'owner': {
          'login': 'lasellers',
          'id': 2235644,
          'node_id': 'MDQ6VXNlcjIyMzU2NDQ=',
          'avatar_url': 'https://avatars2.githubusercontent.com/u/2235644?v=4',
          'gravatar_id': '',
          'url': 'https://api.github.com/users/lasellers',
          'html_url': 'https://github.com/lasellers',
          'followers_url': 'https://api.github.com/users/lasellers/followers',
          'following_url': 'https://api.github.com/users/lasellers/following{/other_user}',
          'gists_url': 'https://api.github.com/users/lasellers/gists{/gist_id}',
          'starred_url': 'https://api.github.com/users/lasellers/starred{/owner}{/repo}',
          'subscriptions_url': 'https://api.github.com/users/lasellers/subscriptions',
          'organizations_url': 'https://api.github.com/users/lasellers/orgs',
          'repos_url': 'https://api.github.com/users/lasellers/repos',
          'events_url': 'https://api.github.com/users/lasellers/events{/privacy}',
          'received_events_url': 'https://api.github.com/users/lasellers/received_events',
          'type': 'User',
          'site_admin': false
        },
        'truncated': false
      },
      'cached': false
    }, {
      'id': '456',
      'contentUrl': 'url/sort2epromisefetch.html',
      'filename': 'file2.html',
      'language': 'HTML',
      'size': 4038,
      'content': {
        'url': 'https://api.github.com/gists/a5bbbae8ad96c7f0956b5ee44dbe40f9',
        'forks_url': 'https://api.github.com/gists/a5bbbae8ad96c7f0956b5ee44dbe40f9/forks',
        'commits_url': 'https://api.github.com/gists/a5bbbae8ad96c7f0956b5ee44dbe40f9/commits',
        'id': 'a5bbbae8ad96c7f0956b5ee44dbe40f9',
        'node_id': 'MDQ6R2lzdGE1YmJiYWU4YWQ5NmM3ZjA5NTZiNWVlNDRkYmU0MGY5',
        'git_pull_url': 'https://gist.github.com/a5bbbae8ad96c7f0956b5ee44dbe40f9.git',
        'git_push_url': 'https://gist.github.com/a5bbbae8ad96c7f0956b5ee44dbe40f9.git',
        'html_url': 'https://gist.github.com/a5bbbae8ad96c7f0956b5ee44dbe40f9',
        'files': {
          'file2.html': {
            'filename': 'file2.html',
            'type': 'text/html',
            'language': 'HTML',
            'raw_url': 'url/sort2epromisefetch.html',
            'size': 4038
          }
        },
        'public': true,
        'created_at': '2017-04-23T14:57:53Z',
        'updated_at': '2017-04-23T14:57:53Z',
        'description': 'Sort2 (e) promise+fetch',
        'comments': 0,
        'user': null,
        'comments_url': 'https://api.github.com/gists/a5bbbae8ad96c7f0956b5ee44dbe40f9/comments',
        'owner': {
          'login': 'lasellers',
          'id': 2235644,
          'node_id': 'MDQ6VXNlcjIyMzU2NDQ=',
          'avatar_url': 'https://avatars2.githubusercontent.com/u/2235644?v=4',
          'gravatar_id': '',
          'url': 'https://api.github.com/users/lasellers',
          'html_url': 'https://github.com/lasellers',
          'followers_url': 'https://api.github.com/users/lasellers/followers',
          'following_url': 'https://api.github.com/users/lasellers/following{/other_user}',
          'gists_url': 'https://api.github.com/users/lasellers/gists{/gist_id}',
          'starred_url': 'https://api.github.com/users/lasellers/starred{/owner}{/repo}',
          'subscriptions_url': 'https://api.github.com/users/lasellers/subscriptions',
          'organizations_url': 'https://api.github.com/users/lasellers/orgs',
          'repos_url': 'https://api.github.com/users/lasellers/repos',
          'events_url': 'https://api.github.com/users/lasellers/events{/privacy}',
          'received_events_url': 'https://api.github.com/users/lasellers/received_events',
          'type': 'User',
          'site_admin': false
        },
        'truncated': false
      },
      'cached': false
    }];

    const FakeGistsResponse = [ // : Gists[] = [
      {
        id: '123',
        contentUrl: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        filename: 'file1.txt',
        language: 'Text',
        url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        size: 123,
        wasCached: false,
        content: ``,
        cached: false
      },
      {
        id: '456',
        contentUrl: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        filename: 'file2.HTML',
        language: 'HTML',
        url: 'https://gist.githubusercontent.com/lasellers/7d9ed…a10d8ce79be188b90b9c3c9d0ff86329a955d01/units.txt',
        size: 654,
        wasCached: false,
        content: ``,
        cached: false
      }];

    xdescribe('api', () => {

      it('should get uncached api', () => {
        const username = 'lasellers';
        const url = userService.getApiUrl() + username + '/gists';

        localStorage.removeItem('gists_' + username);
        gistsService.isCaching = false;

        gistsService.gists$.subscribe((gistsResponse: Gist[]) => {
          expect(gistsResponse.length).toEqual(2);
          expect(gistsResponse).toEqual(FakeGistsResponse);
          expect(gistsService.apiCalls).toBe(1);
        }, error => {
          console.log('error:', error);
        });

        gistsService.getGists(username);

        const req = httpMock.expectOne(url);
        expect(req.cancelled).toBe(false);
        expect(req.request.method).toBe('GET');
        req.flush(FakeGists);
      });

      it('should get cached api', () => {
        const username = 'lasellers';
        const url = userService.getApiUrl() + username + '/gists';

        localStorage.removeItem('gists_' + username);
        gistsService.isCaching = true;
        localStorage.setItem('gists_' + username, JSON.stringify(FakeGistsResponse));

        gistsService.gists$.subscribe((gistsResponse: Gist[]) => {
          expect(gistsResponse.length).toEqual(2);
          expect(gistsResponse).toEqual(FakeGistsResponse);
          expect(gistsService.apiCalls).toBe(0);
        }, error => {
          console.log('error:', error);
        });

        gistsService.getGists(username);

        const req = httpMock.expectNone(url);
        // expect(req).toBeTruthy();
      });

      afterEach(() => {
        httpMock.verify();
      });

    });
  */

});

