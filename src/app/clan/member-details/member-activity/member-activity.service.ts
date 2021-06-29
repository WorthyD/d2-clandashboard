// import { Injectable } from '@angular/core';
// import { ClanMemberState } from '../../store/clan-members/clan-members.state';
// import { getSelectedClanMember, getSelectedClanMemberId } from '../../store/clan-members/clan-members.selectors';
// import { Store, select } from '@ngrx/store';
// import { ActivitiesService, ActivityModeService, ClanMemberActivityService, getClanMemberId } from '@destiny/data';
// import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
// import { MemberActivityGridItem } from '@destiny/components';
// // import {
// //   getSelectedClanMemberActivities,
// //   getClanMemberActivitiesLoading
// // } from '../../store/member-activities/member-activities.selectors';
// import { formatDate } from 'projects/data/src/lib/utility/format-date';
// import { ActivityModeDefinition } from 'bungie-models';
// import * as clanIdSelectors from '../../store/clan-id/clan-id.selector';
// import { filter, map, switchMap } from 'rxjs/operators';
// import * as memberProfileSelectors from '../../store/member-profiles/member-profiles.selectors';

// @Injectable()
// export class MemberActivityService {
//   activityModeDefinitionOptions: ActivityModeDefinition[];

//   constructor(
//     private store: Store<ClanMemberState>,
//     private activityModeService: ActivityModeService,
//     private activityService: ActivitiesService,
//     private clanMemberActivityService: ClanMemberActivityService
//   ) {
//     const activityModeDefinitions = this.activityModeService.getDefinitions();
//     const defArray = Object.keys(activityModeDefinitions).map((id) => activityModeDefinitions[id]);
//     const wantedTypes = [0, 2, 3, 4, 5, 6,  18, 63, 82, 84];
//     this.activityModeDefinitionOptions = wantedTypes.map((w) => {
//       return defArray.find((x) => x.modeType === w);
//     });
//   }
//   selectedDate$ = new BehaviorSubject(null);
//   selectedActivity$ = new BehaviorSubject(0);

//   selectedMember$ = this.store.pipe(select(getSelectedClanMember));
//   profilesLoaded$ = this.store.pipe(select(memberProfileSelectors.getIsMembersProfilesLoaded));

//   //selectedProfile$ = this.store.pipe(select(memberProfileSelectors.getClanMemberById(getSelectedClanMemberId)));
//   selectedProfile$ = this.selectedMember$.pipe(
//     filter((m) => !!m),
//     switchMap((x) => {
//       return this.store.pipe(select(memberProfileSelectors.getClanMemberById(getClanMemberId(x))));
//     })
//   );

//   // playerActivities$ = this.store.pipe(select(getSelectedClanMemberActivities));
//   // playerActivitiesLoading$ = this.store.pipe(select(getClanMemberActivitiesLoading));
//   playerActivitiesLoading = true;
//   clanId$ = this.store.select(clanIdSelectors.getClanIdState);

//   playerActivities2$ = combineLatest([this.clanId$, this.selectedProfile$, this.selectedActivity$]).pipe(
//     filter(([id, m, sa]) => !!m),
//     switchMap(([id, x, sa]) => {
//       return this.clanMemberActivityService.getMemberActivity(id, x, sa);
//       //return this.store.pipe(select(memberProfileSelectors.getClanMemberById(getClanMemberId(x))));
//     }),
//     map((x) => {
//       this.playerActivitiesLoading = false;
//       return x.activities;
//     })
//   );

//   activityDetails$: Observable<MemberActivityGridItem[]> = combineLatest(
//     this.playerActivities2$,
//     this.selectedDate$,
//     (pActivities, selectedDate) => {
//       if (pActivities && selectedDate) {
//         // I want to move the format out of the filter. Selected date is already locally formatted and can't format it back to UTC
//         const activitiesOfDay = pActivities.filter((x) => formatDate(x.period) === selectedDate);
//         return this.addDefinitions(activitiesOfDay);
//       }
//       return null;
//     }
//   );

//   addDefinitions(activities): MemberActivityGridItem[] {
//     const activityModeDefinitions = this.activityModeService.getDefinitions();
//     const activityDefinitions = this.activityService.getDefinitions();

//     const defArray = Object.keys(activityModeDefinitions).map((id) => activityModeDefinitions[id]);
//     return activities
//       .map((x) => {
//         return {
//           playerActivity: x,
//           activityDefinition: activityDefinitions[x.activityDetails.referenceId],
//           activityModeDefinition: defArray.find((y) => {
//             return y.modeType === x.activityDetails.mode;
//           })
//         };
//       })
//       .sort((a, b) => {
//         return compare(a.playerActivity.period, b.playerActivity.period, true);
//       });
//   }

//   loadDate(event) {
//     this.selectedDate$.next(event);
//   }
//   selectEventMode(event){
//   //  console.log(event);
//     this.selectedActivity$.next(event.modeType);
//   }
// }
// // TODO: Import from component libs
// function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
