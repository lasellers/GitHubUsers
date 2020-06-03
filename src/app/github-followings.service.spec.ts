import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

import {GitHubFollowingsService} from './github-followings.service';
import {GitHubUserService} from './github-user.service';

describe('GitHubFollowingsService unmocked', () => {
  let userService: GitHubUserService;
  let followingsService: GitHubFollowingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // replaces for the standard module so we don't have testing complications.
      // These tests in this describe group aren't concerned with httpclient anyway.
      providers: [
        GitHubFollowingsService,
        GitHubUserService,
        {provide: HttpClient, useClass: HttpClient}
      ]
    });
    userService = TestBed.inject(GitHubUserService);
    followingsService = TestBed.inject(GitHubFollowingsService);
  });

  describe('setup', (() => {

    it('userService should exist', () => {
      expect(userService).toBeTruthy();
    });

    it('followingsService should exist', () => {
      expect(followingsService).toBeTruthy();
    });

  }));

});

describe('GitHubUserService mocked', () => {
  let userService: GitHubUserService;
  let followingsService: GitHubFollowingsService;

  let httpMock: HttpTestingController; // HttpClientTestingModule;

  const USER = {
    id: 1,
    login: 'mock',
    followings: 1,
    following: 2,
    name: 'Mock P. Smith'
  };

  const Followings = [{
    id: 1,
    login: 'mock',
    type: 'USER'
  }, {
    id: 2,
    login: 'mock2',
    type: 'USER'
  }];

  class MockHttpClient {
    public get() {
      return of(Followings);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubUserService,
        GitHubFollowingsService,
        {provide: HttpClient, useClass: MockHttpClient}
      ]
    });
    userService = TestBed.inject(GitHubUserService);
    followingsService = TestBed.inject(GitHubFollowingsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('setup', (() => {

    it('userService should exist', () => {
      expect(userService).toBeTruthy();
    });

    it('httpMock should exist', () => {
      expect(httpMock).toBeTruthy();
    });

  }));

  describe('clearFollowingsCache', (() => {

    it('clearFollowingsCache should work', () => {
      const username = 'lasellers';
      localStorage.setItem('followings_' + username, 'mocked');

      followingsService.clearFollowingsCache(username);

      const obj = localStorage.getItem('followings_' + username);
      expect(obj).not.toEqual('mocked');
    });

    it('clearFollowingsCache blank should work', () => {
      const username = '';
      localStorage.setItem('followings_' + username, 'mocked');

      followingsService.clearFollowingsCache(username);

      const obj = localStorage.getItem('followings_' + username);
      expect(obj).not.toEqual('mocked');
    });

  }));

  describe('isFollowingsCached', (() => {

    it('isFollowingsCached true when cached', () => {
      const username = 'lasellers';
      localStorage.setItem('followings_' + username, 'mocked');
      expect(followingsService.isFollowingsCached(username)).toBeTruthy();
    });

    it('isFollowingsCached false when not cached', () => {
      const username = 'lasellers';
      localStorage.removeItem('followings_' + username);
      expect(followingsService.isFollowingsCached(username)).toBeFalsy();
    });

  }));

  describe('getFollowings', (() => {

    it('getFollowings exists', () => {
      const username = 'lasellers';
      expect(typeof followingsService.getFollowings !== 'undefined').toBeTrue();
    });

    xit('getFollowings(lasellers) works', () => {
      const username = 'lasellers';
      // expect(followingsService.getFollowings(username)).toBeTrue();
    });

  }));

});
