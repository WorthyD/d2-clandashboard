export const MEMBERS = [];
const names = [
  'Sweeney Herring',
  'Jacquelyn Malone',
  'Wheeler Figueroa',
  'Phillips Mill',
  'Buchanan Cole',
  'Saundra Fitzpatrick',
  'Clara Campos',
  'James Barr',
  'Veronica Pitts',
  'Veronica Pitt3'
];
for (let i = 0; i < 10; i++) {

  MEMBERS.push({
    member: {
      memberType: 1,
      isOnline: false,
      lastOnlineStatusChange: '1590287191',
      groupId: '2073131',
      destinyUserInfo: {
        LastSeenDisplayName: names[i],
        LastSeenDisplayNameType: 3,
        iconPath: '/img/theme/bungienet/icons/psnLogo.png',
        crossSaveOverride: 2,
        applicableMembershipTypes: [3, 2],
        isPublic: false,
        membershipType: 2,
        membershipId: '4611686018429412112',
        displayName: names[i]
      },
      bungieNetUserInfo: {
        supplementalDisplayName: '4378884',
        iconPath: '/img/profile/avatars/cc57.jpg',
        crossSaveOverride: 0,
        isPublic: false,
        membershipType: 254,
        membershipId: '4378884',
        displayName: names[i]
      },
      joinDate: '2020-04-27T00:05:15Z',
      id: '4611686018429412112'
    },
    profile: {
      profile: {
        data: {
          userInfo: {
            crossSaveOverride: 2,
            applicableMembershipTypes: [3, 2],
            isPublic: true,
            membershipType: 2,
            membershipId: '4611686018429412112',
            displayName: names[i]
          },
          dateLastPlayed: '2020-05-24T02:09:12Z',
          versionsOwned: 63,
          characterIds: ['2305843009263846152', '2305843009263846153', '2305843009263846154'],
          seasonHashes: [3612906877, 2007338097, 4035491417, 248573323],
          currentSeasonHash: 4035491417
        },
        privacy: 1
      },
      profileProgression: {
        data: {
          seasonalArtifact: {
            artifactHash: 2894222926,
            pointProgression: {
              progressionHash: 4165988736,
              dailyProgress: 0,
              dailyLimit: 0,
              weeklyProgress: 0,
              weeklyLimit: 0,
              currentProgress: 4130000,
              level: 12,
              levelCap: 12,
              stepIndex: 12,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            pointsAcquired: 12,
            powerBonusProgression: {
              progressionHash: 3207504321,
              dailyProgress: 5556,
              dailyLimit: 0,
              weeklyProgress: 597601,
              weeklyLimit: 0,
              currentProgress: 12317229,
              level: 15,
              levelCap: -1,
              stepIndex: 15,
              progressToNextLevel: 1537229,
              nextLevelAt: 1595000
            },
            powerBonus: 10 + i
          }
        },
        privacy: 2
      },
      characters: {
        data: {
          '2305843009263846152': {
            membershipId: '4611686018429412112',
            membershipType: 2,
            characterId: '2305843009263846152',
            dateLastPlayed: '2020-05-09T22:38:04Z',
            minutesPlayedThisSession: '166',
            minutesPlayedTotal: '8415',
            light: i * 399,
            stats: {
              '144602215': 35,
              '392767087': 28,
              '1735777505': 42,
              '1935470627': 1004,
              '1943323491': 50,
              '2996146975': 41,
              '4244567218': 44
            },
            raceHash: 2803282938,
            genderHash: 3111576190,
            classHash: 3655393761,
            raceType: 1,
            classType: 0,
            genderType: 0,
            emblemPath: '/common/destiny2_content/icons/ec641b4e50c365cf43eed134ae388ddf.jpg',
            emblemBackgroundPath: '/common/destiny2_content/icons/80703562ee659110d231e060f3a8280a.jpg',
            emblemHash: 2133500863,
            emblemColor: {
              red: 252,
              green: 20,
              blue: 0,
              alpha: 255
            },
            levelProgression: {
              progressionHash: 1716568313,
              dailyProgress: 0,
              dailyLimit: 0,
              weeklyProgress: 0,
              weeklyLimit: 0,
              currentProgress: 0,
              level: 50,
              levelCap: 50,
              stepIndex: 50,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            baseCharacterLevel: 50,
            percentToNextLevel: 0,
            titleRecordHash: 2460356851
          },
          '2305843009263846153': {
            membershipId: '4611686018429412112',
            membershipType: 2,
            characterId: '2305843009263846153',
            dateLastPlayed: '2020-04-27T18:48:06Z',
            minutesPlayedThisSession: '27',
            minutesPlayedTotal: '1869',
            light: i * 99,
            stats: {
              '144602215': 44,
              '392767087': 23,
              '1735777505': 26,
              '1935470627': 1016,
              '1943323491': 45,
              '2996146975': 36,
              '4244567218': 30
            },
            raceHash: 898834093,
            genderHash: 3111576190,
            classHash: 2271682572,
            raceType: 2,
            classType: 2,
            genderType: 0,
            emblemPath: '/common/destiny2_content/icons/0586c71f79a5634174b5bba0a3402a80.jpg',
            emblemBackgroundPath: '/common/destiny2_content/icons/760209d9d614aec2e3cb5aead4340d2e.jpg',
            emblemHash: 4132147345,
            emblemColor: {
              red: 1,
              green: 2,
              blue: 6,
              alpha: 255
            },
            levelProgression: {
              progressionHash: 1716568313,
              dailyProgress: 0,
              dailyLimit: 0,
              weeklyProgress: 0,
              weeklyLimit: 0,
              currentProgress: 0,
              level: 50,
              levelCap: 50,
              stepIndex: 50,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            baseCharacterLevel: 50,
            percentToNextLevel: 0
          },
          '2305843009263846154': {
            membershipId: '4611686018429412112',
            membershipType: 2,
            characterId: '2305843009263846154',
            dateLastPlayed: '2020-05-24T02:09:12Z',
            minutesPlayedThisSession: '61',
            minutesPlayedTotal: '68904',
            light: i * 99,
            stats: {
              '144602215': 55,
              '392767087': 42,
              '1735777505': 37,
              '1935470627': 1022,
              '1943323491': 52,
              '2996146975': 50,
              '4244567218': 33
            },
            raceHash: 3887404748,
            genderHash: 2204441813,
            classHash: 671679327,
            raceType: 0,
            classType: 1,
            genderType: 1,
            emblemPath: '/common/destiny2_content/icons/c5a7b6aea16b97b28b3d1bc85a078765.jpg',
            emblemBackgroundPath: '/common/destiny2_content/icons/42bb9815c6e4741f4122fe8f42c1790c.jpg',
            emblemHash: 1983519836,
            emblemColor: {
              red: 186,
              green: 3,
              blue: 2,
              alpha: 255
            },
            levelProgression: {
              progressionHash: 1716568313,
              dailyProgress: 0,
              dailyLimit: 0,
              weeklyProgress: 0,
              weeklyLimit: 0,
              currentProgress: 0,
              level: 50,
              levelCap: 50,
              stepIndex: 50,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            baseCharacterLevel: 50,
            percentToNextLevel: 0,
            titleRecordHash: 2860165064
          }
        },
        privacy: 1
      },
      id: '4611686018429412112'
    }
  });
}
