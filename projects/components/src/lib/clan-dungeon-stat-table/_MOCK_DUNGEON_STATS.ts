const users = ['WorthyD', 'Zoned', 'Omega', 'ted', 'frank', 'tacos'];
export const MOCK_DUNGEON_STATS = [];
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

users.forEach((u) => {
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
    stats: {
      shat: {
        activityCompletions: getRandomNumber()
      },
      pit: {
        activityCompletions: getRandomNumber()
      },
      proph: {
        activityCompletions: getRandomNumber()
      },
      wis: {
        activityCompletions: getRandomNumber()
      },
      wish: {
        activityCompletions: getRandomNumber()
      },
      zero: {
        activityCompletions: getRandomNumber()
      },
      zeroh: {
        activityCompletions: getRandomNumber()
      },
      labs: {
        activityCompletions: getRandomNumber()
      }
    }
  });
});
console.log(MOCK_DUNGEON_STATS);
