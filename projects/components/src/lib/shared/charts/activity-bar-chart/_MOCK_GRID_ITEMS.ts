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

export const REAL_DATA = [
  {
    date: '2020-07-28',
    seconds: 17980
  },
  // {
  //   date: '2020-07-21',
  //   seconds: 19063
  // },
  {
    date: '2020-07-14',
    seconds: 10799
  },
  {
    date: '2020-07-07',
    seconds: 42980
  },
  {
    date: '2020-06-30',
    seconds: 9096
  },
  {
    date: '2020-06-23',
    seconds: 5380
  },
  {
    date: '2020-06-16',
    seconds: 7985
  },
  {
    date: '2020-02-25',
    seconds: 1118
  },
  {
    date: '2020-02-11',
    seconds: 5502
  },
  {
    date: '2020-01-14',
    seconds: 2589
  },
  {
    date: '2020-01-07',
    seconds: 3810
  },
  {
    date: '2019-12-31',
    seconds: 3928
  },
  {
    date: '2019-12-24',
    seconds: 7161
  },
  {
    date: '2019-12-17',
    seconds: 9598
  },
  {
    date: '2019-12-10',
    seconds: 6755
  },
  {
    date: '2019-12-03',
    seconds: 5923
  },
  {
    date: '2019-11-26',
    seconds: 11169
  },
  {
    date: '2019-11-19',
    seconds: 9496
  },
  {
    date: '2019-11-12',
    seconds: 60783
  },
  {
    date: '2019-11-05',
    seconds: 71285
  },
  {
    date: '2019-10-29',
    seconds: 75989
  },
  {
    date: '2019-10-22',
    seconds: 61420
  },
  {
    date: '2019-10-15',
    seconds: 46780
  },
  {
    date: '2019-10-08',
    seconds: 31837
  },
  {
    date: '2019-10-01',
    seconds: 36309
  },
  {
    date: '2019-09-17',
    seconds: 4481
  },
  {
    date: '2019-09-03',
    seconds: 33579
  },
  {
    date: '2019-08-27',
    seconds: 37958
  },
  {
    date: '2019-08-20',
    seconds: 29367
  },
  {
    date: '2019-08-13',
    seconds: 28290
  },
  {
    date: '2019-08-06',
    seconds: 21828
  },
  {
    date: '2019-07-30',
    seconds: 97254
  },
  {
    date: '2019-07-23',
    seconds: 19456
  }
];
