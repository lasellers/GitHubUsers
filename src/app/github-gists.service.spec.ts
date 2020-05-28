import { TestBed } from '@angular/core/testing';

import { GithubGistsService } from './github-gists.service';

xdescribe('GithubGistsService', () => {
  let service: GithubGistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubGistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
