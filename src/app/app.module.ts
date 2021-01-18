import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { app_routing } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JodaComponent } from './src/app/components/joda/joda.component';
import { NavbarMobileComponent } from './components/shared/navbar-mobile/navbar-mobile.component';
import { SlideshowMComponent } from './components/slideshow-m/slideshow-m.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SlideshowComponent,
    JodaComponent,
    NavbarMobileComponent,
    SlideshowMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
