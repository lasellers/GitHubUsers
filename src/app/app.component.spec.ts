/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Toast, TOAST_CONFIG, ToastInjector, ToastrModule, ToastrService } from 'ngx-toastr';
import { UserFollowingsComponent } from './user-followings/user-followings.component';
import { GitHubUserService } from './github-user.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { HttpClient } from '@angular/common/http';
import { Component, Directive, EventEmitter, Injectable, Input, OnDestroy, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { UserGistsComponent } from './user-gists/user-gists.component';
import { GitHubGistsService } from './github-gists.service';
import { WasCachedPipe } from './was-cached.pipe';
import { User } from './user.model';
import { GitHubFollowersService } from './github-followers.service';
import { GitHubFollowingsService } from './github-followings.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { WasCachedHighlightDirective } from './was-cached-highlight.directive';
import { FilterFollowersPipe } from './filter-followers.pipe';
import { Gist } from './gist.model';
import { GitHubGistService } from './github-gist.service';
import { GistComponent } from './gist/gist.component';

class MockHttpClient {
  public get() {
    return of();
  }
}

const USER: User = {
  id: 1,
  login: 'mock',
  followers: 1,
  following: 2,
  name: 'Mock P. Smith'
};

@Injectable()
class MockGitHubUserService {
  public baseUsername: string = 'mock';

  public getUser(username: string) {
    return of(USER);
  }

  public getApiUrl() {
    return 'http://localhost';
  }

  public isUserCached() {
    return true;
  }

  public getUserBasenameDefault() {
    return this.baseUsername;
  }

  public getUserBasename() {
    return this.baseUsername;
  }
}

@Injectable()
class MockGitHubGistsService {
  public baseUsername: string = 'mock';
  public gists$ = new EventEmitter(true);
  public gistsCached$ = new EventEmitter(true);

  public isGistsCached(username: string) {
    return false;
  }

  public getGists(username: string) {
    return of();
  }
}

@Injectable()
class MockGitHubGistService {
  public baseUsername: string = 'mock';
  public gist$ = new EventEmitter(true);
  public gistCached$ = new EventEmitter(true);

  public isGistCached(username: string) {
    return false;
  }

  public getGist(username: string) {
    return of();
  }
}

@Injectable()
class MockGitHubFollowersService {
  public baseUsername: string = 'mock';
  public followers$ = new EventEmitter(true);
  public followersCached$ = new EventEmitter(true);

  public isFollowersCached(username: string) {
    return false;
  }

  public getFollowers(username: string) {
    return of();
  }
}

@Injectable()
class MockGitHubFollowingsService {
  public baseUsername: string = 'mock';
  public followings$ = new EventEmitter(true);
  public followingsCached$ = new EventEmitter(true);

  public isFollowingsCached(username: string) {
    return false;
  }

  public getFollowings(username: string) {
    return of();
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fa-icon',
  template: ''
})
class MockFaIconComponent {
}

@Injectable()
class MockToastrService {
  public success() {
  }

  public info() {
  }

  public warning() {
  }
}

@Pipe({
  name: 'wasCached'
})
export class MockWasCachedPipe implements PipeTransform {
  transform(value: boolean): string {
    return 'WasCachedPipe';
  }
}

@Directive({
  selector: '[appWasCachedHighlight]'
})
export class MockWasCachedHighlightDirective {
}

@Pipe({
  name: 'filterFollowers',
  // pure: false
})
export class MockFilterFollowersPipe implements PipeTransform {
  transform(filters: any, filterString: string, propName: string): any {
    return filters;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-detail',
  template: '<p>[MockUserDetailComponent]</p>',
})
export class MockUserDetailComponent {
  @Input() baseUsername;
  @Output() notifyChangeBaseUsername: EventEmitter<string> = new EventEmitter<string>();
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-user-followers',
  template: '<p>[MockUserFollowersComponent]</p>',
})
export class MockUserFollowersComponent {
  @Input() baseUsername;
  @Input() filterString: string = '';
  @Output() notifyChangeBaseUsername = new EventEmitter();
  @Output() notifyShowBaseUsername = new EventEmitter();
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-user-followings',
  template: '<p>[MockUserFollowingsComponent]</p>',
})
export class MockUserFollowingsComponent {
  @Input() baseUsername;
  @Input() filterString: string = '';
  @Output() notifyChangeBaseUsername = new EventEmitter();
  @Output() notifyShowBaseUsername = new EventEmitter();
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-user-gists',
  template: '<p>[MockUserGistsComponent]</p>',
})
export class MockUserGistsComponent {
  @Input() baseUsername;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-gist',
  template: '<p>[MockGistComponent]</p>',
})
export class MockGistComponent {
  @Output() errorMessage$ = new EventEmitter(true);
  gist: Gist;
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dom: HTMLElement;

  let userService: GitHubUserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FaIconComponent,
        WasCachedPipe,
        UserFollowingsComponent,
        UserFollowersComponent,
        UserDetailComponent,
        UserGistsComponent,
        GistComponent,
        FilterFollowersPipe
      ],
      imports: [HttpClientTestingModule, FontAwesomeTestingModule],
      providers: [
        {provide: ToastrService, useClass: MockToastrService},
        {provide: TOAST_CONFIG, useValue: {}},
        {provide: HttpClient, useClass: MockHttpClient},
        {provide: FaIconComponent, useClass: MockFaIconComponent},
        {provide: WasCachedPipe, useClass: MockWasCachedPipe},
        {provide: WasCachedHighlightDirective, useClass: MockWasCachedHighlightDirective},
        {provide: GitHubGistsService, useClass: MockGitHubGistsService},
        {provide: GitHubFollowersService, useClass: MockGitHubFollowersService},
        {provide: GitHubFollowingsService, useClass: MockGitHubFollowingsService},
        {provide: FilterFollowersPipe, useClass: MockFilterFollowersPipe},

        {provide: UserDetailComponent, useClass: MockUserDetailComponent},
        {provide: UserFollowersComponent, useClass: MockUserFollowersComponent},
        {provide: UserFollowingsComponent, useClass: MockUserFollowingsComponent},
        {provide: UserGistsComponent, useClass: MockUserGistsComponent},
        {provide: GistComponent, useClass: MockGistComponent},
      ]
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      dom = fixture.debugElement.nativeElement;

      fixture.detectChanges();

      userService = TestBed.inject(GitHubUserService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  });

  fdescribe('setup', () => {

    it('should create the fixture', async(() => {
      expect(fixture).toBeTruthy();
    }));

    it('should create the component', async(() => {
      expect(component).toBeTruthy();
    }));

    it('should create the dom', async(() => {
      expect(dom).toBeTruthy();
    }));

  });

  describe('methods', () => {

    it('should have loadUser', () => {
      expect(typeof component.loadUser === 'function').toBeTrue();
    });

    it('should have onErrorMessage', () => {
      expect(typeof component.onErrorMessage === 'function').toBeTrue();
    });

    it('should have onErrorMessage', () => {
      expect(typeof component.onErrorMessage === 'function').toBeTrue();
    });

    it('should have clearCache', () => {
      expect(typeof component.clearCache === 'function').toBeTrue();
    });

    it('should have onChangeBaseUsername', () => {
      expect(typeof component.onChangeBaseUsername === 'function').toBeTrue();
    });

    it('should have onShowBaseUsername', () => {
      expect(typeof component.onShowBaseUsername === 'function').toBeTrue();
    });

    it('should have changeBaseUsername', () => {
      expect(typeof component.changeBaseUsername === 'function').toBeTrue();
    });

    it('should have changeBaseUsernameToDefault', () => {
      expect(typeof component.changeBaseUsernameToDefault === 'function').toBeTrue();
    });

    it('should have changeCaching', () => {
      expect(typeof component.changeCaching === 'function').toBeTrue();
    });

  });

  it(`should have as title 'GitHub Users'`, async(() => {
    expect(component.title).toEqual('GitHub Users');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(dom.querySelector('h1').textContent).toContain('GitHub Users');
  }));

});
