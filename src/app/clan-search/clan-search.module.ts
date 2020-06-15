import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanSearchComponent } from './clan-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

import { MatTooltipModule } from '@angular/material/tooltip';
import { FeaturedClansModule } from './featured-clans/featured-clans.module';

import { CoreModule } from '../core/core.module';
import { ClanSearchState, ClanSearchEffects, reducers } from './state/clan-search.state';
import { CLAN_SEARCH_FEATURE } from './state/clan-search.selectors';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ClanSearchComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    FeaturedClansModule,
    StoreModule.forFeature(CLAN_SEARCH_FEATURE, reducers),
    EffectsModule.forFeature(ClanSearchEffects)
  ]
})
export class ClanSearchModule {}
