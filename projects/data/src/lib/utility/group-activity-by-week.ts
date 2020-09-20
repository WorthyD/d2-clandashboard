import * as moment from 'moment';
import { formatDate } from './format-date';
import { MemberActivityRecentStatsActivity } from 'bungie-models';

export function groupActivitiesByWeek(data): Array<MemberActivityRecentStatsActivity> {
  const raw = data.map((x) => {
    return {
      date: getBungieStartDate(new Date(x.period)),
      seconds: x.values.activityDurationSeconds.basic.value
    };
  });
  const obj2 = raw.reduce((prev, cur) => {
    const index = prev.findIndex((x) => x.date === cur.date);
    if (index > -1) {
      prev[index].seconds += cur.seconds;
    } else {
      prev.push({ date: cur.date, seconds: cur.seconds });
    }

    // if (prev.hasOwnProperty(cur.date)) {
    //   prev[cur.date] = prev[cur.date] + cur.seconds;
    // } else {
    //   prev[cur.date] = cur.seconds;
    // }
    return prev;
  }, []);

  return obj2;
}

function getBungieStartDate(date) {
  const offset = date.getDay() >= 2 ? 2 : -5;
  return formatDate(new Date(date.setDate(date.getDate() - date.getDay() + offset)));
}
