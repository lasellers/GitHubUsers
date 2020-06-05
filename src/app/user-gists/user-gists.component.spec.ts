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
  public gists$;

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

fdescribe('User Gists Component', () => {
  let gistsService: GitHubGistsService;
  let userService: GitHubUserService;

  let httpMock: HttpTestingController;

  let component: UserGistsComponent;
  let fixture: ComponentFixture<UserGistsComponent>;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserGistsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {provide: GitHubGistsService, useClass: MockGitHubGistsService},
        {provide: HttpClient, useClass: MockHttpClient},
        {provide: GitHubUserService, useClass: MockGitHubUserService},
      ]
    })
      .compileComponents().then(() => {

      fixture = TestBed.createComponent(UserGistsComponent);
      component = fixture.componentInstance;
      component.baseUsername = 'lorem1';
      fixture.detectChanges();

      httpMock = TestBed.inject(HttpTestingController);
      gistsService = TestBed.inject(GitHubGistsService);
      userService = TestBed.inject(GitHubUserService);

      dom = fixture.debugElement.nativeElement;

      gistsService.isCaching = false;
    });
  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('setup', () => {
    beforeEach(() => {
      component.baseUsername = 'lorem';
      gistsService.isCaching = false;

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

  describe('UI, none', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      // gistsService.isCaching = false;

      component.gists = [];

      spyOn(userService, 'isUserCached').and.returnValue(false);
      spyOn(gistsService, 'isGistsCached').and.returnValue(false);
      spyOn(gistsService, 'getGists').and.callThrough(); //returnValue([]); //MockGitHubGistsService.getGists(component.baseUsername));

      fixture.detectChanges();
    });

    it(`should NOT render card title`, () => {
      const el = dom.querySelector('.card-title');
      expect(el).toBeNull();
    });

    it(`should NOT render thead`, () => {
      const el = dom.querySelector('.thead');
      expect(el).toBeNull();
    });

    it(`should NOT render tbody`, () => {
      const el = dom.querySelector('.tbody');
      expect(el).toBeNull();
    });

    it(`should NOT render get button`, () => {
      const el = dom.querySelector('tbody button.btn');
      console.log(el);
      expect(el).toBeNull();
    });

  });

  describe('UI, two gists', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      // gistsService.isCaching = false;
      // const gists = [Gist.constructor()];
      // gists[0].content = 'Lorem Ipsum';
      component.gists = GISTS;

      spyOn(userService, 'isUserCached').and.returnValue(false);
      spyOn(gistsService, 'isGistsCached').and.returnValue(false);
      spyOn(gistsService, 'getGists').and.callThrough();

      // gistsService.gists$ = of(GISTS);

      fixture.detectChanges();
    });

    it(`should render card title`, () => {
      expect(dom.querySelector('.card-title').textContent).toContain('Gists');
    });

    it(`should render header`, () => {
      expect(dom.querySelector('thead').textContent).toContain('Filename');
    });

    it(`should render tbody`, () => {
      expect(dom.querySelector('tbody')).toBeDefined();
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

