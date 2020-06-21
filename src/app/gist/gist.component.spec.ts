import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GistComponent } from './gist.component';
import { GitHubUserService } from '../github-user.service';
import { GitHubGistService } from '../github-gist.service';
import { Gist } from '../gist.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Output } from '@angular/core';

class MockGitHubUserService { // extends GitHubUserService {
  public token: string = 'mock';

  public getApiUrl() {
    return 'http://localhost';
  }
}

class MockGitHubGistService { // extends GitHubGistService {
  public token: string = 'mock';
  public status: boolean;
  @Output() public gist$ = {
    subscribe() {
      this.status = true;
      return this.status;
    },
    unsubscribe() {
      this.status = false;
      return this.status;
    },
  };
}

describe('GistComponent', () => {
  let userService: GitHubUserService;
  let gistService: GitHubGistService;
  let httpMock: HttpTestingController;

  let component: GistComponent;
  let fixture: ComponentFixture<GistComponent>;
  let dom: HTMLElement;

  /*
    const myMockedJSON = [];
    spyOn($,'ajax').and.callFake(()=>{
      var d = $.deferred();
      d.resolve(myMockedJSON);
      d.promise();
    });*/


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GistComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: GitHubUserService, useClass: MockGitHubUserService},
        {provider: GitHubGistService, useClass: MockGitHubGistService},
        {provider: HttpClient, useClass: HttpClientTestingModule},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(GitHubUserService);
    gistService = TestBed.inject(GitHubGistService);

    dom = fixture.debugElement.nativeElement;

    spyOn(gistService, 'isGistCached').and.returnValue(false);
    spyOn(userService, 'isUserCached').and.returnValue(false);

    spyOn(gistService, 'getGist');
  });

  afterEach(() => {
    httpMock.verify();
  });

  beforeEach(() => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
    expect(dom).toBeTruthy();
    expect(userService).toBeTruthy();
    expect(gistService).toBeTruthy();
    expect(httpMock).toBeTruthy();
  });

  describe('Given sample data, the HTML', () => {
    beforeEach(() => {
      const gist = Gist.constructor();
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
      gist.content = 'Lorem Ipsum';
      component.gist = gist;
      fixture.detectChanges();
    });

    it(`should render ngOnInit`, () => {
      component.ngOnInit();
      const gist = Gist.constructor();
      gistService.getGist(gist);
      expect(gistService.getGist).toHaveBeenCalled();

      /*
            spyOn(gistService.gist$, 'next');
      gistService.getGist2(gist).subscribe(gist2 => {
        expect(gistService.gist$.next).toHaveBeenCalled();
      });

       */
    });

    it(`should render ngOnDestroy`, () => {
      component.ngOnDestroy();
      expect(gistService.getGist).not.toHaveBeenCalled();
    });

  });

});
