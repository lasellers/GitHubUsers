import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserGistsComponent } from './user-gists.component';
import { GitHubUserService } from '../github-user.service';
import { GitHubGistsService } from '../github-gists.service';
import { Gist } from '../gist.model';

/*
describe('User Gists Component', () => {
  let component: UserGistsComponent;
  let fixture: ComponentFixture<UserGistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserGistsComponent],
      imports: [HttpClientTestingModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */

@Injectable()
class MockGitHubUserService { // extends GitHubUserService {
  public baseUsername: string = 'mock';

  public getApiUrl() {
    return 'http://localhost';
  }
}

@Injectable()
class MockGitHubGistsService { // extends GitHubGistsService {
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

xdescribe('User Gists Component', () => {
  let gistsService: GitHubGistsService;

  let httpMock: HttpTestingController;

  let component: UserGistsComponent;
  let fixture: ComponentFixture<UserGistsComponent>;
  let dom: HTMLElement;

  beforeEach(async(() => {
    let mock = new MockGitHubGistsService();
    TestBed.configureTestingModule({
      declarations: [UserGistsComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: GitHubGistsService, useClass: mock},
        {provider: HttpClient, useClass: HttpClientTestingModule},
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

  /*  afterEach(() => {
      httpMock.verify();
    });
  */

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

      spyOn(gistsService, 'isGistsCached').and.returnValue(false);
      // spyOn(userService, 'isUserCached').and.returnValue(false);

      spyOn(gistsService, 'getGists').and.returnValue(MockGitHubGistsService.getGists(component.baseUsername));

      fixture.detectChanges();
    });

    it(`should NOT render card title`, () => {
      console.log('.card-title: ', dom.querySelector('.card-title').textContent);
      expect(dom.querySelector('.card-title').textContent).not.toContain('Gists');
    });

    it(`should NOT render header`, () => {
      console.log('thead: ', dom.querySelector('thead').textContent);
      expect(dom.querySelector('thead').textContent).not.toContain('Filename');
    });

    it(`should NOT render get button`, () => {
      console.log('tbody button.btn: ', dom.querySelector('tbody button.btn').textContent);
      expect(dom.querySelector('tbody button.btn').textContent).not.toContain('Get');
    });

  });

  describe('html, one', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      let gists = [Gist.constructor()];
      gists[0].content = 'Lorem Ipsum';
      component.gists = [];

      spyOn(gistsService, 'isGistsCached').and.returnValue(false);
      // spyOn(userService, 'isUserCached').and.returnValue(false);

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

  describe('component', () => {
    beforeEach(() => {
      let gist = Gist.constructor();
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

