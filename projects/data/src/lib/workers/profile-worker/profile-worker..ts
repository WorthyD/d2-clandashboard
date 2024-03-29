// // export function getSerializedProfilesWithProgress() {



// // }
// import { Destiny2Service } from 'bungie-api-angular';
// import { ClanMember, MemberProfile } from 'bungie-models';
// import { ClanDatabase } from '../../ClanDatabase';
// import { map, take, catchError, mergeMap, bufferTime, toArray } from 'rxjs/operators';
// import { Observable, from, of } from 'rxjs';

// import { DBObject, StoreId } from '../app-indexed-db';
// import { latestSeason } from '@destiny/models';

// import { nowPlusDays, unixTimeStampToDate } from '../../utility/date-utils';

// export class ProfileService {
//   private tableName: StoreId = StoreId.MemberProfiles;
//   private concurrentRequests = 20;
//   private profileComponents = [100, 104, 200, 202];

//   private getProfileId(member: ClanMember) {
//     return `${member.destinyUserInfo.membershipType}-${member.destinyUserInfo.membershipId}`;
//   }

//   private getProfileFromCache(clanId: string, member: ClanMember) {
//     // return this.clanDb.getValues(clanId).MemberProfiles.pipe(
//     //   map((c) => {
//     //     if (c && c.length > 0) {
//     //       return c.find((m) => m.id === this.getProfileId(member));
//     //     }
//     //     return undefined;
//     //   }),
//     //   take(1)
//     // );
//     return this.clanDb.getById(clanId, this.tableName, this.getProfileId(member));
//   }

//   private getProfileFromAPI(member: ClanMember) {
//     return this.d2Service.destiny2GetProfile(
//       member.destinyUserInfo.membershipId,
//       member.destinyUserInfo.membershipType,
//       this.profileComponents
//     );
//   }

//   getProfile(clanId: string, member: ClanMember): Observable<any> {
//     return from(this.getProfileFromCache(clanId, member)).pipe(
//       mergeMap((cachedData) => {
//         if (cachedData && cachedData.createDate) {
//           const cacheDate = cachedData.createDate;
//           const lastStatusChange = unixTimeStampToDate(member.lastOnlineStatusChange);
//           const staleXP = nowPlusDays(-1);
//           // Make sure we recapture new data after season change
//           const expireDate = staleXP > lastStatusChange ? staleXP : lastStatusChange;

//           if (cacheDate > expireDate) {
//             return of(cachedData?.data);
//           }
//         }
//         return this.getProfileFromAPI(member).pipe(
//           map((memberProfileResponse) => {
//             if (memberProfileResponse.Response) {
//               this.clanDb.update(clanId, this.tableName, [
//                 {
//                   id: this.getProfileId(member),
//                   createDate: new Date(),
//                   data: memberProfileResponse.Response
//                 }
//               ]);

//               return memberProfileResponse.Response;
//             }
//           }),
//           catchError((error) => {
//             if (cachedData && cachedData.data) {
//               return of(cachedData.data);
//             }
//             if (error?.error?.ErrorStatus === 'DestinyAccountNotFound') {
//               return of();
//             }
//             throw error;
//           })
//         );
//       })
//     );
//   }

//   constructor(private d2Service: Destiny2Service, private clanDb: ClanDatabase) {}

//   getSerializedProfiles(clanId: string, members: ClanMember[]): Observable<MemberProfile> {
//     return from(members).pipe(mergeMap((member) => this.getSerializedProfile(clanId, member), this.concurrentRequests));
//   }

//   getSerializedProfilesWithProgress(
//     clanId: string,
//     members: ClanMember[],
//     progress?: (done) => any
//   ): Observable<MemberProfile[]> {
//     let complete = 0;
//     return from(members)
//       .pipe(mergeMap((member) => this.getSerializedProfile(clanId, member), this.concurrentRequests))
//       .pipe(
//         bufferTime(1000, undefined, 100),
//         /**
//          * Don't continue processing if the timer in `bufferTime` was reached and
//          *   there are no buffered companies.
//          */
//         mergeMap((memberResp) => {
//           complete += memberResp.length;
//           if (progress) {
//             progress(complete);
//           }
//           // this.store.dispatch(
//           //   updateNotification({
//           //     notification: { id: 'memberProfile', title: 'Updating Profiles', data: { progress } }
//           //   })
//           // );
//           // this.store.dispatch(memberProfileActions.loadMemberProfiles({ memberProfiles: members }));
//           return memberResp;
//         }),
//         toArray()
//         //map((x) => {
//         // this.store.dispatch(
//         //   removeNotification({ notification: { id: 'memberProfile', title: 'Updating Profiles', data: 'done' } })
//         // );
//         //
//         // return memberProfileActions.loadMemberProfileSuccess();
//         //})
//       );
//   }

//   getSerializedProfile(clanId: string, member: ClanMember): Observable<MemberProfile> {
//     return this.getProfile(clanId, member).pipe(
//       map((profile) => {
//         return (profileSerializer(profile, [
//           latestSeason.seasonRewardProgressionHash,
//           latestSeason.seasonPrestigeProgressionHash
//         ]) as unknown) as MemberProfile;
//       })
//     );
//   }
// }
