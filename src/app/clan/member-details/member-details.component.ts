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

        return activities.sort((a, b) => new Date(b.period).getTime() - new Date(a.period).getTime()).slice(0, 250);
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
    activityDetails2$: Observable<any[]>;

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
//                    console.log(defArray.find(y => y.modeType === 6));
 //                   console.log(defArray.find(y => y.modeType === 7));

                    console.log(pActivities);

                    return pActivities.map(x => {
                        return {
                            playerActivity: x,
                            activity: activityDefinitions.definitions[x.activityDetails.referenceId],
                            activityTypes: x.activityDetails.modes.map(
                                z =>
                                    defArray.find(y => {
                                        return y.modeType === z;
                                    }).displayProperties.name
                            ),
                            activityMode: defArray.find(y => {
                                return y.modeType === x.activityDetails.mode;
                            })
                        };
                    });
                }
                return [];
            }
        );


        this.activityDetails2$ = combineLatest(
            this.playerActivities$,
            this.activityModeDefinitions$,
            this.activityDefinitions$,
            (pActivities, pDefinitions, activityDefinitions) => {
                if (pActivities && pDefinitions && activityDefinitions) {
                    const defArray = Object.keys(pDefinitions.definitions).map(id => pDefinitions.definitions[id]);
                    const modeIDs = pActivities.map(x => {
                        return x.activityDetails.mode;
                    });
                    console.log(modeIDs);
                    const uniqueIds = [...new Set(modeIDs)];
                    console.log(uniqueIds);
                    console.log(pActivities);

                    const stuff = uniqueIds.map(y => {
                        const activities = pActivities.filter(z => {
                            return (z.activityDetails.mode = y);
                        });

                        console.log(activities);
                        return {
                            mode: y,
                            modeName: defArray.find(z => {
                                return z.modeType === y;
                            }).displayProperties.name,
                            // total: activities.reduce((prev, cur) => {
                            //     return prev + cur.values.activityDurationSeconds.basic.value;
                            // }, 0)
                        };
                    });
                    return stuff;

                    // return pActivities.map(x => {
                    //     return {
                    //         playerActivity: x,
                    //         activity: activityDefinitions.definitions[x.activityDetails.referenceId],
                    //         // activityTypes: x.activityDetails.modes.map(z =>
                    //         //     defArray.find(y => {
                    //         //         return y.modeType === z;
                    //         //     }).displayProperties.name
                    //         // ),
                    //         activityMode: defArray.find(y => {
                    //             return y.modeType === x.activityDetails.mode;
                    //         })
                    //     };

                    // });
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
