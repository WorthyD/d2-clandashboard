import { Component, OnInit } from '@angular/core';

// import { GroupV2Service } from 'bungie-api';
import { GroupV2Service } from 'projects/bungie-api/src/lib';
import * as clanDetailSelectors from '../store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from '../store/clan-detail/clan-detail.state';
import * as clanDetailActions from '../store/clan-detail/clan-detail.actions';

import * as routerStore from '../../root-store/router/router.selectors';

import { Clan } from 'bungie-parse';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-clan-detail',
    templateUrl: './clan-detail.component.html',
    styleUrls: ['./clan-detail.component.scss']
})
export class ClanDetailComponent implements OnInit {
    // clan$ = this.store.select(clanDetailSelectors.getSelectedClanDetail);

    constructor(
        private gs: GroupV2Service,
        private store: Store<clanDetailStore.ClanDetailState>,
        private rStore: Store<routerStore.State>
    ) {}

    ngOnInit() {
        console.log('subbing');

        // this.clan$ = this.gs.groupV2GetGroup(2073131);
        //this.store.dispatch(new clanDetailActions.LoadClan(2073131));
    }
}
