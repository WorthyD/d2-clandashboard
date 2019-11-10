import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of, from } from 'rxjs';

import * as moment from 'moment';

import { ClanState } from '../store/clan-state.state';
import { ClanDatabase } from 'src/app/services/ClanDatabase';
import { take, mergeMap, map } from 'rxjs/operators';

import { GroupV2Service, Destiny2Service } from 'bungie-api';

import * as cacheSelectors from '../store/clan-cache/clan-cache.selectors';
import * as cacheActions from '../store/clan-cache/clan-cache.actions';

import * as clanDetailActions from '../store/clan-detail/clan-detail.actions';

import * as clanMemberActions from '../store/clan-members/clan-members.actions';
import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';

import * as memberProfileActions from '../store/member-profiles/member-profiles.actions';

export type UpdateState = 'can-update' | 'updating' | 'updated' | 'up-to-date';

export type UpdatableType = 'clanDetails' | 'clanMembers' | 'memberProfiles';

export type UpdaterState = {
    [key in UpdatableType]: UpdateState;
};

@Injectable()
export class Updater {
    constructor(
        private store: Store<any>,
        private groupService: GroupV2Service,
        private d2Service: Destiny2Service
    ) {
        this.state.subscribe(x => {
            console.log(x);
        });
    }
    state = new BehaviorSubject<UpdaterState>({
        clanDetails: 'can-update',
        clanMembers: 'can-update',
        memberProfiles: 'can-update'
    });

    private updateClanMembers(clanId: number) {
        const cacheDetails$ = this.store.pipe(
            select(cacheSelectors.cacheById('clanMembers'))
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

    private updateClanDetails(clanId: number) {
        const cacheDetails$ = this.store.pipe(
            select(cacheSelectors.cacheById('clanDetails'))
        );

        cacheDetails$.pipe(take(1)).subscribe(cacheDetails => {
            const xpDate = moment().add(-1, 'hours');
            if (!cacheDetails || xpDate.isAfter(cacheDetails.lastUpdated)) {
                this.setTypeState('clanDetails', 'updating');
                this.groupService
                    .groupV2GetGroup(clanId)
                    .pipe(take(1))
                    .subscribe(x => {
                        this.store.dispatch(
                            clanDetailActions.updateClanFromAPI({
                                clanDetails: x.Response.detail
                            })
                        );
                        this.store.dispatch(
                            cacheActions.updateCache({
                                cache: {
                                    id: 'clanDetails',
                                    lastUpdated: new Date()
                                }
                            })
                        );

                        this.setTypeState('clanDetails', 'updated');
                    });
            } else {
                this.setTypeState('clanDetails', 'up-to-date');
            }
        });
    }

    private updateMemberProfiles(clanId: number) {
        const cacheDetails$ = this.store.pipe(
            select(cacheSelectors.cacheById('memberProfiles'))
        );

        cacheDetails$.pipe(take(1)).subscribe(cacheDetails => {
            const xpDate = moment().add(-1, 'hours');
            if (!cacheDetails || xpDate.isAfter(cacheDetails.lastUpdated)) {

                this.setTypeState('memberProfiles', 'updating');
                const clanMembers$ = this.store.pipe(
                    select(clanMemberSelectors.getAllMembers)
                );
                clanMembers$.pipe(take(1)).subscribe(clanMembers => {
                    // clanMembers = clanMembers.slice(1, 10);
                    // console.log(clanMembers);

                    const savedProfiles = [];
                    // possible concat map
                    const memberProfiles = from(clanMembers).pipe(
                        mergeMap(member => {
                            return this.d2Service
                                .destiny2GetProfile(
                                    member.destinyUserInfo.membershipId,
                                    member.destinyUserInfo.membershipType,
                                    [100]
                                )
                                .pipe(
                                    map(memberProfileResponse => {
                                        return memberProfileResponse.Response;
                                    })
                                );
                        })
                    );

                    memberProfiles.subscribe(
                        result => {
                            savedProfiles.push(result);
                        },
                        err => {},
                        () => {
                            this.store.dispatch(
                                memberProfileActions.loadMemberProfilesFromAPI({
                                    memberProfiles: savedProfiles
                                })
                            );
                            this.store.dispatch(
                                cacheActions.updateCache({
                                    cache: {
                                        id: 'memberProfiles',
                                        lastUpdated: new Date()
                                    }
                                })
                            );

                            this.setTypeState('memberProfiles', 'updated');
                        }
                    );
                });
            } else {
                this.setTypeState('clanMembers', 'up-to-date');
            }
        });
    }

    update(type: UpdatableType, clanId: number) {
        switch (type) {
            case 'clanDetails':
                return this.updateClanDetails(clanId);
            case 'clanMembers':
                return this.updateClanMembers(clanId);
            case 'memberProfiles':
                return this.updateMemberProfiles(clanId);
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
