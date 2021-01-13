import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle, faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {

    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faCircle,
      faSquare,
      farCircle,
      farSquare,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }
}
