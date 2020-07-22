import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Directive, EventEmitter, Injectable, Input, Output, Pipe, PipeTransform } from '@angular/core';

import { GistComponent } from '../../../app/components/gist/gist.component';
import { GitHubUserService } from '../../../app/github-user.service';
import { GitHubGistService } from '../../../app/github-gist.service';
import { Gist } from '../../../app/gist.model';
import { WasCachedStringPipe } from "../../../app/was-cached-string.pipe";
import { WasCachedHighlightDirective } from "../../../app/was-cached-highlight.directive";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
class MockGitHubUserService { // extends GitHubUserService {
  private baseUsername: string = 'mock';
  public apiCalls: number = 0;

  public getApiUrl(): string {
    return 'http://localhost/';
  }

  isUserCached(user) {
    return false;
  }

  clearUserCache() {
  }

  getUserBasename() {
    return this.baseUsername;
  }

  getBaseUserDefault() {
    return 'mock';
  }

  getUser() {
    return {}
  }

  isCaching: boolean = false;
  cacheOnly: boolean = false;
  user$ = new EventEmitter(true);
  errorMessage$ = new EventEmitter(true);
  public http: HttpClient;
}

@Injectable({providedIn: 'root'})
class MockGitHubGistService { // extends GitHubGistService {
  public status: boolean;
  @Output() public gist$: any = {
    subscribe() {
      this.status = true;
      return this.status;
    },
    unsubscribe() {
      this.status = false;
      return this.status;
    },
  };

  public isGistCached(gist) {
    return {}
  };

  public getGist(gist) {
    return {}
  };

  public clearGistCache(gist) {
    return false;
  };

  errorMessage$ = new EventEmitter(true);

  @Input() isCaching: boolean = true;
  @Input() cacheOnly: boolean = false;
  public apiCalls: number = 0;
  public http: HttpClient;
}

@Directive({
  selector: '[appWasCachedHighlight]'
})
export class MockWasCachedHighlightDirective {
}

@Pipe({
  name: 'wasCachedString'
})
export class MockWasCachedStringPipe implements PipeTransform {
  transform(value: boolean): string {
    return 'wasCachedStringPipe';
  }
}

describe('GistComponent', () => {
  let userService = new MockGitHubUserService()
  let gistService = new MockGitHubGistService()

  let httpMock: HttpTestingController;

  let component: GistComponent;
  let fixture: ComponentFixture<GistComponent>;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GistComponent,
        WasCachedHighlightDirective,
        WasCachedStringPipe
      ],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: GitHubUserService, useValue: userService}, //replace with custom mock instance
        {provider: GitHubGistService, useValue: gistService}, //replace with custom mock instance
        {provider: HttpClient, useClass: HttpClientTestingModule},
        {provide: WasCachedHighlightDirective, useClass: MockWasCachedHighlightDirective}, //replace with custom mock
        {provide: WasCachedStringPipe, useClass: MockWasCachedStringPipe}, //replace with custom mock
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistComponent);
    component = fixture.componentInstance;

    httpMock = TestBed.inject(HttpTestingController);

    dom = fixture.debugElement.nativeElement;

    component.gist = Gist.constructor();
    component.gist.id = '0';
    component.gist.content = 'Lorem';

    fixture.detectChanges();

    spyOn(gistService, 'isGistCached').and.returnValue(false);
    spyOn(userService, 'isUserCached').and.returnValue(false);

    spyOn(gistService, 'getGist');
  });

  afterEach(() => {
    httpMock.verify();
  });

  it(`should do setup with mocks`, () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
    expect(dom).toBeTruthy();
    expect(httpMock).toBeTruthy();

    expect(userService).toBeTruthy();
    expect(gistService).toBeTruthy();

    expect(userService.getUserBasename()).toEqual('mock');
  });

  describe('Given sample data, the HTML', () => {
    beforeEach(() => {
      const gist = Gist.constructor();
      gist.id = 0;
      gist.content = 'Lorem Ipsum';
      component.gist = gist;
      fixture.detectChanges();
    });

    it(`should render h2 title`, () => {
      expect(dom.querySelector('h2').textContent).toContain('Gist');
    });

    it(`should render div content`, () => {
      expect(dom.querySelector('.content').textContent).toContain('Lorem Ipsum');
    });

  });

  describe('Given sample data, the component', () => {
    beforeEach(() => {
      const gist = Gist.constructor();
      gist.id = 0;
      gist.content = 'Lorem Ipsum';
      component.gist = gist;
      fixture.detectChanges();
    });

    it(`should render ngOnInit`, () => {
      component.ngOnInit();
      const gist = Gist.constructor();
      gist.id = 0;
      gistService.getGist(gist);
      expect(gistService.getGist).toHaveBeenCalled();
    });

    it(`should render ngOnDestroy`, () => {
      component.ngOnDestroy();
      expect(gistService.getGist).not.toHaveBeenCalled();
    });

  });

});
