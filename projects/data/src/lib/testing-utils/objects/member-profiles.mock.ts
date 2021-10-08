export const MOCK_MEMBER_PROFILE = {
  profile: {
    data: {
      userInfo: {
        membershipId: 1,
        membershipType: 1
      },
      dateLastPlayed: new Date()
    }
  }
};

export function GET_MOCK_PROFILES(count: number) {
  const profiles = [];
  for (let i = 0; i < count; i++) {
    profiles.push({
      profile: {
        data: {
          userInfo: {
            membershipId: i,
            membershipType: i
          },
          characterIds: [i + 1, i + 2, i + 3],
          dateLastPlayed: new Date()
        }
      }
    });
  }
  return profiles;
}
