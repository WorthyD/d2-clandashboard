
import * as moment from 'moment';

export function groupActivitiesByDate(data) {
  const raw = data.map((x) => {
    return { date: moment(x.period).format('YYYY-MM-DD'), seconds: x.values.activityDurationSeconds.basic.value };
  });

  // Todo: Find better way to handle this.
  let holder = {};

  raw.forEach(function (d) {
    if (holder.hasOwnProperty(d.date)) {
      holder[d.date] = holder[d.date] + d.seconds;
    } else {
      holder[d.date] = d.seconds;
    }
  });

  const obj2 = [];

  for (let prop in holder) {
    obj2.push({ date: prop, seconds: holder[prop] });
  }

  return obj2;
}
