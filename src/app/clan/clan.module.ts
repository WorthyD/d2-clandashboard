import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { ClanSearchComponent } from './clan-search/clan-search.component';
import * as clanState from './store/clan-state.state';
import { StoreModule } from '@ngrx/store';
import {ClanRoutingModule} from './clan-routing.module';

@NgModule({
    declarations: [ClanDetailComponent, ClanSearchComponent],
    imports: [
        CommonModule,
        ClanRoutingModule,
        StoreModule.forFeature('clans', clanState.reducers)
    ]
})
export class ClanModule {}
