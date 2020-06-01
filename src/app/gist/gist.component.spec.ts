import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GistComponent } from './gist.component';
import { GitHubUserService } from '../github-user.service';
import { GitHubGistsService } from "../github-gists.service";
import { GithubGistService } from "../github-gist.service";

class GitHubUserServiceMock {
}

class GitHubGistServiceMock {
  public gist$ = {
    subscribe() {
      return true;
    },
    unsubscribe() {
      return true;
    },
  }
}

fdescribe('GistComponent', () => {
  let injector: TestBed;
  let service2: GitHubUserService;
  let service: GitHubGistsService;
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
    const service = new GitHubUserServiceMock();

//    spyOn()

    TestBed.configureTestingModule({
      declarations: [GistComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: GitHubUserService, useValue: service},
        {provider: GithubGistService, useValue: GitHubGistServiceMock},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistComponent);
    // fixture = TestBed.createComponent(new GistComponent(this.service));
    component = fixture.componentInstance;
    fixture.detectChanges();

    /*
        injector = getTestBed();
        service = injector.get(GitHubGistsService);
        httpMock = injector.get(HttpTestingController);
    */
    service = TestBed.inject(GitHubGistsService);
    httpMock = TestBed.inject(HttpTestingController);

    dom = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    httpMock.verify();
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
