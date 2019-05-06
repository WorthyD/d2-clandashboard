import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ClanModule } from './clan/clan.module';

import { ApiModule } from 'bungie-api';
import { GroupV2Service, Configuration, ConfigurationParameters } from 'projects/bungie-api/src/lib';

export function apiConfigFactory (): Configuration  {
  const params: ConfigurationParameters = {
    apiKeys: {'X-API-Key':'1233'}
  };
  return new Configuration(params);
}



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    ClanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
