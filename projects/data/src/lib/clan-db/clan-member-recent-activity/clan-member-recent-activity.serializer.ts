// import { MemberActivityStats, MemberActivityRecentStats, MemberActivityRecentStatsActivity } from 'bungie-models';
import { MemberActivityRecentStats, MemberActivityRecentStatsActivity } from 'projects/bungie-models/src/lib/models/MemberActivityRecentStats';
import { MemberActivityStats } from 'projects/bungie-models/src/lib/models/MemberActivityStat';
// import { MemberActivityRecentStats } from 'projects/components/src/lib/clan-roster-activity-table/clan-roster-activity-table.component';
import { groupActivities } from '../../utility/group-activity-by-date';
//import { getBungieStartDate } from '../../utility/date-utils';
//import { groupActivitiesByWeek } from '../../utility/group-activity-by-week';


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

    if (lwDate < actDate) {
      lastWeek += actSeconds;
    }
    if (lmDate < actDate) {
      lastMonth += actSeconds;
    }
    if (l90Date < actDate) {
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

 function groupActivitiesByWeek(data): Array<MemberActivityRecentStatsActivity> {
  const raw = data.map((x) => {
    return {
      date: getBungieStartDate(new Date(x.period)),
      seconds: x.values.activityDurationSeconds.basic.value
    };
  });
  // const obj2 = raw.reduce((prev, cur) => {
  //   const index = prev.findIndex((x) => x.date === cur.date);
  //   if (index > -1) {
  //     prev[index].seconds += cur.seconds;
  //   } else {
  //     prev.push({ date: cur.date, seconds: cur.seconds });
  //   }

  //   // if (prev.hasOwnProperty(cur.date)) {
  //   //   prev[cur.date] = prev[cur.date] + cur.seconds;
  //   // } else {
  //   //   prev[cur.date] = cur.seconds;
  //   // }
  //   return prev;
  // }, []);

  return groupActivities(raw);
}
export function getBungieStartDate(date): Date {
  const offset = date.getDay() >= 2 ? 2 : -5;
  // Clone date to prevent mutation
  const cDate = new Date(date.toDateString());
  const newDate = new Date(cDate.setDate(date.getDate() - date.getDay() + offset));

  return newDate;
}


// function getBungieStartDate(date) {
//   const offset = date.getDay() >= 2 ? 2 : -5;
//   return formatDate(new Date(date.setDate(date.getDate() - date.getDay() + offset)));
// }
