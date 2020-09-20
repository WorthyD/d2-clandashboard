import { MemberActivityStats, MemberActivityRecentStats } from 'bungie-models';
import { DestinyHistoricalStatsDestinyHistoricalStatsPeriodGroup } from 'bungie-api';
import { groupActivitiesByWeek } from '../../utility/group-activity-by-week';


export function clanMemberRecentActivitySerializer(activity: MemberActivityStats): MemberActivityRecentStats {
  let lastWeek = 0;
  let lastMonth = 0;
  let lastNinety = 0;
  const today = new Date();
  const lwDate = new Date(today.setDate(today.getDate() - 7));
  const lmDate = new Date(today.setDate(today.getDate() - 30));
  const l90Date = new Date(today.setDate(today.getDate() - 90));

  activity.activities.forEach((x) => {
    const actDate = new Date(x.period);
    const actSeconds = x.values.activityDurationSeconds.basic.value;

    if (lwDate > actDate) {
      lastWeek += actSeconds;
    }
    if (lmDate > actDate) {
      lastMonth += actSeconds;
    }
    if (l90Date > actDate) {
      lastNinety += actSeconds;
    }
  });

  return {
    activities: groupActivitiesByWeek(activity.activities),
    id: activity.id,
    lastMonth: lastMonth,
    lastNinetyDays: lastNinety,
    lastWeek: lastWeek
  };
}
