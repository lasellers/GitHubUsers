import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
import {
  faMinusCircle,
  faCloudDownloadAlt,
  faExchangeAlt,
  faUserCog,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { GitHubUserService } from './git-hub-user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFollowersComponent } from './user-followers/user-followers.component';
import { UserFollowingsComponent } from './user-followings/user-followings.component';
import { UserGistsComponent } from './user-gists/user-gists.component';
import { BytesPipe } from './bytes.pipe';
import { GistComponent } from './gist/gist.component';
import { WasCachedPipe } from './was-cached.pipe';
import { WasCachedHighlightDirective } from './was-cached-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UserDetailComponent,
    UserFollowersComponent,
    UserFollowingsComponent,
    UserGistsComponent,
    BytesPipe,
    GistComponent,
    WasCachedPipe,
    WasCachedHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    GitHubUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(library: FaIconLibrary) {
  //  library.addIconPacks(fas);
  // }
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faMinusCircle, faCloudDownloadAlt, faExchangeAlt, faUserCog, faCloud);
  }
}
