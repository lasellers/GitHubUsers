import { TestBed } from '@angular/core/testing';

import { GithubFollowersService } from './github-followers.service';

xdescribe('GithubFollowersService', () => {
  let service: GithubFollowersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubFollowersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
