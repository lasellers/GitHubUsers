import { TestBed, async, inject } from '@angular/core/testing';
import { GitHubUserService } from './github-user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from "./user.model";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";

fdescribe('GitHubUserService unmocked', () => {
  let userService: GitHubUserService;
//  let fixture: ComponentFixture<GitHubUserService>;
  let dom: HTMLElement; // DebugElement.ComponentInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubUserService,
        {provide: HttpClient, useClass: HttpClient}
      ]
    });
    userService = TestBed.inject(GitHubUserService);
  });

  describe('setup', (() => {

    it('userService should exist', () => {
      expect(userService).toBeTruthy();
    });

  }));

  describe('consts', (() => {

    it('getApiUrl is as expected', () => {
      expect(userService.getApiUrl()).toEqual('https://api.github.com/users/');
    });

    it('getUserBasename is as expected', () => {
      expect(userService.getUserBasename()).toEqual('lasellers');
    });

    it('getUserBasenameDefault is as expected', () => {
      expect(userService.getUserBasenameDefault()).toEqual('lasellers');
    });

  }));

});

fdescribe('GitHubUserService mocked', () => {
  let userService: GitHubUserService;
//  let fixture: ComponentFixture<GitHubUserService>;
  let dom: HTMLElement; // DebugElement.ComponentInstance;

  let httpMock: HttpTestingController; // HttpClientTestingModule;

  const USER = {
    id: 1,
    login: 'mock',
    followers: 1,
    following: 2,
    name: 'Mock P. Smith'
  }

  class mockHttpClient {
    public get() {
      return of(USER);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubUserService,
        {provide: HttpClient, useClass: mockHttpClient}
      ]
    });
    userService = TestBed.inject(GitHubUserService);
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
