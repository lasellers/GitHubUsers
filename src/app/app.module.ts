import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMinusCircle,
  faCloudDownloadAlt,
  faExchangeAlt,
  faUserCog,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { GitHubUserService } from './github-user.service';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFollowersComponent } from './components/user-followers/user-followers.component';
import { UserFollowingsComponent } from './components/user-followings/user-followings.component';
import { UserGistsComponent } from './components/user-gists/user-gists.component';
import { BytesPipe } from './bytes.pipe';
import { GistComponent } from './components/gist/gist.component';
import { WasCachedStringPipe } from './was-cached-string.pipe';
import { WasCachedHighlightDirective } from './was-cached-highlight.directive';
import { FilterFollowersPipe } from './filter-followers.pipe';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPseudoCheckboxModule, MatRippleModule } from "@angular/material/core";
//// import { StoreModule } from '@ngrx/store';
//// import { reducers, metaReducers } from './reducers';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserFollowersComponent,
    UserFollowingsComponent,
    UserGistsComponent,
    BytesPipe,
    GistComponent,
    WasCachedStringPipe,
    WasCachedHighlightDirective,
    FilterFollowersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      maxOpened: 8,
      autoDismiss: true
    }),
    NgbModule,
    FontAwesomeModule,
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //   }
    // }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatPseudoCheckboxModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatRippleModule
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
