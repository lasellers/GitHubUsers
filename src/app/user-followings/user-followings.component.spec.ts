import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserFollowingsComponent } from './user-followings.component';
import { User } from '../user.model';
import { of } from 'rxjs';
import { Component, Directive, ElementRef, Injectable } from '@angular/core';
import { UserFollowersComponent } from '../user-followers/user-followers.component';
import { GitHubUserService } from '../github-user.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FilterFollowersPipe } from '../filter-followers.pipe';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

const FOLLOWINGS: User[] = [{
  id: 1,
  login: 'mock',
  name: 'Mock P. Smith',
  hireable: true,
  public_repos: 1,
  public_gists: 2,
  followers: 3,
  following: 4,
  created_at: '2020-1-2',
  updated_at: '2020-1-2',
  bio: 'my bio',
  blog: 'my blog',
  company: 'my company',
  location: 'my location',
  email: 'mock@email.com'
}, {
  id: 2,
  login: 'mock2',
  name: 'Mock P. Johnson',
  hireable: false,
  public_repos: 1,
  public_gists: 2,
  followers: 3,
  following: 4,
  created_at: '2020-1-2',
  updated_at: '2020-1-2',
  bio: 'my bio 2',
  blog: 'my blog 2',
  company: 'my company 2',
  location: 'my location 2',
  email: 'mock2@email.com'
}];

class MockHttpClient {
  public get() {
    return of(FOLLOWINGS);
  }
}

@Component({
  selector: 'fa-icon',
  template: ''
})
class MockFaIconComponent {
}

@Injectable()
class MockGitHubUserService { // extends GitHubUserService {
  public baseUsername: string = 'mock baseUsername';

  /*
  static getUser(username: string) {
    switch (username) {
      case 'lasellers':
        return of(); // 1,2,3);
      default:
        return of();
    }
  }

  public getUser(username: string) {
    switch (username) {
      case 'lasellers':
        return of(); // 1,2,3);
      default:
        return of();
    }
  }*/

  public getApiUrl() {
    return 'http://localhost';
  }

  public getUserBasename() {
    return this.baseUsername;
  }
}

/*
@Pipe({name: 'filterFollowings'})
class MockPipe implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}*/

@Directive({
  selector: '[ngbTooltip]'
})
export class MockNgbTooltipDirective {
  public elementRef: ElementRef;
  constructor(
    elementRef: ElementRef
  ) {
    this.elementRef = elementRef;
  }
}

describe('UserFollowersComponent', () => {
  let component: UserFollowingsComponent;
  let fixture: ComponentFixture<UserFollowingsComponent>;
  let dom: HTMLElement;

  let userService: GitHubUserService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFollowingsComponent, FaIconComponent, FilterFollowersPipe, MockNgbTooltipDirective],
      imports: [HttpClientTestingModule, FontAwesomeTestingModule, NgbModule],
      providers: [
        {provide: HttpClient, useClass: MockHttpClient},
        {provide: FaIconComponent, useClass: MockFaIconComponent}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = TestBed.inject(GitHubUserService);
    httpMock = TestBed.inject(HttpTestingController);

    dom = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('setup', () => {
    beforeEach(() => {
      component.baseUsername = 'lorem';
      fixture.detectChanges();
    });

    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should create fixture', () => {
      expect(fixture).toBeTruthy();
    });

    it('should create dom', () => {
      expect(dom).toBeTruthy();
    });

    it('should create userService', () => {
      expect(userService).toBeTruthy();
    });

  });

  describe('mock followers of lasellers', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      component.followings = FOLLOWINGS;
      fixture.detectChanges();
    });

    it(`should render 2 rows`, () => {
      const rows = dom.querySelectorAll('tr');
      expect(rows.length).toBe(2);
    });

    it(`should render names in rows`, () => {
      const rows = dom.querySelectorAll('tr span');
      expect(rows.length).toBe(2);
      for (const rowKey in rows) {
        if (rows.hasOwnProperty(rowKey)) {
          expect(rows[rowKey]);
          expect(rows[rowKey].textContent).toContain(FOLLOWINGS[rowKey].login);
        }
      }
    });

    it(`should render followings title`, () => {
      const text = dom.querySelector('h3').textContent;
      expect(text).toContain('Followings');
    });

    it(`should render Buttons`, () => {
      const text = dom.querySelector('button').textContent;
      expect(text).toContain('User');
    });

  });

  describe('mock user null', () => {
    beforeEach(() => {
      component.baseUsername = '';
      component.followings = [];
      fixture.detectChanges();
    });

    it(`should NOT render any rows`, () => {
      const rows = dom.querySelectorAll('tr');
      expect(rows.length).toBe(0);
    });

  });

});

