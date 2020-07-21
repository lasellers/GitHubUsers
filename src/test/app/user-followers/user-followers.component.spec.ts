import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import {
  Component,
  Directive,
  ElementRef,
  Injectable,
  Input,
  OnChanges,
  OnInit,
  Pipe,
  PipeTransform,
  SimpleChanges
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

import { FilterFollowersPipe } from '../../../../src/app/filter-followers.pipe';
import { UserFollowersComponent } from '../../../app/components/user-followers/user-followers.component';
import { User } from '../../../../src/app/user.model';
import { GitHubUserService } from '../../../../src/app/github-user.service';

const FOLLOWERS: User[] = [{
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
    return of(FOLLOWERS);
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

  public getApiUrl() {
    return 'http://localhost';
  }

  public getUserBasename() {
    return this.baseUsername;
  }
}

/*
@Pipe({name: 'filterFollowers'})
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
  let component: UserFollowersComponent;
  let fixture: ComponentFixture<UserFollowersComponent>;
  let dom: HTMLElement;

  let userService: GitHubUserService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFollowersComponent, FaIconComponent, FilterFollowersPipe, MockNgbTooltipDirective],
      imports: [HttpClientTestingModule, FontAwesomeTestingModule, NgbModule],
      providers: [
        {provide: HttpClient, useClass: MockHttpClient},
        {provide: FaIconComponent, useClass: MockFaIconComponent}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userService = TestBed.inject(GitHubUserService);
    httpMock = TestBed.inject(HttpTestingController);

    dom = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Given our feature tests setup', () => {
    beforeEach(() => {
      component.baseUsername = 'lorem';
      fixture.detectChanges();
    });

    /* it('should start with all testing variables not null', () => {
      expect(fixture).toBeTruthy();
      expect(component).toBeTruthy();
      expect(dom).toBeTruthy();
      expect(userService).toBeTruthy();
      expect(httpMock).toBeTruthy();
    }); */

  });

  describe('Given we have a user with two followers', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      component.followers = FOLLOWERS;
      fixture.detectChanges();
    });

    it(`should render two rows`, () => {
      const rows = dom.querySelectorAll('tr');
      expect(rows.length).toBe(2);
    });

    it(`should render names in rows`, () => {
      const rows = dom.querySelectorAll('tr span');
      expect(rows.length).toBe(2);
      for (const rowKey in rows) {
        if (rows.hasOwnProperty(rowKey)) {
          expect(rows[rowKey]);
          expect(rows[rowKey].textContent).toContain(FOLLOWERS[rowKey].login);
        }
      }
    });

    it(`should render followers title`, () => {
      const text = dom.querySelector('h3').textContent;
      expect(text).toContain('Followers');
    });

    it(`should render Buttons`, () => {
      const text = dom.querySelector('button').textContent;
      expect(text).toContain('Switch To');
    });

  });

  describe('Given we have no user or followers', () => {
    beforeEach(() => {
      component.baseUsername = '';
      component.followers = [];
      fixture.detectChanges();
    });

    it(`should NOT render any rows`, () => {
      const rows = dom.querySelectorAll('tr');
      expect(rows.length).toBe(0);
    });

  });

  describe('Given isUserWasCached with three users', () => {
    beforeEach( () => {
      component.cachedUsers = ['Able', 'Baker', 'Charlie'];
    });

    it('isUserWasCached exists', () => {
      expect(typeof component.isUserWasCached !== 'undefined').toBeTrue();
    });

    it('should find the first mentioned', () => {
      expect(component.isUserWasCached('Able')).toBeTrue();
    });

    it('should find the last mentioned', () => {
      expect(component.isUserWasCached('Charlie')).toBeTrue();
    });

    it('should not find one not in list', () => {
      expect(component.isUserWasCached('Zed')).toBeFalse();
    });

  });

  describe('Given changeBaseUser', () => {

    it('changeBaseUser exists', () => {
      expect(typeof component.changeBaseUser !== 'undefined').toBeTrue();
    });

  });

  describe('Given showBaseUsername', () => {

    it('showBaseUsername exists', () => {
      expect(typeof component.showBaseUsername !== 'undefined').toBeTrue();
    });

  });

});

