/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitHubUserService } from './git-hub-user.service';

describe('GitHubUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubUserService]
    });
  });

  it('should ...', inject([GitHubUserService], (service: GitHubUserService) => {
    expect(service).toBeTruthy();
  }));
});
