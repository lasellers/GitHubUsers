import {TestBed} from '@angular/core/testing';

import {GitHubFollowersService} from './github-followers.service';
import {GitHubUserService} from './github-user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import { User } from './user.model';

describe('GitHubFollowersService unmocked', () => {
  let userService: GitHubUserService;
  let followersService: GitHubFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubFollowersService,
        GitHubUserService,
        {provide: HttpClient, useClass: HttpClient}
      ]
    });
    userService = TestBed.inject(GitHubUserService);
    followersService = TestBed.inject(GitHubFollowersService);
  });

  describe('setup', (() => {

    it('userService should exist', () => {
      expect(userService).toBeTruthy();
    });

    it('followersService should exist', () => {
      expect(followersService).toBeTruthy();
    });

  }));

});

describe('GitHubUserService mocked', () => {
  let userService: GitHubUserService;
  let followersService: GitHubFollowersService;

  let httpMock: HttpTestingController; // HttpClientTestingModule;

  const USER: User = {
    id: 1,
    login: 'mock',
    followers: 1,
    following: 2,
    name: 'Mock P. Smith'
  };

  const FOLLOWERS = [{
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
      return of(FOLLOWERS);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubUserService,
        GitHubFollowersService,
        {provide: HttpClient, useClass: MockHttpClient}
      ]
    });
    userService = TestBed.inject(GitHubUserService);
    followersService = TestBed.inject(GitHubFollowersService);
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

  describe('clearFollowersCache', (() => {

    it('clearFollowersCache should work', () => {
      const username = 'lasellers';
      localStorage.setItem('followers_' + username, 'mocked');

      followersService.clearFollowersCache(username);

      const obj = localStorage.getItem('followers_' + username);
      expect(obj).not.toEqual('mocked');
    });

    it('clearFollowersCache blank should work', () => {
      const username = '';
      localStorage.setItem('followers_' + username, 'mocked');

      followersService.clearFollowersCache(username);

      const obj = localStorage.getItem('followers_' + username);
      expect(obj).not.toEqual('mocked');
    });

  }));

  describe('isFollowersCached', (() => {

    it('isFollowersCached true when cached', () => {
      const username = 'lasellers';
      localStorage.setItem('followers_' + username, 'mocked');
      expect(followersService.isFollowersCached(username)).toBeTruthy();
    });

    it('isFollowersCached false when not cached', () => {
      const username = 'lasellers';
      localStorage.removeItem('followers_' + username);
      expect(followersService.isFollowersCached(username)).toBeFalsy();
    });

  }));

  describe('getFollowers', (() => {

    it('getFollowers exists', () => {
      const username = 'lasellers';
      expect(typeof followersService.getFollowers !== 'undefined').toBeTrue();
    });

    xit('getFollowers(lasellers) works', () => {
      const username = 'lasellers';
      // expect(followersService.getFollowers(username)).toBeTrue();
    });

  }));

});
