import * as moment from 'moment';

export function groupActivitiesByWeek(data) {
  const raw = data.map((x) => {
    return {
      date: getBungieStartDate(new Date(x.period)),
      seconds: x.values.activityDurationSeconds.basic.value
    };
  });
  const obj2 = raw.reduce((prev, cur) => {
    if (prev.hasOwnProperty(cur.date)) {
      prev[cur.date] = prev[cur.date] + cur.seconds;
    } else {
      prev[cur.date] = cur.seconds;
    }
    return prev;
  }, {});

  return obj2;
}

function getBungieStartDate(date) {
  const offset = date.getDay() >= 2 ? 2 : -5;
  return formatDate(new Date(date.setDate(date.getDate() - date.getDay() + offset)));
}

// TODO: Move this so we don't have to rely on moment.
function formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
}
