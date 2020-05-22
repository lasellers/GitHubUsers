import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGistsComponent } from './user-gists.component';

describe('UserGistsComponent', () => {
  let component: UserGistsComponent;
  let fixture: ComponentFixture<UserGistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGistsComponent ]
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
