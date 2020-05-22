import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {UserDetailComponent} from './user-detail.component';
import {GitHubUserService} from "../git-hub-user.service";
import {TOAST_CONFIG} from "ngx-toastr";

xdescribe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  let injector: TestBed;
  let service: GitHubUserService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: TOAST_CONFIG, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    injector = getTestBed();
    service = injector.get(GitHubUserService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
  //  httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
