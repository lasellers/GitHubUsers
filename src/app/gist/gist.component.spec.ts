import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GistComponent } from './gist.component';
import { GitHubUserService } from '../git-hub-user.service';
import { GithubGistsService} from "../github-gists.service";

class GitHubUserServiceMock {
  // blankGist() {
  // }
}

xdescribe('GistComponent', () => {
  let injector: TestBed;
  let service2: GitHubUserService;
  let service: GithubGistsService;
  let httpMock: HttpTestingController;

  let component: GistComponent;
  let fixture: ComponentFixture<GistComponent>;

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
    service = injector.get(GithubGistsService);
    httpMock = injector.get(HttpTestingController);
*/
    service = TestBed.inject(GithubGistsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
