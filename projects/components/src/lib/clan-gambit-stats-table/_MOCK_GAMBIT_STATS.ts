const users = ['WorthyD', 'Zoned', 'Omega', 'ted', 'frank', 'tacos'];
export const MOCK_GAMBIT_STATS = [];
function getRandomNumber() {
  return Math.floor(Math.random() * 5500 + 1);
}

users.forEach((u) => {
  MOCK_GAMBIT_STATS.push({
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
      infamyPoints: getRandomNumber(),
      infamyResets: getRandomNumber()
    }
  });
});
