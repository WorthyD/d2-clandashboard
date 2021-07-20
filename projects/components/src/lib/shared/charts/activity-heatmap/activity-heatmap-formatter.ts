import { getDateArray } from 'projects/data/src/lib/utility/date-utils';
import { formatDate } from 'projects/data/src/lib/utility/format-date';

export function formatHeatmapData(data) {
  const cleanedData = data.map((x) => {
    return {
      formattedDate: x.date,
      date: new Date(x.date),
      seconds: x.seconds
    };
  });

  const dates = data.map((x) => new Date(x.date));
  const startYear = dates
    .reduce((a, b) => {
      return a < b ? a : b;
    })
    .getUTCFullYear();

  const endYear = dates
    .reduce((a, b) => {
      return a > b ? a : b;
    })
    .getUTCFullYear();
    //new Date()

  const exportData = [];
  for (let yearIndex = startYear; yearIndex < endYear + 1; yearIndex++) {
    /*
      Get the beginning of the first week and end of the last week.
      These wont have any data, but are required for our chart's rows to line up properly
    */

    const startDate = new Date(yearIndex, 0, 1);
    // Get previous sunday
    const startDateAdjusted = new Date(startDate.setDate(startDate.getDate() - startDate.getDay()));

    const endDate = new Date(yearIndex, 11, 31);

    // Get next saturday
    const endDateAdjusted = new Date(endDate.setDate(endDate.getDate() - endDate.getDay() + 6));

    const dateRange = getDateArray(startDateAdjusted, endDateAdjusted);
    const eventsOfYear = cleanedData.filter((x) => x.date.getUTCFullYear() === yearIndex);

    const yearData = [];
    for (let dayOfWeek = 6; dayOfWeek > -1; dayOfWeek--) {
      yearData.push(getDataForDayOfWeek(dayOfWeek, dateRange, eventsOfYear));
    }
    exportData.push({ year: yearIndex, data: yearData });
  }

  return exportData;
}

function getDataForDayOfWeek(dayIndex: number, dateRange: Date[], eventData) {
  const allDaysOfYear = dateRange.filter((x) => x.getDay() === dayIndex).map(x => formatDate(x));


  const dayOfWeekData = [];
  for (let i = 0; i < allDaysOfYear.length; i++) {
    const matchedDate = eventData.find((x) => x.formattedDate === allDaysOfYear[i]);
    const xName = `w${i}`;
    if (matchedDate) {
      dayOfWeekData.push({
        x: xName,
        y: matchedDate.seconds,
        date: matchedDate.formattedDate
      });
    } else {
      dayOfWeekData.push({
        x: xName,
        y: 0,
        date: allDaysOfYear[i]
      });
    }
  }

  return {
    name: getDayOfWeek(dayIndex),
    data: dayOfWeekData
  };
}

/*
  TODO: not a fan of this right now.
  Look into a different way to do this if we ever handle
  more than en-us.
*/
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
