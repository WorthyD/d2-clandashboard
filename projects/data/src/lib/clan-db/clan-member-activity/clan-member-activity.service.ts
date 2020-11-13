import { Injectable } from '@angular/core';

import {
  Destiny2Service,
  DestinyHistoricalStatsDestinyActivityHistoryResults,
  DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup
} from 'bungie-api-angular';
import { BaseClanService } from '../base-clan.service';
import { BaseMemberActivityService } from '../base-member-activity.service';
import { ClanDatabase } from '../ClanDatabase';
import { MemberProfile, MemberActivityStats } from 'bungie-models';
import { from, of, Observable, defer, concat, EMPTY, forkJoin } from 'rxjs';
import { mergeMap, map, catchError, concatAll, mergeAll, toArray, mapTo } from 'rxjs/operators';

import { clanMemberActivitySerializer } from './clan-member-activity.serializer';
import { StoreId } from '../app-indexed-db';

@Injectable()
export class ClanMemberActivityService extends BaseMemberActivityService {
  constructor(private d2Service: Destiny2Service, private clanDB: ClanDatabase) {
    super(clanDB, StoreId.MemberActivities, d2Service, new Date(new Date().getFullYear() - 1, 0, 0), 30);
  }

  getMemberCharacterActivitySerialized(clanId: number, member: MemberProfile, characterId: number) {
    return this.getMemberCharacterActivity(clanId, member, characterId).pipe(
      map((activity) => {
        return {
          activities: activity.map((a) => clanMemberActivitySerializer(a))
        };
      })
    );
  }
  getMemberActivity(clanId: number, member: MemberProfile): Observable<MemberActivityStats> {
    return from(member.profile.data.characterIds).pipe(
      mergeMap((characterId) => {
        return this.getMemberCharacterActivitySerialized(clanId, member, characterId);
      }),
      map((x) => {
        return x.activities;
      }),
      toArray(),
      map((x) => {
        return {
          id: `${member.profile.data.userInfo.membershipType}-${member.profile.data.userInfo.membershipId}`,
          activities: [].concat(...x)
        };
      })
    );
  }
}
// const { defer, from, concat, EMPTY, timer } = rxjs; // = require("rxjs")
// const { mergeMap, take, mapTo, tap } = rxjs.operators; // = require("rxjs/operators")

// // simulate network request
// function fetchPage(page=0) {
//   return timer(100).pipe(
//     tap(() => console.log(`-> fetched page ${page}`)),
//     mapTo({
//       items: Array.from({ length: 10 }).map((_, i) => page * 10 + i),
//       nextPage: page + 1,
//     })
//   );
// }

// const getItems = page => defer(() => fetchPage(page)).pipe(
//   mergeMap(({ items, nextPage }) => {
//     const items$ = from(items);
//     const next$ = nextPage ? getItems(nextPage) : EMPTY;
//     return concat(items$, next$);
//   })
// );

// // process only first 30 items, without fetching all of the data
// getItems()
//  .pipe(take(30))
//  .subscribe(e => console.log(e));
// <script src="htt
