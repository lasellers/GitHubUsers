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
