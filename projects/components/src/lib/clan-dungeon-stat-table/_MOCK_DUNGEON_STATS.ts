const users = ['WorthyD', 'Zoned', 'Omega', 'ted', 'frank', 'tacos'];
export const MOCK_DUNGEON_STATS = [];
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
import { AllDungeons } from 'bungie-models';
users.forEach((u) => {
  const stats = {};
  AllDungeons.forEach((r) => {
    stats[r.key] = {
      activityCompletions: getRandomNumber()
    };
  });

  MOCK_DUNGEON_STATS.push({
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
    stats
  });
});
console.log(MOCK_DUNGEON_STATS);
