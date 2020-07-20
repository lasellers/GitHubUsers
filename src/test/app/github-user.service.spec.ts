import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { GitHubUserService } from '../../../src/app/github-user.service';

describe('GitHubUserService unmocked', () => {
  let userService: GitHubUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // replaces for the standard module so we don't have testing complications.
      // These tests in this describe group aren't concerned with httpclient anyway.
      providers: [
        GitHubUserService,
        {provide: HttpClient, useClass: HttpClient}
      ]
    });
    userService = TestBed.inject(GitHubUserService);
  });

  beforeEach(() => {
    expect(userService).toBeTruthy();
  });

  describe('consts', (() => {

    it('getApiUrl is as expected', () => {
      expect(userService.getApiUrl()).toEqual('https://api.github.com/users/');
    });

    it('getUserBasename is as expected', () => {
      expect(userService.getUserBasename()).toEqual('lasellers');
    });

    it('getBaseUserDefault is as expected', () => {
      expect(userService.getBaseUserDefault()).toEqual('lasellers');
    });

  }));

});

describe('GitHubUserService mocked', () => {
  let userService: GitHubUserService;

  let httpMock: HttpTestingController; // HttpClientTestingModule;

  const USER = {
    id: 1,
    login: 'mock',
    followers: 1,
    following: 2,
    name: 'Mock P. Smith'
  };

  class MockHttpClient {
    public get() {
      return of(USER);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubUserService,
        {provide: HttpClient, useClass: MockHttpClient}
      ]
    });
    userService = TestBed.inject(GitHubUserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    expect(userService).toBeTruthy();
    expect(httpMock).toBeTruthy();
  });

  describe('clearUserCache', (() => {

    it('clearUserCache should work', () => {
      const username = 'lasellers';
      localStorage.setItem('user_' + username, 'mocked');

      userService.clearUserCache(username);

      const obj = localStorage.getItem('user_' + username);
      expect(obj).not.toEqual('mocked');
    });

    it('clearUserCache blank should work', () => {
      const username = '';
      localStorage.setItem('user_' + username, 'mocked');

      userService.clearUserCache(username);

      const obj = localStorage.getItem('user_' + username);
      expect(obj).not.toEqual('mocked');
    });

  }));

  describe('isUserCached', (() => {

    it('isUserCached true when cached', () => {
      const username = 'lasellers';
      localStorage.setItem('user_' + username, 'mocked');
      expect(userService.isUserCached(username)).toBeTruthy();
    });

    it('isUserCached false when not cached', () => {
      const username = 'lasellers';
      localStorage.removeItem('user_' + username);
      expect(userService.isUserCached(username)).toBeFalsy();
    });

  }));

});
