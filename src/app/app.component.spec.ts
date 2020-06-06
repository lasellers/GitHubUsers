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
import {
  Component,
  Directive,
  EventEmitter,
  Injectable,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Pipe,
  PipeTransform
} from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MockNgbTooltipDirective } from './user-followings/user-followings.component.spec';
import { getClassName } from 'codelyzer/util/utils';
import { By } from '@angular/platform-browser';

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

  public error() {
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

  constructor() {
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-gist',
  template: '<p>[MockGistComponent]</p>',
})
export class MockGistComponent {
  @Output() errorMessage$ = new EventEmitter(true);
  gist: Gist;
  constructor() {
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dom: HTMLElement;

  let userService: GitHubUserService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WasCachedPipe,
        UserFollowingsComponent,
        UserFollowersComponent,
        UserDetailComponent,
        UserGistsComponent,
        GistComponent,
        FilterFollowersPipe,
        WasCachedHighlightDirective,
        FaIconComponent, // fa-icon
        MockNgbTooltipDirective, // ngbtooltip
        // NO_ERRORS_SCHEMA
      ],
      imports: [
        HttpClientTestingModule,
        FormsModule, // for ngModel
        FontAwesomeTestingModule,
        NgbModule // ng bootstrap 4
      ],
      providers: [
        {provide: ToastrService, useClass: MockToastrService}, // ngx-toaster
        {provide: TOAST_CONFIG, useValue: {}}, // ngx-toaster

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
    }).compileComponents().then(() => {

      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      component = fixture.debugElement.componentInstance;
      dom = fixture.debugElement.nativeElement;

      httpMock = TestBed.inject(HttpTestingController);

      userService = TestBed.inject(GitHubUserService);

    });
  });

  describe('setup', () => {

    it('should create the fixture', (() => {
      expect(fixture).toBeTruthy();
    }));

    it('should create the component', (() => {
      expect(component).toBeTruthy();
    }));

    it('should create the dom', (() => {
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
    expect(component.title).toEqual('githubusers');
  }));

  xit('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(dom.querySelector('h1').textContent).toContain('GitHub Users');
  }));

  describe('components', () => {

    it('should have UserDetailComponent', () => {
      fixture.detectChanges();
      const mock = TestBed.inject(UserDetailComponent);
      expect(mock.constructor.name).toEqual('MockUserDetailComponent');

      expect(dom.querySelector('user-detail')).toBeDefined();

//      expect(dom.querySelector('user-detail').textContent).toEqual('[UserDetailComponent]');
    });

    it('should have UserFollowersComponent', () => {
      fixture.detectChanges();

      const mock = TestBed.inject(UserFollowersComponent);
      expect(mock.constructor.name).toEqual('MockUserFollowersComponent');

      expect(dom.querySelector('user-followers')).toBeDefined();
    });

    it('should have UserFollowingsComponent', () => {
      fixture.detectChanges();

      const mock = TestBed.inject(UserFollowingsComponent);
      expect(mock.constructor.name).toEqual('MockUserFollowingsComponent');

      expect(dom.querySelector('user-followings')).toBeDefined();
    });

    it('should have UserGistsComponent', () => {
      fixture.detectChanges();

      const mock = TestBed.inject(UserGistsComponent);
      expect(mock.constructor.name).toEqual('MockUserGistsComponent');

      expect(dom.querySelector('app-user-gists')).toBeDefined();
      // expect(dom.querySelector('app-user-gists').textContent).toEqual('[UserGistsComponent]');
    });

    it('should have GistComponent', () => {
      fixture.detectChanges();

      const mock = TestBed.inject(GistComponent);
      expect(mock.constructor.name).toEqual('MockGistComponent');

      expect(dom.querySelector('app-gist')).toBeDefined();
//      expect(dom.querySelector('app-gist').textContent).toEqual('[GistComponent]');
    });

  });

});
