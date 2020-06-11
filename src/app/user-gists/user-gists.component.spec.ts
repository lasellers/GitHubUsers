import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Component, EventEmitter, Injectable, Output, Pipe, PipeTransform } from '@angular/core';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserGistsComponent } from './user-gists.component';
import { GitHubUserService } from '../github-user.service';
import { GitHubGistsService } from '../github-gists.service';
import { Gist } from '../gist.model';
import { User } from '../user.model';
import { BytesPipe } from '../bytes.pipe';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

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

  public isUserCached() {
    return true;
  }
}

@Pipe({
  name: 'bytes'
})
export class MockBytesPipe implements PipeTransform {
  transform(bytes: number = 0, precision: number = 0): string {
    return ' BYTES=' + bytes.toString();
  }
}

@Component({
  selector: 'fa-icon',
  template: ''
})
class MockFaIconComponent {
}

@Injectable()
class MockGitHubGistsService {
  public baseUsername: string = 'mock';
  @Output() gists$ = new EventEmitter(true);

  public getGists(username: string) {
    this.gists$.emit(GISTS);
  }

  public isGistsCached(username: string): boolean {
    return false;
  }
}

describe('User Gists Component', () => {
  let gistsService: GitHubGistsService;
  let userService: GitHubUserService;

  let httpMock: HttpTestingController;

  let component: UserGistsComponent;
  let fixture: ComponentFixture<UserGistsComponent>;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserGistsComponent, MockBytesPipe, FaIconComponent],
      imports: [HttpClientTestingModule, FontAwesomeTestingModule],
      providers: [
        {provide: GitHubGistsService, useClass: MockGitHubGistsService},
        {provide: BytesPipe, useClass: MockBytesPipe},
        {provide: HttpClient, useClass: MockHttpClient},
        {provide: GitHubUserService, useClass: MockGitHubUserService},
        {provide: FaIconComponent, useClass: MockFaIconComponent}
      ]
    })
      .compileComponents().then(() => {

      fixture = TestBed.createComponent(UserGistsComponent);
      component = fixture.componentInstance;
      dom = fixture.debugElement.nativeElement;

      component.baseUsername = 'lorem1';

      fixture.detectChanges();

      httpMock = TestBed.inject(HttpTestingController);
      gistsService = TestBed.inject(GitHubGistsService);
      userService = TestBed.inject(GitHubUserService);

      //
      gistsService.isCaching = false;
    });
  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('Given our feature tests setup', () => {
    beforeEach(() => {
      component.baseUsername = 'lorem';
      gistsService.isCaching = false;
      fixture.detectChanges();
    });

    it('all testing variables should be as expected', () => {
      expect(fixture).toBeTruthy();
      expect(component).toBeTruthy();
      expect(dom).toBeTruthy();
      expect(userService).toBeTruthy();
      expect(gistsService).toBeTruthy();
      expect(httpMock).toBeTruthy();
    });

  });

  describe('Given we have no gists', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      gistsService.isCaching = false;

      component.gists = [];

      spyOn(userService, 'isUserCached').and.returnValue(false);
      spyOn(gistsService, 'isGistsCached').and.returnValue(false);
      spyOn(gistsService, 'getGists').and.callThrough();
      // returnValue([]); //MockGitHubGistsService.getGists(component.baseUsername));

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
      expect(el).toBeNull();
    });

  });

  describe('Given we have two gists', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      gistsService.isCaching = false;
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


    it(`should render 2 items`, () => {
      const els = dom.querySelectorAll('tbody tr');
      expect(els.length).toBe(GISTS.length);
    });

    it(`should render items with correct names`, () => {
      const els = dom.querySelectorAll('tbody > tr');
      for (let elIndex = 0; elIndex < els.length; elIndex++) {
        const el = els[elIndex];
        expect(el.textContent).toContain(GISTS[elIndex].filename);
      }
    });

    it(`should render items with correct bytes`, () => {
      const els = dom.querySelectorAll('tbody > tr');
      for (let elIndex = 0; elIndex < els.length; elIndex++) {
        const el = els[elIndex];
        expect(el.textContent).toContain('BYTES=' + GISTS[elIndex].size);
      }
    });

    it(`should render items with correct language`, () => {
      const els = dom.querySelectorAll('tbody > tr');
      for (let elIndex = 0; elIndex < els.length; elIndex++) {
        const el = els[elIndex];
        expect(el.textContent).toContain(GISTS[elIndex].language);
      }
    });

    it(`should render header`, () => {
      expect(dom.querySelector('thead').textContent).toContain('Filename');
      expect(dom.querySelector('thead').textContent).toContain('Size');
      expect(dom.querySelector('thead').textContent).toContain('Language');
    });

    it(`should render tbody`, () => {
      expect(dom.querySelector('tbody')).toBeDefined();
    });

    it(`should render get button`, () => {
      expect(dom.querySelector('tbody button.btn').textContent).toContain('Get');
    });

  });

  describe('component', () => {
    beforeEach(() => {
      spyOn(userService, 'isUserCached').and.returnValue(false);

      spyOn(gistsService, 'isGistsCached').and.returnValue(false);
      spyOn(gistsService, 'getGists').and.callThrough();
    });

    xit(`should render ngOnInit`, () => {
      component.gists = [];
      component.ngOnInit();
      spyOn(gistsService.gists$, 'emit').and.callThrough();

      fixture.detectChanges();

      expect(gistsService.getGists).toHaveBeenCalled();
      // expect(gistsService.isGistsCached).toHaveBeenCalled();

      expect(component.gists).toBeDefined();
      expect(component.gists.length).toBe(GISTS.length);

      expect(gistsService.gists$.emit).toHaveBeenCalled();
    });

    it(`should render ngOnDestroy`, () => {
      component.ngOnDestroy();
      expect(gistsService.getGists).not.toHaveBeenCalled();
    });

  });

});

