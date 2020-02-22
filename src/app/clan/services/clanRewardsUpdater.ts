import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of, from } from 'rxjs';

import * as moment from 'moment';

import { GroupV2Service, Destiny2Service } from 'bungie-api';
import { MemberProfile  } from 'bungie-models';
import { take, mergeMap, map } from 'rxjs/operators';

import * as rewardActions from '../store/clan-rewards/clan-rewards.actions';
import * as cacheSelectors from '../store/clan-cache/clan-cache.selectors';
import * as cacheActions from '../store/clan-cache/clan-cache.actions';
import * as memberActivityActions from '../store/member-activities/member-activities.actions';
import { NGXLogger } from 'ngx-logger';

export type UpdateState = 'can-update' | 'updating' | 'updated' | 'up-to-date';

export type UpdatableType = 'clanRewards';

export type UpdaterState = {
    [key in UpdatableType]: UpdateState;
};

@Injectable()
export class RewardsUpdater {
    constructor(
        private store: Store<any>,
        private destiny2Service: Destiny2Service,
        private logger: NGXLogger,
        private d2Service: Destiny2Service
    ) {}
    state = new BehaviorSubject<UpdaterState>({
        clanRewards: 'can-update'
    });

    private updateMemberActivities(clanId: number) {
        const cacheDetails$ = this.store.pipe(select(cacheSelectors.cacheById('clanRewards')));
        this.logger.log('Updating Clan Rewards', clanId);

        cacheDetails$.pipe(take(1)).subscribe(cacheDetails => {
            const xpDate = moment().add(-1, 'hours');
            if (!cacheDetails || xpDate.isAfter(cacheDetails.lastUpdated)) {
                this.setTypeState('clanRewards', 'updating');
                this.logger.log('Clan Rewards Updating');
                this.destiny2Service
                    .destiny2GetClanWeeklyRewardState(clanId)
                    .pipe(take(1))
                    .subscribe((x) => {
                        this.logger.log('Clan Weekly Rewards received', x);
                        this.store.dispatch(
                            rewardActions.loadRewardsFromAPI({
                                clanReward: x.Response
                            })
                        );

                        this.store.dispatch(
                            cacheActions.updateCache({
                                cache: {
                                    id: 'clanRewards',
                                    lastUpdated: new Date()
                                }
                            })
                        );

                         this.setTypeState('clanRewards', 'updated');
                        this.logger.log('Clan Rewards Updated');
                    });
            } else {
                this.setTypeState('clanRewards', 'up-to-date');
                this.logger.log('Clan Rewards up to date');
            }
        });

    }

    update(type: UpdatableType, clanId: number) {
        switch (type) {
            case 'clanRewards':
                return this.updateMemberActivities(clanId);
            default:
                return null;
        }
    }

    private setTypeState(type: UpdatableType, typeState: UpdateState) {
        this.state.pipe(take(1)).subscribe(updaterState => {
            const newState = { ...updaterState };
            newState[type] = typeState;
            this.state.next(newState);
        });
    }
}
