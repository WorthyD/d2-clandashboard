import { SECONDS_IN_WEEK, SECONDS_IN_DAY } from '@destiny/models/constants';
import * as moment from 'moment';
// export const MOCK_GRID_ITEMS: any[] = [
//   {
//     date: '2020-08-26',
//     seconds: 10822
//   },
//   {
//     date: '2020-08-25',
//     seconds: 4974
//   },
//   {
//     date: '2020-08-24',
//     seconds: 1598
//   },
//   {
//     date: '2020-08-23',
//     seconds: 3697
//   },
//   {
//     date: '2020-08-21',
//     seconds: 8358
//   },
// ];
const stats = [];
const today = moment();
//Last tuesday
today.day(today.day() >= 2 ? 2 : -5);
today.add(-26, 'w');

for (let i = 0; i < 26; i++) {
  stats.push({
    date: today.format('YYYY-MM-DD'),
    seconds: Math.floor(Math.random() * SECONDS_IN_DAY + 1)
  });
  today.add(7, 'd');
}
export const MOCK_GRID_ITEMS: any[] = stats;
