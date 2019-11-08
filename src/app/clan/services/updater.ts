import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';

import { ClanState } from '../store/clan-state.state';
import { ClanDatabase } from 'src/app/services/ClanDatabase';
import { take } from 'rxjs/operators';

import { GroupV2Service } from 'bungie-api';

import * as cacheSelectors from '../store/clan-cache/clan-cache.selectors';
import * as cacheActions from '../store/clan-cache/clan-cache.actions';
import * as clanDetailActions from '../store/clan-detail/clan-detail.actions';
import { ClanDetails } from 'bungie-models';

export type UpdateState = 'can-update' | 'updating' | 'updated';

export type UpdatableType = 'clanDetails';

export type UpdaterState = {
    [key in UpdatableType]: UpdateState;
};

@Injectable()
export class Updater {
    constructor(
        private store: Store<any>,
        private groupService: GroupV2Service
    ) {}
    state = new BehaviorSubject<UpdaterState>({
        clanDetails: 'can-update'
    });

    private updateClanDetails(clanId: number) {
        const cacheDetails$ = this.store.pipe(
            select(cacheSelectors.cacheById('clanDetails'))
        );

        cacheDetails$.pipe(take(1)).subscribe(cacheDetails => {
            console.log(cacheDetails);
            // Todo: add logic to only periodically update
            if (!cacheDetails) {
                this.groupService
                    .groupV2GetGroup(clanId)
                    .pipe(take(1))
                    .subscribe(x => {

                        console.log('updating object');
                        this.store.dispatch(
                            clanDetailActions.updateClanFromAPI({
                                clanDetails: x.Response.detail
                            })
                        );
                        console.log('Updating cache');
                        this.store.dispatch(cacheActions.updateCache({cache: {id:'clanDetails', lastUpdated: new Date()}}));
                    });
            }
        });
    }

    update(type: UpdatableType, clanId: number) {
        switch (type) {
            case 'clanDetails':
                return this.updateClanDetails(clanId);
            default:
                return null;
        }
    }
}
