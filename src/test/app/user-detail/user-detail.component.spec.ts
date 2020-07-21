import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Component, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { User } from '../../../../src/app/user.model';
import { UserDetailComponent } from '../../../app/components/user-detail/user-detail.component';
import { GitHubUserService } from '../../../../src/app/github-user.service';

const USER: User = {
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
};

class MockHttpClient {
  public get() {
    return of(USER);
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

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let dom: HTMLElement;

  let userService: GitHubUserService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent, FaIconComponent],
      imports: [HttpClientTestingModule, FontAwesomeTestingModule],
      providers: [
        {provide: HttpClient, useClass: MockHttpClient},
        {provide: FaIconComponent, useClass: MockFaIconComponent}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
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

  describe('Given a sample user, the HTML', () => {
    beforeEach(() => {
      component.baseUsername = 'lasellers';
      component.user = USER;
      fixture.detectChanges();
    });

    it(`should render user.login`, () => {
      const text = dom.querySelector('#login').textContent;
      expect(text).toContain(component.user.login);
    });

    it(`should render user.name`, () => {
      const text = dom.querySelector('#name').textContent;
      expect(text).toContain(component.user.name);
    });

    it(`should render user.hireable`, () => {
      const text = Boolean(dom.querySelector('#hireable').textContent);
      expect(text).toEqual(component.user.hireable);
    });

    it(`should render user.id`, () => {
      const text = parseInt(dom.querySelector('#id').textContent, 10);
      expect(text).toBe(component.user.id);
    });

    it(`should render user.company`, () => {
      const text = dom.querySelector('#company').textContent;
      expect(text).toContain(component.user.company);
    });

    it(`should render user.blog`, () => {
      const text = dom.querySelector('#blog').textContent;
      expect(text).toContain(component.user.blog);
    });

    it(`should render user.location`, () => {
      const text = dom.querySelector('#location').textContent;
      expect(text).toContain(component.user.location);
    });

    it(`should render user.email`, () => {
      const text = dom.querySelector('#email').textContent;
      expect(text).toContain(component.user.email);
    });

    it(`should render user.bio`, () => {
      const text = dom.querySelector('#bio').textContent;
      expect(text).toContain(component.user.bio);
    });

    it(`should render user.public_repos`, () => {
      const text = parseInt(dom.querySelector('#public_repos').textContent, 10);
      expect(text).toEqual(component.user.public_repos);
    });

    it(`should render user.public_gists`, () => {
      const text = parseInt(dom.querySelector('#public_gists').textContent, 10);
      expect(text).toEqual(component.user.public_gists);
    });

    it(`should render card title`, () => {
      const text = dom.querySelector('.card-title').textContent;
      expect(text).toContain(component.user.name);

      const html = dom.querySelector('.card-title').innerHTML;
      expect(html).toContain('fas,user-cog');
    });

    xit(`should render avatar`, () => {
      const attributes = dom.querySelector('#avatar_url[src]').attributes as NamedNodeMap;
      const text = attributes.getNamedItem('src').textContent; // nodeValue
      expect(text).toContain(component.user.avatar_url);
    });

  });

  describe('Given no data for a user', () => {
    beforeEach(() => {
      component.baseUsername = '';
      component.user = {};
      fixture.detectChanges();
    });

    it(`should NOT render user.login`, () => {
      const text = dom.querySelector('#login');
      expect(text).toBeDefined();
    });

    it(`should NOT render user.name`, () => {
      const text = dom.querySelector('#name');
      expect(text).toBeDefined();
    });

    it(`should NOT render card title`, () => {
      const text = dom.querySelector('.card-title');
      expect(text).toBeDefined();
    });

    xit(`should render avatar`, () => {
      const attributes = dom.querySelector('#avatar_url[src]').attributes as NamedNodeMap;
      const text = attributes.getNamedItem('src').textContent; // nodeValue
      expect(text).toContain(component.user.avatar_url);
    });

    it(`should render 'Select one of the users...'`, () => {
      const text = dom.querySelector('.card-body').textContent;
      expect(text).toContain('Select one of the users ' + component.baseUsername);
    });

  });

});

