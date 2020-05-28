/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {GitHubUserService} from './git-hub-user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('GitHubUserService', () => {
  let service: GitHubUserService;
//  let fixture: ComponentFixture<GitHubUserService>;
  let app; // DebugElement.ComponentInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubUserService
      ]
    });
    service = TestBed.inject(GitHubUserService);
  });

  it('should ...', inject([GitHubUserService], (service2: GitHubUserService) => {
    expect(service2).toBeTruthy();
  }));

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  it('getApiUrl ...', () => {
    expect(service.getApiUrl()).toEqual('https://api.github.com/users/');
  });

  it('getUserBasename ...', () => {
    expect(service.getUserBasename()).toEqual('lasellers');
  });

  it('getUserBasenameDefault ...', () => {
    expect(service.getUserBasenameDefault()).toEqual('lasellers');
  });

});
