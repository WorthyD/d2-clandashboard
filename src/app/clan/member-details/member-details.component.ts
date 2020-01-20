import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, takeUntil, take, filter } from 'rxjs/operators';
import { Store, select, createSelector } from '@ngrx/store';

import { ClanMember, MemberProfile, MemberActivityStat, ActivityModeDefinition } from 'bungie-models';
import { ActivitiesService, ActivityModeService } from '@destiny/data';
// import { ActivityModeDefinition } from 'bungie-models/definitions';

import { Observable, Subject, Subscription, combineLatest } from 'rxjs';

import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as memberProfileSelectors from '../store/member-profiles/member-profiles.selectors';

import * as memberActivitySelectors from '../store/member-activities/member-activities.selectors';
import * as memberActivityActions from '../store/member-activities/member-activities.actions';

export const getRecentClanMemberActivities = memberId =>
    createSelector(memberActivitySelectors.getClanMemberActivities(memberId), activities => {
        if (!memberId || !activities) {
            return null;
        }

        return activities.sort((a, b) => new Date(a.period).getTime() - new Date(b.period).getTime()).slice(0, 10);
    });

@Component({
    selector: 'app-member-details',
    templateUrl: './member-details.component.html',
    styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit, OnDestroy {
    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store<any>,
        private activityModeService: ActivityModeService,
        private activityService: ActivitiesService
    ) {
        this.memberId.pipe(takeUntil(this.destroyed)).subscribe(r => this.loadMemberDetails(r));
    }

    private memberId = this.activatedRoute.params.pipe(map(x => x.memberId, distinctUntilChanged()));

    member$: Observable<ClanMember>;
    profile$: Observable<MemberProfile>;
    playerActivities$: Observable<MemberActivityStat[]>;
    activityModeDefinitions$: Observable<any>;
    activityDefinitions$: Observable<any>;

    activityDetails$: Observable<any[]>;

    private destroyed = new Subject();

    ngOnInit() {}

    loadMemberDetails(memberId) {
        this.member$ = this.store.pipe(select(clanMemberSelectors.getClanMemberById(memberId)));
        this.profile$ = this.store.pipe(select(memberProfileSelectors.getClanMemberById(memberId)));

        this.playerActivities$ = this.store.pipe(select(getRecentClanMemberActivities(memberId)));
        this.activityModeDefinitions$ = this.activityModeService.getDefinitions();
        this.activityDefinitions$ = this.activityService.getDefinitions();

        this.activityDetails$ = combineLatest(
            this.playerActivities$,
            this.activityModeDefinitions$,
            this.activityDefinitions$,
            (pActivities, pDefinitions, activityDefinitions) => {
                if (pActivities && pDefinitions && activityDefinitions) {
                    const defArray = Object.keys(pDefinitions.definitions).map(id => pDefinitions.definitions[id]);
                    const activityArray = Object.keys(activityDefinitions.definitions).map(id => activityDefinitions.definitions[id]);
                    //console.log(activityArray.find(y => y.hash === '3143798436'));
                    // console.log(activityArray);
                    console.log(activityDefinitions[3143798436]);
                    console.log(pActivities);

                    return pActivities.map(x => {
                        return {
                            playerActivity: x,
                            activity: activityArray.find(y => {
                                // y.referenceId === y.
                                return false;
                            }),
                            activityMode: defArray.find(y => {
                                return y.modeType === x.activityDetails.mode;
                            })
                        };
                    });
                }
                return [];
            }
        );
        // Object.keys(obj).forEach(function(k, i) {
        //     if (i >= 100 && i < 300) {
        //         console.log(obj[k]);
        //     }
        // });
        this.profile$
            .pipe(
                filter(loaded => !!loaded),
                take(1)
            )
            .subscribe(x => {
                this.store.dispatch(memberActivityActions.loadMemberActivities({ member: x }));
            });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
