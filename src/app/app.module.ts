import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ClanModule } from './clan/clan.module';

import { ApiModule, Configuration, ConfigurationParameters} from 'bungie-api';
import { GroupV2Service,  } from 'projects/bungie-api/src/lib';
import { ApiKeyInterceptor } from './core/apikey.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

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
    ClanModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiKeyInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
