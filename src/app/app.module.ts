import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ViewContainerRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HighlightDirective} from './highlight.directive';
import {GitHubUserService} from './git-hub-user.service';

// import {ToasterModule, ToasterService} from 'angular2-toaster';
import {ToolTipDirective} from './tool-tip.directive';
import {Highlight2Directive} from './highlight2.directive';
import {UserDetailComponent} from './users/user-detail/user-detail.component';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import {Root} from './root.component'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ToolTipDirective,
    Highlight2Directive,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    // HttpModule,
    HttpClientModule,
    // ToasterModule.forRoot()
    // ToastModule.forRoot()
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [GitHubUserService,
    // ToasterModule, ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
