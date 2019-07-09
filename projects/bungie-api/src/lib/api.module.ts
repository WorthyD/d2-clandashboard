import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { DefaultService } from './api/default.service';
import { AppService } from './api/app.service';
import { CommunityContentService } from './api/communityContent.service';
import { ContentService } from './api/content.service';
import { Destiny2Service } from './api/destiny2.service';
import { FireteamService } from './api/fireteam.service';
import { ForumService } from './api/forum.service';
import { GroupV2Service } from './api/groupV2.service';
import { PreviewService } from './api/preview.service';
import { TrendingService } from './api/trending.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    DefaultService,
    AppService,
    CommunityContentService,
    ContentService,
    Destiny2Service,
    FireteamService,
    ForumService,
    GroupV2Service,
    PreviewService,
    TrendingService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
