import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ClanModule } from './clan/clan.module';

import { ApiKeyInterceptor } from './core/apikey.interceptor';
import { RootStoreModule } from './root-store/root-store.module';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClanSearchModule } from './clan-search/clan-search.module';
import { ManifestService } from './services/manifest.service';

export function initConfig(appConfig: ManifestService) {
  return () => appConfig.loadManifest();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClanModule,
    RootStoreModule,
    // LoggerModule.forRoot({
    //   level: NgxLoggerLevel.TRACE,
    //   serverLogLevel: NgxLoggerLevel.ERROR,
    //   disableConsoleLogging: false
    // }),
    BrowserAnimationsModule,
    ClanSearchModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ManifestService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
