import { getDateArray } from 'projects/data/src/lib/utility/date-utils';

export function formatHeatmapData(data) {
  const cleanedData = data.map((x) => {
    return {
      date: new Date(x.date),
      seconds: x.seconds
    };
  });

  const dates = data.map((x) => new Date(x.date));
  const startYear = dates
    .reduce((a, b) => {
      return a < b ? a : b;
    })
    .getFullYear();

  const endYear = dates
    .reduce((a, b) => {
      return a > b ? a : b;
    })
    .getFullYear();

  const exportData = [];
  for (let yearIndex = startYear; yearIndex < endYear + 1; yearIndex++) {
    const startDate = new Date(yearIndex, 0, 1);

    // Get previous sunday
    const startDateAdjusted = new Date(startDate.setDate(startDate.getDate() - startDate.getDay()));

    const endDate = new Date(yearIndex, 11, 31);

    // Get next saturday
    const endDateAdjusted = new Date(endDate.setDate(endDate.getDate() - endDate.getDay() + 6));

    const dateRange = getDateArray(startDateAdjusted, endDateAdjusted);
    const eventsOfYear = cleanedData.filter((x) => x.date.getFullYear() === yearIndex);

    const sundayData = getDataForDayOfWeek(0, dateRange, eventsOfYear);
    console.log(sundayData);
    // getDataForDayOfWeek(1, dateRange, eventsOfYear);
    // getDataForDayOfWeek(2, dateRange, eventsOfYear);
    // getDataForDayOfWeek(3, dateRange, eventsOfYear);
    // getDataForDayOfWeek(4, dateRange, eventsOfYear);
    // getDataForDayOfWeek(5, dateRange, eventsOfYear);
    // getDataForDayOfWeek(6, dateRange, eventsOfYear);
  }
  return '';
}

function getDataForDayOfWeek(dayIndex: number, dateRange: Date[], eventData) {
  const allDaysOfYear = dateRange.filter((x) => x.getDay() === dayIndex);

  const dayOfWeekData = [];
  for (let i = 0; i < allDaysOfYear.length; i++) {
    const matchedDate = eventData.find((x) => x.date.toDateString() === allDaysOfYear[i].toDateString());
    const xName = `w${i}`;
    if (matchedDate) {
      dayOfWeekData.push({
        x: xName,
        y: matchedDate.seconds
      });
    } else {
      dayOfWeekData.push({
        x: xName,
        y: 0
      });
    }
  }

  return {
    name: getDayOfWeek(dayIndex),
    data: dayOfWeekData
  };
}
function getDayOfWeek(dayIndex) {
  switch (dayIndex) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
}
