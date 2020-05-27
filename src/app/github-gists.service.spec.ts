import { TestBed } from '@angular/core/testing';

import { GithubGistsService } from './github-gists.service';

describe('GithubGistsService', () => {
  let service: GithubGistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubGistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
