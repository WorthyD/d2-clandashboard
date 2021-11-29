import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
// import { ClanSearchComponent } from './clan-search/clan-search.component';
import * as clanState from './store/clan-state.state';
import { StoreModule } from '@ngrx/store';
import { ClanRoutingModule } from './clan-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ClanComponent } from './clan.component';
// import { Updater } from './services/updater';
// import { MemberUpdater } from './services/memberUpdater';
import { NavbarModule } from '@destiny/components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ClanDetailModule } from './clan-detail/clan-detail.module';
import { MaterialModule } from '@destiny/components';
import { ClanDatabase, ClanDbModule, DailyClanAggregateTimeService, MonthlyClanAggregateTimeService, SeasonClanAggregateTimeService, WeeklyClanAggregateTimeService } from '@destiny/data';
import { AboutModule } from '../about/about.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DirectivesModule } from '../shared/directives/directives.module';
import { NotificationsModule } from '@destiny/components';
import { AppConfig } from '../app.config';

@NgModule({
  declarations: [ClanComponent],
  imports: [
    CommonModule,
    ClanDetailModule,
    ClanRoutingModule,
    NavbarModule,
    MatListModule,
    MatSidenavModule,
    MaterialModule,
    ClanDbModule,
    MatDialogModule,
    AboutModule,
    DirectivesModule,
    NotificationsModule,
    // ClanRosterModule,
    //         BungieParseModule,
    StoreModule.forFeature('clan', clanState.reducers),
    EffectsModule.forFeature(clanState.ClanEffects)
  ],
  providers: [
    {
      provide: WeeklyClanAggregateTimeService,
      useClass: WeeklyClanAggregateTimeService,
      deps: [ClanDatabase, AppConfig]
    },
    {
      provide: MonthlyClanAggregateTimeService,
      useClass: MonthlyClanAggregateTimeService,
      deps: [ClanDatabase, AppConfig]
    },
    {
      provide: SeasonClanAggregateTimeService,
      useClass: SeasonClanAggregateTimeService,
      deps: [ClanDatabase, AppConfig]
    },
    {
      provide: DailyClanAggregateTimeService,
      useClass: DailyClanAggregateTimeService,
      deps: [ClanDatabase, AppConfig]
    }
  ]
})
export class ClanModule {}
