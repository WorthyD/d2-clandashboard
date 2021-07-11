export function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d.getTime());
}

export function nowPlusMinutes(minutes) {
  return new Date(new Date().setMinutes(new Date().getMinutes() + minutes));
}

export function nowPlusDays(days) {
  return new Date(new Date().setDate(new Date().getDate() + days));
}

export function nowPlusWeeks(weeks) {
  return new Date(new Date().setDate(new Date().getDate() + weeks * 7));
}

export function dateToUnixTimeStamp(d) {
  return Math.floor(d.getTime() / 1000);
}

export function unixTimeStampToDate(uts) {
  return new Date(uts * 1000);
}

export function getBungieStartDate(date): Date {
  const offset = date.getDay() >= 2 ? 2 : -5;
  // Clone date to prevent mutation
  const cDate = new Date(date.getTime());
  // Reset Time
  cDate.setHours(12, 0, 0);
  return new Date(cDate.setDate(date.getDate() - date.getDay() + offset));
}

export function getFirstDayOfMonth(date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function getDateArray(startDate: Date, stopDate: Date) {
  const dateArray = [];
  let currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = addDays(currentDate, 1);
  }
  return dateArray;
}
function addDays(date: Date, days: number) {
  date.setDate(date.getDate() + days);
  return date;
}
