import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HttpClientModule } from '@angular/common/http';

import { ClanModule } from './clan/clan.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
