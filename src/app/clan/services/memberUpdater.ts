import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of, from } from 'rxjs';

import { GroupV2Service, Destiny2Service } from 'bungie-api';
import { ClanMember } from 'bungie-models';
import { take, mergeMap, map } from 'rxjs/operators';
import * as cacheSelectors from '../store/clan-cache/clan-cache.selectors';
import * as cacheActions from '../store/clan-cache/clan-cache.actions';

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
        private d2Service: Destiny2Service
    ) {}
    state = new BehaviorSubject<UpdaterState>({
        memberActivities: 'can-update'
    });

    private updateMemberActivities(clanId: number, member: ClanMember) {
        const cacheDetails$ = this.store.pipe(
            select(
                cacheSelectors.cacheById(
                    'memberActivity-' + member.destinyUserInfo.membershipId
                )
            )
        );

        cacheDetails$.pipe(take(1)).subscribe(cacheDetails => {
            const xpDate = moment().add(-1, 'hours');
            if (!cacheDetails || xpDate.isAfter(cacheDetails.lastUpdated)) {
                this.setTypeState('clanMembers', 'updating');
                this.groupService
                    .groupV2GetMembersOfGroup(1, clanId)
                    .pipe(take(1))
                    .subscribe(x => {
                        this.store.dispatch(
                            clanMemberActions.loadClanMembersFromAPI({
                                clanMembers: x.Response.results
                            })
                        );
                        this.store.dispatch(
                            cacheActions.updateCache({
                                cache: {
                                    id: 'clanMembers',
                                    lastUpdated: new Date()
                                }
                            })
                        );

                        this.setTypeState('clanMembers', 'updated');
                    });
            } else {
                this.setTypeState('clanMembers', 'up-to-date');
            }
        });
    }
}
