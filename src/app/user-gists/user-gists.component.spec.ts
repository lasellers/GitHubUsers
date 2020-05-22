import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGistsComponent } from './user-gists.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {TOAST_CONFIG} from "ngx-toastr";

xdescribe('UserGistsComponent', () => {
  let component: UserGistsComponent;
  let fixture: ComponentFixture<UserGistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGistsComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        {provider: TOAST_CONFIG, useValue: {} },
      ]
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
});
