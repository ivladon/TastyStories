import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header/app.header';
import { AppFooter } from './footer/app.footer';

@NgModule({
  declarations: [AppComponent, AppHeader, AppFooter],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, AppHeader, AppFooter],
})
export class AppModule {}
