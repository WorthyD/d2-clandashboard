import { Injectable } from '@angular/core';

import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { empty, of, from } from 'rxjs';

//import * as clanDetailActions from './clan-detail.actions';
// import * as clanMemberActions from './clan-members.actions';

import { ClanDatabase } from '../../../services/ClanDatabase';
import { MemberUpdater } from '../../services/memberUpdater';

// import { MemberProfile } from 'bungie-models';
import { MemberActivityStats } from '../member-activities/member-activities.state';

// import * as memberProfileActions from './member-profiles.actions';
import * as memberActivityActions from './member-activities.actions';
// import * as clanMemberActions from '../clan-members/clan-members.actions';

import * as clanIdSelectors from '../clan-id/clan-id.selector';

import {
    catchError,
    map,
    switchMap,
    distinctUntilChanged,
    first,
    filter,
    concatMap,
    tap,
    mergeMap,
    take,
    withLatestFrom
} from 'rxjs/operators';

@Injectable()
export class MemberStatEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        // private d2Service: Destiny2Service,
        // private parser: ClanParseService,
        private clanDB: ClanDatabase,
        private updater: MemberUpdater
    ) {}


    loadMemberActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(memberActivityActions.loadClanMembersActivities),
            switchMap(({ clanId }) => {
                return this.clanDB
                    .getValues(clanId.toString())
                    .MemberActivities.pipe(
                        take(1),
                        map(memberActivities => {
                            if (memberActivities.length > 0) {

                                return memberActivityActions.loadMemberActivitiesSuccess(
                                    { memberActivities }
                                );
                            } else {
                                return memberActivityActions.loadMemberActivitiesEmpty();
                            }
                        })
                    );
            })
        )
    );

    updateMembers$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(memberActivityActions.loadMemberActivities),
                withLatestFrom(
                    this.store.select(clanIdSelectors.getClanIdState)
                ),
                tap(([action, clanId]) => {
                     this.updater.update('memberActivities', clanId, action.member);
                })
            ),
        { dispatch: false }
    );

    syncMemberProfiles$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(memberActivityActions.loadMemberActivitiesFromAPI),
                withLatestFrom(
                    this.store.select(clanIdSelectors.getClanIdState)
                ),
                tap(([action, clanId]) => {
                    const memberActivities: MemberActivityStats =
                        action.memberActivities;

                    if (memberActivities) {
                        this.clanDB.update(
                            clanId.toString(),
                            'MemberActivities',
                            [memberActivities]
                        );
                    }
                })
            ),
        { dispatch: false }
    );
}

/*

    @Effect()
    setInitialSession$ = this.actions$.pipe(
        ofType(memberProfileActions.loadMemberProfiles),
        switchMap(({ clanMembers }) => {
            return from(clanMembers).pipe(
                // take(1),
                //  concatMap(profile => {
                //      console.log(profile);
                //      return memberProfileActions.loadMemberProfileSuccess({memberProfile: null});
                //  })
                mergeMap(url => {
                    //                   return of(url);
                    return this.d2Service
                        .destiny2GetProfile(
                            url.destinyUserInfo.membershipId,
                            url.destinyUserInfo.membershipType,
                            [100]
                        )
                        .pipe(
                            map(memberProfileRespo => {
                                return memberProfileActions.loadMemberProfileSuccess(
                                    {
                                        memberProfile:
                                            memberProfileRespo.Response
                                    }
                                );
                            })
                        );
                })
                // tap(response =>
                //     console.log('=<Got reponse for', response.bungieNetUserInfo)
                // ),
                // //  tap(r =>

                //      memberProfileActions.loadMemberProfileSuccess({
                //          memberProfile: null
                //      })
                //  )
                // //mergeMap(response => response.()),
                //tap(data => console.log('Decode response async', data))
            );
        })
        // ,
        // switchMap(stuff => {
        //     return memberProfileActions.loadMemberProfileSuccess({
        //         memberProfile: null
        //     });
        // })
    );
}

*/

//                  );

//             return this.groupService
//                 .groupV2GetMembersOfGroup(1, clanId)
//                 .pipe(
//                     map(result => {
//                         return clanMemberActions.loadClanMembersSuccess({
//                             //clanDetails: result.Response.detail
//                             clanMembers: result.Response.results
//                         });
//                     }),
//                     catchError(error => {
//                         return of(
//                             clanMemberActions.loadClanMemberFailure({
//                                 error
//                             })
//                         );
//                         // return of(false);
//                     })
//                 );
//              })
//          )
//      );
// }
/*
from(urls)
  .pipe(
    concatMap(url => {
      console.log("=>Fetch data from url", url);
      return fetch(url);
    }),
    tap(response => console.log("=<Got reponse for", response.url)),
    mergeMap(response => response.json()),
    tap(data => console.log("Decode response async", data))
  )
  .subscribe(
    () => console.log("fetched and decoded"),
    e => console.log("Error", e),
    () => console.log("Done")
  );
*/
////jsonWorldContentPaths       - https://www.bungie.net/common/destiny2_content/json/en/aggregate-f2cf75d7-0de6-4488-aad0-2fa02a0ac343.json
