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
//import { ClanSearchModule } from './clan-search/clan-search.module';
import { HomeModule } from './home/home.module';
import { ManifestService } from './services/manifest.service';

import { MaterialModule } from '@destiny/components';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertModule } from './alert/alert.module';
import { environment } from 'src/environments/environment';
//TODO: proper export
import { windowProvider, WindowToken } from 'projects/data/src/lib/injection-tokens/window-token';
//import { MaterialModule } from '@destiny/components';
export function initConfig(appConfig: ManifestService) {
  return () => appConfig.loadManifest();
}
import { PlayerSearchModule } from './player-search/player-search.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClanModule,
    MatDialogModule,
    RootStoreModule,
    MaterialModule,
    AlertModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: environment.production
    }),
    BrowserAnimationsModule,
    HomeModule,
    PlayerSearchModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      //enabled: environment.production,
      enabled: true,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
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
    },
    { provide: WindowToken, useFactory: windowProvider }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
