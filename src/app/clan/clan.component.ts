import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClanDetails, ClanMember } from 'bungie-models';

import { Event, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
// import { GroupV2Service } from 'bungie-api';
// import { GroupV2Service } from 'projects/bungie-api/src/lib';
import * as clanDetailSelectors from './store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from './store/clan-detail/clan-detail.state';
import * as clanDetailActions from './store/clan-detail/clan-detail.actions';

import * as clanMemberSelectors from './store/clan-members/clan-members.selectors';
import * as clanMemberActions from './store/clan-members/clan-members.actions';

import * as routerStore from '../root-store/router/router.selectors';
import {} from 'bungie-models';

// import { Clan } from 'bungie-parse';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-clan',
    templateUrl: './clan.component.html',
    styleUrls: ['./clan.component.scss']
})
export class ClanComponent implements OnInit, OnDestroy {
    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store<clanDetailStore.ClanDetailState>,
        private rStore: Store<routerStore.State>
    ) {
        this.clanId
            .pipe(takeUntil(this.destroyed))
            .subscribe(r => this.loadClan(r));
    }

    private clanId = this.activatedRoute.params.pipe(
        map(x => x.id, distinctUntilChanged())
    );

    clanDetails$: Observable<ClanDetails> = this.store.pipe(
        select(clanDetailSelectors.getClanDetail)
    );
    // clanMembers$: Observable<ClanMember[]> = this.store.pipe(
    //     select(clanMemberSelectors.getAllMembers)
    // );

    private destroyed = new Subject();

    ngOnInit() {}

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    loadClan(clanId) {
        this.store.dispatch(clanDetailActions.loadClan({ clanId: clanId }));
        this.store.dispatch(
            clanMemberActions.loadClanMembers({ clanId: clanId })
        );
    }
}
