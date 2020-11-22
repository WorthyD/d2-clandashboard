const users = ['WorthyD', 'Zoned', 'Omega', 'ted', 'frank', 'tacos'];
import { MemberRaidStats, AllRaids } from 'bungie-models';
export const MOCK_RAID_STATS = [];
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

users.forEach((u) => {
  const stats = {};
  AllRaids.forEach((r) => {
    stats[r.key] = {
      activityCompletions: getRandomNumber()
    };
  });

  MOCK_RAID_STATS.push({
    memberProfile: {
      profile: {
        data: {
          userInfo: {
            membershipType: 3,
            membershipId: '4611686018488348376',
            displayName: u
          },
          dateLastPlayed: '2020-07-31T22:00:00Z',
          characterIds: [2305843009478934569]
        }
      }
    },
    stats: stats
  });
});
