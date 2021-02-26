import { formatDate } from './format-date';
import { ALL_SEASONS, MemberActivityRecentStatsActivity } from 'bungie-models';
import { getBungieStartDate, getFirstDayOfMonth } from './date-utils';
import { groupActivities } from './group-activity-by-date';

export function groupActivitiesBySeason(data): Array<MemberActivityRecentStatsActivity> {
  const raw = data.map((x) => {
    return {
      date: getFirstDayOfSeason(new Date(x.period)),
      seconds: x.values.activityDurationSeconds.basic.value
    };
  });
  return groupActivities(raw);
}

export function groupActivityStatsBySeason(data: MemberActivityRecentStatsActivity[]) {
  const raw = data.map((x) => {
    return {
      date: getFirstDayOfSeason(x.date),
      seconds: x.seconds
    };
  });
  return groupActivities(raw);
}

function getFirstDayOfSeason(date) {
  let retDate;
  //for (let i = 0; i < ALL_SEASONS.length; i++) {
  for (let i = ALL_SEASONS.length - 1; i > -1; i--) {
    if (date < ALL_SEASONS[i].endDate && date > ALL_SEASONS[i].startDate) {
      retDate = ALL_SEASONS[i].startDate;

      if (i === 5) {
        console.log(ALL_SEASONS[i].name, retDate);
      }

      break;
    }
  }
  return retDate;
}
