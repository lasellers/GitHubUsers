import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { GitHubGistsService } from '../../src/app/github-gists.service';
import { GitHubUserService } from '../../src/app/github-user.service';
import { RawGists } from "../../src/app/raw-gists.model";

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

  beforeEach(() => {
    expect(userService).toBeTruthy();
    expect(gistsService).toBeTruthy();
  });

});

describe('Github Gists Service mocked', () => {
  let userService: GitHubUserService;
  let gistsService: GitHubGistsService;

  let httpMock: HttpTestingController;

  /* const USER = {
     id: 1,
     login: 'mock',
     followers: 1,
     following: 2,
     name: 'Mock P. Smith'
   }; */

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

  beforeEach(() => {
    expect(userService).toBeTruthy();
    expect(gistsService).toBeTruthy();
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
      expect(typeof gistsService.getGists !== 'undefined').toBeTrue();
    });

    xit('getGists(lasellers) works', () => {
      // const username = 'lasellers';
      // expect(gistsService.getGists(username)).toBeTrue();
    });

  }));

  describe('processGistsToArray', (() => {

    it('processGistsToArray exists', () => {
      expect(typeof GitHubGistsService.processGistsToArray !== 'undefined').toBeTrue();
    });

    describe('Given gists with null given to processGistsToArray', (() => {

      const rawGists = null;

      it('processGistsToArray() returns a valid gist array of 0 records', () => {
        const results = GitHubGistsService.processGistsToArray(rawGists, false);
        expect(results).toBeDefined();
        expect(results.length).toEqual(0);
      });

    }));

    describe('Given gists with no data given to processGistsToArray', (() => {

      const rawGists: RawGists = new RawGists();

      it('processGistsToArray() returns a valid gist array of 0 records with isCached = true', () => {
        const results = GitHubGistsService.processGistsToArray(rawGists, false);
        expect(results).toBeDefined();
        expect(results.length).toEqual(0);
      });

    }));

    describe('Given gists with two valid records given to processGistsToArray', (() => {

      // valid real raw data, two records
      const RAW_GISTS =
        [
          {
            "url": "https://api.github.com/gists/35543e1b77ed0da025076b7eaf230375",
            "forks_url": "https://api.github.com/gists/35543e1b77ed0da025076b7eaf230375/forks",
            "commits_url": "https://api.github.com/gists/35543e1b77ed0da025076b7eaf230375/commits",
            "id": "35543e1b77ed0da025076b7eaf230375",
            "node_id": "MDQ6R2lzdDM1NTQzZTFiNzdlZDBkYTAyNTA3NmI3ZWFmMjMwMzc1",
            "git_pull_url": "https://gist.github.com/35543e1b77ed0da025076b7eaf230375.git",
            "git_push_url": "https://gist.github.com/35543e1b77ed0da025076b7eaf230375.git",
            "html_url": "https://gist.github.com/35543e1b77ed0da025076b7eaf230375",
            "files": {
              "sort3.cs": {
                "filename": "sort3.cs",
                "type": "text/plain",
                "language": "C#",
                "raw_url": "https://gist.githubusercontent.com/lasellers/35543e1b77ed0da025076b7eaf230375/raw/276872838dc97cc0620986ecbbb4188d2200b724/sort3.cs",
                "size": 4521
              }
            },
            "public": true,
            "created_at": "2017-04-28T19:01:01Z",
            "updated_at": "2017-04-28T19:01:02Z",
            "description": "sort3 c# + linq",
            "comments": 0,
            "user": null,
            "comments_url": "https://api.github.com/gists/35543e1b77ed0da025076b7eaf230375/comments",
            "owner": {
            },
            "truncated": false
          },
          {
            "url": "https://api.github.com/gists/a5bbbae8ad96c7f0956b5ee44dbe40f9",
            "forks_url": "https://api.github.com/gists/a5bbbae8ad96c7f0956b5ee44dbe40f9/forks",
            "commits_url": "https://api.github.com/gists/a5bbbae8ad96c7f0956b5ee44dbe40f9/commits",
            "id": "a5bbbae8ad96c7f0956b5ee44dbe40f9",
            "node_id": "MDQ6R2lzdGE1YmJiYWU4YWQ5NmM3ZjA5NTZiNWVlNDRkYmU0MGY5",
            "git_pull_url": "https://gist.github.com/a5bbbae8ad96c7f0956b5ee44dbe40f9.git",
            "git_push_url": "https://gist.github.com/a5bbbae8ad96c7f0956b5ee44dbe40f9.git",
            "html_url": "https://gist.github.com/a5bbbae8ad96c7f0956b5ee44dbe40f9",
            "files": {
              "sort2epromisefetch.html": {
                "filename": "sort2epromisefetch.html",
                "type": "text/html",
                "language": "HTML",
                "raw_url": "https://gist.githubusercontent.com/lasellers/a5bbbae8ad96c7f0956b5ee44dbe40f9/raw/df2f0d6b0837ff6670622ce8c1fc6e57eec63494/sort2epromisefetch.html",
                "size": 4038
              }
            },
            "public": true,
            "created_at": "2017-04-23T14:57:53Z",
            "updated_at": "2017-04-23T14:57:53Z",
            "description": "Sort2 (e) promise+fetch",
            "comments": 0,
            "user": null,
            "comments_url": "https://api.github.com/gists/a5bbbae8ad96c7f0956b5ee44dbe40f9/comments",
            "owner": {
            },
            "truncated": false
          },
        ];

      it('processGistsToArray() returns a valid gist array of 2 records with isCached = true', () => {
        const results = GitHubGistsService.processGistsToArray(RAW_GISTS, false);
        expect(results).toBeDefined();
        expect(results.length).toEqual(2);
        results.forEach((gist, index) => {
          expect(gist.cached).toBeFalse();
        });
      });

      it('processGistsToArray() returns a valid gist array of 2 records with isCached = true', () => {
        const results = GitHubGistsService.processGistsToArray(RAW_GISTS, true);
        expect(results).toBeDefined();
        expect(results.length).toEqual(2);
        results.forEach((gist, index) => {
          expect(gist.cached).toBeTrue();
        });
      });

    }));

  }));

});
