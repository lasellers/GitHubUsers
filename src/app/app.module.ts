import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ViewContainerRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { GitHubUserService } from './git-hub-user.service';

import {ToasterModule, ToasterService} from 'angular2-toaster';
//import {Root} from './root.component'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   ToasterModule
    // ToastModule.forRoot()
  ],
  providers: [GitHubUserService,
  ToasterModule, ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
