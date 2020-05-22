import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserFollowersComponent } from './user-followers.component';
import {TOAST_CONFIG} from "ngx-toastr";

xdescribe('UserFollowersComponent', () => {
  let component: UserFollowersComponent;
  let fixture: ComponentFixture<UserFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowersComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: TOAST_CONFIG, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
