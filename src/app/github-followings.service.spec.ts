import { TestBed } from '@angular/core/testing';

import { GithubFollowingsService } from './github-followings.service';

xdescribe('GithubFollowingsService', () => {
  let service: GithubFollowingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubFollowingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
