import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserGistsComponent } from './user-gists.component';
import { GitHubUserService } from '../github-user.service';
import { GitHubGistsService } from '../github-gists.service';
import { Gist } from '../gist.model';
import { User } from '../user.model';

const GISTS: Gist[] = [{
  id: 'A1',
  content: 'Lorem Ipsum',
  filename: 'file1.txt',
  size: 100,
  contentUrl: 'url/1',
  language: 'text',
  url: 'url/1',
  cached: true,
  wasCached: false
}, {
  id: 'B1',
  content: 'Lorem Ipsum Vega',
  filename: 'file2.txt',
  size: 100,
  contentUrl: 'url/2',
  language: 'typescript',
  url: 'url/2',
  cached: false,
  wasCached: true
}];

class MockHttpClient {
  public get() {
    return of(GISTS);
  }
}

@Injectable()
class MockGitHubUserService { // extends GitHubUserService {
  public baseUsername: string = 'mock';

  public getApiUrl() {
    return 'http://localhost';
  }
}

@Injectable()
class MockGitHubGistsService {
  public baseUsername: string = 'mock';
  public status: boolean;

  static getGists(username: string) {
    switch (username) {
      case 'lasellers':
        return of(); // 1,2,3);
      default:
        return of();
    }
  }

  public getGists(username: string) {
    switch (username) {
      case 'lasellers':
        return of(); // 1,2,3);
      default:
        return of();
    }
  }
}

describe('User Gists Component', () => {
  let gistsService: GitHubGistsService;

  let httpMock: HttpTestingController;

  let component: UserGistsComponent;
  let fixture: ComponentFixture<UserGistsComponent>;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserGistsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: GitHubGistsService, useClass: MockGitHubGistsService},
        {provide: HttpClient, useClass: MockHttpClient},
      ]
    })
      .compileComponents().then(() => {
      //  spyOn(gistsService, 'getGists').and.returnValue(MockGitHubGistsService.getGists(component.baseUsername));

      fixture = TestBed.createComponent(UserGistsComponent);
      component = fixture.componentInstance;
      component.baseUsername = 'lorem1';
      fixture.detectChanges();

      httpMock = TestBed.inject(HttpTestingController);
      gistsService = TestBed.inject(GitHubGistsService);

      dom = fixture.debugElement.nativeElement;

      component.baseUsername = 'lorem2';
    });
  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('setup', () => {
    beforeEach(() => {
      component.baseUsername = 'lorem';
      fixture.detectChanges();
    });

    it('should create fixture', () => {
      expect(fixture).toBeTruthy();
    });

    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should create dom', () => {
      expect(dom).toBeTruthy();
    });

  });

  describe('html, none', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      component.gists = [];

      // spyOn(userService, 'isUserCached').and.returnValue(false);

      // spyOn(gistsService, 'isGistsCached').and.returnValue(false);
      // spyOn(gistsService, 'getGists').and.returnValue(MockGitHubGistsService.getGists(component.baseUsername));

      fixture.detectChanges();
    });

    it(`should NOT render card title`, () => {
      const el = dom.querySelector('.card-title');
      console.log(el);
      expect(el).toBeNull();
    });

    it(`should NOT render header`, () => {
      const el = dom.querySelector('.thead');
      console.log(el);
      expect(el).toBeNull();
    });

    it(`should NOT render get button`, () => {
      const el = dom.querySelector('tbody button.btn');
      console.log(el);
      expect(el).toBeNull();
    });

  });

  xdescribe('html, one', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      const gists = [Gist.constructor()];
      gists[0].content = 'Lorem Ipsum';
      component.gists = [];

      // spyOn(userService, 'isUserCached').and.returnValue(false);

      spyOn(gistsService, 'isGistsCached').and.returnValue(false);
      spyOn(gistsService, 'getGists').and.returnValue(MockGitHubGistsService.getGists(''));

      fixture.detectChanges();
    });

    it(`should render card title`, () => {
      expect(dom.querySelector('.card-title').textContent).toContain('Gists');
    });

    it(`should render header`, () => {
      expect(dom.querySelector('thead').textContent).toContain('Filename');
    });

    it(`should render get button`, () => {
      expect(dom.querySelector('tbody button.btn').textContent).toContain('Get');
    });

  });

  xdescribe('component', () => {
    beforeEach(() => {
      const gist = Gist.constructor();
      gist.content = 'Lorem Ipsum';
      component.gists = [];
      fixture.detectChanges();
    });

    it(`should render ngOnInit`, () => {
      component.ngOnInit();
      const gist = Gist.constructor();
      // gistsService.getGists(gist);
      expect(gistsService.getGists).toHaveBeenCalled();
    });

    it(`should render ngOnDestroy`, () => {
      component.ngOnDestroy();
      expect(gistsService.getGists).not.toHaveBeenCalled();
    });

  });

});

