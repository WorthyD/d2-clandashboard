// import { Injectable } from '@angular/core';

// import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
// import { Store, select } from '@ngrx/store';
// import { empty, of, from } from 'rxjs';

// //import * as clanDetailActions from './clan-detail.actions';
// // import * as clanMemberActions from './clan-members.actions';

// // import { ClanDatabase } from '../../../services/ClanDatabase';
// import { ClanDatabase } from '../../../../../projects/data/src/lib/clan-db/ClanDatabase';
// // import { MemberUpdater } from '../../services/memberUpdater';

// // import { MemberProfile } from 'bungie-models';

// // import * as memberProfileActions from './member-profiles.actions';
// import * as memberActivityActions from './member-activities.actions';
// // import * as clanMemberActions from '../clan-members/clan-members.actions';

// import { ClanMemberActivityService } from '@destiny/data';
// import * as clanIdSelectors from '../clan-id/clan-id.selector';

// import {
//   catchError,
//   map,
//   switchMap,
//   distinctUntilChanged,
//   first,
//   filter,
//   concatMap,
//   tap,
//   mergeMap,
//   take,
//   withLatestFrom
// } from 'rxjs/operators';

// @Injectable()
// export class MemberStatEffects {
//   constructor(
//     private actions$: Actions,
//     private store: Store<any>,
//     private memberActivityService: ClanMemberActivityService
//   ) {}

//   loadMemberActivities$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(memberActivityActions.loadMemberActivities),
//       withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
//       switchMap(([action, clanId]) => {
//         return this.memberActivityService.getMemberActivity(clanId, action.member).pipe(
//           map((x) => {
//             return memberActivityActions.loadMemberActivitiesSuccess({ memberActivities: x });
//           })
//         );
//       })
//     )
//   );

//   // updateMembers$ = createEffect(
//   //   () =>
//   //     this.actions$.pipe(
//   //       ofType(memberActivityActions.loadMemberActivities),
//   //       withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
//   //       tap(([action, clanId]) => {
//   //         this.updater.update('memberActivities', clanId, action.member);
//   //       })
//   //     ),
//   //   { dispatch: false }
//   // );

//   // syncMemberProfiles$ = createEffect(
//   //   () =>
//   //     this.actions$.pipe(
//   //       ofType(memberActivityActions.loadMemberActivitiesFromAPI),
//   //       withLatestFrom(this.store.select(clanIdSelectors.getClanIdState)),
//   //       tap(([action, clanId]) => {
//   //         const memberActivities: MemberActivityStats = action.memberActivities;

//   //         if (memberActivities) {
//   //           this.clanDB.update(clanId.toString(), 'MemberActivities', [memberActivities]);
//   //         }
//   //       })
//   //     ),
//   //   { dispatch: false }
//   // );
// }
