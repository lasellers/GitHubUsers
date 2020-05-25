/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {GitHubUserService} from './git-hub-user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

xdescribe('GitHubUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GitHubUserService
      ]
    });
  });

  it('should ...', inject([GitHubUserService], (service: GitHubUserService) => {
    expect(service).toBeTruthy();
  }));
});
