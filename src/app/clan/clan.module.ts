import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
// import { ClanSearchComponent } from './clan-search/clan-search.component';
import * as clanState from './store/clan-state.state';
import { StoreModule } from '@ngrx/store';
import { ClanRoutingModule } from './clan-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ClanRosterModule } from './clan-roster/clan-roster.module';
import { ClanComponent } from './clan.component';
import { Updater } from './services/updater';

// mport { BungieParseModule } from 'bungie-parse';

@NgModule({
    declarations: [ClanDetailComponent, ClanComponent],
    imports: [
        CommonModule,
        ClanRoutingModule,
        // ClanRosterModule,
        //         BungieParseModule,
        StoreModule.forFeature('clan', clanState.reducers),
        EffectsModule.forFeature(clanState.ClanEffects)
    ],
    providers: [Updater]
})
export class ClanModule {}
