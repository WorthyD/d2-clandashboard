import { SECONDS_IN_WEEK, SECONDS_IN_DAY } from '@destiny/models/constants';
// TODO: Remove
import { formatDate } from 'projects/data/src/lib/utility/format-date';
export const MOCK_ROSTER_ACTIVITY = [];
export const MOCK_ROSTER_ACTIVITIES = [];
export const MOCK_ROSTER_ACTIVITIES_COMBINE = [];
const stats = [];

const today = new Date(new Date().setDate(new Date().getDate() + ((2 + 7 - new Date().getDay()) % 7) - 189));

for (let i = 0; i < 26; i++) {
  const d = new Date(today);
  const d2 = new Date(d.setDate(d.getDate() + i * 7));
  stats.push({
    date: formatDate(d2),
    seconds: Math.floor(Math.random() * SECONDS_IN_DAY + 1)
  });
}

for (let i = 0; i < 10; i++) {
  MOCK_ROSTER_ACTIVITY.push({
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: i,
          displayName: 'User ' + i
        },
        dateLastPlayed: '2020-07-31T22:00:00Z',
        characterIds: ['2305843009478934569']
      }
    },
    id: '1-' + i
    // isLoading: false,
    // lastNinteyDays: Math.floor(Math.random() * (SECONDS_IN_WEEK * 12) + 1),
    // lastMonth: Math.floor(Math.random() * (SECONDS_IN_WEEK * 4) + 1),
    // lastWeek: Math.floor(Math.random() * SECONDS_IN_WEEK + 1),
    //stats: stats
  });
  MOCK_ROSTER_ACTIVITIES.push({
    id: '1-' + i,
    lastNinetyDays: Math.floor(Math.random() * (SECONDS_IN_WEEK * 12) + 1),
    lastMonth: Math.floor(Math.random() * (SECONDS_IN_WEEK * 4) + 1),
    lastWeek: Math.floor(Math.random() * SECONDS_IN_WEEK + 1),
    activities: stats
  });
}

for (let i = 0; i < 10; i++) {
  MOCK_ROSTER_ACTIVITIES_COMBINE.push({
    memberProfile: {
      profile: {
        data: {
          userInfo: {
            membershipType: 1,
            membershipId: i,
            displayName: 'User ' + i
          },
          dateLastPlayed: '2020-07-31T22:00:00Z',
          characterIds: ['2305843009478934569']
        }
      },
      id: '1-' + i
      // isLoading: false,
      // lastNinteyDays: Math.floor(Math.random() * (SECONDS_IN_WEEK * 12) + 1),
      // lastMonth: Math.floor(Math.random() * (SECONDS_IN_WEEK * 4) + 1),
      // lastWeek: Math.floor(Math.random() * SECONDS_IN_WEEK + 1),
      //stats: stats
    },
    stats: {
      lastNinetyDays: Math.floor(Math.random() * (SECONDS_IN_WEEK * 12) + 1),
      lastMonth: Math.floor(Math.random() * (SECONDS_IN_WEEK * 4) + 1),
      lastWeek: Math.floor(Math.random() * SECONDS_IN_WEEK + 1),
      activities: stats
    }
  });
}
