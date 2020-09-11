import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

import { MaterialModule, SharedModule } from '@destiny/components';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SavedClansModule } from './saved-clans/saved-clans.module';
import { ClanSearchState, ClanSearchEffects, reducers } from './state/clan-search.state';
import { CLAN_SEARCH_FEATURE } from './state/clan-search.selectors';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    SavedClansModule,
    StoreModule.forFeature(CLAN_SEARCH_FEATURE, reducers),
    EffectsModule.forFeature(ClanSearchEffects)
  ]
})
export class HomeModule {}
