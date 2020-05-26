import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GistComponent } from './gist.component';
import { GitHubUserService } from '../git-hub-user.service';

class GitHubUserServiceMock {
  blankGist() {
  }
}

xdescribe('GistComponent', () => {
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
