import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserFollowingsComponent } from './user-followings.component';
import {TOAST_CONFIG} from "ngx-toastr";

xdescribe('UserFollowingsComponent', () => {
  let component: UserFollowingsComponent;
  let fixture: ComponentFixture<UserFollowingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowingsComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: TOAST_CONFIG, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
