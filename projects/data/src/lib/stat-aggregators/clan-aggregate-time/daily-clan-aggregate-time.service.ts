import { Injectable } from '@angular/core';
import { ActivityStats, MemberProfile, ClanMember, MemberActivityTime } from 'bungie-models';
import { forkJoin, from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { ClanMemberRecentActivityService, ProfileService } from '../../clan-db';
import { nowPlusDays } from '../../utility/date-utils';
import { groupActivitiesByDate, groupActivityStatsByDate } from '../../utility/group-activity-by-date';
import { BaseClanAggregateTimeService } from './base-clan-aggregate-time.service';

@Injectable({
  providedIn: 'root'
})
export class DailyClanAggregateTimeService extends BaseClanAggregateTimeService {
  getClanActivityStatsForDuration(
    memberActivities: MemberActivityTime[],
    //startData: Date,
    activityMode: any
  ) {
    const x = this.filterDates(memberActivities, nowPlusDays(-30));

    const activities = [...x.map((y) => y.activities)];
    const flatActivities = [].concat.apply([], activities);
    const summedActivities = groupActivityStatsByDate(flatActivities);

    return summedActivities;
  }
}
