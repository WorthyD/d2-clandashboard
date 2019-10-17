import { Component, OnInit, OnDestroy } from '@angular/core';

import { Event, NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { ClanDetails, ClanMember } from 'bungie-models';
// import { GroupV2Service } from 'bungie-api';
// import { GroupV2Service } from 'projects/bungie-api/src/lib';
import * as clanDetailSelectors from '../store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from '../store/clan-detail/clan-detail.state';
import * as clanDetailActions from '../store/clan-detail/clan-detail.actions';

import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanMemberActions from '../store/clan-members/clan-members.actions';

import * as routerStore from '../../root-store/router/router.selectors';
import {} from 'bungie-models';

// import { Clan } from 'bungie-parse';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-clan-detail',
    templateUrl: './clan-detail.component.html',
    styleUrls: ['./clan-detail.component.scss']
})
export class ClanDetailComponent implements OnInit, OnDestroy {
    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store<clanDetailStore.ClanDetailState>,
    ) {

    }

    // private clanId = this.activatedRoute.params.pipe(
    //     map(x => x.id, distinctUntilChanged())
    // );

    clanDetails$: Observable<ClanDetails> = this.store.pipe(
        select(clanDetailSelectors.getClanDetail)
    );

    private destroyed = new Subject();

    ngOnInit() {}

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }


}
