import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of, from } from 'rxjs';

import * as moment from 'moment';

import { GroupV2Service, Destiny2Service } from 'bungie-api';
import { MemberProfile  } from 'bungie-models';
import { take, mergeMap, map } from 'rxjs/operators';

import * as cacheSelectors from '../store/clan-cache/clan-cache.selectors';
import * as cacheActions from '../store/clan-cache/clan-cache.actions';
import * as memberActivityActions from '../store/member-activities/member-activities.actions';
import { NGXLogger } from 'ngx-logger';

export type UpdateState = 'can-update' | 'updating' | 'updated' | 'up-to-date';

export type UpdatableType = 'memberActivities';

export type UpdaterState = {
    [key in UpdatableType]: UpdateState;
};

@Injectable()
export class MemberUpdater {
    constructor(
        private store: Store<any>,
        private groupService: GroupV2Service,
        private logger: NGXLogger,
        private d2Service: Destiny2Service
    ) {}
    state = new BehaviorSubject<UpdaterState>({
        memberActivities: 'can-update'
    });

    private updateMemberActivities(clanId: number, member: MemberProfile) {
        const memberId = member.profile.data.userInfo.membershipId;
        const memberType = member.profile.data.userInfo.membershipType;
        const cacheKey = 'memberActivity-' + memberId;
        this.logger.info('updating memeber activities', memberId);

        const cacheDetails$ = this.store.pipe(select(cacheSelectors.cacheById(cacheKey)));

        cacheDetails$.pipe(take(1)).subscribe(cacheDetails => {
            const xpDate = moment().add(-1, 'hours');

            if (!cacheDetails || xpDate.isAfter(cacheDetails.lastUpdated)) {
                this.setTypeState('memberActivities', 'updating');
                this.logger.info('Updating Member IDs', memberId);
                const characterIds = member.profile.data.characterIds;

                let playerActivities = [];

                const characterActivity = from(characterIds).pipe(
                    mergeMap(characterId => {
                        return this.d2Service.destiny2GetActivityHistory(characterId, memberId, memberType, 250).pipe(
                            map((response ) => {
                                return response.Response;
                            })
                        );
                    })
                );
                characterActivity.subscribe(
                    result => {
                        playerActivities = playerActivities.concat(result.activities);
                    },
                    err => {},
                    () => {
                        this.store.dispatch(
                            memberActivityActions.loadMemberActivitiesFromAPI({
                                memberActivities: {
                                    id: memberId,
                                    activities: playerActivities
                                }
                            })
                        );
                        this.store.dispatch(
                            cacheActions.updateCache({
                                cache: {
                                    id: cacheKey,
                                    lastUpdated: new Date()
                                }
                            })
                        );
                    }
                );
            } else {
                this.setTypeState('memberActivities', 'up-to-date');
                this.logger.info('up to date member info', memberId);
            }
        });
    }

    update(type: UpdatableType, clanId: number, member: MemberProfile) {
        switch (type) {
            case 'memberActivities':
                return this.updateMemberActivities(clanId, member);
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
