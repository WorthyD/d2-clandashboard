import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ClanMemberRecentActivityService, ProfileService } from '../../clan-db';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseClanAggregateTimeService {
  readonly CONCURRENT_COUNT = 10;
  constructor(private profileService: ProfileService, private memberActivityService: ClanMemberRecentActivityService) {}

  abstract getClanActivityStatsForDuration(clanId: number, clanMemberProfiles: MemberProfile[], activityMode, count);

  getClanActivityStats(clanId: number, clanMemberProfiles: MemberProfile[], startDate: Date, activityMode: number = 0) {
    return from(clanMemberProfiles).pipe(
      mergeMap((member) => {
        return this.getMemberActivityStats(clanId, member, startDate, activityMode);
      }, this.CONCURRENT_COUNT)
    );
  }

  private getMemberActivityStats(
    clanId: number,
    member: MemberProfile,
    startDate: Date,
    activityMode: number = 0
  ): Observable<ActivityStats> {
    return this.memberActivityService.getMemberActivity(clanId, member, activityMode).pipe(
      map((memberActivityResponse) => {
        return {
          memberProfile: { profile: member.profile },
          stats: {
            id: memberActivityResponse.id,
            activities: memberActivityResponse.activities.filter((x) => new Date(x.period) > startDate)
          }
        };
      })
    );
  }
}
