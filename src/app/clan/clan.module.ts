import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { ClanSearchComponent } from './clan-search/clan-search.component';
import * as clanState from './store/clan-state.state';
import { StoreModule } from '@ngrx/store';
import { ClanRoutingModule } from './clan-routing.module';
import { EffectsModule } from '@ngrx/effects';

import { BungieParseModule } from 'bungie-parse';

@NgModule({
    declarations: [ClanDetailComponent, ClanSearchComponent],
    imports: [
        CommonModule,
        ClanRoutingModule,
        BungieParseModule,
        StoreModule.forFeature('clans', clanState.reducers),
        EffectsModule.forFeature(clanState.ClanEffects)
    ]
})
export class ClanModule {}
