import { SECONDS_IN_WEEK } from '@destiny/models/constants';
import * as moment from 'moment';
export const MOCK_ROSTER_ACTIVITY = [];
const stats = [];
const today = moment();
//Last tuesday
today.day(today.day() >= 2 ? 2 : -5);
today.add(-26, 'w');

for (let i = 0; i < 26; i++) {
  stats.push({
    date: today.format('YYYY-MM-DD'),
    seconds: Math.floor(Math.random() * SECONDS_IN_WEEK + 1)
  });
  today.add(7, 'd');
}

for (let i = 0; i < 10; i++) {
  MOCK_ROSTER_ACTIVITY.push({
    memberProfile: {
      profile: {
        data: {
          userInfo: {
            membershipType: 3,
            membershipId: '4611686018488348376',
            displayName: 'User ' + i
          },
          dateLastPlayed: '2020-07-31T22:00:00Z',
          characterIds: ['2305843009478934569']
        }
      }
    },
    isLoading: false,
    lastNinteyDays: Math.floor(Math.random() * (SECONDS_IN_WEEK * 12) + 1),
    lastMonth: Math.floor(Math.random() * (SECONDS_IN_WEEK * 4) + 1),
    lastWeek: Math.floor(Math.random() * SECONDS_IN_WEEK + 1),
    stats: stats
  });
}
