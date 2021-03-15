import { MemberActivityTime } from 'bungie-models';
import { nowPlusDays } from 'projects/data/src/lib/utility/date-utils';
//import {} from 'data';

export function getLast24HourCount(events: MemberActivityTime[]) {
  const now = new Date();
  const then = nowPlusDays(-1);
  return countBetweenDates(events, then, now);
}
export function getPrev24HourCount(events: MemberActivityTime[]) {
  const now = nowPlusDays(-1);
  const then = nowPlusDays(-2);
  return countBetweenDates(events, then, now);
}
export function getLastWeekCount(events: MemberActivityTime[]) {
  const now = new Date();
  const then = nowPlusDays(-7);
  return countBetweenDates(events, then, now);
}

export function getPrevWeekCount(events: MemberActivityTime[]) {
  const now = nowPlusDays(-7);
  const then = nowPlusDays(-14);
  return countBetweenDates(events, then, now);
}

export function getLastMonthCount(events: MemberActivityTime[]) {
  const now = new Date();
  const then = nowPlusDays(-30);
  return countBetweenDates(events, then, now);
}

export function getPrevMonthCount(events: MemberActivityTime[]) {
  const now = nowPlusDays(-30);
  const then = nowPlusDays(-60);
  return countBetweenDates(events, then, now);
}

function countBetweenDates(events, then, now) {
  let count = 0;

  events.forEach((x) => {
    for (let i = 0; i < x.activities.length; i++) {
      if (x.activities[i].date > then && x.activities[i].date < now) {
        count++;
        break;
      }
    }
  });
  return count;
}
