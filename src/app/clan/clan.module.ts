import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
// import { ClanSearchComponent } from './clan-search/clan-search.component';
import * as clanState from './store/clan-state.state';
import { StoreModule } from '@ngrx/store';
import { ClanRoutingModule } from './clan-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ClanComponent } from './clan.component';
import { Updater } from './services/updater';
import { MemberUpdater } from './services/memberUpdater';
import { NavbarModule } from '@destiny/components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [ClanDetailComponent, ClanComponent],
    imports: [
        CommonModule,
        ClanRoutingModule,
        NavbarModule,
        MatListModule,
        MatSidenavModule,
        // ClanRosterModule,
        //         BungieParseModule,
        StoreModule.forFeature('clan', clanState.reducers),
        EffectsModule.forFeature(clanState.ClanEffects)
    ],
    providers: [Updater, MemberUpdater]
})
export class ClanModule {}
