/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Toast, TOAST_CONFIG, ToastInjector, ToastrModule, ToastrService } from 'ngx-toastr';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  Directive, ElementRef,
  EventEmitter,
  Injectable,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Pipe,
  PipeTransform
} from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { getClassName } from 'codelyzer/util/utils';
import { By } from '@angular/platform-browser';

import { UserFollowingsComponent } from '../../../src/app/user-followings/user-followings.component';
import { GitHubUserService } from '../../../src/app/github-user.service';
import { AppComponent } from '../../../src/app/app.component';
import { UserGistsComponent } from '../../../src/app/user-gists/user-gists.component';
import { GitHubGistsService } from '../../../src/app/github-gists.service';
import { WasCachedPipe } from '../../../src/app/was-cached.pipe';
import { User } from '../../../src/app/user.model';
import { GitHubFollowersService } from '../../../src/app/github-followers.service';
import { GitHubFollowingsService } from '../../../src/app/github-followings.service';
import { UserDetailComponent } from '../../../src/app/user-detail/user-detail.component';
import { UserFollowersComponent } from '../../../src/app/user-followers/user-followers.component';
import { WasCachedHighlightDirective } from '../../../src/app/was-cached-highlight.directive';
import { FilterFollowersPipe } from '../../../src/app/filter-followers.pipe';
import { Gist } from '../../../src/app/gist.model';
import { GitHubGistService } from '../../../src/app/github-gist.service';
import { GistComponent } from '../../../src/app/gist/gist.component';

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

@Injectable()
class MockGitHubUserService {
  public baseUsername: string = 'mock';

  public getUser(username: string): Observable<any> {
    return of(USER);
  }

  public getApiUrl(): string {
    return 'http://localhost';
  }

  public isUserCached(): boolean {
    return true;
  }

  public getUserBasenameDefault(): string {
    return this.baseUsername;
  }

  public getUserBasename(): string {
    return this.baseUsername;
  }
}

@Injectable()
class MockGitHubGistsService {
  public baseUsername: string = 'mock';
  public gists$ = new EventEmitter(true);
  public gistsCached$ = new EventEmitter(true);

  public isGistsCached(username: string): boolean {
    return false;
  }

  public getGists(username: string): Observable<any> {
    return of();
  }
}

@Injectable()
class MockGitHubGistService {
  public baseUsername: string = 'mock';
  public gist$ = new Subject();

  public isGistCached(username: string): boolean {
    return false;
  }

  public getGist(username: string): Observable<any> {
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

  public isFollowingsCached(username: string): boolean {
    return false;
  }

  public getFollowings(username: string): Observable<any> {
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
  public success(): void {
  }

  public info(): void {
  }

  public warning(): void {
  }

  public error(): void {
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
  transform(filters: { id, name }[], filterString: string, propName: string): any {
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
  @Output() notifySwitchToUser: EventEmitter<string> = new EventEmitter<string>();
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-user-followers',
  template: '<p>[MockUserFollowersComponent]</p>',
})
export class MockUserFollowersComponent {
  @Input() baseUsername;
  @Input() filterString: string = '';
  @Output() notifySwitchToUser = new EventEmitter();
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
  @Output() notifySwitchToUser = new EventEmitter();
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

  beforeEach(() => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
    expect(dom).toBeTruthy();
    expect(userService).toBeTruthy();
    expect(httpMock).toBeTruthy();
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

    it('should have onSwitchToUser', () => {
      console.log(typeof component.onSwitchToUser);
      expect(typeof component.onSwitchToUser === 'function').toBeTrue();
    });

    it('should have onShowBaseUsername', () => {
      expect(typeof component.onShowBaseUsername === 'function').toBeTrue();
    });

    it('should have switchToUserDefault', () => {
      expect(typeof component.switchToUserDefault === 'function').toBeTrue();
    });

    it('should have changeCaching', () => {
      expect(typeof component.changeCaching === 'function').toBeTrue();
    });

    it('should have clearGistCache', () => {
      expect(typeof component.clearGistCache === 'function').toBeTrue();
    });

  });

  it(`should have as title 'GitHub Users'`, (() => {
    expect(component.title).toEqual('githubusers');
  }));

  it('should render title in a nav a tag', (() => {
    fixture.detectChanges();

    expect(dom.querySelector('nav a').textContent).toContain('githubusers');
  }));

  describe('components', () => {

    it('should have UserDetailComponent', () => {
      fixture.detectChanges();

      const mock = TestBed.inject(UserDetailComponent);
      expect(mock.constructor.name).toEqual('MockUserDetailComponent');
      expect(dom.querySelector('user-detail')).toBeDefined();

      // expect(dom.querySelector('user-detail').textContent).toEqual('[UserDetailComponent]');
    });

    it('should have UserFollowersComponent', () => {
      fixture.detectChanges();

      const mock = TestBed.inject(UserFollowersComponent);
      expect(mock.constructor.name).toEqual('MockUserFollowersComponent');
      expect(dom.querySelector('user-followers')).toBeDefined();

      // expect(dom.querySelector('app-user-followers').textContent).toEqual('[UserFollowersComponent]');
    });

    it('should have UserFollowingsComponent', () => {
      fixture.detectChanges();

      const mock = TestBed.inject(UserFollowingsComponent);
      expect(mock.constructor.name).toEqual('MockUserFollowingsComponent');
      expect(dom.querySelector('user-followings')).toBeDefined();

      // expect(dom.querySelector('app-user-followings').textContent).toEqual('[UserFollowingsComponent]');
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

      // expect(dom.querySelector('app-gist').textContent).toEqual('[GistComponent]');
    });

  });

});
