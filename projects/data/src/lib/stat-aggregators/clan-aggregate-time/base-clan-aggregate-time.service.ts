import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember, MemberActivityTime } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ClanMemberRecentActivityService, ProfileService } from '../../clan-db';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseClanAggregateTimeService {
  readonly CONCURRENT_COUNT = 10;
  constructor(private profileService: ProfileService, private memberActivityService: ClanMemberRecentActivityService) {}

  abstract getClanActivityStatsForDuration(memberActivities: MemberActivityTime[], activityMode, count);

  filterDates(memberActivities: MemberActivityTime[], startDate: Date): MemberActivityTime[] {
    console.log('startDate', startDate);
    console.log(
      memberActivities.find((x) => x.id === '3-4611686018504387531').activities.filter((x) => x.date > startDate)
    );
    return memberActivities.map((ma) => {
      return {
        id: ma.id,
        activities: ma.activities.filter((x) => x.date > startDate)
      };
    });
  }

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
