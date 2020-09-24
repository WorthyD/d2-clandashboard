import { SECONDS_IN_WEEK, SECONDS_IN_DAY } from '@destiny/models/constants';
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
    seconds: Math.floor(Math.random() * SECONDS_IN_DAY + 1)
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

export const REAL_DATA = [
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018488348376',
          displayName: 'Ricktator'
        },
        dateLastPlayed: '2020-07-31T22:00:00Z',
        characterIds: ['2305843009478934569']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 878848,
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
            progressionHash: 3810510634,
            dailyProgress: 150,
            dailyLimit: 0,
            weeklyProgress: 995972,
            weeklyLimit: 0,
            currentProgress: 4247131,
            level: 9,
            levelCap: -1,
            stepIndex: 9,
            progressToNextLevel: 727131,
            nextLevelAt: 935000
          },
          powerBonus: 9
        }
      }
    },
    characters: {
      data: {
        '2305843009478934569': {
          membershipId: '4611686018488348376',
          membershipType: 3,
          characterId: '2305843009478934569',
          dateLastPlayed: '2020-07-31T22:00:00Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '19515',
          light: 1052,
          stats: {
            '144602215': 38,
            '392767087': 42,
            '1735777505': 42,
            '1935470627': 1052,
            '1943323491': 38,
            '2996146975': 41,
            '4244567218': 37
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009478934569': {
          progressions: {
            '1627914615': {
              dailyProgress: 150,
              weeklyProgress: 995954,
              currentProgress: 4254685,
              level: 43,
              levelCap: 100,
              progressToNextLevel: 54685,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    },
    activities: [
      {
        date: '2020-07-28',
        seconds: 17980
      },
      {
        date: '2020-07-21',
        seconds: 19063
      },
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
    ],
    id: '3-4611686018488348376',
    lastMonth: 836948,
    lastNinetyDays: 723665,
    lastWeek: 836948
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018460568239',
          displayName: 'Sillyville'
        },
        dateLastPlayed: '2020-09-20T05:49:30Z',
        characterIds: ['2305843009261468700', '2305843009283786215', '2305843009647345674']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {}
      }
    },
    characters: {
      data: {
        '2305843009261468700': {
          membershipId: '4611686018460568239',
          membershipType: 2,
          characterId: '2305843009261468700',
          dateLastPlayed: '2020-09-20T04:35:43Z',
          minutesPlayedThisSession: '45',
          minutesPlayedTotal: '103511',
          light: 1081,
          stats: {
            '144602215': 64,
            '392767087': 39,
            '1735777505': 45,
            '1935470627': 1081,
            '1943323491': 77,
            '2996146975': 64,
            '4244567218': 42
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5286a4c7ab0a6a2bd626d4a39c7ee2e2.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/0cb20865584f4873ba65a3815af4bb5e.jpg',
          emblemHash: 1788892385,
          emblemColor: {
            red: 18,
            green: 16,
            blue: 74,
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
          titleRecordHash: 2254764897
        },
        '2305843009283786215': {
          membershipId: '4611686018460568239',
          membershipType: 2,
          characterId: '2305843009283786215',
          dateLastPlayed: '2020-09-20T05:49:30Z',
          minutesPlayedThisSession: '73',
          minutesPlayedTotal: '20766',
          light: 1078,
          stats: {
            '144602215': 51,
            '392767087': 32,
            '1735777505': 40,
            '1935470627': 1078,
            '1943323491': 49,
            '2996146975': 42,
            '4244567218': 52
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/3290c3fca9d67c817c2c23a5696ec157.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/432abe92151ec04c060f494544cafeec.jpg',
          emblemHash: 4011836824,
          emblemColor: {
            red: 0,
            green: 78,
            blue: 171,
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
          titleRecordHash: 2254764897
        },
        '2305843009647345674': {
          membershipId: '4611686018460568239',
          membershipType: 2,
          characterId: '2305843009647345674',
          dateLastPlayed: '2020-09-16T05:46:58Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '3784',
          light: 1066,
          stats: {
            '144602215': 53,
            '392767087': 32,
            '1735777505': 43,
            '1935470627': 1066,
            '1943323491': 100,
            '2996146975': 67,
            '4244567218': 48
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b3468b9d7b2118c8be79e536cb009633.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/34ff6a162f8947e151120765f49ea57e.jpg',
          emblemHash: 4132147348,
          emblemColor: {
            red: 4,
            green: 4,
            blue: 3,
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
          titleRecordHash: 2254764897
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {}
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018503362889',
          displayName: 'sigurd27'
        },
        dateLastPlayed: '2020-09-19T19:47:41Z',
        characterIds: ['2305843009638455544']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 101460,
            dailyLimit: 0,
            weeklyProgress: 909251,
            weeklyLimit: 0,
            currentProgress: 18981716,
            level: 19,
            levelCap: -1,
            stepIndex: 19,
            progressToNextLevel: 1161717,
            nextLevelAt: 2035000
          },
          powerBonus: 19
        }
      }
    },
    characters: {
      data: {
        '2305843009638455544': {
          membershipId: '4611686018503362889',
          membershipType: 3,
          characterId: '2305843009638455544',
          dateLastPlayed: '2020-09-19T19:47:41Z',
          minutesPlayedThisSession: '87',
          minutesPlayedTotal: '13068',
          light: 1071,
          stats: {
            '144602215': 49,
            '392767087': 88,
            '1735777505': 56,
            '1935470627': 1071,
            '1943323491': 43,
            '2996146975': 33,
            '4244567218': 48
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009638455544': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 101460,
              weeklyProgress: 909238,
              currentProgress: 9102005,
              level: 91,
              levelCap: -1,
              progressToNextLevel: 2005,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018472973195',
          displayName: 'Z00™'
        },
        dateLastPlayed: '2020-09-14T21:40:11Z',
        characterIds: ['2305843009320565053', '2305843009333914536', '2305843009334445058']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 9101459,
            level: 13,
            levelCap: -1,
            stepIndex: 13,
            progressToNextLevel: 1181459,
            nextLevelAt: 1375000
          },
          powerBonus: 13
        }
      }
    },
    characters: {
      data: {
        '2305843009320565053': {
          membershipId: '4611686018472973195',
          membershipType: 3,
          characterId: '2305843009320565053',
          dateLastPlayed: '2020-09-13T17:04:17Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '26614',
          light: 1064,
          stats: {
            '144602215': 49,
            '392767087': 51,
            '1735777505': 58,
            '1935470627': 1064,
            '1943323491': 82,
            '2996146975': 37,
            '4244567218': 48
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4d23f2cbdf46c477b9792050a3bf3cf5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/4549eb41ca4bbbe8fa475b53e91c2c0a.jpg',
          emblemHash: 2419113768,
          emblemColor: {
            red: 95,
            green: 92,
            blue: 107,
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
        '2305843009333914536': {
          membershipId: '4611686018472973195',
          membershipType: 3,
          characterId: '2305843009333914536',
          dateLastPlayed: '2020-09-14T21:40:11Z',
          minutesPlayedThisSession: '9',
          minutesPlayedTotal: '40948',
          light: 1064,
          stats: {
            '144602215': 44,
            '392767087': 22,
            '1735777505': 28,
            '1935470627': 1064,
            '1943323491': 80,
            '2996146975': 55,
            '4244567218': 43
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/549ccf8f2b76e3e7c51f1db598135f71.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/dbc00889a1c1d4084a21fdbcb553c83b.jpg',
          emblemHash: 3622268496,
          emblemColor: {
            red: 8,
            green: 28,
            blue: 29,
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
        '2305843009334445058': {
          membershipId: '4611686018472973195',
          membershipType: 3,
          characterId: '2305843009334445058',
          dateLastPlayed: '2020-07-22T18:45:12Z',
          minutesPlayedThisSession: '28',
          minutesPlayedTotal: '29985',
          light: 1059,
          stats: {
            '144602215': 53,
            '392767087': 74,
            '1735777505': 36,
            '1935470627': 1059,
            '1943323491': 50,
            '2996146975': 39,
            '4244567218': 42
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/549ccf8f2b76e3e7c51f1db598135f71.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/dbc00889a1c1d4084a21fdbcb553c83b.jpg',
          emblemHash: 3622268496,
          emblemColor: {
            red: 8,
            green: 28,
            blue: 29,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009320565053': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9108367,
              level: 92,
              levelCap: 100,
              progressToNextLevel: 8367,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009333914536': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9108367,
              level: 92,
              levelCap: 100,
              progressToNextLevel: 8367,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009334445058': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9108367,
              level: 92,
              levelCap: 100,
              progressToNextLevel: 8367,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    },
    activities: [
      {
        date: '2020-09-08',
        seconds: 12563
      },
      {
        date: '2020-09-01',
        seconds: 16924
      },
      {
        date: '2020-08-25',
        seconds: 8865
      },
      {
        date: '2020-08-04',
        seconds: 9933
      },
      {
        date: '2020-07-21',
        seconds: 6395
      },
      {
        date: '2020-07-14',
        seconds: 34613
      },
      {
        date: '2020-07-07',
        seconds: 62928
      },
      {
        date: '2020-04-07',
        seconds: 36403
      },
      {
        date: '2020-03-31',
        seconds: 67209
      },
      {
        date: '2020-03-24',
        seconds: 105693
      },
      {
        date: '2020-03-17',
        seconds: 72388
      },
      {
        date: '2020-03-10',
        seconds: 164179
      },
      {
        date: '2020-03-03',
        seconds: 84394
      },
      {
        date: '2020-02-25',
        seconds: 78727
      },
      {
        date: '2020-02-11',
        seconds: 31486
      },
      {
        date: '2020-02-04',
        seconds: 59335
      },
      {
        date: '2020-01-28',
        seconds: 65424
      },
      {
        date: '2020-01-07',
        seconds: 61844
      },
      {
        date: '2019-12-31',
        seconds: 55672
      },
      {
        date: '2019-12-24',
        seconds: 19376
      },
      {
        date: '2019-12-17',
        seconds: 75906
      },
      {
        date: '2019-12-10',
        seconds: 93330
      },
      {
        date: '2019-11-12',
        seconds: 65761
      },
      {
        date: '2019-11-05',
        seconds: 67096
      },
      {
        date: '2019-10-29',
        seconds: 76698
      },
      {
        date: '2019-10-22',
        seconds: 70777
      },
      {
        date: '2019-10-15',
        seconds: 40486
      },
      {
        date: '2019-10-08',
        seconds: 82993
      },
      {
        date: '2019-10-01',
        seconds: 97225
      },
      {
        date: '2019-09-24',
        seconds: 19396
      },
      {
        date: '2019-09-17',
        seconds: 20398
      },
      {
        date: '2019-09-10',
        seconds: 67264
      },
      {
        date: '2019-09-03',
        seconds: 38900
      },
      {
        date: '2019-08-27',
        seconds: 41705
      },
      {
        date: '2019-08-20',
        seconds: 18741
      },
      {
        date: '2019-08-13',
        seconds: 54805
      },
      {
        date: '2019-07-23',
        seconds: 1586
      },
      {
        date: '2019-07-16',
        seconds: 17844
      },
      {
        date: '2019-07-09',
        seconds: 7616
      },
      {
        date: '2019-07-02',
        seconds: 8056
      },
      {
        date: '2019-06-25',
        seconds: 18212
      },
      {
        date: '2019-06-18',
        seconds: 6506
      },
      {
        date: '2019-06-11',
        seconds: 13306
      },
      {
        date: '2019-06-04',
        seconds: 7385
      },
      {
        date: '2019-01-15',
        seconds: 4266
      },
      {
        date: '2020-06-30',
        seconds: 22564
      },
      {
        date: '2020-06-16',
        seconds: 16235
      },
      {
        date: '2020-06-09',
        seconds: 10499
      },
      {
        date: '2020-02-18',
        seconds: 50824
      },
      {
        date: '2020-01-14',
        seconds: 41205
      },
      {
        date: '2019-12-03',
        seconds: 34790
      },
      {
        date: '2019-11-26',
        seconds: 14860
      },
      {
        date: '2019-11-19',
        seconds: 35064
      },
      {
        date: '2019-08-06',
        seconds: 14307
      },
      {
        date: '2020-08-18',
        seconds: 3292
      },
      {
        date: '2020-08-11',
        seconds: 5568
      },
      {
        date: '2020-06-23',
        seconds: 4998
      },
      {
        date: '2020-05-26',
        seconds: 11071
      },
      {
        date: '2020-05-19',
        seconds: 398
      },
      {
        date: '2020-05-05',
        seconds: 553
      },
      {
        date: '2020-04-21',
        seconds: 4145
      },
      {
        date: '2020-04-14',
        seconds: 1459
      },
      {
        date: '2020-01-21',
        seconds: 37904
      }
    ],
    id: '3-4611686018472973195',
    lastMonth: 2337304,
    lastNinetyDays: 2153499,
    lastWeek: 2370676
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018502233502',
          displayName: 'stabmasterarson'
        },
        dateLastPlayed: '2020-09-20T04:50:12Z',
        characterIds: ['2305843009622925881', '2305843009626545994', '2305843009626545996']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 236752,
            dailyLimit: 0,
            weeklyProgress: 1044825,
            weeklyLimit: 0,
            currentProgress: 38718464,
            level: 27,
            levelCap: -1,
            stepIndex: 27,
            progressToNextLevel: 1538462,
            nextLevelAt: 2915000
          },
          powerBonus: 27
        }
      }
    },
    characters: {
      data: {
        '2305843009622925881': {
          membershipId: '4611686018502233502',
          membershipType: 3,
          characterId: '2305843009622925881',
          dateLastPlayed: '2020-09-19T14:37:18Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '23118',
          light: 1085,
          stats: {
            '144602215': 59,
            '392767087': 53,
            '1735777505': 70,
            '1935470627': 1085,
            '1943323491': 76,
            '2996146975': 31,
            '4244567218': 17
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          percentToNextLevel: 0
        },
        '2305843009626545994': {
          membershipId: '4611686018502233502',
          membershipType: 3,
          characterId: '2305843009626545994',
          dateLastPlayed: '2020-09-20T04:50:12Z',
          minutesPlayedThisSession: '407',
          minutesPlayedTotal: '18697',
          light: 1087,
          stats: {
            '144602215': 69,
            '392767087': 58,
            '1735777505': 35,
            '1935470627': 1087,
            '1943323491': 54,
            '2996146975': 51,
            '4244567218': 41
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/c620a7fce6f3a8908393ec90fbc16a1c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/45dd356bae55a76499ae0188cfedcb17.jpg',
          emblemHash: 1162929425,
          emblemColor: {
            red: 255,
            green: 24,
            blue: 17,
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
        '2305843009626545996': {
          membershipId: '4611686018502233502',
          membershipType: 3,
          characterId: '2305843009626545996',
          dateLastPlayed: '2020-09-19T22:01:37Z',
          minutesPlayedThisSession: '207',
          minutesPlayedTotal: '21244',
          light: 1086,
          stats: {
            '144602215': 60,
            '392767087': 30,
            '1735777505': 46,
            '1935470627': 1086,
            '1943323491': 85,
            '2996146975': 46,
            '4244567218': 30
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/2a39517e2d2cb522681cb2a23d137139.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/79ce4893d1bb6c1205c2f2e1506333c8.jpg',
          emblemHash: 2420153991,
          emblemColor: {
            red: 18,
            green: 16,
            blue: 74,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009622925881': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 236750,
              weeklyProgress: 1044813,
              currentProgress: 28828656,
              level: 288,
              levelCap: -1,
              progressToNextLevel: 28655,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009626545994': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 236750,
              weeklyProgress: 1044813,
              currentProgress: 28828656,
              level: 288,
              levelCap: -1,
              progressToNextLevel: 28655,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009626545996': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 236750,
              weeklyProgress: 1044813,
              currentProgress: 28828656,
              level: 288,
              levelCap: -1,
              progressToNextLevel: 28655,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018430492363',
          displayName: 'Ben Winterman'
        },
        dateLastPlayed: '2020-08-20T19:52:34Z',
        characterIds: ['2305843009261450889', '2305843009261450890', '2305843009261450893']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 194217,
            weeklyLimit: 0,
            currentProgress: 6895589,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 240589,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009261450889': {
          membershipId: '4611686018430492363',
          membershipType: 1,
          characterId: '2305843009261450889',
          dateLastPlayed: '2020-08-20T19:52:34Z',
          minutesPlayedThisSession: '100',
          minutesPlayedTotal: '71650',
          light: 1062,
          stats: {
            '144602215': 19,
            '392767087': 51,
            '1735777505': 43,
            '1935470627': 1062,
            '1943323491': 31,
            '2996146975': 29,
            '4244567218': 54
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1eefa8384f38b8b76f15fe1030b3385e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/7964de0f4069e8051e41cfe44017a5f6.jpg',
          emblemHash: 1409726984,
          emblemColor: {
            red: 33,
            green: 33,
            blue: 38,
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
          titleRecordHash: 2254764897
        },
        '2305843009261450890': {
          membershipId: '4611686018430492363',
          membershipType: 1,
          characterId: '2305843009261450890',
          dateLastPlayed: '2020-07-15T14:53:13Z',
          minutesPlayedThisSession: '19',
          minutesPlayedTotal: '11103',
          light: 1053,
          stats: {
            '144602215': 47,
            '392767087': 43,
            '1735777505': 25,
            '1935470627': 1053,
            '1943323491': 31,
            '2996146975': 40,
            '4244567218': 49
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/9d59645b596c0adf3e164c90a41c4702.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/fc8a4349dc04777c474ec140c7b66d9e.jpg',
          emblemHash: 4085986809,
          emblemColor: {
            red: 5,
            green: 4,
            blue: 5,
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
          titleRecordHash: 2254764897
        },
        '2305843009261450893': {
          membershipId: '4611686018430492363',
          membershipType: 1,
          characterId: '2305843009261450893',
          dateLastPlayed: '2020-07-10T16:42:37Z',
          minutesPlayedThisSession: '16',
          minutesPlayedTotal: '9197',
          light: 1043,
          stats: {
            '144602215': 36,
            '392767087': 38,
            '1735777505': 40,
            '1935470627': 1043,
            '1943323491': 33,
            '2996146975': 39,
            '4244567218': 34
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/236374b52e1de04948ced09bd80956cc.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/bd38293d7bf4aea4c87f29fecd374be9.jpg',
          emblemHash: 3605230074,
          emblemColor: {
            red: 1,
            green: 30,
            blue: 65,
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
          titleRecordHash: 2757681677
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009261450889': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 194215,
              currentProgress: 6903676,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 3676,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009261450890': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 194215,
              currentProgress: 6903676,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 3676,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009261450893': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 194215,
              currentProgress: 6903676,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 3676,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018475791709',
          displayName: 'demonseed72'
        },
        dateLastPlayed: '2020-09-20T00:26:14Z',
        characterIds: ['2305843009351874229', '2305843009358195937', '2305843009358356485']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 12844,
            dailyLimit: 0,
            weeklyProgress: 12844,
            weeklyLimit: 0,
            currentProgress: 14311296,
            level: 17,
            levelCap: -1,
            stepIndex: 17,
            progressToNextLevel: 231296,
            nextLevelAt: 1815000
          },
          powerBonus: 17
        }
      }
    },
    characters: {
      data: {
        '2305843009351874229': {
          membershipId: '4611686018475791709',
          membershipType: 3,
          characterId: '2305843009351874229',
          dateLastPlayed: '2020-09-02T00:49:10Z',
          minutesPlayedThisSession: '7',
          minutesPlayedTotal: '70821',
          light: 1066,
          stats: {
            '144602215': 59,
            '392767087': 44,
            '1735777505': 20,
            '1935470627': 1066,
            '1943323491': 35,
            '2996146975': 43,
            '4244567218': 38
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          percentToNextLevel: 0
        },
        '2305843009358195937': {
          membershipId: '4611686018475791709',
          membershipType: 3,
          characterId: '2305843009358195937',
          dateLastPlayed: '2020-08-28T03:45:46Z',
          minutesPlayedThisSession: '4',
          minutesPlayedTotal: '33189',
          light: 1066,
          stats: {
            '144602215': 50,
            '392767087': 39,
            '1735777505': 18,
            '1935470627': 1066,
            '1943323491': 46,
            '2996146975': 24,
            '4244567218': 42
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/b3b70e490cf749667a1dd5abcb39741c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2d7a897bdd79bff2a404f4d031cc268d.jpg',
          emblemHash: 3778092977,
          emblemColor: {
            red: 16,
            green: 5,
            blue: 42,
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
        '2305843009358356485': {
          membershipId: '4611686018475791709',
          membershipType: 3,
          characterId: '2305843009358356485',
          dateLastPlayed: '2020-09-20T00:26:14Z',
          minutesPlayedThisSession: '34',
          minutesPlayedTotal: '50958',
          light: 1060,
          stats: {
            '144602215': 34,
            '392767087': 54,
            '1735777505': 39,
            '1935470627': 1060,
            '1943323491': 40,
            '2996146975': 36,
            '4244567218': 32
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1d33d05eeedbe8cd0805e5f9d370a884.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/de08788bd2cd02b7cf8873c1d48ebfb6.jpg',
          emblemHash: 1138508277,
          emblemColor: {
            red: 2,
            green: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009351874229': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 12844,
              weeklyProgress: 12844,
              currentProgress: 4425884,
              level: 44,
              levelCap: -1,
              progressToNextLevel: 25884,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009358195937': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 12844,
              weeklyProgress: 12844,
              currentProgress: 4425884,
              level: 44,
              levelCap: -1,
              progressToNextLevel: 25884,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009358356485': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 12844,
              weeklyProgress: 12844,
              currentProgress: 4425884,
              level: 44,
              levelCap: -1,
              progressToNextLevel: 25884,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018481783916',
          displayName: 'Adrift'
        },
        dateLastPlayed: '2020-09-18T06:47:40Z',
        characterIds: ['2305843009394447616', '2305843009396047410', '2305843009434265838']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 8784,
            weeklyLimit: 0,
            currentProgress: 13391408,
            level: 16,
            levelCap: -1,
            stepIndex: 16,
            progressToNextLevel: 1016408,
            nextLevelAt: 1705000
          },
          powerBonus: 16
        }
      }
    },
    characters: {
      data: {
        '2305843009394447616': {
          membershipId: '4611686018481783916',
          membershipType: 3,
          characterId: '2305843009394447616',
          dateLastPlayed: '2020-09-05T04:54:03Z',
          minutesPlayedThisSession: '7',
          minutesPlayedTotal: '31261',
          light: 1058,
          stats: {
            '144602215': 37,
            '392767087': 48,
            '1735777505': 65,
            '1935470627': 1058,
            '1943323491': 47,
            '2996146975': 76,
            '4244567218': 32
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/86cc790e7179f3bf4643e7740ab65893.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/82982ff7e0536b5260dda5182caa9637.jpg',
          emblemHash: 185321779,
          emblemColor: {
            red: 2,
            green: 3,
            blue: 8,
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
          titleRecordHash: 3798931976
        },
        '2305843009396047410': {
          membershipId: '4611686018481783916',
          membershipType: 3,
          characterId: '2305843009396047410',
          dateLastPlayed: '2020-09-18T06:47:40Z',
          minutesPlayedThisSession: '26',
          minutesPlayedTotal: '67126',
          light: 1070,
          stats: {
            '144602215': 31,
            '392767087': 38,
            '1735777505': 43,
            '1935470627': 1070,
            '1943323491': 59,
            '2996146975': 79,
            '4244567218': 70
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/8cd39d79c07cb7f7816daf297c090690.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/041f8e2f986949994b7ca8f008b75ff4.jpg',
          emblemHash: 2071635915,
          emblemColor: {
            red: 92,
            green: 59,
            blue: 20,
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
          titleRecordHash: 3798931976
        },
        '2305843009434265838': {
          membershipId: '4611686018481783916',
          membershipType: 3,
          characterId: '2305843009434265838',
          dateLastPlayed: '2020-08-09T22:14:39Z',
          minutesPlayedThisSession: '4',
          minutesPlayedTotal: '7783',
          light: 1061,
          stats: {
            '144602215': 43,
            '392767087': 49,
            '1735777505': 42,
            '1935470627': 1061,
            '1943323491': 71,
            '2996146975': 50,
            '4244567218': 44
          },
          raceHash: 898834093,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/f6c7751d592d4aae0925aab6516b2135.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cf3255387c31cef109cb1aa88a252155.jpg',
          emblemHash: 997563763,
          emblemColor: {
            red: 1,
            green: 1,
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
          titleRecordHash: 3798931976
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009394447616': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 8782,
              currentProgress: 3506875,
              level: 35,
              levelCap: -1,
              progressToNextLevel: 6875,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009396047410': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 8782,
              currentProgress: 3506875,
              level: 35,
              levelCap: -1,
              progressToNextLevel: 6875,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009434265838': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 8782,
              currentProgress: 3506875,
              level: 35,
              levelCap: -1,
              progressToNextLevel: 6875,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018505219336',
          displayName: 'natyb25'
        },
        dateLastPlayed: '2020-09-19T16:21:37Z',
        characterIds: ['2305843009665375071', '2305843009671524488']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 1030117,
            weeklyLimit: 0,
            currentProgress: 8631297,
            level: 13,
            levelCap: -1,
            stepIndex: 13,
            progressToNextLevel: 711297,
            nextLevelAt: 1375000
          },
          powerBonus: 13
        }
      }
    },
    characters: {
      data: {
        '2305843009665375071': {
          membershipId: '4611686018505219336',
          membershipType: 3,
          characterId: '2305843009665375071',
          dateLastPlayed: '2020-09-19T16:21:37Z',
          minutesPlayedThisSession: '39',
          minutesPlayedTotal: '7510',
          light: 1061,
          stats: {
            '144602215': 25,
            '392767087': 37,
            '1735777505': 54,
            '1935470627': 1061,
            '1943323491': 35,
            '2996146975': 53,
            '4244567218': 45
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/ad2375862720a8a570be03a325ece9b1.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/69cf373fd12467876d8699d8ff9ebfb7.jpg',
          emblemHash: 3605230073,
          emblemColor: {
            red: 72,
            green: 3,
            blue: 3,
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
        '2305843009671524488': {
          membershipId: '4611686018505219336',
          membershipType: 3,
          characterId: '2305843009671524488',
          dateLastPlayed: '2020-08-01T16:38:03Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '22',
          light: 763,
          stats: {
            '144602215': 24,
            '392767087': 42,
            '1735777505': 39,
            '1935470627': 763,
            '1943323491': 22,
            '2996146975': 42,
            '4244567218': 34
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009665375071': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 38596,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 996719,
              currentProgress: 996719,
              level: 9,
              levelCap: -1,
              progressToNextLevel: 96719,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009671524488': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 38596,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 996719,
              currentProgress: 996719,
              level: 9,
              levelCap: -1,
              progressToNextLevel: 96719,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467408036',
          displayName: 'AN0MA10US'
        },
        dateLastPlayed: '2020-09-19T23:08:02Z',
        characterIds: ['2305843009299025429', '2305843009303244934', '2305843009303244947']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 7977,
            dailyLimit: 0,
            weeklyProgress: 9509,
            weeklyLimit: 0,
            currentProgress: 17163034,
            level: 18,
            levelCap: -1,
            stepIndex: 18,
            progressToNextLevel: 1268034,
            nextLevelAt: 1925000
          },
          powerBonus: 18
        }
      }
    },
    characters: {
      data: {
        '2305843009299025429': {
          membershipId: '4611686018467408036',
          membershipType: 3,
          characterId: '2305843009299025429',
          dateLastPlayed: '2020-09-19T23:08:02Z',
          minutesPlayedThisSession: '2',
          minutesPlayedTotal: '83998',
          light: 1073,
          stats: {
            '144602215': 77,
            '392767087': 44,
            '1735777505': 45,
            '1935470627': 1073,
            '1943323491': 102,
            '2996146975': 45,
            '4244567218': 54
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5a220284aca3dda5a1811a2b62c82c26.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/893809b31d663ab5a04a6984e543c4b0.jpg',
          emblemHash: 3639046095,
          emblemColor: {
            red: 0,
            green: 0,
            blue: 4,
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
          titleRecordHash: 2254764897
        },
        '2305843009303244934': {
          membershipId: '4611686018467408036',
          membershipType: 3,
          characterId: '2305843009303244934',
          dateLastPlayed: '2020-09-07T19:18:37Z',
          minutesPlayedThisSession: '7',
          minutesPlayedTotal: '34931',
          light: 1062,
          stats: {
            '144602215': 41,
            '392767087': 26,
            '1735777505': 25,
            '1935470627': 1062,
            '1943323491': 44,
            '2996146975': 47,
            '4244567218': 57
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/892a423ae9018458592f2fcce6852b60.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2757207bb6ef08a2483557658cdd376f.jpg',
          emblemHash: 4159550313,
          emblemColor: {
            red: 13,
            green: 11,
            blue: 16,
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
          titleRecordHash: 2254764897
        },
        '2305843009303244947': {
          membershipId: '4611686018467408036',
          membershipType: 3,
          characterId: '2305843009303244947',
          dateLastPlayed: '2020-09-06T14:19:20Z',
          minutesPlayedThisSession: '2',
          minutesPlayedTotal: '26650',
          light: 1073,
          stats: {
            '144602215': 28,
            '392767087': 37,
            '1735777505': 37,
            '1935470627': 1073,
            '1943323491': 57,
            '2996146975': 31,
            '4244567218': 49
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ba127a92c13cef64c11b803efeefef23.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/7398688358ef4348a944d316d958228f.jpg',
          emblemHash: 4182480233,
          emblemColor: {
            red: 0,
            green: 107,
            blue: 255,
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
          titleRecordHash: 2254764897
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299025429': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 7977,
              weeklyProgress: 9509,
              currentProgress: 7294929,
              level: 72,
              levelCap: -1,
              progressToNextLevel: 94929,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009303244934': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 7977,
              weeklyProgress: 9509,
              currentProgress: 7294929,
              level: 72,
              levelCap: -1,
              progressToNextLevel: 94929,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009303244947': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 7977,
              weeklyProgress: 9509,
              currentProgress: 7294929,
              level: 72,
              levelCap: -1,
              progressToNextLevel: 94929,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018486959408',
          displayName: 'DAEMON_RE4PER'
        },
        dateLastPlayed: '2020-09-10T03:42:39Z',
        characterIds: ['2305843009425658323', '2305843009445335193', '2305843009485364886']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 257436,
            weeklyLimit: 0,
            currentProgress: 3287297,
            level: 11,
            levelCap: 12,
            stepIndex: 11,
            progressToNextLevel: 57297,
            nextLevelAt: 900000
          },
          pointsAcquired: 11,
          powerBonusProgression: {
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 257438,
            weeklyLimit: 0,
            currentProgress: 3287300,
            level: 8,
            levelCap: -1,
            stepIndex: 8,
            progressToNextLevel: 592300,
            nextLevelAt: 825000
          },
          powerBonus: 8
        }
      }
    },
    characters: {
      data: {
        '2305843009425658323': {
          membershipId: '4611686018486959408',
          membershipType: 3,
          characterId: '2305843009425658323',
          dateLastPlayed: '2020-09-10T03:42:39Z',
          minutesPlayedThisSession: '204',
          minutesPlayedTotal: '48737',
          light: 1040,
          stats: {
            '144602215': 43,
            '392767087': 43,
            '1735777505': 42,
            '1935470627': 1040,
            '1943323491': 47,
            '2996146975': 48,
            '4244567218': 33
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
          percentToNextLevel: 0,
          titleRecordHash: 3798931976
        },
        '2305843009445335193': {
          membershipId: '4611686018486959408',
          membershipType: 3,
          characterId: '2305843009445335193',
          dateLastPlayed: '2020-09-08T01:32:16Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '816',
          light: 1034,
          stats: {
            '144602215': 35,
            '392767087': 31,
            '1735777505': 32,
            '1935470627': 1034,
            '1943323491': 53,
            '2996146975': 26,
            '4244567218': 44
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/755fa89c615c9a15d757b73d15e1b26e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/283b161c019a1f9a648a897270a1414f.jpg',
          emblemHash: 1138508287,
          emblemColor: {
            red: 2,
            green: 3,
            blue: 8,
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
          titleRecordHash: 3798931976
        },
        '2305843009485364886': {
          membershipId: '4611686018486959408',
          membershipType: 3,
          characterId: '2305843009485364886',
          dateLastPlayed: '2020-08-13T01:47:13Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '3531',
          light: 1007,
          stats: {
            '144602215': 30,
            '392767087': 41,
            '1735777505': 47,
            '1935470627': 1007,
            '1943323491': 24,
            '2996146975': 48,
            '4244567218': 42
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d49d85a3aeb901807f0a0521d31cd13a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/bda6a4b5f33719af1b13d873e123215f.jpg',
          emblemHash: 1983519834,
          emblemColor: {
            red: 1,
            green: 1,
            blue: 1,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009425658323': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 257435,
              currentProgress: 3393537,
              level: 34,
              levelCap: 100,
              progressToNextLevel: 93537,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009445335193': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 257435,
              currentProgress: 3393537,
              level: 34,
              levelCap: 100,
              progressToNextLevel: 93537,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009485364886': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 257435,
              currentProgress: 3393537,
              level: 34,
              levelCap: 100,
              progressToNextLevel: 93537,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467455160',
          displayName: 'HotSoup-42'
        },
        dateLastPlayed: '2020-09-11T14:52:00Z',
        characterIds: ['2305843009299685540', '2305843009315586504', '2305843009347194210']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 611221,
            weeklyLimit: 0,
            currentProgress: 6843836,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 188836,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009299685540': {
          membershipId: '4611686018467455160',
          membershipType: 3,
          characterId: '2305843009299685540',
          dateLastPlayed: '2020-09-11T14:52:00Z',
          minutesPlayedThisSession: '38',
          minutesPlayedTotal: '75557',
          light: 1024,
          stats: {
            '144602215': 27,
            '392767087': 48,
            '1735777505': 31,
            '1935470627': 1024,
            '1943323491': 59,
            '2996146975': 35,
            '4244567218': 41
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/216e600569a45013e1cf3bd90b220b45.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e1c407e098c9493ae8e0e9e7b215fa09.jpg',
          emblemHash: 1983519830,
          emblemColor: {
            red: 2,
            green: 2,
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
          percentToNextLevel: 0
        },
        '2305843009315586504': {
          membershipId: '4611686018467455160',
          membershipType: 3,
          characterId: '2305843009315586504',
          dateLastPlayed: '2020-07-23T12:12:51Z',
          minutesPlayedThisSession: '38',
          minutesPlayedTotal: '15284',
          light: 1030,
          stats: {
            '144602215': 34,
            '392767087': 26,
            '1735777505': 30,
            '1935470627': 1030,
            '1943323491': 36,
            '2996146975': 34,
            '4244567218': 28
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/77c833bd8498e2a25506bad10197099a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/5ab8eda6fedd55da2f3adf3aea557916.jpg',
          emblemHash: 621113310,
          emblemColor: {
            red: 16,
            green: 5,
            blue: 42,
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
        '2305843009347194210': {
          membershipId: '4611686018467455160',
          membershipType: 3,
          characterId: '2305843009347194210',
          dateLastPlayed: '2020-06-13T19:33:43Z',
          minutesPlayedThisSession: '35',
          minutesPlayedTotal: '1831',
          light: 979,
          stats: {
            '144602215': 36,
            '392767087': 41,
            '1735777505': 34,
            '1935470627': 979,
            '1943323491': 39,
            '2996146975': 38,
            '4244567218': 41
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299685540': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 611211,
              currentProgress: 6852024,
              level: 69,
              levelCap: 100,
              progressToNextLevel: 52024,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009315586504': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 611211,
              currentProgress: 6852024,
              level: 69,
              levelCap: 100,
              progressToNextLevel: 52024,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009347194210': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 611211,
              currentProgress: 6852024,
              level: 69,
              levelCap: 100,
              progressToNextLevel: 52024,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018471309889',
          displayName: 'MrMaurice'
        },
        dateLastPlayed: '2020-09-20T06:58:41Z',
        characterIds: ['2305843009303164041', '2305843009311034326', '2305843009378964481']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 165242,
            dailyLimit: 0,
            weeklyProgress: 560763,
            weeklyLimit: 0,
            currentProgress: 5740098,
            level: 11,
            levelCap: -1,
            stepIndex: 11,
            progressToNextLevel: 240098,
            nextLevelAt: 1155000
          },
          powerBonus: 11
        }
      }
    },
    characters: {
      data: {
        '2305843009303164041': {
          membershipId: '4611686018471309889',
          membershipType: 3,
          characterId: '2305843009303164041',
          dateLastPlayed: '2020-09-20T06:58:41Z',
          minutesPlayedThisSession: '61',
          minutesPlayedTotal: '83249',
          light: 1055,
          stats: {
            '144602215': 53,
            '392767087': 39,
            '1735777505': 38,
            '1935470627': 1055,
            '1943323491': 63,
            '2996146975': 82,
            '4244567218': 40
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          percentToNextLevel: 0
        },
        '2305843009311034326': {
          membershipId: '4611686018471309889',
          membershipType: 3,
          characterId: '2305843009311034326',
          dateLastPlayed: '2020-06-10T04:06:10Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '875',
          light: 960,
          stats: {
            '144602215': 56,
            '392767087': 42,
            '1735777505': 28,
            '1935470627': 960,
            '1943323491': 39,
            '2996146975': 41,
            '4244567218': 44
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        '2305843009378964481': {
          membershipId: '4611686018471309889',
          membershipType: 3,
          characterId: '2305843009378964481',
          dateLastPlayed: '2020-09-20T05:57:03Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '721',
          light: 958,
          stats: {
            '144602215': 27,
            '392767087': 29,
            '1735777505': 51,
            '1935470627': 958,
            '1943323491': 46,
            '2996146975': 33,
            '4244567218': 50
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009303164041': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 165240,
              weeklyProgress: 560756,
              currentProgress: 841820,
              level: 8,
              levelCap: -1,
              progressToNextLevel: 41820,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009311034326': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 165240,
              weeklyProgress: 560756,
              currentProgress: 841820,
              level: 8,
              levelCap: -1,
              progressToNextLevel: 41820,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009378964481': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 165240,
              weeklyProgress: 560756,
              currentProgress: 841820,
              level: 8,
              levelCap: -1,
              progressToNextLevel: 41820,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018474803353',
          displayName: 'LongRifle'
        },
        dateLastPlayed: '2020-09-20T11:56:01Z',
        characterIds: ['2305843009339434130', '2305843009344005095', '2305843009378324052']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 59280,
            dailyLimit: 0,
            weeklyProgress: 882639,
            weeklyLimit: 0,
            currentProgress: 22116644,
            level: 21,
            levelCap: -1,
            stepIndex: 21,
            progressToNextLevel: 116644,
            nextLevelAt: 2255000
          },
          powerBonus: 21
        }
      }
    },
    characters: {
      data: {
        '2305843009339434130': {
          membershipId: '4611686018474803353',
          membershipType: 3,
          characterId: '2305843009339434130',
          dateLastPlayed: '2020-09-20T11:56:01Z',
          minutesPlayedThisSession: '11',
          minutesPlayedTotal: '40751',
          light: 1076,
          stats: {
            '144602215': 41,
            '392767087': 63,
            '1735777505': 67,
            '1935470627': 1076,
            '1943323491': 56,
            '2996146975': 78,
            '4244567218': 37
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/88fd18820c5a4d5fb94580253cfe5155.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/51456cdffc44e1ae8bb0adef0211bf81.jpg',
          emblemHash: 1409726991,
          emblemColor: {
            red: 3,
            green: 3,
            blue: 3,
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
          titleRecordHash: 3798931976
        },
        '2305843009344005095': {
          membershipId: '4611686018474803353',
          membershipType: 3,
          characterId: '2305843009344005095',
          dateLastPlayed: '2020-09-17T03:09:48Z',
          minutesPlayedThisSession: '96',
          minutesPlayedTotal: '100928',
          light: 1077,
          stats: {
            '144602215': 62,
            '392767087': 92,
            '1735777505': 32,
            '1935470627': 1077,
            '1943323491': 63,
            '2996146975': 54,
            '4244567218': 47
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/d42c84cd4816ed7f7f8b134f133f839e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/48936362aa79cda58e54ad0f28f616d2.jpg',
          emblemHash: 4159550314,
          emblemColor: {
            red: 3,
            green: 2,
            blue: 1,
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
          titleRecordHash: 3798931976
        },
        '2305843009378324052': {
          membershipId: '4611686018474803353',
          membershipType: 3,
          characterId: '2305843009378324052',
          dateLastPlayed: '2020-09-09T22:53:55Z',
          minutesPlayedThisSession: '38',
          minutesPlayedTotal: '18761',
          light: 1076,
          stats: {
            '144602215': 29,
            '392767087': 77,
            '1735777505': 46,
            '1935470627': 1076,
            '1943323491': 31,
            '2996146975': 101,
            '4244567218': 55
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d49d85a3aeb901807f0a0521d31cd13a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/bda6a4b5f33719af1b13d873e123215f.jpg',
          emblemHash: 1983519834,
          emblemColor: {
            red: 1,
            green: 1,
            blue: 1,
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
          titleRecordHash: 3798931976
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009339434130': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 59278,
              weeklyProgress: 882627,
              currentProgress: 12225373,
              level: 122,
              levelCap: -1,
              progressToNextLevel: 25373,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009344005095': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 59278,
              weeklyProgress: 882627,
              currentProgress: 12225373,
              level: 122,
              levelCap: -1,
              progressToNextLevel: 25373,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009378324052': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 59278,
              weeklyProgress: 882627,
              currentProgress: 12225373,
              level: 122,
              levelCap: -1,
              progressToNextLevel: 25373,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018471482182',
          displayName: 'bl1ndmonk'
        },
        dateLastPlayed: '2020-09-18T17:47:24Z',
        characterIds: ['2305843009305976741', '2305843009370061883', '2305843009387224690']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 40763,
            dailyLimit: 0,
            weeklyProgress: 561308,
            weeklyLimit: 0,
            currentProgress: 17873544,
            level: 19,
            levelCap: -1,
            stepIndex: 19,
            progressToNextLevel: 53543,
            nextLevelAt: 2035000
          },
          powerBonus: 19
        }
      }
    },
    characters: {
      data: {
        '2305843009305976741': {
          membershipId: '4611686018471482182',
          membershipType: 3,
          characterId: '2305843009305976741',
          dateLastPlayed: '2020-09-18T17:47:24Z',
          minutesPlayedThisSession: '40',
          minutesPlayedTotal: '49859',
          light: 1073,
          stats: {
            '144602215': 44,
            '392767087': 20,
            '1735777505': 40,
            '1935470627': 1073,
            '1943323491': 108,
            '2996146975': 83,
            '4244567218': 39
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ebca4d1e4a8c5c22897e5e07794278a9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/caed66337af9088f329aec861a16bb76.jpg',
          emblemHash: 1736897072,
          emblemColor: {
            red: 0,
            green: 2,
            blue: 5,
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
        '2305843009370061883': {
          membershipId: '4611686018471482182',
          membershipType: 3,
          characterId: '2305843009370061883',
          dateLastPlayed: '2020-09-12T01:25:07Z',
          minutesPlayedThisSession: '7',
          minutesPlayedTotal: '30965',
          light: 1071,
          stats: {
            '144602215': 35,
            '392767087': 48,
            '1735777505': 57,
            '1935470627': 1071,
            '1943323491': 54,
            '2996146975': 31,
            '4244567218': 45
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5a220284aca3dda5a1811a2b62c82c26.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/893809b31d663ab5a04a6984e543c4b0.jpg',
          emblemHash: 3639046095,
          emblemColor: {
            red: 0,
            green: 0,
            blue: 4,
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
          titleRecordHash: 3798931976
        },
        '2305843009387224690': {
          membershipId: '4611686018471482182',
          membershipType: 3,
          characterId: '2305843009387224690',
          dateLastPlayed: '2020-09-11T20:50:00Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '32228',
          light: 1073,
          stats: {
            '144602215': 32,
            '392767087': 34,
            '1735777505': 85,
            '1935470627': 1073,
            '1943323491': 90,
            '2996146975': 67,
            '4244567218': 48
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/2a39517e2d2cb522681cb2a23d137139.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/79ce4893d1bb6c1205c2f2e1506333c8.jpg',
          emblemHash: 2420153991,
          emblemColor: {
            red: 18,
            green: 16,
            blue: 74,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009305976741': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 40763,
              weeklyProgress: 561299,
              currentProgress: 7980697,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 80697,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009370061883': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 40763,
              weeklyProgress: 561299,
              currentProgress: 7980697,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 80697,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009387224690': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 40763,
              weeklyProgress: 561299,
              currentProgress: 7980697,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 80697,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018482285612',
          displayName: 'AZV@LVE'
        },
        dateLastPlayed: '2020-09-08T04:18:23Z',
        characterIds: ['2305843009395810362', '2305843009433765460', '2305843009433765461']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 575732,
            level: 5,
            levelCap: 12,
            stepIndex: 5,
            progressToNextLevel: 175732,
            nextLevelAt: 246000
          },
          pointsAcquired: 5,
          powerBonusProgression: {
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 575736,
            level: 4,
            levelCap: -1,
            stepIndex: 4,
            progressToNextLevel: 80736,
            nextLevelAt: 385000
          },
          powerBonus: 4
        }
      }
    },
    characters: {
      data: {
        '2305843009395810362': {
          membershipId: '4611686018482285612',
          membershipType: 3,
          characterId: '2305843009395810362',
          dateLastPlayed: '2020-09-08T04:18:23Z',
          minutesPlayedThisSession: '33',
          minutesPlayedTotal: '77682',
          light: 1021,
          stats: {
            '144602215': 22,
            '392767087': 42,
            '1735777505': 16,
            '1935470627': 1021,
            '1943323491': 32,
            '2996146975': 48,
            '4244567218': 36
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/1d33d05eeedbe8cd0805e5f9d370a884.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/de08788bd2cd02b7cf8873c1d48ebfb6.jpg',
          emblemHash: 1138508277,
          emblemColor: {
            red: 2,
            green: 4,
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
          percentToNextLevel: 0,
          titleRecordHash: 1883929036
        },
        '2305843009433765460': {
          membershipId: '4611686018482285612',
          membershipType: 3,
          characterId: '2305843009433765460',
          dateLastPlayed: '2020-09-07T22:50:04Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '17237',
          light: 981,
          stats: {
            '144602215': 36,
            '392767087': 30,
            '1735777505': 36,
            '1935470627': 981,
            '1943323491': 57,
            '2996146975': 22,
            '4244567218': 41
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/00db53e626ef6fffb370cd54f6e878a8.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/9c05d66b6a2fecdd2efd848f7735fa89.jpg',
          emblemHash: 1320113564,
          emblemColor: {
            red: 8,
            green: 8,
            blue: 8,
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
          titleRecordHash: 1883929036
        },
        '2305843009433765461': {
          membershipId: '4611686018482285612',
          membershipType: 3,
          characterId: '2305843009433765461',
          dateLastPlayed: '2020-09-07T23:04:35Z',
          minutesPlayedThisSession: '13',
          minutesPlayedTotal: '11954',
          light: 966,
          stats: {
            '144602215': 36,
            '392767087': 45,
            '1735777505': 47,
            '1935470627': 966,
            '1943323491': 65,
            '2996146975': 14,
            '4244567218': 38
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/157137504ac5de72705ee6188764ee69.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e2eb6b40eca75c8ab2ceead6d46ae318.jpg',
          emblemHash: 298334059,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 1883929036
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009395810362': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 583717,
              level: 6,
              levelCap: 100,
              progressToNextLevel: 83717,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009433765460': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 583717,
              level: 6,
              levelCap: 100,
              progressToNextLevel: 83717,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009433765461': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 583717,
              level: 6,
              levelCap: 100,
              progressToNextLevel: 83717,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018470622910',
          displayName: 'Nøss4R2™'
        },
        dateLastPlayed: '2020-09-18T11:26:51Z',
        characterIds: ['2305843009569265955', '2305843009574736596', '2305843009644394714']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 273143,
            weeklyLimit: 0,
            currentProgress: 18274656,
            level: 19,
            levelCap: -1,
            stepIndex: 19,
            progressToNextLevel: 454655,
            nextLevelAt: 2035000
          },
          powerBonus: 19
        }
      }
    },
    characters: {
      data: {
        '2305843009569265955': {
          membershipId: '4611686018470622910',
          membershipType: 3,
          characterId: '2305843009569265955',
          dateLastPlayed: '2020-09-02T21:41:13Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '26949',
          light: 1071,
          stats: {
            '144602215': 46,
            '392767087': 58,
            '1735777505': 36,
            '1935470627': 1071,
            '1943323491': 43,
            '2996146975': 42,
            '4244567218': 60
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b1a070c77654fd2fcaddf1bf02340e74.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/47146a1922c0b8d038099b89b67ddf39.jpg',
          emblemHash: 2522667664,
          emblemColor: {
            red: 114,
            green: 0,
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
          titleRecordHash: 2860165064
        },
        '2305843009574736596': {
          membershipId: '4611686018470622910',
          membershipType: 3,
          characterId: '2305843009574736596',
          dateLastPlayed: '2020-09-03T09:27:05Z',
          minutesPlayedThisSession: '45',
          minutesPlayedTotal: '10971',
          light: 1077,
          stats: {
            '144602215': 20,
            '392767087': 48,
            '1735777505': 60,
            '1935470627': 1077,
            '1943323491': 49,
            '2996146975': 19,
            '4244567218': 34
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/65a1e0a340120d27b65458e5c844c5dc.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/074d8affba323491e2a01d61c3ee9619.jpg',
          emblemHash: 2008662417,
          emblemColor: {
            red: 114,
            green: 0,
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
        '2305843009644394714': {
          membershipId: '4611686018470622910',
          membershipType: 3,
          characterId: '2305843009644394714',
          dateLastPlayed: '2020-09-18T11:26:51Z',
          minutesPlayedThisSession: '30',
          minutesPlayedTotal: '6191',
          light: 1074,
          stats: {
            '144602215': 20,
            '392767087': 53,
            '1735777505': 46,
            '1935470627': 1074,
            '1943323491': 31,
            '2996146975': 63,
            '4244567218': 82
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d8657be113e3906f33da5181e7035907.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/56c2a8b329d003f90d724aae30f0bc34.jpg',
          emblemHash: 3590171412,
          emblemColor: {
            red: 114,
            green: 0,
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
          titleRecordHash: 2757681677
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009569265955': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 273135,
              currentProgress: 9010449,
              level: 90,
              levelCap: -1,
              progressToNextLevel: 10449,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009574736596': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 273135,
              currentProgress: 9010449,
              level: 90,
              levelCap: -1,
              progressToNextLevel: 10449,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009644394714': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 273135,
              currentProgress: 9010449,
              level: 90,
              levelCap: -1,
              progressToNextLevel: 10449,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467359972',
          displayName: 'TeamRckt'
        },
        dateLastPlayed: '2020-09-20T01:19:05Z',
        characterIds: ['2305843009301016197', '2305843009365404979', '2305843009366404321']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 136694,
            dailyLimit: 0,
            weeklyProgress: 136694,
            weeklyLimit: 0,
            currentProgress: 20874712,
            level: 20,
            levelCap: -1,
            stepIndex: 20,
            progressToNextLevel: 1019712,
            nextLevelAt: 2145000
          },
          powerBonus: 20
        }
      }
    },
    characters: {
      data: {
        '2305843009301016197': {
          membershipId: '4611686018467359972',
          membershipType: 3,
          characterId: '2305843009301016197',
          dateLastPlayed: '2020-09-20T01:19:05Z',
          minutesPlayedThisSession: '52',
          minutesPlayedTotal: '143513',
          light: 1067,
          stats: {
            '144602215': 96,
            '392767087': 31,
            '1735777505': 29,
            '1935470627': 1067,
            '1943323491': 64,
            '2996146975': 74,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/70422198861e09744fbc020bf1925be5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/894ebf043ed8251f9aaa6237133433da.jpg',
          emblemHash: 1057119308,
          emblemColor: {
            red: 14,
            green: 2,
            blue: 33,
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
        '2305843009366404321': {
          membershipId: '4611686018467359972',
          membershipType: 3,
          characterId: '2305843009366404321',
          dateLastPlayed: '2020-06-06T13:33:23Z',
          minutesPlayedThisSession: '40',
          minutesPlayedTotal: '1519',
          light: 792,
          stats: {
            '144602215': 34,
            '392767087': 17,
            '1735777505': 36,
            '1935470627': 792,
            '1943323491': 37,
            '2996146975': 37,
            '4244567218': 32
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1558b0287ac22c558a7fdaae083a73e5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cbc31643e9d1d82b2aa08db8d78e537e.jpg',
          emblemHash: 3828080585,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
        '2305843009365404979': {
          membershipId: '4611686018467359972',
          membershipType: 3,
          characterId: '2305843009365404979',
          dateLastPlayed: '2020-08-10T13:05:03Z',
          minutesPlayedThisSession: '48',
          minutesPlayedTotal: '1086',
          light: 1054,
          stats: {
            '144602215': 64,
            '392767087': 37,
            '1735777505': 38,
            '1935470627': 1054,
            '1943323491': 28,
            '2996146975': 103,
            '4244567218': 38
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/bf43b31f82edbe9412166147394ac045.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2dc24c1c509002d4ef33eb30e3b5aa3b.jpg',
          emblemHash: 969863968,
          emblemColor: {
            red: 114,
            green: 0,
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
          percentToNextLevel: 0
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009301016197': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 136692,
              weeklyProgress: 136692,
              currentProgress: 10990207,
              level: 109,
              levelCap: -1,
              progressToNextLevel: 90207,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009366404321': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 136692,
              weeklyProgress: 136692,
              currentProgress: 10990207,
              level: 109,
              levelCap: -1,
              progressToNextLevel: 90207,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009365404979': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 136692,
              weeklyProgress: 136692,
              currentProgress: 10990207,
              level: 109,
              levelCap: -1,
              progressToNextLevel: 90207,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467670292',
          displayName: 'BostonMaximus'
        },
        dateLastPlayed: '2020-08-13T20:04:45Z',
        characterIds: ['2305843009299317365', '2305843009364625459', '2305843009378444260']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 11691,
            dailyLimit: 0,
            weeklyProgress: 11691,
            weeklyLimit: 0,
            currentProgress: 3770470,
            level: 11,
            levelCap: 12,
            stepIndex: 11,
            progressToNextLevel: 540470,
            nextLevelAt: 900000
          },
          pointsAcquired: 11,
          powerBonusProgression: {
            progressionHash: 3810510634,
            dailyProgress: 11691,
            dailyLimit: 0,
            weeklyProgress: 11691,
            weeklyLimit: 0,
            currentProgress: 3770474,
            level: 9,
            levelCap: -1,
            stepIndex: 9,
            progressToNextLevel: 250474,
            nextLevelAt: 935000
          },
          powerBonus: 9
        }
      }
    },
    characters: {
      data: {
        '2305843009299317365': {
          membershipId: '4611686018467670292',
          membershipType: 3,
          characterId: '2305843009299317365',
          dateLastPlayed: '2020-08-13T20:04:45Z',
          minutesPlayedThisSession: '45',
          minutesPlayedTotal: '32939',
          light: 1040,
          stats: {
            '144602215': 37,
            '392767087': 42,
            '1735777505': 45,
            '1935470627': 1040,
            '1943323491': 31,
            '2996146975': 57,
            '4244567218': 47
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1d33d05eeedbe8cd0805e5f9d370a884.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/de08788bd2cd02b7cf8873c1d48ebfb6.jpg',
          emblemHash: 1138508277,
          emblemColor: {
            red: 2,
            green: 4,
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
        '2305843009364625459': {
          membershipId: '4611686018467670292',
          membershipType: 3,
          characterId: '2305843009364625459',
          dateLastPlayed: '2018-09-09T22:19:31Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '23',
          light: 9,
          stats: {
            '144602215': 0,
            '392767087': 1,
            '1735777505': 0,
            '1935470627': 9,
            '1943323491': 4,
            '2996146975': 0,
            '4244567218': 0
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        '2305843009378444260': {
          membershipId: '4611686018467670292',
          membershipType: 3,
          characterId: '2305843009378444260',
          dateLastPlayed: '2020-08-09T17:01:21Z',
          minutesPlayedThisSession: '24',
          minutesPlayedTotal: '23425',
          light: 1043,
          stats: {
            '144602215': 46,
            '392767087': 44,
            '1735777505': 35,
            '1935470627': 1043,
            '1943323491': 34,
            '2996146975': 53,
            '4244567218': 49
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e74ff8631f78a8f9c4c98cb270172702.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/21ece12fcc50be9e51599416e964155d.jpg',
          emblemHash: 4162792207,
          emblemColor: {
            red: 3,
            green: 3,
            blue: 10,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299317365': {
          progressions: {
            '1627914615': {
              dailyProgress: 11691,
              weeklyProgress: 11691,
              currentProgress: 3777973,
              level: 38,
              levelCap: 100,
              progressToNextLevel: 77973,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009364625459': {
          progressions: {
            '1627914615': {
              dailyProgress: 11691,
              weeklyProgress: 11691,
              currentProgress: 3777973,
              level: 38,
              levelCap: 100,
              progressToNextLevel: 77973,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009378444260': {
          progressions: {
            '1627914615': {
              dailyProgress: 11691,
              weeklyProgress: 11691,
              currentProgress: 3777973,
              level: 38,
              levelCap: 100,
              progressToNextLevel: 77973,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018429698327',
          displayName: 'RevelatrBigBang'
        },
        dateLastPlayed: '2020-09-20T05:07:27Z',
        characterIds: ['2305843009267840511', '2305843009300330981', '2305843009305919299']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 69319,
            dailyLimit: 0,
            weeklyProgress: 394732,
            weeklyLimit: 0,
            currentProgress: 14643609,
            level: 17,
            levelCap: -1,
            stepIndex: 17,
            progressToNextLevel: 563609,
            nextLevelAt: 1815000
          },
          powerBonus: 17
        }
      }
    },
    characters: {
      data: {
        '2305843009267840511': {
          membershipId: '4611686018429698327',
          membershipType: 1,
          characterId: '2305843009267840511',
          dateLastPlayed: '2020-09-20T05:07:27Z',
          minutesPlayedThisSession: '89',
          minutesPlayedTotal: '98420',
          light: 1076,
          stats: {
            '144602215': 30,
            '392767087': 57,
            '1735777505': 55,
            '1935470627': 1076,
            '1943323491': 49,
            '2996146975': 37,
            '4244567218': 49
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/397f8f260d85b9c11fa454575aa4b512.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/92973168612d9585c168897213f86bca.jpg',
          emblemHash: 4132147351,
          emblemColor: {
            red: 0,
            green: 42,
            blue: 128,
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
          titleRecordHash: 2757681677
        },
        '2305843009300330981': {
          membershipId: '4611686018429698327',
          membershipType: 1,
          characterId: '2305843009300330981',
          dateLastPlayed: '2020-07-19T03:02:17Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '3775',
          light: 1018,
          stats: {
            '144602215': 35,
            '392767087': 60,
            '1735777505': 56,
            '1935470627': 1018,
            '1943323491': 62,
            '2996146975': 64,
            '4244567218': 37
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8cd39d79c07cb7f7816daf297c090690.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/041f8e2f986949994b7ca8f008b75ff4.jpg',
          emblemHash: 2071635915,
          emblemColor: {
            red: 92,
            green: 59,
            blue: 20,
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
        '2305843009305919299': {
          membershipId: '4611686018429698327',
          membershipType: 1,
          characterId: '2305843009305919299',
          dateLastPlayed: '2020-07-19T02:54:22Z',
          minutesPlayedThisSession: '15',
          minutesPlayedTotal: '5455',
          light: 1023,
          stats: {
            '144602215': 25,
            '392767087': 28,
            '1735777505': 32,
            '1935470627': 1023,
            '1943323491': 60,
            '2996146975': 41,
            '4244567218': 41
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b051625528a83d9ccbf0584f6e74c3f7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/bac5e16454d6050d135e8a487f4fd9d8.jpg',
          emblemHash: 1667199810,
          emblemColor: {
            red: 0,
            green: 1,
            blue: 33,
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
          titleRecordHash: 2757681677
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009267840511': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 69317,
              weeklyProgress: 394724,
              currentProgress: 4750796,
              level: 47,
              levelCap: -1,
              progressToNextLevel: 50796,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009300330981': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 69317,
              weeklyProgress: 394724,
              currentProgress: 4750796,
              level: 47,
              levelCap: -1,
              progressToNextLevel: 50796,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305919299': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 69317,
              weeklyProgress: 394724,
              currentProgress: 4750796,
              level: 47,
              levelCap: -1,
              progressToNextLevel: 50796,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018486974634',
          displayName: 'OneFPS'
        },
        dateLastPlayed: '2020-09-19T20:29:26Z',
        characterIds: ['2305843009425248535', '2305843009433365164', '2305843009557106409']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 63627,
            dailyLimit: 0,
            weeklyProgress: 844174,
            weeklyLimit: 0,
            currentProgress: 7426994,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 771994,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009425248535': {
          membershipId: '4611686018486974634',
          membershipType: 3,
          characterId: '2305843009425248535',
          dateLastPlayed: '2020-09-19T03:45:08Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '34226',
          light: 1064,
          stats: {
            '144602215': 43,
            '392767087': 49,
            '1735777505': 55,
            '1935470627': 1064,
            '1943323491': 85,
            '2996146975': 73,
            '4244567218': 53
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/1d370c910ddd5762ffb10f5021d83026.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/71b80e345b093d1257a980b1c788c6b5.jpg',
          emblemHash: 2182330181,
          emblemColor: {
            red: 2,
            green: 2,
            blue: 3,
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
        '2305843009433365164': {
          membershipId: '4611686018486974634',
          membershipType: 3,
          characterId: '2305843009433365164',
          dateLastPlayed: '2020-09-19T20:29:26Z',
          minutesPlayedThisSession: '37',
          minutesPlayedTotal: '9402',
          light: 1064,
          stats: {
            '144602215': 47,
            '392767087': 68,
            '1735777505': 52,
            '1935470627': 1064,
            '1943323491': 78,
            '2996146975': 31,
            '4244567218': 38
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/9acfa6608227989d894352158463c53c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/3da566c8c4fac1357dbe6859c554bfee.jpg',
          emblemHash: 1788892384,
          emblemColor: {
            red: 18,
            green: 16,
            blue: 74,
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
        '2305843009557106409': {
          membershipId: '4611686018486974634',
          membershipType: 3,
          characterId: '2305843009557106409',
          dateLastPlayed: '2020-07-31T01:35:55Z',
          minutesPlayedThisSession: '65',
          minutesPlayedTotal: '2479',
          light: 1062,
          stats: {
            '144602215': 56,
            '392767087': 54,
            '1735777505': 36,
            '1935470627': 1062,
            '1943323491': 32,
            '2996146975': 36,
            '4244567218': 39
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/3f326286547edd626ae2d203233517c0.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/c113b62075d19456b2db09da912cefad.jpg',
          emblemHash: 1714370696,
          emblemColor: {
            red: 47,
            green: 47,
            blue: 20,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009425248535': {
          progressions: {
            '1627914615': {
              dailyProgress: 63627,
              weeklyProgress: 844168,
              currentProgress: 7795867,
              level: 78,
              levelCap: 100,
              progressToNextLevel: 95867,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009433365164': {
          progressions: {
            '1627914615': {
              dailyProgress: 63627,
              weeklyProgress: 844168,
              currentProgress: 7795867,
              level: 78,
              levelCap: 100,
              progressToNextLevel: 95867,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009557106409': {
          progressions: {
            '1627914615': {
              dailyProgress: 63627,
              weeklyProgress: 844168,
              currentProgress: 7795867,
              level: 78,
              levelCap: 100,
              progressToNextLevel: 95867,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018471139890',
          displayName: 'Garf'
        },
        dateLastPlayed: '2020-09-20T04:27:44Z',
        characterIds: ['2305843009300001388', '2305843009305109053', '2305843009653094437']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 119381,
            dailyLimit: 0,
            weeklyProgress: 1421771,
            weeklyLimit: 0,
            currentProgress: 45855552,
            level: 29,
            levelCap: -1,
            stepIndex: 29,
            progressToNextLevel: 2735550,
            nextLevelAt: 3135000
          },
          powerBonus: 29
        }
      }
    },
    characters: {
      data: {
        '2305843009300001388': {
          membershipId: '4611686018471139890',
          membershipType: 3,
          characterId: '2305843009300001388',
          dateLastPlayed: '2020-09-20T04:27:44Z',
          minutesPlayedThisSession: '181',
          minutesPlayedTotal: '240944',
          light: 1085,
          stats: {
            '144602215': 42,
            '392767087': 39,
            '1735777505': 76,
            '1935470627': 1085,
            '1943323491': 72,
            '2996146975': 43,
            '4244567218': 36
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
        '2305843009305109053': {
          membershipId: '4611686018471139890',
          membershipType: 3,
          characterId: '2305843009305109053',
          dateLastPlayed: '2020-09-16T16:56:28Z',
          minutesPlayedThisSession: '7',
          minutesPlayedTotal: '19244',
          light: 1070,
          stats: {
            '144602215': 40,
            '392767087': 103,
            '1735777505': 53,
            '1935470627': 1070,
            '1943323491': 54,
            '2996146975': 25,
            '4244567218': 31
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/45318af5e0140ca3d9b71f03776674e3.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/a11eacb0d20137600c0e3bcb10ff2a8b.jpg',
          emblemHash: 3338748564,
          emblemColor: {
            red: 16,
            green: 5,
            blue: 42,
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
        '2305843009653094437': {
          membershipId: '4611686018471139890',
          membershipType: 3,
          characterId: '2305843009653094437',
          dateLastPlayed: '2020-09-16T16:47:15Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '2614',
          light: 1083,
          stats: {
            '144602215': 49,
            '392767087': 22,
            '1735777505': 31,
            '1935470627': 1083,
            '1943323491': 63,
            '2996146975': 40,
            '4244567218': 37
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5dc023c8be5d682eae90be7f5d420f69.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e452c62485491a02fbc0e36f06d301d2.jpg',
          emblemHash: 1907674138,
          emblemColor: {
            red: 15,
            green: 40,
            blue: 48,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009300001388': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 119381,
              weeklyProgress: 1421756,
              currentProgress: 35968024,
              level: 359,
              levelCap: -1,
              progressToNextLevel: 68024,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305109053': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 119381,
              weeklyProgress: 1421756,
              currentProgress: 35968024,
              level: 359,
              levelCap: -1,
              progressToNextLevel: 68024,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009653094437': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 119381,
              weeklyProgress: 1421756,
              currentProgress: 35968024,
              level: 359,
              levelCap: -1,
              progressToNextLevel: 68024,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018431726023',
          displayName: 'BRYU12'
        },
        dateLastPlayed: '2020-09-17T21:41:27Z',
        characterIds: ['2305843009264234290', '2305843009289764280', '2305843009291816922']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 134488,
            weeklyLimit: 0,
            currentProgress: 10695336,
            level: 14,
            levelCap: -1,
            stepIndex: 14,
            progressToNextLevel: 1400336,
            nextLevelAt: 1485000
          },
          powerBonus: 14
        }
      }
    },
    characters: {
      data: {
        '2305843009264234290': {
          membershipId: '4611686018431726023',
          membershipType: 1,
          characterId: '2305843009264234290',
          dateLastPlayed: '2020-09-17T21:41:27Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '90935',
          light: 1061,
          stats: {
            '144602215': 45,
            '392767087': 82,
            '1735777505': 55,
            '1935470627': 1061,
            '1943323491': 33,
            '2996146975': 29,
            '4244567218': 29
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/892a423ae9018458592f2fcce6852b60.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2757207bb6ef08a2483557658cdd376f.jpg',
          emblemHash: 4159550313,
          emblemColor: {
            red: 13,
            green: 11,
            blue: 16,
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
        },
        '2305843009289764280': {
          membershipId: '4611686018431726023',
          membershipType: 1,
          characterId: '2305843009289764280',
          dateLastPlayed: '2020-08-20T02:48:26Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '10187',
          light: 1040,
          stats: {
            '144602215': 25,
            '392767087': 59,
            '1735777505': 40,
            '1935470627': 1040,
            '1943323491': 29,
            '2996146975': 29,
            '4244567218': 43
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/1879398bc8a50d47cdd14cc746c073e1.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/b369c32505c95bb6d042487c2e1138f6.jpg',
          emblemHash: 3931192718,
          emblemColor: {
            red: 0,
            green: 1,
            blue: 3,
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
        '2305843009291816922': {
          membershipId: '4611686018431726023',
          membershipType: 1,
          characterId: '2305843009291816922',
          dateLastPlayed: '2020-06-16T16:13:53Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '331',
          light: 764,
          stats: {
            '144602215': 5,
            '392767087': 0,
            '1735777505': 5,
            '1935470627': 764,
            '1943323491': 13,
            '2996146975': 20,
            '4244567218': 10
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009264234290': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 134484,
              currentProgress: 803042,
              level: 8,
              levelCap: -1,
              progressToNextLevel: 3042,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009289764280': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 134484,
              currentProgress: 803042,
              level: 8,
              levelCap: -1,
              progressToNextLevel: 3042,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009291816922': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 134484,
              currentProgress: 803042,
              level: 8,
              levelCap: -1,
              progressToNextLevel: 3042,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018478229935',
          displayName: 'Glamdring'
        },
        dateLastPlayed: '2020-09-20T00:03:47Z',
        characterIds: ['2305843009369058082', '2305843009378604778']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 123527,
            dailyLimit: 0,
            weeklyProgress: 123527,
            weeklyLimit: 0,
            currentProgress: 7769015,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 1114015,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009369058082': {
          membershipId: '4611686018478229935',
          membershipType: 3,
          characterId: '2305843009369058082',
          dateLastPlayed: '2020-09-20T00:03:47Z',
          minutesPlayedThisSession: '59',
          minutesPlayedTotal: '42518',
          light: 1060,
          stats: {
            '144602215': 38,
            '392767087': 47,
            '1735777505': 68,
            '1935470627': 1060,
            '1943323491': 51,
            '2996146975': 69,
            '4244567218': 20
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cf3fb3eb8b66cfaee141121d7ecd94b5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/6cbce39f1f7c6cb9371684da2ddbe1ae.jpg',
          emblemHash: 1138508275,
          emblemColor: {
            red: 159,
            green: 176,
            blue: 144,
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
        '2305843009378604778': {
          membershipId: '4611686018478229935',
          membershipType: 3,
          characterId: '2305843009378604778',
          dateLastPlayed: '2020-07-19T23:31:56Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '82',
          light: 762,
          stats: {
            '144602215': 29,
            '392767087': 38,
            '1735777505': 34,
            '1935470627': 762,
            '1943323491': 26,
            '2996146975': 40,
            '4244567218': 29
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
            alpha: 255
          },
          levelProgression: {
            progressionHash: 1716568313,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 260654,
            level: 50,
            levelCap: 50,
            stepIndex: 50,
            progressToNextLevel: 260654,
            nextLevelAt: 0
          },
          baseCharacterLevel: 50,
          percentToNextLevel: 0
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009369058082': {
          progressions: {
            '1627914615': {
              dailyProgress: 123524,
              weeklyProgress: 123524,
              currentProgress: 7776424,
              level: 78,
              levelCap: 100,
              progressToNextLevel: 76424,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009378604778': {
          progressions: {
            '1627914615': {
              dailyProgress: 123524,
              weeklyProgress: 123524,
              currentProgress: 7776424,
              level: 78,
              levelCap: 100,
              progressToNextLevel: 76424,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018483582785',
          displayName: 'dee_jay_603'
        },
        dateLastPlayed: '2020-09-20T03:46:47Z',
        characterIds: ['2305843009403687992', '2305843009414204798', '2305843009419164091']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 123939,
            dailyLimit: 0,
            weeklyProgress: 669517,
            weeklyLimit: 0,
            currentProgress: 18636964,
            level: 19,
            levelCap: -1,
            stepIndex: 19,
            progressToNextLevel: 816965,
            nextLevelAt: 2035000
          },
          powerBonus: 19
        }
      }
    },
    characters: {
      data: {
        '2305843009403687992': {
          membershipId: '4611686018483582785',
          membershipType: 3,
          characterId: '2305843009403687992',
          dateLastPlayed: '2020-09-20T03:46:47Z',
          minutesPlayedThisSession: '150',
          minutesPlayedTotal: '45091',
          light: 1074,
          stats: {
            '144602215': 35,
            '392767087': 48,
            '1735777505': 65,
            '1935470627': 1074,
            '1943323491': 51,
            '2996146975': 40,
            '4244567218': 41
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d42c84cd4816ed7f7f8b134f133f839e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/48936362aa79cda58e54ad0f28f616d2.jpg',
          emblemHash: 4159550314,
          emblemColor: {
            red: 3,
            green: 2,
            blue: 1,
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
          titleRecordHash: 3798931976
        },
        '2305843009414204798': {
          membershipId: '4611686018483582785',
          membershipType: 3,
          characterId: '2305843009414204798',
          dateLastPlayed: '2020-09-20T01:15:54Z',
          minutesPlayedThisSession: '51',
          minutesPlayedTotal: '16181',
          light: 1072,
          stats: {
            '144602215': 52,
            '392767087': 57,
            '1735777505': 84,
            '1935470627': 1072,
            '1943323491': 56,
            '2996146975': 33,
            '4244567218': 24
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8a824de412316abe5c2c8644e91c653b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/1d57027dafd95bfef29e4fff890dcc15.jpg',
          emblemHash: 1736897079,
          emblemColor: {
            red: 31,
            green: 31,
            blue: 36,
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
        '2305843009419164091': {
          membershipId: '4611686018483582785',
          membershipType: 3,
          characterId: '2305843009419164091',
          dateLastPlayed: '2020-09-13T03:10:28Z',
          minutesPlayedThisSession: '25',
          minutesPlayedTotal: '11148',
          light: 1060,
          stats: {
            '144602215': 30,
            '392767087': 49,
            '1735777505': 95,
            '1935470627': 1060,
            '1943323491': 48,
            '2996146975': 42,
            '4244567218': 51
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/df631fcdb24ed59b42074d029490b74c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/45fa16772dd440552cf9b0edee65e600.jpg',
          emblemHash: 2394866220,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009403687992': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 123938,
              weeklyProgress: 669508,
              currentProgress: 8744431,
              level: 87,
              levelCap: -1,
              progressToNextLevel: 44431,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009414204798': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 123938,
              weeklyProgress: 669508,
              currentProgress: 8744431,
              level: 87,
              levelCap: -1,
              progressToNextLevel: 44431,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009419164091': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 123938,
              weeklyProgress: 669508,
              currentProgress: 8744431,
              level: 87,
              levelCap: -1,
              progressToNextLevel: 44431,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018470846074',
          displayName: 'SgtPepper'
        },
        dateLastPlayed: '2020-09-20T05:05:23Z',
        characterIds: ['2305843009300627892', '2305843009306154639', '2305843009309595482']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 159008,
            dailyLimit: 0,
            weeklyProgress: 1364476,
            weeklyLimit: 0,
            currentProgress: 29210600,
            level: 24,
            levelCap: -1,
            stepIndex: 24,
            progressToNextLevel: 115601,
            nextLevelAt: 2585000
          },
          powerBonus: 24
        }
      }
    },
    characters: {
      data: {
        '2305843009300627892': {
          membershipId: '4611686018470846074',
          membershipType: 3,
          characterId: '2305843009300627892',
          dateLastPlayed: '2020-09-20T05:05:23Z',
          minutesPlayedThisSession: '103',
          minutesPlayedTotal: '98156',
          light: 1082,
          stats: {
            '144602215': 43,
            '392767087': 56,
            '1735777505': 63,
            '1935470627': 1082,
            '1943323491': 53,
            '2996146975': 43,
            '4244567218': 37
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/47f06e837f8cbd7ff7b15452cefd1b29.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/9b7605c2a5f63881e025595c4371ba45.jpg',
          emblemHash: 298334060,
          emblemColor: {
            red: 1,
            green: 0,
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
          titleRecordHash: 1883929036
        },
        '2305843009306154639': {
          membershipId: '4611686018470846074',
          membershipType: 3,
          characterId: '2305843009306154639',
          dateLastPlayed: '2020-09-20T03:21:44Z',
          minutesPlayedThisSession: '229',
          minutesPlayedTotal: '66236',
          light: 1078,
          stats: {
            '144602215': 47,
            '392767087': 37,
            '1735777505': 47,
            '1935470627': 1078,
            '1943323491': 44,
            '2996146975': 53,
            '4244567218': 24
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/fd2af6082ae0a58b3c0b303cf9dfe946.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/35ddb6d71f16b4abb5d382130fb7970e.jpg',
          emblemHash: 3605490919,
          emblemColor: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0
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
          titleRecordHash: 1883929036
        },
        '2305843009309595482': {
          membershipId: '4611686018470846074',
          membershipType: 3,
          characterId: '2305843009309595482',
          dateLastPlayed: '2020-09-19T23:02:19Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '129419',
          light: 1083,
          stats: {
            '144602215': 45,
            '392767087': 42,
            '1735777505': 62,
            '1935470627': 1083,
            '1943323491': 67,
            '2996146975': 41,
            '4244567218': 36
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/a54c79ffd33a1b7cdb2d37fc003aed8b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/81c6b69963ec8e85d6f98ac50cb7ed9b.jpg',
          emblemHash: 4181232540,
          emblemColor: {
            red: 1,
            green: 1,
            blue: 1,
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
          titleRecordHash: 1883929036
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009300627892': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 159007,
              weeklyProgress: 1364463,
              currentProgress: 19323680,
              level: 193,
              levelCap: -1,
              progressToNextLevel: 23679,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009306154639': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 159007,
              weeklyProgress: 1364463,
              currentProgress: 19323680,
              level: 193,
              levelCap: -1,
              progressToNextLevel: 23679,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009309595482': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 159007,
              weeklyProgress: 1364463,
              currentProgress: 19323680,
              level: 193,
              levelCap: -1,
              progressToNextLevel: 23679,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018460818699',
          displayName: 'ZonMei'
        },
        dateLastPlayed: '2020-09-15T22:39:46Z',
        characterIds: ['2305843009268805809', '2305843009268805810', '2305843009504604742']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 201748,
            weeklyLimit: 0,
            currentProgress: 6418009,
            level: 11,
            levelCap: -1,
            stepIndex: 11,
            progressToNextLevel: 918009,
            nextLevelAt: 1155000
          },
          powerBonus: 11
        }
      }
    },
    characters: {
      data: {
        '2305843009268805809': {
          membershipId: '4611686018460818699',
          membershipType: 2,
          characterId: '2305843009268805809',
          dateLastPlayed: '2020-09-15T22:39:46Z',
          minutesPlayedThisSession: '65',
          minutesPlayedTotal: '65553',
          light: 1064,
          stats: {
            '144602215': 36,
            '392767087': 40,
            '1735777505': 47,
            '1935470627': 1064,
            '1943323491': 62,
            '2996146975': 18,
            '4244567218': 32
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/73e921bcd54cd20255f87f2e3b6a7885.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/59dab6a0d66aaaefb1434ff5cf7f33de.jpg',
          emblemHash: 1138508279,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 2757681677
        },
        '2305843009268805810': {
          membershipId: '4611686018460818699',
          membershipType: 2,
          characterId: '2305843009268805810',
          dateLastPlayed: '2020-08-22T02:02:18Z',
          minutesPlayedThisSession: '24',
          minutesPlayedTotal: '6800',
          light: 1031,
          stats: {
            '144602215': 38,
            '392767087': 66,
            '1735777505': 50,
            '1935470627': 1031,
            '1943323491': 46,
            '2996146975': 14,
            '4244567218': 39
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/5ffc1695a0c85ce9836b6d0609562063.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/4fcb2840387004ba6b78979751634c9b.jpg',
          emblemHash: 1661191197,
          emblemColor: {
            red: 17,
            green: 4,
            blue: 3,
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
        '2305843009504604742': {
          membershipId: '4611686018460818699',
          membershipType: 2,
          characterId: '2305843009504604742',
          dateLastPlayed: '2020-08-22T22:39:20Z',
          minutesPlayedThisSession: '71',
          minutesPlayedTotal: '9620',
          light: 1036,
          stats: {
            '144602215': 29,
            '392767087': 44,
            '1735777505': 54,
            '1935470627': 1036,
            '1943323491': 29,
            '2996146975': 67,
            '4244567218': 42
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/198024b7ff63cdf44ad4651a7ff29b5d.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/f1b7b84a21d2623b258f490264c4239d.jpg',
          emblemHash: 3978281652,
          emblemColor: {
            red: 144,
            green: 134,
            blue: 109,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009268805809': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 201746,
              currentProgress: 6426083,
              level: 65,
              levelCap: 100,
              progressToNextLevel: 26083,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009268805810': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 201746,
              currentProgress: 6426083,
              level: 65,
              levelCap: 100,
              progressToNextLevel: 26083,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009504604742': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 201746,
              currentProgress: 6426083,
              level: 65,
              levelCap: 100,
              progressToNextLevel: 26083,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467372917',
          displayName: 'death_weasel'
        },
        dateLastPlayed: '2020-09-20T04:26:51Z',
        characterIds: ['2305843009301147791', '2305843009305994434', '2305843009394702842']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 142026,
            dailyLimit: 0,
            weeklyProgress: 1139071,
            weeklyLimit: 0,
            currentProgress: 8441454,
            level: 13,
            levelCap: -1,
            stepIndex: 13,
            progressToNextLevel: 521454,
            nextLevelAt: 1375000
          },
          powerBonus: 13
        }
      }
    },
    characters: {
      data: {
        '2305843009301147791': {
          membershipId: '4611686018467372917',
          membershipType: 3,
          characterId: '2305843009301147791',
          dateLastPlayed: '2020-09-20T00:38:26Z',
          minutesPlayedThisSession: '2',
          minutesPlayedTotal: '52091',
          light: 1064,
          stats: {
            '144602215': 63,
            '392767087': 52,
            '1735777505': 69,
            '1935470627': 1064,
            '1943323491': 59,
            '2996146975': 44,
            '4244567218': 45
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          titleRecordHash: 3798931976
        },
        '2305843009305994434': {
          membershipId: '4611686018467372917',
          membershipType: 3,
          characterId: '2305843009305994434',
          dateLastPlayed: '2020-09-20T04:26:51Z',
          minutesPlayedThisSession: '226',
          minutesPlayedTotal: '35529',
          light: 1065,
          stats: {
            '144602215': 52,
            '392767087': 43,
            '1735777505': 68,
            '1935470627': 1065,
            '1943323491': 59,
            '2996146975': 51,
            '4244567218': 35
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1e0d8f0ef0a80257bc499edc5f01d740.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/64b7b29cb674361bf4027fc9e78292cf.jpg',
          emblemHash: 1530147650,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
          titleRecordHash: 3798931976
        },
        '2305843009394702842': {
          membershipId: '4611686018467372917',
          membershipType: 3,
          characterId: '2305843009394702842',
          dateLastPlayed: '2020-09-13T03:25:35Z',
          minutesPlayedThisSession: '17',
          minutesPlayedTotal: '4120',
          light: 1032,
          stats: {
            '144602215': 57,
            '392767087': 42,
            '1735777505': 34,
            '1935470627': 1032,
            '1943323491': 31,
            '2996146975': 64,
            '4244567218': 44
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8515b933e6c1e799ed9104c2b04212ee.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/00836c62f46b3fff6bae07fbf39dd2b2.jpg',
          emblemHash: 844563491,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009301147791': {
          progressions: {
            '1627914615': {
              dailyProgress: 142025,
              weeklyProgress: 1139061,
              currentProgress: 8449401,
              level: 85,
              levelCap: 100,
              progressToNextLevel: 49401,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305994434': {
          progressions: {
            '1627914615': {
              dailyProgress: 142025,
              weeklyProgress: 1139061,
              currentProgress: 8449401,
              level: 85,
              levelCap: 100,
              progressToNextLevel: 49401,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009394702842': {
          progressions: {
            '1627914615': {
              dailyProgress: 142025,
              weeklyProgress: 1139061,
              currentProgress: 8449401,
              level: 85,
              levelCap: 100,
              progressToNextLevel: 49401,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018477191537',
          displayName: 'Saintbacon'
        },
        dateLastPlayed: '2020-08-21T20:56:38Z',
        characterIds: ['2305843009369644030', '2305843009396344087', '2305843009412175446']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 359386,
            weeklyLimit: 0,
            currentProgress: 8793047,
            level: 13,
            levelCap: -1,
            stepIndex: 13,
            progressToNextLevel: 873047,
            nextLevelAt: 1375000
          },
          powerBonus: 13
        }
      }
    },
    characters: {
      data: {
        '2305843009369644030': {
          membershipId: '4611686018477191537',
          membershipType: 3,
          characterId: '2305843009369644030',
          dateLastPlayed: '2020-07-10T22:44:21Z',
          minutesPlayedThisSession: '42',
          minutesPlayedTotal: '24451',
          light: 1052,
          stats: {
            '144602215': 57,
            '392767087': 27,
            '1735777505': 46,
            '1935470627': 1052,
            '1943323491': 64,
            '2996146975': 39,
            '4244567218': 38
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b9ebe5f4b5362da0f07f7449b6470472.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/40cf702a42a33d6d0050c632808045d3.jpg',
          emblemHash: 185321778,
          emblemColor: {
            red: 2,
            green: 2,
            blue: 3,
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
          titleRecordHash: 1693645129
        },
        '2305843009396344087': {
          membershipId: '4611686018477191537',
          membershipType: 3,
          characterId: '2305843009396344087',
          dateLastPlayed: '2020-07-03T22:11:22Z',
          minutesPlayedThisSession: '154',
          minutesPlayedTotal: '9559',
          light: 1050,
          stats: {
            '144602215': 50,
            '392767087': 36,
            '1735777505': 26,
            '1935470627': 1050,
            '1943323491': 32,
            '2996146975': 104,
            '4244567218': 40
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b9ebe5f4b5362da0f07f7449b6470472.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/40cf702a42a33d6d0050c632808045d3.jpg',
          emblemHash: 185321778,
          emblemColor: {
            red: 2,
            green: 2,
            blue: 3,
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
        '2305843009412175446': {
          membershipId: '4611686018477191537',
          membershipType: 3,
          characterId: '2305843009412175446',
          dateLastPlayed: '2020-08-21T20:56:38Z',
          minutesPlayedThisSession: '267',
          minutesPlayedTotal: '33597',
          light: 1050,
          stats: {
            '144602215': 45,
            '392767087': 70,
            '1735777505': 51,
            '1935470627': 1050,
            '1943323491': 31,
            '2996146975': 25,
            '4244567218': 40
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/011cf2a819d76b14f6cf838e9d20c0e1.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/953404a74d7cf361776fdb2748b46d45.jpg',
          emblemHash: 2939572585,
          emblemColor: {
            red: 37,
            green: 27,
            blue: 10,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009369644030': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 359380,
              currentProgress: 8801080,
              level: 89,
              levelCap: 100,
              progressToNextLevel: 1080,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009396344087': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 359380,
              currentProgress: 8801080,
              level: 89,
              levelCap: 100,
              progressToNextLevel: 1080,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009412175446': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 359380,
              currentProgress: 8801080,
              level: 89,
              levelCap: 100,
              progressToNextLevel: 1080,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018472221188',
          displayName: 'Starstrider-7'
        },
        dateLastPlayed: '2020-09-20T06:19:05Z',
        characterIds: ['2305843009311238601', '2305843009319576160', '2305843009362466177']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 715252,
            dailyLimit: 0,
            weeklyProgress: 1001158,
            weeklyLimit: 0,
            currentProgress: 10999388,
            level: 15,
            levelCap: -1,
            stepIndex: 15,
            progressToNextLevel: 219388,
            nextLevelAt: 1595000
          },
          powerBonus: 15
        }
      }
    },
    characters: {
      data: {
        '2305843009311238601': {
          membershipId: '4611686018472221188',
          membershipType: 3,
          characterId: '2305843009311238601',
          dateLastPlayed: '2020-09-20T03:18:17Z',
          minutesPlayedThisSession: '233',
          minutesPlayedTotal: '55150',
          light: 1066,
          stats: {
            '144602215': 50,
            '392767087': 54,
            '1735777505': 48,
            '1935470627': 1066,
            '1943323491': 33,
            '2996146975': 83,
            '4244567218': 12
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ba127a92c13cef64c11b803efeefef23.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/7398688358ef4348a944d316d958228f.jpg',
          emblemHash: 4182480233,
          emblemColor: {
            red: 0,
            green: 107,
            blue: 255,
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
          titleRecordHash: 3798931976
        },
        '2305843009319576160': {
          membershipId: '4611686018472221188',
          membershipType: 3,
          characterId: '2305843009319576160',
          dateLastPlayed: '2020-08-11T15:49:12Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '28544',
          light: 1065,
          stats: {
            '144602215': 61,
            '392767087': 72,
            '1735777505': 32,
            '1935470627': 1065,
            '1943323491': 41,
            '2996146975': 59,
            '4244567218': 15
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1955b4739f75a4b6c9ed0d26bbde11b8.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cca0cacbbc6e77c5ea86c3c5b2ff6e53.jpg',
          emblemHash: 3639046094,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 1754983323
        },
        '2305843009362466177': {
          membershipId: '4611686018472221188',
          membershipType: 3,
          characterId: '2305843009362466177',
          dateLastPlayed: '2020-09-20T06:19:05Z',
          minutesPlayedThisSession: '116',
          minutesPlayedTotal: '42652',
          light: 1066,
          stats: {
            '144602215': 45,
            '392767087': 79,
            '1735777505': 46,
            '1935470627': 1066,
            '1943323491': 44,
            '2996146975': 34,
            '4244567218': 43
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/486c1483be15aabd1ef7adb7a87c7a72.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/3d0142ffcf985e9fab3d3e7d89ec192c.jpg',
          emblemHash: 3961503936,
          emblemColor: {
            red: 7,
            green: 5,
            blue: 43,
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
          titleRecordHash: 1693645129
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009311238601': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 715245,
              weeklyProgress: 1001146,
              currentProgress: 1114387,
              level: 11,
              levelCap: -1,
              progressToNextLevel: 14387,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009319576160': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 715245,
              weeklyProgress: 1001146,
              currentProgress: 1114387,
              level: 11,
              levelCap: -1,
              progressToNextLevel: 14387,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009362466177': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 715245,
              weeklyProgress: 1001146,
              currentProgress: 1114387,
              level: 11,
              levelCap: -1,
              progressToNextLevel: 14387,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018484868920',
          displayName: 'Calvaclops'
        },
        dateLastPlayed: '2020-09-18T19:27:02Z',
        characterIds: ['2305843009409167165', '2305843009414314699', '2305843009419894149']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 33025,
            dailyLimit: 0,
            weeklyProgress: 691663,
            weeklyLimit: 0,
            currentProgress: 20538016,
            level: 20,
            levelCap: -1,
            stepIndex: 20,
            progressToNextLevel: 683017,
            nextLevelAt: 2145000
          },
          powerBonus: 20
        }
      }
    },
    characters: {
      data: {
        '2305843009409167165': {
          membershipId: '4611686018484868920',
          membershipType: 3,
          characterId: '2305843009409167165',
          dateLastPlayed: '2020-09-18T19:27:02Z',
          minutesPlayedThisSession: '104',
          minutesPlayedTotal: '28953',
          light: 1076,
          stats: {
            '144602215': 56,
            '392767087': 38,
            '1735777505': 62,
            '1935470627': 1076,
            '1943323491': 73,
            '2996146975': 42,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ef696558825f40dc18234fd0851e9ae9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73835952fbfdb9315de347b5abc2d087.jpg',
          emblemHash: 1138508276,
          emblemColor: {
            red: 1,
            green: 2,
            blue: 5,
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
        '2305843009414314699': {
          membershipId: '4611686018484868920',
          membershipType: 3,
          characterId: '2305843009414314699',
          dateLastPlayed: '2020-09-15T19:02:41Z',
          minutesPlayedThisSession: '10',
          minutesPlayedTotal: '16840',
          light: 1045,
          stats: {
            '144602215': 29,
            '392767087': 26,
            '1735777505': 56,
            '1935470627': 1045,
            '1943323491': 22,
            '2996146975': 104,
            '4244567218': 31
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/2d4fa1de09b37b0794b782dd1c68a214.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/b0612101bdff8b26768b21cabd445f86.jpg',
          emblemHash: 1273131836,
          emblemColor: {
            red: 2,
            green: 2,
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
          percentToNextLevel: 0
        },
        '2305843009419894149': {
          membershipId: '4611686018484868920',
          membershipType: 3,
          characterId: '2305843009419894149',
          dateLastPlayed: '2020-09-10T15:15:36Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '9377',
          light: 1070,
          stats: {
            '144602215': 46,
            '392767087': 42,
            '1735777505': 33,
            '1935470627': 1070,
            '1943323491': 66,
            '2996146975': 74,
            '4244567218': 44
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b9ebe5f4b5362da0f07f7449b6470472.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/40cf702a42a33d6d0050c632808045d3.jpg',
          emblemHash: 185321778,
          emblemColor: {
            red: 2,
            green: 2,
            blue: 3,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009409167165': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 33025,
              weeklyProgress: 691656,
              currentProgress: 10649681,
              level: 106,
              levelCap: -1,
              progressToNextLevel: 49681,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009414314699': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 33025,
              weeklyProgress: 691656,
              currentProgress: 10649681,
              level: 106,
              levelCap: -1,
              progressToNextLevel: 49681,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009419894149': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 33025,
              weeklyProgress: 691656,
              currentProgress: 10649681,
              level: 106,
              levelCap: -1,
              progressToNextLevel: 49681,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018475516441',
          displayName: 'DirtyGibson'
        },
        dateLastPlayed: '2020-09-16T20:00:11Z',
        characterIds: ['2305843009344456057', '2305843009345065483', '2305843009393583375']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 17709,
            weeklyLimit: 0,
            currentProgress: 9647571,
            level: 14,
            levelCap: -1,
            stepIndex: 14,
            progressToNextLevel: 352571,
            nextLevelAt: 1485000
          },
          powerBonus: 14
        }
      }
    },
    characters: {
      data: {
        '2305843009345065483': {
          membershipId: '4611686018475516441',
          membershipType: 3,
          characterId: '2305843009345065483',
          dateLastPlayed: '2020-08-23T02:52:33Z',
          minutesPlayedThisSession: '22',
          minutesPlayedTotal: '32574',
          light: 1005,
          stats: {
            '144602215': 10,
            '392767087': 44,
            '1735777505': 23,
            '1935470627': 1005,
            '1943323491': 41,
            '2996146975': 38,
            '4244567218': 39
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1955b4739f75a4b6c9ed0d26bbde11b8.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cca0cacbbc6e77c5ea86c3c5b2ff6e53.jpg',
          emblemHash: 3639046094,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 1693645129
        },
        '2305843009344456057': {
          membershipId: '4611686018475516441',
          membershipType: 3,
          characterId: '2305843009344456057',
          dateLastPlayed: '2020-08-28T03:14:47Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '8284',
          light: 1060,
          stats: {
            '144602215': 47,
            '392767087': 64,
            '1735777505': 43,
            '1935470627': 1060,
            '1943323491': 40,
            '2996146975': 14,
            '4244567218': 27
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/55af38e6e90adfe91825a58c96d0a402.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/00323e7a95adaebe0355cc61ed8e68f2.jpg',
          emblemHash: 2276139503,
          emblemColor: {
            red: 2,
            green: 1,
            blue: 1,
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
          titleRecordHash: 1693645129
        },
        '2305843009393583375': {
          membershipId: '4611686018475516441',
          membershipType: 3,
          characterId: '2305843009393583375',
          dateLastPlayed: '2020-09-16T20:00:11Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '23979',
          light: 1059,
          stats: {
            '144602215': 55,
            '392767087': 41,
            '1735777505': 28,
            '1935470627': 1059,
            '1943323491': 33,
            '2996146975': 46,
            '4244567218': 29
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/caee9d902d9be0954a75d9f85fd7955a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ec7f0ec3e6089952bf07e52d5963f115.jpg',
          emblemHash: 1714370698,
          emblemColor: {
            red: 9,
            green: 13,
            blue: 60,
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
          titleRecordHash: 1693645129
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009345065483': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 17709,
              currentProgress: 157674,
              level: 1,
              levelCap: -1,
              progressToNextLevel: 57674,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009344456057': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 17709,
              currentProgress: 157674,
              level: 1,
              levelCap: -1,
              progressToNextLevel: 57674,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009393583375': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 17709,
              currentProgress: 157674,
              level: 1,
              levelCap: -1,
              progressToNextLevel: 57674,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018482661254',
          displayName: 'Roar'
        },
        dateLastPlayed: '2020-09-20T05:12:06Z',
        characterIds: ['2305843009399975414', '2305843009399975416', '2305843009400324772']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 182719,
            dailyLimit: 0,
            weeklyProgress: 1230571,
            weeklyLimit: 0,
            currentProgress: 23318084,
            level: 21,
            levelCap: -1,
            stepIndex: 21,
            progressToNextLevel: 1318085,
            nextLevelAt: 2255000
          },
          powerBonus: 21
        }
      }
    },
    characters: {
      data: {
        '2305843009400324772': {
          membershipId: '4611686018482661254',
          membershipType: 3,
          characterId: '2305843009400324772',
          dateLastPlayed: '2020-09-20T05:12:06Z',
          minutesPlayedThisSession: '356',
          minutesPlayedTotal: '171961',
          light: 1079,
          stats: {
            '144602215': 74,
            '392767087': 46,
            '1735777505': 60,
            '1935470627': 1079,
            '1943323491': 65,
            '2996146975': 43,
            '4244567218': 37
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ef696558825f40dc18234fd0851e9ae9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73835952fbfdb9315de347b5abc2d087.jpg',
          emblemHash: 1138508276,
          emblemColor: {
            red: 1,
            green: 2,
            blue: 5,
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
          titleRecordHash: 4081738395
        },
        '2305843009399975414': {
          membershipId: '4611686018482661254',
          membershipType: 3,
          characterId: '2305843009399975414',
          dateLastPlayed: '2020-09-14T03:48:38Z',
          minutesPlayedThisSession: '4',
          minutesPlayedTotal: '12642',
          light: 992,
          stats: {
            '144602215': 28,
            '392767087': 30,
            '1735777505': 34,
            '1935470627': 992,
            '1943323491': 32,
            '2996146975': 36,
            '4244567218': 28
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/a54c79ffd33a1b7cdb2d37fc003aed8b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/81c6b69963ec8e85d6f98ac50cb7ed9b.jpg',
          emblemHash: 4181232540,
          emblemColor: {
            red: 1,
            green: 1,
            blue: 1,
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
          titleRecordHash: 1883929036
        },
        '2305843009399975416': {
          membershipId: '4611686018482661254',
          membershipType: 3,
          characterId: '2305843009399975416',
          dateLastPlayed: '2020-09-14T03:54:03Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '1346',
          light: 1003,
          stats: {
            '144602215': 34,
            '392767087': 28,
            '1735777505': 74,
            '1935470627': 1003,
            '1943323491': 46,
            '2996146975': 45,
            '4244567218': 16
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d42c84cd4816ed7f7f8b134f133f839e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/48936362aa79cda58e54ad0f28f616d2.jpg',
          emblemHash: 4159550314,
          emblemColor: {
            red: 3,
            green: 2,
            blue: 1,
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
          titleRecordHash: 2053985130
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009400324772': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 182718,
              weeklyProgress: 1230555,
              currentProgress: 13448972,
              level: 134,
              levelCap: -1,
              progressToNextLevel: 48972,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009399975414': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 182718,
              weeklyProgress: 1230555,
              currentProgress: 13448972,
              level: 134,
              levelCap: -1,
              progressToNextLevel: 48972,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009399975416': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 182718,
              weeklyProgress: 1230555,
              currentProgress: 13448972,
              level: 134,
              levelCap: -1,
              progressToNextLevel: 48972,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018451132742',
          displayName: 'mattyams'
        },
        dateLastPlayed: '2020-09-20T06:50:14Z',
        characterIds: ['2305843009260572379', '2305843009260572380', '2305843009260572381']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 790491,
            dailyLimit: 0,
            weeklyProgress: 2440673,
            weeklyLimit: 0,
            currentProgress: 42739016,
            level: 28,
            levelCap: -1,
            stepIndex: 28,
            progressToNextLevel: 2644016,
            nextLevelAt: 3025000
          },
          powerBonus: 28
        }
      }
    },
    characters: {
      data: {
        '2305843009260572379': {
          membershipId: '4611686018451132742',
          membershipType: 1,
          characterId: '2305843009260572379',
          dateLastPlayed: '2020-09-20T06:50:14Z',
          minutesPlayedThisSession: '256',
          minutesPlayedTotal: '6268',
          light: 1086,
          stats: {
            '144602215': 45,
            '392767087': 28,
            '1735777505': 33,
            '1935470627': 1086,
            '1943323491': 52,
            '2996146975': 41,
            '4244567218': 36
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b9ebe5f4b5362da0f07f7449b6470472.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/40cf702a42a33d6d0050c632808045d3.jpg',
          emblemHash: 185321778,
          emblemColor: {
            red: 2,
            green: 2,
            blue: 3,
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
          titleRecordHash: 3798931976
        },
        '2305843009260572380': {
          membershipId: '4611686018451132742',
          membershipType: 1,
          characterId: '2305843009260572380',
          dateLastPlayed: '2020-09-20T02:29:57Z',
          minutesPlayedThisSession: '39',
          minutesPlayedTotal: '29223',
          light: 1088,
          stats: {
            '144602215': 78,
            '392767087': 41,
            '1735777505': 29,
            '1935470627': 1088,
            '1943323491': 37,
            '2996146975': 43,
            '4244567218': 22
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/6039feb4c132650cab776f8cb872441d.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/666f30f628d722effd3503f8e4173c6b.jpg',
          emblemHash: 1661191193,
          emblemColor: {
            red: 52,
            green: 9,
            blue: 5,
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
          titleRecordHash: 3798931976
        },
        '2305843009260572381': {
          membershipId: '4611686018451132742',
          membershipType: 1,
          characterId: '2305843009260572381',
          dateLastPlayed: '2020-09-20T01:49:44Z',
          minutesPlayedThisSession: '7',
          minutesPlayedTotal: '19808',
          light: 1086,
          stats: {
            '144602215': 47,
            '392767087': 52,
            '1735777505': 33,
            '1935470627': 1086,
            '1943323491': 47,
            '2996146975': 27,
            '4244567218': 45
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/44d0f655745f57be32b75c207c361b9d.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/9d931b3414e83927034d90efd9e61b4b.jpg',
          emblemHash: 1138508286,
          emblemColor: {
            red: 192,
            green: 171,
            blue: 171,
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
          titleRecordHash: 3798931976
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009260572379': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 790484,
              weeklyProgress: 2440648,
              currentProgress: 32846704,
              level: 328,
              levelCap: -1,
              progressToNextLevel: 46704,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009260572380': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 790484,
              weeklyProgress: 2440648,
              currentProgress: 32846704,
              level: 328,
              levelCap: -1,
              progressToNextLevel: 46704,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009260572381': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 790484,
              weeklyProgress: 2440648,
              currentProgress: 32846704,
              level: 328,
              levelCap: -1,
              progressToNextLevel: 46704,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018490097528',
          displayName: 'H3vyDr0p'
        },
        dateLastPlayed: '2020-09-10T23:15:30Z',
        characterIds: ['2305843009507844358', '2305843009571675490', '2305843009571675496']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {}
      }
    },
    characters: {
      data: {
        '2305843009507844358': {
          membershipId: '4611686018490097528',
          membershipType: 3,
          characterId: '2305843009507844358',
          dateLastPlayed: '2020-09-10T23:15:30Z',
          minutesPlayedThisSession: '54',
          minutesPlayedTotal: '80823',
          light: 1084,
          stats: {
            '144602215': 55,
            '392767087': 51,
            '1735777505': 74,
            '1935470627': 1084,
            '1943323491': 76,
            '2996146975': 31,
            '4244567218': 65
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        '2305843009571675490': {
          membershipId: '4611686018490097528',
          membershipType: 3,
          characterId: '2305843009571675490',
          dateLastPlayed: '2020-09-10T21:04:09Z',
          minutesPlayedThisSession: '4',
          minutesPlayedTotal: '13296',
          light: 1085,
          stats: {
            '144602215': 50,
            '392767087': 32,
            '1735777505': 45,
            '1935470627': 1085,
            '1943323491': 31,
            '2996146975': 103,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5dc023c8be5d682eae90be7f5d420f69.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e452c62485491a02fbc0e36f06d301d2.jpg',
          emblemHash: 1907674138,
          emblemColor: {
            red: 15,
            green: 40,
            blue: 48,
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
        '2305843009571675496': {
          membershipId: '4611686018490097528',
          membershipType: 3,
          characterId: '2305843009571675496',
          dateLastPlayed: '2020-09-10T20:48:50Z',
          minutesPlayedThisSession: '28',
          minutesPlayedTotal: '15035',
          light: 1085,
          stats: {
            '144602215': 48,
            '392767087': 29,
            '1735777505': 42,
            '1935470627': 1085,
            '1943323491': 39,
            '2996146975': 100,
            '4244567218': 31
          },
          raceHash: 898834093,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {}
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018467401293',
          displayName: 'Infinitimbre'
        },
        dateLastPlayed: '2020-09-20T08:36:37Z',
        characterIds: ['2305843009265563222', '2305843009351584650', '2305843009357955446']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 97588,
            dailyLimit: 0,
            weeklyProgress: 1728124,
            weeklyLimit: 0,
            currentProgress: 30756738,
            level: 24,
            levelCap: -1,
            stepIndex: 24,
            progressToNextLevel: 1661738,
            nextLevelAt: 2585000
          },
          powerBonus: 24
        }
      }
    },
    characters: {
      data: {
        '2305843009265563222': {
          membershipId: '4611686018467401293',
          membershipType: 1,
          characterId: '2305843009265563222',
          dateLastPlayed: '2020-09-20T08:36:37Z',
          minutesPlayedThisSession: '97',
          minutesPlayedTotal: '36204',
          light: 1074,
          stats: {
            '144602215': 14,
            '392767087': 51,
            '1735777505': 64,
            '1935470627': 1074,
            '1943323491': 40,
            '2996146975': 46,
            '4244567218': 61
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/15dc09d774c3a370b2c5e595e62214a0.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e9338350d2f66b4a4a81271d56a17fa6.jpg',
          emblemHash: 298334056,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        },
        '2305843009351584650': {
          membershipId: '4611686018467401293',
          membershipType: 1,
          characterId: '2305843009351584650',
          dateLastPlayed: '2020-09-20T06:59:18Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '89653',
          light: 1073,
          stats: {
            '144602215': 49,
            '392767087': 47,
            '1735777505': 53,
            '1935470627': 1073,
            '1943323491': 58,
            '2996146975': 73,
            '4244567218': 41
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/caee9d902d9be0954a75d9f85fd7955a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ec7f0ec3e6089952bf07e52d5963f115.jpg',
          emblemHash: 1714370698,
          emblemColor: {
            red: 9,
            green: 13,
            blue: 60,
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
        '2305843009357955446': {
          membershipId: '4611686018467401293',
          membershipType: 1,
          characterId: '2305843009357955446',
          dateLastPlayed: '2020-09-19T02:08:13Z',
          minutesPlayedThisSession: '376',
          minutesPlayedTotal: '28572',
          light: 1076,
          stats: {
            '144602215': 65,
            '392767087': 44,
            '1735777505': 32,
            '1935470627': 1076,
            '1943323491': 68,
            '2996146975': 36,
            '4244567218': 38
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/9f6c7a2ab20222ceebf409d103765a72.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e053f5bbec3c47a19f925e8805f70a6e.jpg',
          emblemHash: 1173929375,
          emblemColor: {
            red: 11,
            green: 1,
            blue: 1,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009265563222': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 97587,
              weeklyProgress: 1728108,
              currentProgress: 20864100,
              level: 208,
              levelCap: -1,
              progressToNextLevel: 64101,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009351584650': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 97587,
              weeklyProgress: 1728108,
              currentProgress: 20864100,
              level: 208,
              levelCap: -1,
              progressToNextLevel: 64101,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009357955446': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 97587,
              weeklyProgress: 1728108,
              currentProgress: 20864100,
              level: 208,
              levelCap: -1,
              progressToNextLevel: 64101,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018468503436',
          displayName: 'Hawke'
        },
        dateLastPlayed: '2020-09-18T16:29:12Z',
        characterIds: ['2305843009425978038', '2305843009608385358', '2305843009665784713']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 655102,
            weeklyLimit: 0,
            currentProgress: 15652111,
            level: 17,
            levelCap: -1,
            stepIndex: 17,
            progressToNextLevel: 1572111,
            nextLevelAt: 1815000
          },
          powerBonus: 17
        }
      }
    },
    characters: {
      data: {
        '2305843009425978038': {
          membershipId: '4611686018468503436',
          membershipType: 3,
          characterId: '2305843009425978038',
          dateLastPlayed: '2020-09-18T16:29:12Z',
          minutesPlayedThisSession: '108',
          minutesPlayedTotal: '95141',
          light: 1074,
          stats: {
            '144602215': 50,
            '392767087': 63,
            '1735777505': 35,
            '1935470627': 1074,
            '1943323491': 41,
            '2996146975': 39,
            '4244567218': 79
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/73e921bcd54cd20255f87f2e3b6a7885.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/59dab6a0d66aaaefb1434ff5cf7f33de.jpg',
          emblemHash: 1138508279,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 2707428411
        },
        '2305843009608385358': {
          membershipId: '4611686018468503436',
          membershipType: 3,
          characterId: '2305843009608385358',
          dateLastPlayed: '2020-07-29T02:02:55Z',
          minutesPlayedThisSession: '1',
          minutesPlayedTotal: '2102',
          light: 1062,
          stats: {
            '144602215': 57,
            '392767087': 32,
            '1735777505': 37,
            '1935470627': 1062,
            '1943323491': 28,
            '2996146975': 67,
            '4244567218': 28
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/486c1483be15aabd1ef7adb7a87c7a72.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/3d0142ffcf985e9fab3d3e7d89ec192c.jpg',
          emblemHash: 3961503936,
          emblemColor: {
            red: 7,
            green: 5,
            blue: 43,
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
          titleRecordHash: 2707428411
        },
        '2305843009665784713': {
          membershipId: '4611686018468503436',
          membershipType: 3,
          characterId: '2305843009665784713',
          dateLastPlayed: '2020-09-04T13:50:28Z',
          minutesPlayedThisSession: '66',
          minutesPlayedTotal: '110',
          light: 1032,
          stats: {
            '144602215': 51,
            '392767087': 25,
            '1735777505': 35,
            '1935470627': 1032,
            '1943323491': 50,
            '2996146975': 37,
            '4244567218': 26
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e93effcd71c189edc5baa5c0b10c752c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/a85db50469017eb59532c0d6336f6cb9.jpg',
          emblemHash: 1138508273,
          emblemColor: {
            red: 4,
            green: 4,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009425978038': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 655093,
              currentProgress: 5786502,
              level: 57,
              levelCap: -1,
              progressToNextLevel: 86502,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009608385358': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 655093,
              currentProgress: 5786502,
              level: 57,
              levelCap: -1,
              progressToNextLevel: 86502,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009665784713': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 655093,
              currentProgress: 5786502,
              level: 57,
              levelCap: -1,
              progressToNextLevel: 86502,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018452708124',
          displayName: 'GrayViper'
        },
        dateLastPlayed: '2020-09-19T04:35:11Z',
        characterIds: ['2305843009260890952', '2305843009260890954', '2305843009277956626']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 284313,
            weeklyLimit: 0,
            currentProgress: 18715228,
            level: 19,
            levelCap: -1,
            stepIndex: 19,
            progressToNextLevel: 895229,
            nextLevelAt: 2035000
          },
          powerBonus: 19
        }
      }
    },
    characters: {
      data: {
        '2305843009260890952': {
          membershipId: '4611686018452708124',
          membershipType: 1,
          characterId: '2305843009260890952',
          dateLastPlayed: '2020-09-19T04:35:11Z',
          minutesPlayedThisSession: '150',
          minutesPlayedTotal: '88042',
          light: 1078,
          stats: {
            '144602215': 44,
            '392767087': 81,
            '1735777505': 78,
            '1935470627': 1078,
            '1943323491': 38,
            '2996146975': 38,
            '4244567218': 54
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b3468b9d7b2118c8be79e536cb009633.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/34ff6a162f8947e151120765f49ea57e.jpg',
          emblemHash: 4132147348,
          emblemColor: {
            red: 4,
            green: 4,
            blue: 3,
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
          titleRecordHash: 3369119720
        },
        '2305843009260890954': {
          membershipId: '4611686018452708124',
          membershipType: 1,
          characterId: '2305843009260890954',
          dateLastPlayed: '2020-09-08T03:39:33Z',
          minutesPlayedThisSession: '28',
          minutesPlayedTotal: '52069',
          light: 1079,
          stats: {
            '144602215': 51,
            '392767087': 44,
            '1735777505': 49,
            '1935470627': 1079,
            '1943323491': 46,
            '2996146975': 32,
            '4244567218': 26
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/a276e924660e27b11d224388b6924db6.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/8ea5bcbd9ffdada75367df86038535d6.jpg',
          emblemHash: 3961503949,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 3369119720
        },
        '2305843009277956626': {
          membershipId: '4611686018452708124',
          membershipType: 1,
          characterId: '2305843009277956626',
          dateLastPlayed: '2020-09-14T23:29:54Z',
          minutesPlayedThisSession: '7',
          minutesPlayedTotal: '77360',
          light: 1078,
          stats: {
            '144602215': 33,
            '392767087': 55,
            '1735777505': 59,
            '1935470627': 1078,
            '1943323491': 72,
            '2996146975': 82,
            '4244567218': 56
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
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
          titleRecordHash: 3369119720
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009260890952': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 284310,
              currentProgress: 8835986,
              level: 88,
              levelCap: -1,
              progressToNextLevel: 35986,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009260890954': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 284310,
              currentProgress: 8835986,
              level: 88,
              levelCap: -1,
              progressToNextLevel: 35986,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009277956626': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 284310,
              currentProgress: 8835986,
              level: 88,
              levelCap: -1,
              progressToNextLevel: 35986,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018468697168',
          displayName: 'AmazingSpanoMan'
        },
        dateLastPlayed: '2020-09-17T22:46:35Z',
        characterIds: ['2305843009300546701', '2305843009362165421', '2305843009484584610']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 21100,
            weeklyLimit: 0,
            currentProgress: 9608350,
            level: 14,
            levelCap: -1,
            stepIndex: 14,
            progressToNextLevel: 313350,
            nextLevelAt: 1485000
          },
          powerBonus: 14
        }
      }
    },
    characters: {
      data: {
        '2305843009300546701': {
          membershipId: '4611686018468697168',
          membershipType: 3,
          characterId: '2305843009300546701',
          dateLastPlayed: '2020-09-17T22:46:35Z',
          minutesPlayedThisSession: '20',
          minutesPlayedTotal: '58018',
          light: 1066,
          stats: {
            '144602215': 70,
            '392767087': 71,
            '1735777505': 43,
            '1935470627': 1066,
            '1943323491': 68,
            '2996146975': 62,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          titleRecordHash: 3798931976
        },
        '2305843009362165421': {
          membershipId: '4611686018468697168',
          membershipType: 3,
          characterId: '2305843009362165421',
          dateLastPlayed: '2020-07-22T04:02:58Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '534',
          light: 1057,
          stats: {
            '144602215': 39,
            '392767087': 50,
            '1735777505': 23,
            '1935470627': 1057,
            '1943323491': 31,
            '2996146975': 36,
            '4244567218': 46
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/1558b0287ac22c558a7fdaae083a73e5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cbc31643e9d1d82b2aa08db8d78e537e.jpg',
          emblemHash: 3828080585,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
        '2305843009484584610': {
          membershipId: '4611686018468697168',
          membershipType: 3,
          characterId: '2305843009484584610',
          dateLastPlayed: '2020-07-06T03:56:38Z',
          minutesPlayedThisSession: '89',
          minutesPlayedTotal: '881',
          light: 1059,
          stats: {
            '144602215': 31,
            '392767087': 39,
            '1735777505': 44,
            '1935470627': 1059,
            '1943323491': 36,
            '2996146975': 33,
            '4244567218': 41
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8515b933e6c1e799ed9104c2b04212ee.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/00836c62f46b3fff6bae07fbf39dd2b2.jpg',
          emblemHash: 844563491,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009300546701': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 21100,
              currentProgress: 258723,
              level: 2,
              levelCap: -1,
              progressToNextLevel: 58723,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009362165421': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 21100,
              currentProgress: 258723,
              level: 2,
              levelCap: -1,
              progressToNextLevel: 58723,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009484584610': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 21100,
              currentProgress: 258723,
              level: 2,
              levelCap: -1,
              progressToNextLevel: 58723,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467475554',
          displayName: 'waggy'
        },
        dateLastPlayed: '2020-09-18T20:49:51Z',
        characterIds: ['2305843009299308112', '2305843009299510581', '2305843009305334683']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 26439,
            dailyLimit: 0,
            weeklyProgress: 26845,
            weeklyLimit: 0,
            currentProgress: 12845506,
            level: 16,
            levelCap: -1,
            stepIndex: 16,
            progressToNextLevel: 470506,
            nextLevelAt: 1705000
          },
          powerBonus: 16
        }
      }
    },
    characters: {
      data: {
        '2305843009299308112': {
          membershipId: '4611686018467475554',
          membershipType: 3,
          characterId: '2305843009299308112',
          dateLastPlayed: '2020-09-18T20:49:51Z',
          minutesPlayedThisSession: '46',
          minutesPlayedTotal: '55397',
          light: 1068,
          stats: {
            '144602215': 38,
            '392767087': 42,
            '1735777505': 90,
            '1935470627': 1068,
            '1943323491': 91,
            '2996146975': 58,
            '4244567218': 66
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/a735d0c785c79aae4a718d25814dae9c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/de8811cbfd27fe4feecbca6c9a011503.jpg',
          emblemHash: 1273131835,
          emblemColor: {
            red: 14,
            green: 13,
            blue: 12,
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
        '2305843009299510581': {
          membershipId: '4611686018467475554',
          membershipType: 3,
          characterId: '2305843009299510581',
          dateLastPlayed: '2020-08-20T05:29:00Z',
          minutesPlayedThisSession: '15',
          minutesPlayedTotal: '9163',
          light: 1066,
          stats: {
            '144602215': 43,
            '392767087': 73,
            '1735777505': 36,
            '1935470627': 1066,
            '1943323491': 52,
            '2996146975': 41,
            '4244567218': 35
          },
          raceHash: 898834093,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/4a2b11982f3008b72e13d667db71c09c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/d6184239b18ed62f6634e03e7f37457f.jpg',
          emblemHash: 1321546045,
          emblemColor: {
            red: 72,
            green: 83,
            blue: 24,
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
        '2305843009305334683': {
          membershipId: '4611686018467475554',
          membershipType: 3,
          characterId: '2305843009305334683',
          dateLastPlayed: '2020-08-20T05:41:30Z',
          minutesPlayedThisSession: '12',
          minutesPlayedTotal: '4787',
          light: 1053,
          stats: {
            '144602215': 34,
            '392767087': 20,
            '1735777505': 53,
            '1935470627': 1053,
            '1943323491': 96,
            '2996146975': 36,
            '4244567218': 49
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/1e0d8f0ef0a80257bc499edc5f01d740.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/64b7b29cb674361bf4027fc9e78292cf.jpg',
          emblemHash: 1530147650,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299308112': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 26439,
              weeklyProgress: 26845,
              currentProgress: 2953902,
              level: 29,
              levelCap: -1,
              progressToNextLevel: 53902,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009299510581': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 26439,
              weeklyProgress: 26845,
              currentProgress: 2953902,
              level: 29,
              levelCap: -1,
              progressToNextLevel: 53902,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305334683': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 26439,
              weeklyProgress: 26845,
              currentProgress: 2953902,
              level: 29,
              levelCap: -1,
              progressToNextLevel: 53902,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018469738437',
          displayName: 'Xerxes'
        },
        dateLastPlayed: '2020-09-20T12:53:59Z',
        characterIds: ['2305843009300535494', '2305843009310075098', '2305843009359135308']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 180591,
            dailyLimit: 0,
            weeklyProgress: 537934,
            weeklyLimit: 0,
            currentProgress: 12245056,
            level: 15,
            levelCap: -1,
            stepIndex: 15,
            progressToNextLevel: 1465056,
            nextLevelAt: 1595000
          },
          powerBonus: 15
        }
      }
    },
    characters: {
      data: {
        '2305843009300535494': {
          membershipId: '4611686018469738437',
          membershipType: 3,
          characterId: '2305843009300535494',
          dateLastPlayed: '2020-09-20T02:02:09Z',
          minutesPlayedThisSession: '30',
          minutesPlayedTotal: '25171',
          light: 1064,
          stats: {
            '144602215': 49,
            '392767087': 47,
            '1735777505': 37,
            '1935470627': 1064,
            '1943323491': 101,
            '2996146975': 31,
            '4244567218': 40
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/219be945ed34a305e49f8a4fdfcd2b19.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/b140fb2b8e026bad7f2da251991bae8a.jpg',
          emblemHash: 1923236933,
          emblemColor: {
            red: 3,
            green: 3,
            blue: 3,
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
        '2305843009310075098': {
          membershipId: '4611686018469738437',
          membershipType: 3,
          characterId: '2305843009310075098',
          dateLastPlayed: '2020-09-20T12:53:59Z',
          minutesPlayedThisSession: '11',
          minutesPlayedTotal: '51067',
          light: 1067,
          stats: {
            '144602215': 30,
            '392767087': 64,
            '1735777505': 80,
            '1935470627': 1067,
            '1943323491': 64,
            '2996146975': 34,
            '4244567218': 7
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/219be945ed34a305e49f8a4fdfcd2b19.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/b140fb2b8e026bad7f2da251991bae8a.jpg',
          emblemHash: 1923236933,
          emblemColor: {
            red: 3,
            green: 3,
            blue: 3,
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
        '2305843009359135308': {
          membershipId: '4611686018469738437',
          membershipType: 3,
          characterId: '2305843009359135308',
          dateLastPlayed: '2020-09-19T20:39:37Z',
          minutesPlayedThisSession: '95',
          minutesPlayedTotal: '1950',
          light: 1066,
          stats: {
            '144602215': 33,
            '392767087': 49,
            '1735777505': 43,
            '1935470627': 1066,
            '1943323491': 51,
            '2996146975': 80,
            '4244567218': 50
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/219be945ed34a305e49f8a4fdfcd2b19.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/b140fb2b8e026bad7f2da251991bae8a.jpg',
          emblemHash: 1923236933,
          emblemColor: {
            red: 3,
            green: 3,
            blue: 3,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009300535494': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 180588,
              weeklyProgress: 537928,
              currentProgress: 2361503,
              level: 23,
              levelCap: -1,
              progressToNextLevel: 61503,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009310075098': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 180588,
              weeklyProgress: 537928,
              currentProgress: 2361503,
              level: 23,
              levelCap: -1,
              progressToNextLevel: 61503,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009359135308': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 180588,
              weeklyProgress: 537928,
              currentProgress: 2361503,
              level: 23,
              levelCap: -1,
              progressToNextLevel: 61503,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018470793679',
          displayName: 'Grim'
        },
        dateLastPlayed: '2020-08-18T01:38:33Z',
        characterIds: ['2305843009299607275', '2305843009299608397', '2305843009301572942']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 146768,
            dailyLimit: 0,
            weeklyProgress: 146768,
            weeklyLimit: 0,
            currentProgress: 842067,
            level: 6,
            levelCap: 12,
            stepIndex: 6,
            progressToNextLevel: 196067,
            nextLevelAt: 274000
          },
          pointsAcquired: 6,
          powerBonusProgression: {
            progressionHash: 3810510634,
            dailyProgress: 146768,
            dailyLimit: 0,
            weeklyProgress: 146768,
            weeklyLimit: 0,
            currentProgress: 842073,
            level: 4,
            levelCap: -1,
            stepIndex: 4,
            progressToNextLevel: 347073,
            nextLevelAt: 385000
          },
          powerBonus: 4
        }
      }
    },
    characters: {
      data: {
        '2305843009299607275': {
          membershipId: '4611686018470793679',
          membershipType: 3,
          characterId: '2305843009299607275',
          dateLastPlayed: '2020-07-21T19:37:56Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '24303',
          light: 959,
          stats: {
            '144602215': 34,
            '392767087': 26,
            '1735777505': 30,
            '1935470627': 959,
            '1943323491': 36,
            '2996146975': 34,
            '4244567218': 28
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/bf43b31f82edbe9412166147394ac045.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2dc24c1c509002d4ef33eb30e3b5aa3b.jpg',
          emblemHash: 969863968,
          emblemColor: {
            red: 114,
            green: 0,
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
          titleRecordHash: 3798931976
        },
        '2305843009299608397': {
          membershipId: '4611686018470793679',
          membershipType: 3,
          characterId: '2305843009299608397',
          dateLastPlayed: '2020-07-23T22:57:47Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '71992',
          light: 967,
          stats: {
            '144602215': 46,
            '392767087': 36,
            '1735777505': 41,
            '1935470627': 967,
            '1943323491': 56,
            '2996146975': 25,
            '4244567218': 31
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/86cc790e7179f3bf4643e7740ab65893.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/82982ff7e0536b5260dda5182caa9637.jpg',
          emblemHash: 185321779,
          emblemColor: {
            red: 2,
            green: 3,
            blue: 8,
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
          titleRecordHash: 1693645129
        },
        '2305843009301572942': {
          membershipId: '4611686018470793679',
          membershipType: 3,
          characterId: '2305843009301572942',
          dateLastPlayed: '2020-08-18T01:38:33Z',
          minutesPlayedThisSession: '84',
          minutesPlayedTotal: '50856',
          light: 1006,
          stats: {
            '144602215': 48,
            '392767087': 42,
            '1735777505': 31,
            '1935470627': 1006,
            '1943323491': 35,
            '2996146975': 41,
            '4244567218': 38
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/892a423ae9018458592f2fcce6852b60.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2757207bb6ef08a2483557658cdd376f.jpg',
          emblemHash: 4159550313,
          emblemColor: {
            red: 13,
            green: 11,
            blue: 16,
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
          titleRecordHash: 2757681677
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299607275': {
          progressions: {
            '1627914615': {
              dailyProgress: 146766,
              weeklyProgress: 146766,
              currentProgress: 850228,
              level: 9,
              levelCap: 100,
              progressToNextLevel: 50228,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009299608397': {
          progressions: {
            '1627914615': {
              dailyProgress: 146766,
              weeklyProgress: 146766,
              currentProgress: 850228,
              level: 9,
              levelCap: 100,
              progressToNextLevel: 50228,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009301572942': {
          progressions: {
            '1627914615': {
              dailyProgress: 146766,
              weeklyProgress: 146766,
              currentProgress: 850228,
              level: 9,
              levelCap: 100,
              progressToNextLevel: 50228,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467211890',
          displayName: 'Rovendoug'
        },
        dateLastPlayed: '2020-09-15T15:59:13Z',
        characterIds: ['2305843009313966583', '2305843009483274775', '2305843009483424503']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 1545224,
            level: 8,
            levelCap: 12,
            stepIndex: 8,
            progressToNextLevel: 205224,
            nextLevelAt: 500000
          },
          pointsAcquired: 8,
          powerBonusProgression: {
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 1545228,
            level: 6,
            levelCap: -1,
            stepIndex: 6,
            progressToNextLevel: 170228,
            nextLevelAt: 605000
          },
          powerBonus: 6
        }
      }
    },
    characters: {
      data: {
        '2305843009313966583': {
          membershipId: '4611686018467211890',
          membershipType: 3,
          characterId: '2305843009313966583',
          dateLastPlayed: '2020-09-15T15:54:22Z',
          minutesPlayedThisSession: '22',
          minutesPlayedTotal: '51046',
          light: 1007,
          stats: {
            '144602215': 46,
            '392767087': 56,
            '1735777505': 22,
            '1935470627': 1007,
            '1943323491': 31,
            '2996146975': 32,
            '4244567218': 92
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/92c5fabf9ffaf92c43e019bbb480010f.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/4872d376e07bd954dae8a44c674424d4.jpg',
          emblemHash: 1983519838,
          emblemColor: {
            red: 2,
            green: 2,
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
          percentToNextLevel: 0
        },
        '2305843009483424503': {
          membershipId: '4611686018467211890',
          membershipType: 3,
          characterId: '2305843009483424503',
          dateLastPlayed: '2020-09-15T15:59:13Z',
          minutesPlayedThisSession: '4',
          minutesPlayedTotal: '2290',
          light: 1026,
          stats: {
            '144602215': 28,
            '392767087': 20,
            '1735777505': 56,
            '1935470627': 1026,
            '1943323491': 42,
            '2996146975': 46,
            '4244567218': 27
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/9ec0e286751d89e762a1c94d1431d7bf.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ace1c6a9ccce8a57fe8ba9f3f329c786.jpg',
          emblemHash: 3622268498,
          emblemColor: {
            red: 2,
            green: 8,
            blue: 14,
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
        '2305843009483274775': {
          membershipId: '4611686018467211890',
          membershipType: 3,
          characterId: '2305843009483274775',
          dateLastPlayed: '2020-09-15T15:30:56Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '3428',
          light: 916,
          stats: {
            '144602215': 21,
            '392767087': 46,
            '1735777505': 22,
            '1935470627': 916,
            '1943323491': 22,
            '2996146975': 56,
            '4244567218': 51
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/77c833bd8498e2a25506bad10197099a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/5ab8eda6fedd55da2f3adf3aea557916.jpg',
          emblemHash: 621113310,
          emblemColor: {
            red: 16,
            green: 5,
            blue: 42,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009313966583': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 1581115,
              level: 16,
              levelCap: 100,
              progressToNextLevel: 81115,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009483424503': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 1581115,
              level: 16,
              levelCap: 100,
              progressToNextLevel: 81115,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009483274775': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 1581115,
              level: 16,
              levelCap: 100,
              progressToNextLevel: 81115,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018468591597',
          displayName: 'hilldog1378'
        },
        dateLastPlayed: '2020-09-20T05:07:14Z',
        characterIds: ['2305843009305497831', '2305843009408452212', '2305843009425265937']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 399593,
            dailyLimit: 0,
            weeklyProgress: 1415898,
            weeklyLimit: 0,
            currentProgress: 27391644,
            level: 23,
            levelCap: -1,
            stepIndex: 23,
            progressToNextLevel: 771643,
            nextLevelAt: 2475000
          },
          powerBonus: 23
        }
      }
    },
    characters: {
      data: {
        '2305843009305497831': {
          membershipId: '4611686018468591597',
          membershipType: 3,
          characterId: '2305843009305497831',
          dateLastPlayed: '2020-09-19T17:50:14Z',
          minutesPlayedThisSession: '101',
          minutesPlayedTotal: '56309',
          light: 1080,
          stats: {
            '144602215': 69,
            '392767087': 59,
            '1735777505': 53,
            '1935470627': 1080,
            '1943323491': 40,
            '2996146975': 54,
            '4244567218': 34
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4a08ae6b1321d3d16787fed1aeb6b096.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e1c6fbcbfa15dac3616d304807feb711.jpg',
          emblemHash: 3491436641,
          emblemColor: {
            red: 8,
            green: 8,
            blue: 8,
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
          titleRecordHash: 1693645129
        },
        '2305843009408452212': {
          membershipId: '4611686018468591597',
          membershipType: 3,
          characterId: '2305843009408452212',
          dateLastPlayed: '2020-09-20T05:07:14Z',
          minutesPlayedThisSession: '83',
          minutesPlayedTotal: '4111',
          light: 1080,
          stats: {
            '144602215': 58,
            '392767087': 39,
            '1735777505': 32,
            '1935470627': 1080,
            '1943323491': 46,
            '2996146975': 40,
            '4244567218': 39
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/2bdef9e2ec9988dc1ac82933f0398be0.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/c2fe52d050e89c74b24a6aa89748df4d.jpg',
          emblemHash: 3622268499,
          emblemColor: {
            red: 4,
            green: 1,
            blue: 1,
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
        '2305843009425265937': {
          membershipId: '4611686018468591597',
          membershipType: 3,
          characterId: '2305843009425265937',
          dateLastPlayed: '2020-09-19T21:31:28Z',
          minutesPlayedThisSession: '73',
          minutesPlayedTotal: '2964',
          light: 1037,
          stats: {
            '144602215': 37,
            '392767087': 15,
            '1735777505': 50,
            '1935470627': 1037,
            '1943323491': 57,
            '2996146975': 50,
            '4244567218': 32
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/4a96b06fd86e8a089bdd7f1a450c1f47.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ec4f276eefd5ec24ad6e6f303a5dc9ad.jpg',
          emblemHash: 2967682030,
          emblemColor: {
            red: 58,
            green: 139,
            blue: 211,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009305497831': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 399588,
              weeklyProgress: 1415878,
              currentProgress: 17501848,
              level: 175,
              levelCap: -1,
              progressToNextLevel: 1848,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009408452212': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 399588,
              weeklyProgress: 1415878,
              currentProgress: 17501848,
              level: 175,
              levelCap: -1,
              progressToNextLevel: 1848,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009425265937': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 399588,
              weeklyProgress: 1415878,
              currentProgress: 17501848,
              level: 175,
              levelCap: -1,
              progressToNextLevel: 1848,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018479423507',
          displayName: 'threethan'
        },
        dateLastPlayed: '2020-09-03T04:02:28Z',
        characterIds: ['2305843009378445963', '2305843009409938905', '2305843009435644150']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 7230023,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 575023,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009378445963': {
          membershipId: '4611686018479423507',
          membershipType: 3,
          characterId: '2305843009378445963',
          dateLastPlayed: '2020-08-29T17:12:19Z',
          minutesPlayedThisSession: '45',
          minutesPlayedTotal: '36286',
          light: 1042,
          stats: {
            '144602215': 14,
            '392767087': 55,
            '1735777505': 20,
            '1935470627': 1042,
            '1943323491': 44,
            '2996146975': 26,
            '4244567218': 40
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e0cede49ca5d0c86c984083a3ebb6eb2.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/f6b7ff8d47f680149dcc761706ffe9fe.jpg',
          emblemHash: 2133500854,
          emblemColor: {
            red: 162,
            green: 93,
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
          titleRecordHash: 3798931976
        },
        '2305843009409938905': {
          membershipId: '4611686018479423507',
          membershipType: 3,
          characterId: '2305843009409938905',
          dateLastPlayed: '2020-07-14T03:25:46Z',
          minutesPlayedThisSession: '19',
          minutesPlayedTotal: '14517',
          light: 1049,
          stats: {
            '144602215': 50,
            '392767087': 52,
            '1735777505': 28,
            '1935470627': 1049,
            '1943323491': 20,
            '2996146975': 44,
            '4244567218': 33
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1a7490307221b0cb4b0f82909cb60243.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2eec5dc07d45c6e9c3aa75d20dd1a4c6.jpg',
          emblemHash: 1782320603,
          emblemColor: {
            red: 47,
            green: 0,
            blue: 1,
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
          titleRecordHash: 3798931976
        },
        '2305843009435644150': {
          membershipId: '4611686018479423507',
          membershipType: 3,
          characterId: '2305843009435644150',
          dateLastPlayed: '2020-09-03T04:02:28Z',
          minutesPlayedThisSession: '148',
          minutesPlayedTotal: '4994',
          light: 1061,
          stats: {
            '144602215': 45,
            '392767087': 22,
            '1735777505': 19,
            '1935470627': 1061,
            '1943323491': 71,
            '2996146975': 26,
            '4244567218': 44
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e0cede49ca5d0c86c984083a3ebb6eb2.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/f6b7ff8d47f680149dcc761706ffe9fe.jpg',
          emblemHash: 2133500854,
          emblemColor: {
            red: 162,
            green: 93,
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
          titleRecordHash: 3798931976
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009378445963': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7237082,
              level: 73,
              levelCap: 100,
              progressToNextLevel: 37082,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009409938905': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7237082,
              level: 73,
              levelCap: 100,
              progressToNextLevel: 37082,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009435644150': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7237082,
              level: 73,
              levelCap: 100,
              progressToNextLevel: 37082,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467421201',
          displayName: 'DadGibsonIam'
        },
        dateLastPlayed: '2020-09-20T04:55:39Z',
        characterIds: ['2305843009299577575', '2305843009301530048', '2305843009301630802']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 385097,
            dailyLimit: 0,
            weeklyProgress: 1082320,
            weeklyLimit: 0,
            currentProgress: 29289340,
            level: 24,
            levelCap: -1,
            stepIndex: 24,
            progressToNextLevel: 194341,
            nextLevelAt: 2585000
          },
          powerBonus: 24
        }
      }
    },
    characters: {
      data: {
        '2305843009299577575': {
          membershipId: '4611686018467421201',
          membershipType: 3,
          characterId: '2305843009299577575',
          dateLastPlayed: '2020-09-20T00:59:59Z',
          minutesPlayedThisSession: '108',
          minutesPlayedTotal: '50423',
          light: 1083,
          stats: {
            '144602215': 50,
            '392767087': 45,
            '1735777505': 52,
            '1935470627': 1083,
            '1943323491': 32,
            '2996146975': 99,
            '4244567218': 52
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/73e921bcd54cd20255f87f2e3b6a7885.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/59dab6a0d66aaaefb1434ff5cf7f33de.jpg',
          emblemHash: 1138508279,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 4239091332
        },
        '2305843009301530048': {
          membershipId: '4611686018467421201',
          membershipType: 3,
          characterId: '2305843009301530048',
          dateLastPlayed: '2020-09-19T22:50:39Z',
          minutesPlayedThisSession: '86',
          minutesPlayedTotal: '13265',
          light: 1082,
          stats: {
            '144602215': 45,
            '392767087': 39,
            '1735777505': 54,
            '1935470627': 1082,
            '1943323491': 57,
            '2996146975': 55,
            '4244567218': 40
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/865287266a21f2852518e3e31bb0e650.png',
          emblemBackgroundPath: '/common/destiny2_content/icons/324df99be573be1b92c8dad00193c17b.jpg',
          emblemHash: 738873646,
          emblemColor: {
            red: 1,
            green: 1,
            blue: 1,
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
          titleRecordHash: 4239091332
        },
        '2305843009301630802': {
          membershipId: '4611686018467421201',
          membershipType: 3,
          characterId: '2305843009301630802',
          dateLastPlayed: '2020-09-20T04:55:39Z',
          minutesPlayedThisSession: '43',
          minutesPlayedTotal: '14712',
          light: 1083,
          stats: {
            '144602215': 58,
            '392767087': 66,
            '1735777505': 44,
            '1935470627': 1083,
            '1943323491': 51,
            '2996146975': 35,
            '4244567218': 51
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/755fa89c615c9a15d757b73d15e1b26e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/283b161c019a1f9a648a897270a1414f.jpg',
          emblemHash: 1138508287,
          emblemColor: {
            red: 2,
            green: 3,
            blue: 8,
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
          titleRecordHash: 4239091332
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299577575': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 385095,
              weeklyProgress: 1082307,
              currentProgress: 19410686,
              level: 194,
              levelCap: -1,
              progressToNextLevel: 10686,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009301530048': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 385095,
              weeklyProgress: 1082307,
              currentProgress: 19410686,
              level: 194,
              levelCap: -1,
              progressToNextLevel: 10686,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009301630802': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 385095,
              weeklyProgress: 1082307,
              currentProgress: 19410686,
              level: 194,
              levelCap: -1,
              progressToNextLevel: 10686,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467503581',
          displayName: 'Corbinism'
        },
        dateLastPlayed: '2020-09-14T23:10:08Z',
        characterIds: ['2305843009303074926', '2305843009305684978', '2305843009344994967']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 5481255,
            level: 10,
            levelCap: -1,
            stepIndex: 10,
            progressToNextLevel: 1026255,
            nextLevelAt: 1045000
          },
          powerBonus: 10
        }
      }
    },
    characters: {
      data: {
        '2305843009303074926': {
          membershipId: '4611686018467503581',
          membershipType: 3,
          characterId: '2305843009303074926',
          dateLastPlayed: '2020-07-07T01:24:21Z',
          minutesPlayedThisSession: '10',
          minutesPlayedTotal: '30222',
          light: 1029,
          stats: {
            '144602215': 43,
            '392767087': 18,
            '1735777505': 31,
            '1935470627': 1029,
            '1943323491': 46,
            '2996146975': 52,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/bf43b31f82edbe9412166147394ac045.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2dc24c1c509002d4ef33eb30e3b5aa3b.jpg',
          emblemHash: 969863968,
          emblemColor: {
            red: 114,
            green: 0,
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
          percentToNextLevel: 0
        },
        '2305843009305684978': {
          membershipId: '4611686018467503581',
          membershipType: 3,
          characterId: '2305843009305684978',
          dateLastPlayed: '2020-09-14T23:10:08Z',
          minutesPlayedThisSession: '72',
          minutesPlayedTotal: '24957',
          light: 1052,
          stats: {
            '144602215': 42,
            '392767087': 46,
            '1735777505': 46,
            '1935470627': 1052,
            '1943323491': 49,
            '2996146975': 88,
            '4244567218': 44
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/e1873a599da1e513e655288c49083024.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/93fb4dc92cd3cd0489bb9566a5c74448.jpg',
          emblemHash: 1409726988,
          emblemColor: {
            red: 5,
            green: 5,
            blue: 4,
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
        '2305843009344994967': {
          membershipId: '4611686018467503581',
          membershipType: 3,
          characterId: '2305843009344994967',
          dateLastPlayed: '2020-08-02T01:37:19Z',
          minutesPlayedThisSession: '41',
          minutesPlayedTotal: '11043',
          light: 1034,
          stats: {
            '144602215': 56,
            '392767087': 30,
            '1735777505': 46,
            '1935470627': 1034,
            '1943323491': 72,
            '2996146975': 50,
            '4244567218': 40
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/5edbe29975715c75d1a368c76987fd2f.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/38f204eb25ac88463cf9b7f50312f82a.jpg',
          emblemHash: 2484637939,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009303074926': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 5489299,
              level: 55,
              levelCap: 100,
              progressToNextLevel: 89299,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305684978': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 5489299,
              level: 55,
              levelCap: 100,
              progressToNextLevel: 89299,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009344994967': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 5489299,
              level: 55,
              levelCap: 100,
              progressToNextLevel: 89299,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018474100497',
          displayName: 'McGamerDad'
        },
        dateLastPlayed: '2020-09-20T02:31:09Z',
        characterIds: ['2305843009328364220', '2305843009331844390', '2305843009336514357']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 79262,
            dailyLimit: 0,
            weeklyProgress: 106573,
            weeklyLimit: 0,
            currentProgress: 4712681,
            level: 10,
            levelCap: -1,
            stepIndex: 10,
            progressToNextLevel: 257681,
            nextLevelAt: 1045000
          },
          powerBonus: 10
        }
      }
    },
    characters: {
      data: {
        '2305843009328364220': {
          membershipId: '4611686018474100497',
          membershipType: 3,
          characterId: '2305843009328364220',
          dateLastPlayed: '2020-09-20T02:31:09Z',
          minutesPlayedThisSession: '121',
          minutesPlayedTotal: '62151',
          light: 1056,
          stats: {
            '144602215': 79,
            '392767087': 32,
            '1735777505': 40,
            '1935470627': 1056,
            '1943323491': 47,
            '2996146975': 48,
            '4244567218': 41
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
        '2305843009331844390': {
          membershipId: '4611686018474100497',
          membershipType: 3,
          characterId: '2305843009331844390',
          dateLastPlayed: '2019-12-04T18:34:55Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '3230',
          light: 760,
          stats: {
            '144602215': 20,
            '392767087': 30,
            '1735777505': 30,
            '1935470627': 760,
            '1943323491': 80,
            '2996146975': 20,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1e0d8f0ef0a80257bc499edc5f01d740.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/64b7b29cb674361bf4027fc9e78292cf.jpg',
          emblemHash: 1530147650,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
        '2305843009336514357': {
          membershipId: '4611686018474100497',
          membershipType: 3,
          characterId: '2305843009336514357',
          dateLastPlayed: '2020-03-13T23:01:34Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '2531',
          light: 760,
          stats: {
            '144602215': 25,
            '392767087': 70,
            '1735777505': 20,
            '1935470627': 760,
            '1943323491': 10,
            '2996146975': 50,
            '4244567218': 35
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009328364220': {
          progressions: {
            '1627914615': {
              dailyProgress: 79260,
              weeklyProgress: 106571,
              currentProgress: 4720523,
              level: 48,
              levelCap: 100,
              progressToNextLevel: 20523,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009331844390': {
          progressions: {
            '1627914615': {
              dailyProgress: 79260,
              weeklyProgress: 106571,
              currentProgress: 4720523,
              level: 48,
              levelCap: 100,
              progressToNextLevel: 20523,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009336514357': {
          progressions: {
            '1627914615': {
              dailyProgress: 79260,
              weeklyProgress: 106571,
              currentProgress: 4720523,
              level: 48,
              levelCap: 100,
              progressToNextLevel: 20523,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467432875',
          displayName: 'geminibros'
        },
        dateLastPlayed: '2020-08-14T22:17:21Z',
        characterIds: ['2305843009301197422', '2305843009305706997', '2305843009349315002']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 44465,
            weeklyLimit: 0,
            currentProgress: 3053439,
            level: 10,
            levelCap: 12,
            stepIndex: 10,
            progressToNextLevel: 613439,
            nextLevelAt: 790000
          },
          pointsAcquired: 10,
          powerBonusProgression: {
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 44465,
            weeklyLimit: 0,
            currentProgress: 3053434,
            level: 8,
            levelCap: -1,
            stepIndex: 8,
            progressToNextLevel: 358434,
            nextLevelAt: 825000
          },
          powerBonus: 8
        }
      }
    },
    characters: {
      data: {
        '2305843009301197422': {
          membershipId: '4611686018467432875',
          membershipType: 3,
          characterId: '2305843009301197422',
          dateLastPlayed: '2020-06-26T01:19:43Z',
          minutesPlayedThisSession: '33',
          minutesPlayedTotal: '39744',
          light: 970,
          stats: {
            '144602215': 31,
            '392767087': 19,
            '1735777505': 31,
            '1935470627': 970,
            '1943323491': 19,
            '2996146975': 118,
            '4244567218': 38
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/51128005c389d439a6e2573a859afaad.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/8c22047edb1abda0f611c1808b4ae40a.jpg',
          emblemHash: 3931192719,
          emblemColor: {
            red: 0,
            green: 1,
            blue: 3,
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
        '2305843009305706997': {
          membershipId: '4611686018467432875',
          membershipType: 3,
          characterId: '2305843009305706997',
          dateLastPlayed: '2020-06-18T01:44:57Z',
          minutesPlayedThisSession: '42',
          minutesPlayedTotal: '28204',
          light: 1024,
          stats: {
            '144602215': 63,
            '392767087': 50,
            '1735777505': 16,
            '1935470627': 1024,
            '1943323491': 36,
            '2996146975': 23,
            '4244567218': 34
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/51128005c389d439a6e2573a859afaad.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/8c22047edb1abda0f611c1808b4ae40a.jpg',
          emblemHash: 3931192719,
          emblemColor: {
            red: 0,
            green: 1,
            blue: 3,
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
        '2305843009349315002': {
          membershipId: '4611686018467432875',
          membershipType: 3,
          characterId: '2305843009349315002',
          dateLastPlayed: '2020-08-14T22:17:21Z',
          minutesPlayedThisSession: '31',
          minutesPlayedTotal: '52991',
          light: 1033,
          stats: {
            '144602215': 14,
            '392767087': 68,
            '1735777505': 34,
            '1935470627': 1033,
            '1943323491': 15,
            '2996146975': 39,
            '4244567218': 23
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/51128005c389d439a6e2573a859afaad.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/8c22047edb1abda0f611c1808b4ae40a.jpg',
          emblemHash: 3931192719,
          emblemColor: {
            red: 0,
            green: 1,
            blue: 3,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009301197422': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 44465,
              currentProgress: 3061262,
              level: 31,
              levelCap: 100,
              progressToNextLevel: 61262,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305706997': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 44465,
              currentProgress: 3061262,
              level: 31,
              levelCap: 100,
              progressToNextLevel: 61262,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009349315002': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 44465,
              currentProgress: 3061262,
              level: 31,
              levelCap: 100,
              progressToNextLevel: 61262,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018489326281',
          displayName: 'Subjockey70'
        },
        dateLastPlayed: '2020-09-20T03:13:09Z',
        characterIds: ['2305843009507604175', '2305843009572694557', '2305843009572694559']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 112868,
            dailyLimit: 0,
            weeklyProgress: 392994,
            weeklyLimit: 0,
            currentProgress: 6936353,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 281353,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009507604175': {
          membershipId: '4611686018489326281',
          membershipType: 3,
          characterId: '2305843009507604175',
          dateLastPlayed: '2020-08-27T03:08:19Z',
          minutesPlayedThisSession: '132',
          minutesPlayedTotal: '1976',
          light: 1042,
          stats: {
            '144602215': 22,
            '392767087': 34,
            '1735777505': 40,
            '1935470627': 1042,
            '1943323491': 43,
            '2996146975': 49,
            '4244567218': 10
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ebca4d1e4a8c5c22897e5e07794278a9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/caed66337af9088f329aec861a16bb76.jpg',
          emblemHash: 1736897072,
          emblemColor: {
            red: 0,
            green: 2,
            blue: 5,
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
        '2305843009572694557': {
          membershipId: '4611686018489326281',
          membershipType: 3,
          characterId: '2305843009572694557',
          dateLastPlayed: '2020-09-20T03:13:09Z',
          minutesPlayedThisSession: '115',
          minutesPlayedTotal: '11785',
          light: 1062,
          stats: {
            '144602215': 34,
            '392767087': 36,
            '1735777505': 37,
            '1935470627': 1062,
            '1943323491': 52,
            '2996146975': 31,
            '4244567218': 46
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/9d59645b596c0adf3e164c90a41c4702.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/fc8a4349dc04777c474ec140c7b66d9e.jpg',
          emblemHash: 4085986809,
          emblemColor: {
            red: 5,
            green: 4,
            blue: 5,
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
        '2305843009572694559': {
          membershipId: '4611686018489326281',
          membershipType: 3,
          characterId: '2305843009572694559',
          dateLastPlayed: '2020-09-10T18:38:32Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '1701',
          light: 1062,
          stats: {
            '144602215': 54,
            '392767087': 26,
            '1735777505': 27,
            '1935470627': 1062,
            '1943323491': 38,
            '2996146975': 45,
            '4244567218': 36
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009507604175': {
          progressions: {
            '1627914615': {
              dailyProgress: 112866,
              weeklyProgress: 392989,
              currentProgress: 6942428,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 42428,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009572694557': {
          progressions: {
            '1627914615': {
              dailyProgress: 112866,
              weeklyProgress: 392989,
              currentProgress: 6942428,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 42428,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009572694559': {
          progressions: {
            '1627914615': {
              dailyProgress: 112866,
              weeklyProgress: 392989,
              currentProgress: 6942428,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 42428,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467368726',
          displayName: 'W.Fabiac'
        },
        dateLastPlayed: '2020-09-20T06:45:55Z',
        characterIds: ['2305843009300507083', '2305843009304486708', '2305843009306036464']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 537272,
            dailyLimit: 0,
            weeklyProgress: 2580973,
            weeklyLimit: 0,
            currentProgress: 38126000,
            level: 27,
            levelCap: -1,
            stepIndex: 27,
            progressToNextLevel: 945998,
            nextLevelAt: 2915000
          },
          powerBonus: 27
        }
      }
    },
    characters: {
      data: {
        '2305843009300507083': {
          membershipId: '4611686018467368726',
          membershipType: 3,
          characterId: '2305843009300507083',
          dateLastPlayed: '2020-09-20T06:37:04Z',
          minutesPlayedThisSession: '87',
          minutesPlayedTotal: '32743',
          light: 1085,
          stats: {
            '144602215': 60,
            '392767087': 48,
            '1735777505': 64,
            '1935470627': 1085,
            '1943323491': 69,
            '2996146975': 45,
            '4244567218': 50
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/15dc09d774c3a370b2c5e595e62214a0.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e9338350d2f66b4a4a81271d56a17fa6.jpg',
          emblemHash: 298334056,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 3798931976
        },
        '2305843009306036464': {
          membershipId: '4611686018467368726',
          membershipType: 3,
          characterId: '2305843009306036464',
          dateLastPlayed: '2020-09-20T01:40:36Z',
          minutesPlayedThisSession: '63',
          minutesPlayedTotal: '5387',
          light: 1083,
          stats: {
            '144602215': 50,
            '392767087': 52,
            '1735777505': 82,
            '1935470627': 1083,
            '1943323491': 64,
            '2996146975': 44,
            '4244567218': 53
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/59fa6dd017b1333d67f4d92037e4a337.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/49cb9f683064b737bad01ad31113ebd8.jpg',
          emblemHash: 802191383,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        },
        '2305843009304486708': {
          membershipId: '4611686018467368726',
          membershipType: 3,
          characterId: '2305843009304486708',
          dateLastPlayed: '2020-09-20T06:45:55Z',
          minutesPlayedThisSession: '8',
          minutesPlayedTotal: '2451',
          light: 1082,
          stats: {
            '144602215': 81,
            '392767087': 45,
            '1735777505': 48,
            '1935470627': 1082,
            '1943323491': 61,
            '2996146975': 97,
            '4244567218': 42
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/bed0a486e6f7d1f27fae85e4ef5944b9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e7b826767f7ba6693d6fc9846b9c073c.jpg',
          emblemHash: 1940590816,
          emblemColor: {
            red: 6,
            green: 8,
            blue: 11,
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
          titleRecordHash: 3798931976
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009300507083': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 537268,
              weeklyProgress: 2580946,
              currentProgress: 28232196,
              level: 282,
              levelCap: -1,
              progressToNextLevel: 32197,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009306036464': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 537268,
              weeklyProgress: 2580946,
              currentProgress: 28232196,
              level: 282,
              levelCap: -1,
              progressToNextLevel: 32197,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009304486708': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 537268,
              weeklyProgress: 2580946,
              currentProgress: 28232196,
              level: 282,
              levelCap: -1,
              progressToNextLevel: 32197,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018476930080',
          displayName: 'Tilla'
        },
        dateLastPlayed: '2020-09-19T22:06:30Z',
        characterIds: ['2305843009363304111', '2305843009364345129', '2305843009366073997']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 65580,
            dailyLimit: 0,
            weeklyProgress: 1972309,
            weeklyLimit: 0,
            currentProgress: 12088293,
            level: 15,
            levelCap: -1,
            stepIndex: 15,
            progressToNextLevel: 1308293,
            nextLevelAt: 1595000
          },
          powerBonus: 15
        }
      }
    },
    characters: {
      data: {
        '2305843009363304111': {
          membershipId: '4611686018476930080',
          membershipType: 3,
          characterId: '2305843009363304111',
          dateLastPlayed: '2020-09-19T17:25:11Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '6279',
          light: 1067,
          stats: {
            '144602215': 54,
            '392767087': 62,
            '1735777505': 39,
            '1935470627': 1067,
            '1943323491': 38,
            '2996146975': 79,
            '4244567218': 30
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5adaec45bd84ff4950126e31ad5057bc.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cadd12b59291c7a1a9fe76b07f0f56d3.jpg',
          emblemHash: 3622268497,
          emblemColor: {
            red: 6,
            green: 4,
            blue: 8,
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
          titleRecordHash: 3798931976
        },
        '2305843009364345129': {
          membershipId: '4611686018476930080',
          membershipType: 3,
          characterId: '2305843009364345129',
          dateLastPlayed: '2020-09-19T22:06:30Z',
          minutesPlayedThisSession: '47',
          minutesPlayedTotal: '105012',
          light: 1066,
          stats: {
            '144602215': 36,
            '392767087': 62,
            '1735777505': 69,
            '1935470627': 1066,
            '1943323491': 51,
            '2996146975': 46,
            '4244567218': 49
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d42c84cd4816ed7f7f8b134f133f839e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/48936362aa79cda58e54ad0f28f616d2.jpg',
          emblemHash: 4159550314,
          emblemColor: {
            red: 3,
            green: 2,
            blue: 1,
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
          titleRecordHash: 2757681677
        },
        '2305843009366073997': {
          membershipId: '4611686018476930080',
          membershipType: 3,
          characterId: '2305843009366073997',
          dateLastPlayed: '2020-09-19T20:20:00Z',
          minutesPlayedThisSession: '32',
          minutesPlayedTotal: '4514',
          light: 1066,
          stats: {
            '144602215': 28,
            '392767087': 66,
            '1735777505': 61,
            '1935470627': 1066,
            '1943323491': 52,
            '2996146975': 52,
            '4244567218': 52
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5ffc1695a0c85ce9836b6d0609562063.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/4fcb2840387004ba6b78979751634c9b.jpg',
          emblemHash: 1661191197,
          emblemColor: {
            red: 17,
            green: 4,
            blue: 3,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009363304111': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 65580,
              weeklyProgress: 1972290,
              currentProgress: 2196523,
              level: 21,
              levelCap: -1,
              progressToNextLevel: 96523,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009364345129': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 65580,
              weeklyProgress: 1972290,
              currentProgress: 2196523,
              level: 21,
              levelCap: -1,
              progressToNextLevel: 96523,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009366073997': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 65580,
              weeklyProgress: 1972290,
              currentProgress: 2196523,
              level: 21,
              levelCap: -1,
              progressToNextLevel: 96523,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018468025673',
          displayName: 'Norcalusaf'
        },
        dateLastPlayed: '2020-08-21T01:26:26Z',
        characterIds: ['2305843009301497967', '2305843009305444965', '2305843009310594016']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 6810997,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 155997,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009301497967': {
          membershipId: '4611686018468025673',
          membershipType: 3,
          characterId: '2305843009301497967',
          dateLastPlayed: '2020-08-21T01:26:26Z',
          minutesPlayedThisSession: '16',
          minutesPlayedTotal: '29548',
          light: 1059,
          stats: {
            '144602215': 54,
            '392767087': 39,
            '1735777505': 47,
            '1935470627': 1059,
            '1943323491': 65,
            '2996146975': 70,
            '4244567218': 38
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b9ebe5f4b5362da0f07f7449b6470472.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/40cf702a42a33d6d0050c632808045d3.jpg',
          emblemHash: 185321778,
          emblemColor: {
            red: 2,
            green: 2,
            blue: 3,
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
          titleRecordHash: 1693645129
        },
        '2305843009305444965': {
          membershipId: '4611686018468025673',
          membershipType: 3,
          characterId: '2305843009305444965',
          dateLastPlayed: '2020-07-22T02:21:48Z',
          minutesPlayedThisSession: '81',
          minutesPlayedTotal: '5050',
          light: 1051,
          stats: {
            '144602215': 47,
            '392767087': 59,
            '1735777505': 30,
            '1935470627': 1051,
            '1943323491': 23,
            '2996146975': 33,
            '4244567218': 39
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8a824de412316abe5c2c8644e91c653b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/1d57027dafd95bfef29e4fff890dcc15.jpg',
          emblemHash: 1736897079,
          emblemColor: {
            red: 31,
            green: 31,
            blue: 36,
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
        '2305843009310594016': {
          membershipId: '4611686018468025673',
          membershipType: 3,
          characterId: '2305843009310594016',
          dateLastPlayed: '2020-08-15T02:01:48Z',
          minutesPlayedThisSession: '47',
          minutesPlayedTotal: '11640',
          light: 1010,
          stats: {
            '144602215': 21,
            '392767087': 55,
            '1735777505': 43,
            '1935470627': 1010,
            '1943323491': 29,
            '2996146975': 18,
            '4244567218': 30
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/b9ebe5f4b5362da0f07f7449b6470472.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/40cf702a42a33d6d0050c632808045d3.jpg',
          emblemHash: 185321778,
          emblemColor: {
            red: 2,
            green: 2,
            blue: 3,
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
          titleRecordHash: 1693645129
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009301497967': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7219214,
              level: 73,
              levelCap: 100,
              progressToNextLevel: 19214,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305444965': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7219214,
              level: 73,
              levelCap: 100,
              progressToNextLevel: 19214,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009310594016': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7219214,
              level: 73,
              levelCap: 100,
              progressToNextLevel: 19214,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018431811891',
          displayName: 'Barakah ami'
        },
        dateLastPlayed: '2020-09-20T04:51:22Z',
        characterIds: ['2305843009261820748', '2305843009261820752', '2305843009261820755']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 257129,
            dailyLimit: 0,
            weeklyProgress: 1445458,
            weeklyLimit: 0,
            currentProgress: 29905594,
            level: 24,
            levelCap: -1,
            stepIndex: 24,
            progressToNextLevel: 810594,
            nextLevelAt: 2585000
          },
          powerBonus: 24
        }
      }
    },
    characters: {
      data: {
        '2305843009261820748': {
          membershipId: '4611686018431811891',
          membershipType: 1,
          characterId: '2305843009261820748',
          dateLastPlayed: '2020-09-18T01:34:20Z',
          minutesPlayedThisSession: '181',
          minutesPlayedTotal: '106568',
          light: 1081,
          stats: {
            '144602215': 72,
            '392767087': 68,
            '1735777505': 36,
            '1935470627': 1081,
            '1943323491': 43,
            '2996146975': 40,
            '4244567218': 32
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/2361100edf1f99fd7f482adaec13c4b4.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/30f63199582cadcb6a551e943b79e662.jpg',
          emblemHash: 1505307649,
          emblemColor: {
            red: 13,
            green: 4,
            blue: 8,
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
          titleRecordHash: 3369119720
        },
        '2305843009261820752': {
          membershipId: '4611686018431811891',
          membershipType: 1,
          characterId: '2305843009261820752',
          dateLastPlayed: '2020-09-18T15:41:19Z',
          minutesPlayedThisSession: '78',
          minutesPlayedTotal: '64059',
          light: 1078,
          stats: {
            '144602215': 51,
            '392767087': 33,
            '1735777505': 47,
            '1935470627': 1078,
            '1943323491': 52,
            '2996146975': 62,
            '4244567218': 24
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
          percentToNextLevel: 0,
          titleRecordHash: 4239091332
        },
        '2305843009261820755': {
          membershipId: '4611686018431811891',
          membershipType: 1,
          characterId: '2305843009261820755',
          dateLastPlayed: '2020-09-20T04:51:22Z',
          minutesPlayedThisSession: '178',
          minutesPlayedTotal: '125705',
          light: 1084,
          stats: {
            '144602215': 84,
            '392767087': 44,
            '1735777505': 30,
            '1935470627': 1084,
            '1943323491': 47,
            '2996146975': 62,
            '4244567218': 22
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/6039feb4c132650cab776f8cb872441d.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/666f30f628d722effd3503f8e4173c6b.jpg',
          emblemHash: 1661191193,
          emblemColor: {
            red: 52,
            green: 9,
            blue: 5,
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
          titleRecordHash: 3798931976
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009261820748': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 257128,
              weeklyProgress: 1445446,
              currentProgress: 20165734,
              level: 201,
              levelCap: -1,
              progressToNextLevel: 65734,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009261820752': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 257128,
              weeklyProgress: 1445446,
              currentProgress: 20165734,
              level: 201,
              levelCap: -1,
              progressToNextLevel: 65734,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009261820755': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 257128,
              weeklyProgress: 1445446,
              currentProgress: 20165734,
              level: 201,
              levelCap: -1,
              progressToNextLevel: 65734,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018429587774',
          displayName: 'Acuteflufybunie'
        },
        dateLastPlayed: '2020-08-29T17:55:49Z',
        characterIds: ['2305843009376658405', '2305843009401344160', '2305843009639225145']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 20988,
            dailyLimit: 0,
            weeklyProgress: 108824,
            weeklyLimit: 0,
            currentProgress: 3442342,
            level: 11,
            levelCap: 12,
            stepIndex: 11,
            progressToNextLevel: 212342,
            nextLevelAt: 900000
          },
          pointsAcquired: 11,
          powerBonusProgression: {
            progressionHash: 3810510634,
            dailyProgress: 20988,
            dailyLimit: 0,
            weeklyProgress: 108824,
            weeklyLimit: 0,
            currentProgress: 3442343,
            level: 8,
            levelCap: -1,
            stepIndex: 8,
            progressToNextLevel: 747343,
            nextLevelAt: 825000
          },
          powerBonus: 8
        }
      }
    },
    characters: {
      data: {
        '2305843009376658405': {
          membershipId: '4611686018429587774',
          membershipType: 1,
          characterId: '2305843009376658405',
          dateLastPlayed: '2020-08-29T17:55:49Z',
          minutesPlayedThisSession: '58',
          minutesPlayedTotal: '38414',
          light: 1041,
          stats: {
            '144602215': 34,
            '392767087': 51,
            '1735777505': 53,
            '1935470627': 1041,
            '1943323491': 31,
            '2996146975': 32,
            '4244567218': 37
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/467713e087a6a97c9fd3eeaf3b2db8c0.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/76f20057cd211f80e4a1ab6e7e5cbd92.jpg',
          emblemHash: 802191381,
          emblemColor: {
            red: 83,
            green: 10,
            blue: 10,
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
        '2305843009401344160': {
          membershipId: '4611686018429587774',
          membershipType: 1,
          characterId: '2305843009401344160',
          dateLastPlayed: '2020-05-24T02:28:49Z',
          minutesPlayedThisSession: '28',
          minutesPlayedTotal: '990',
          light: 969,
          stats: {
            '144602215': 57,
            '392767087': 32,
            '1735777505': 32,
            '1935470627': 969,
            '1943323491': 29,
            '2996146975': 65,
            '4244567218': 34
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/7d45beabe42509abe68b7578cf06c39d.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/00a277a4075cdacc279946c306a3c5b1.jpg',
          emblemHash: 180108391,
          emblemColor: {
            red: 8,
            green: 3,
            blue: 3,
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
        '2305843009639225145': {
          membershipId: '4611686018429587774',
          membershipType: 1,
          characterId: '2305843009639225145',
          dateLastPlayed: '2020-05-09T16:18:43Z',
          minutesPlayedThisSession: '35',
          minutesPlayedTotal: '35',
          light: 1009,
          stats: {
            '144602215': 44,
            '392767087': 36,
            '1735777505': 42,
            '1935470627': 1009,
            '1943323491': 57,
            '2996146975': 62,
            '4244567218': 42
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/467713e087a6a97c9fd3eeaf3b2db8c0.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/76f20057cd211f80e4a1ab6e7e5cbd92.jpg',
          emblemHash: 802191381,
          emblemColor: {
            red: 83,
            green: 10,
            blue: 10,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009376658405': {
          progressions: {
            '1627914615': {
              dailyProgress: 20988,
              weeklyProgress: 108821,
              currentProgress: 3928169,
              level: 40,
              levelCap: 100,
              progressToNextLevel: 28169,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009401344160': {
          progressions: {
            '1627914615': {
              dailyProgress: 20988,
              weeklyProgress: 108821,
              currentProgress: 3928169,
              level: 40,
              levelCap: 100,
              progressToNextLevel: 28169,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009639225145': {
          progressions: {
            '1627914615': {
              dailyProgress: 20988,
              weeklyProgress: 108821,
              currentProgress: 3928169,
              level: 40,
              levelCap: 100,
              progressToNextLevel: 28169,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 1,
          membershipId: '4611686018436526339',
          displayName: 'F03 H4MM3R'
        },
        dateLastPlayed: '2020-09-20T12:15:55Z',
        characterIds: ['2305843009265078417', '2305843009266803687', '2305843009278975620']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 57045,
            dailyLimit: 0,
            weeklyProgress: 690306,
            weeklyLimit: 0,
            currentProgress: 6970724,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 315724,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009265078417': {
          membershipId: '4611686018436526339',
          membershipType: 1,
          characterId: '2305843009265078417',
          dateLastPlayed: '2020-04-25T11:27:40Z',
          minutesPlayedThisSession: '45',
          minutesPlayedTotal: '8436',
          light: 1008,
          stats: {
            '144602215': 54,
            '392767087': 77,
            '1735777505': 38,
            '1935470627': 1008,
            '1943323491': 30,
            '2996146975': 24,
            '4244567218': 38
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/152e78674dc20621e3777b2d0e369c7e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/291d76bc59737444c28b9829befd7462.jpg',
          emblemHash: 1736897074,
          emblemColor: {
            red: 57,
            green: 57,
            blue: 64,
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
        '2305843009266803687': {
          membershipId: '4611686018436526339',
          membershipType: 1,
          characterId: '2305843009266803687',
          dateLastPlayed: '2020-04-28T13:07:45Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '2775',
          light: 1010,
          stats: {
            '144602215': 54,
            '392767087': 37,
            '1735777505': 38,
            '1935470627': 1010,
            '1943323491': 28,
            '2996146975': 68,
            '4244567218': 38
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/60530e4d21f5a32bebdca82cb178c4bf.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/c06afc4c698fbec7ee17e9d21496e192.jpg',
          emblemHash: 4077939641,
          emblemColor: {
            red: 75,
            green: 52,
            blue: 34,
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
        '2305843009278975620': {
          membershipId: '4611686018436526339',
          membershipType: 1,
          characterId: '2305843009278975620',
          dateLastPlayed: '2020-09-20T12:15:55Z',
          minutesPlayedThisSession: '62',
          minutesPlayedTotal: '73410',
          light: 1062,
          stats: {
            '144602215': 25,
            '392767087': 35,
            '1735777505': 78,
            '1935470627': 1062,
            '1943323491': 39,
            '2996146975': 53,
            '4244567218': 61
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          titleRecordHash: 2460356851
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009265078417': {
          progressions: {
            '1627914615': {
              dailyProgress: 57045,
              weeklyProgress: 690298,
              currentProgress: 6978968,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 78968,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009266803687': {
          progressions: {
            '1627914615': {
              dailyProgress: 57045,
              weeklyProgress: 690298,
              currentProgress: 6978968,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 78968,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009278975620': {
          progressions: {
            '1627914615': {
              dailyProgress: 57045,
              weeklyProgress: 690298,
              currentProgress: 6978968,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 78968,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018435860491',
          displayName: 'maskedmajority'
        },
        dateLastPlayed: '2020-09-20T08:54:32Z',
        characterIds: ['2305843009290838061', '2305843009290838062', '2305843009290838063']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 317651,
            dailyLimit: 0,
            weeklyProgress: 478605,
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
            progressionHash: 3810510634,
            dailyProgress: 541909,
            dailyLimit: 0,
            weeklyProgress: 702863,
            weeklyLimit: 0,
            currentProgress: 4354262,
            level: 9,
            levelCap: -1,
            stepIndex: 9,
            progressToNextLevel: 834262,
            nextLevelAt: 935000
          },
          powerBonus: 9
        }
      }
    },
    characters: {
      data: {
        '2305843009290838061': {
          membershipId: '4611686018435860491',
          membershipType: 2,
          characterId: '2305843009290838061',
          dateLastPlayed: '2020-08-27T20:51:49Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '3601',
          light: 759,
          stats: {
            '144602215': 32,
            '392767087': 42,
            '1735777505': 21,
            '1935470627': 759,
            '1943323491': 30,
            '2996146975': 50,
            '4244567218': 31
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/730e9302cdd4e8d8c08776c93bf866f7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/aaca6252f13a969b8185d747e4dc5e7c.jpg',
          emblemHash: 4077939647,
          emblemColor: {
            red: 19,
            green: 18,
            blue: 20,
            alpha: 255
          },
          levelProgression: {
            progressionHash: 1716568313,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 246000,
            level: 50,
            levelCap: 50,
            stepIndex: 50,
            progressToNextLevel: 246000,
            nextLevelAt: 0
          },
          baseCharacterLevel: 50,
          percentToNextLevel: 0
        },
        '2305843009290838062': {
          membershipId: '4611686018435860491',
          membershipType: 2,
          characterId: '2305843009290838062',
          dateLastPlayed: '2020-09-20T08:54:32Z',
          minutesPlayedThisSession: '143',
          minutesPlayedTotal: '17858',
          light: 1060,
          stats: {
            '144602215': 31,
            '392767087': 28,
            '1735777505': 37,
            '1935470627': 1060,
            '1943323491': 71,
            '2996146975': 40,
            '4244567218': 69
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
        '2305843009290838063': {
          membershipId: '4611686018435860491',
          membershipType: 2,
          characterId: '2305843009290838063',
          dateLastPlayed: '2020-09-01T18:38:01Z',
          minutesPlayedThisSession: '55',
          minutesPlayedTotal: '3279',
          light: 1039,
          stats: {
            '144602215': 18,
            '392767087': 50,
            '1735777505': 40,
            '1935470627': 1039,
            '1943323491': 29,
            '2996146975': 51,
            '4244567218': 14
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/bf2179f602cd3a6eed551a2cd0e5a029.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/27554e35ff896849e9e9d58fcdd2728a.jpg',
          emblemHash: 4242592195,
          emblemColor: {
            red: 38,
            green: 0,
            blue: 1,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009290838061': {
          progressions: {
            '1627914615': {
              dailyProgress: 541902,
              weeklyProgress: 702854,
              currentProgress: 4460638,
              level: 45,
              levelCap: 100,
              progressToNextLevel: 60638,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009290838062': {
          progressions: {
            '1627914615': {
              dailyProgress: 541902,
              weeklyProgress: 702854,
              currentProgress: 4460638,
              level: 45,
              levelCap: 100,
              progressToNextLevel: 60638,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009290838063': {
          progressions: {
            '1627914615': {
              dailyProgress: 541902,
              weeklyProgress: 702854,
              currentProgress: 4460638,
              level: 45,
              levelCap: 100,
              progressToNextLevel: 60638,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018485040882',
          displayName: 'swayzee57'
        },
        dateLastPlayed: '2020-09-19T03:45:24Z',
        characterIds: ['2305843009409378214', '2305843009416485065', '2305843009417194030']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 23170,
            weeklyLimit: 0,
            currentProgress: 9018098,
            level: 13,
            levelCap: -1,
            stepIndex: 13,
            progressToNextLevel: 1098098,
            nextLevelAt: 1375000
          },
          powerBonus: 13
        }
      }
    },
    characters: {
      data: {
        '2305843009409378214': {
          membershipId: '4611686018485040882',
          membershipType: 3,
          characterId: '2305843009409378214',
          dateLastPlayed: '2020-09-19T03:45:24Z',
          minutesPlayedThisSession: '16',
          minutesPlayedTotal: '26128',
          light: 1061,
          stats: {
            '144602215': 55,
            '392767087': 49,
            '1735777505': 44,
            '1935470627': 1061,
            '1943323491': 86,
            '2996146975': 76,
            '4244567218': 23
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/059fea9aa681511e36d00491e074b455.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/159b2de86d1d48760d7f6c28c36bfa65.jpg',
          emblemHash: 4182480234,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        },
        '2305843009417194030': {
          membershipId: '4611686018485040882',
          membershipType: 3,
          characterId: '2305843009417194030',
          dateLastPlayed: '2020-08-31T22:41:41Z',
          minutesPlayedThisSession: '33',
          minutesPlayedTotal: '32572',
          light: 1063,
          stats: {
            '144602215': 41,
            '392767087': 42,
            '1735777505': 103,
            '1935470627': 1063,
            '1943323491': 58,
            '2996146975': 38,
            '4244567218': 44
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/059fea9aa681511e36d00491e074b455.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/159b2de86d1d48760d7f6c28c36bfa65.jpg',
          emblemHash: 4182480234,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        },
        '2305843009416485065': {
          membershipId: '4611686018485040882',
          membershipType: 3,
          characterId: '2305843009416485065',
          dateLastPlayed: '2020-08-20T03:08:22Z',
          minutesPlayedThisSession: '41',
          minutesPlayedTotal: '9463',
          light: 1025,
          stats: {
            '144602215': 33,
            '392767087': 32,
            '1735777505': 47,
            '1935470627': 1025,
            '1943323491': 32,
            '2996146975': 64,
            '4244567218': 40
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/8cd39d79c07cb7f7816daf297c090690.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/041f8e2f986949994b7ca8f008b75ff4.jpg',
          emblemHash: 2071635915,
          emblemColor: {
            red: 92,
            green: 59,
            blue: 20,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009409378214': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 23170,
              currentProgress: 9026279,
              level: 91,
              levelCap: 100,
              progressToNextLevel: 26279,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009417194030': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 23170,
              currentProgress: 9026279,
              level: 91,
              levelCap: 100,
              progressToNextLevel: 26279,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009416485065': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 23170,
              currentProgress: 9026279,
              level: 91,
              levelCap: 100,
              progressToNextLevel: 26279,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018438789344',
          displayName: 'Primewish'
        },
        dateLastPlayed: '2020-09-20T09:40:15Z',
        characterIds: ['2305843009277857247', '2305843009284695783', '2305843009290605197']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 333374,
            dailyLimit: 0,
            weeklyProgress: 1273609,
            weeklyLimit: 0,
            currentProgress: 38783744,
            level: 27,
            levelCap: -1,
            stepIndex: 27,
            progressToNextLevel: 1603745,
            nextLevelAt: 2915000
          },
          powerBonus: 27
        }
      }
    },
    characters: {
      data: {
        '2305843009277857247': {
          membershipId: '4611686018438789344',
          membershipType: 2,
          characterId: '2305843009277857247',
          dateLastPlayed: '2020-09-20T07:55:51Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '112075',
          light: 1084,
          stats: {
            '144602215': 71,
            '392767087': 44,
            '1735777505': 48,
            '1935470627': 1084,
            '1943323491': 75,
            '2996146975': 101,
            '4244567218': 28
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/584d22714189291b96b189f297c67deb.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/80a8c61899bdd3616b91173e3eee9aa1.jpg',
          emblemHash: 4182480235,
          emblemColor: {
            red: 113,
            green: 6,
            blue: 5,
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
        '2305843009284695783': {
          membershipId: '4611686018438789344',
          membershipType: 2,
          characterId: '2305843009284695783',
          dateLastPlayed: '2020-09-20T09:40:15Z',
          minutesPlayedThisSession: '102',
          minutesPlayedTotal: '35901',
          light: 1087,
          stats: {
            '144602215': 53,
            '392767087': 49,
            '1735777505': 74,
            '1935470627': 1087,
            '1943323491': 76,
            '2996146975': 69,
            '4244567218': 59
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/584d22714189291b96b189f297c67deb.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/80a8c61899bdd3616b91173e3eee9aa1.jpg',
          emblemHash: 4182480235,
          emblemColor: {
            red: 113,
            green: 6,
            blue: 5,
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
        '2305843009290605197': {
          membershipId: '4611686018438789344',
          membershipType: 2,
          characterId: '2305843009290605197',
          dateLastPlayed: '2020-09-19T23:38:51Z',
          minutesPlayedThisSession: '34',
          minutesPlayedTotal: '45777',
          light: 1083,
          stats: {
            '144602215': 43,
            '392767087': 52,
            '1735777505': 100,
            '1935470627': 1083,
            '1943323491': 46,
            '2996146975': 54,
            '4244567218': 30
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/bf2179f602cd3a6eed551a2cd0e5a029.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/27554e35ff896849e9e9d58fcdd2728a.jpg',
          emblemHash: 4242592195,
          emblemColor: {
            red: 38,
            green: 0,
            blue: 1,
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
          titleRecordHash: 2254764897
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009277857247': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 333371,
              weeklyProgress: 1273597,
              currentProgress: 28898748,
              level: 288,
              levelCap: -1,
              progressToNextLevel: 98748,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009284695783': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 333371,
              weeklyProgress: 1273597,
              currentProgress: 28898748,
              level: 288,
              levelCap: -1,
              progressToNextLevel: 98748,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009290605197': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 333371,
              weeklyProgress: 1273597,
              currentProgress: 28898748,
              level: 288,
              levelCap: -1,
              progressToNextLevel: 98748,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018429412112',
          displayName: 'Mr_In'
        },
        dateLastPlayed: '2020-09-20T01:21:37Z',
        characterIds: ['2305843009263846152', '2305843009263846153', '2305843009263846154']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 24210,
            dailyLimit: 0,
            weeklyProgress: 851913,
            weeklyLimit: 0,
            currentProgress: 19337912,
            level: 19,
            levelCap: -1,
            stepIndex: 19,
            progressToNextLevel: 1517912,
            nextLevelAt: 2035000
          },
          powerBonus: 19
        }
      }
    },
    characters: {
      data: {
        '2305843009263846152': {
          membershipId: '4611686018429412112',
          membershipType: 2,
          characterId: '2305843009263846152',
          dateLastPlayed: '2020-09-17T22:37:39Z',
          minutesPlayedThisSession: '296',
          minutesPlayedTotal: '12282',
          light: 1061,
          stats: {
            '144602215': 38,
            '392767087': 34,
            '1735777505': 64,
            '1935470627': 1061,
            '1943323491': 58,
            '2996146975': 52,
            '4244567218': 34
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e0cede49ca5d0c86c984083a3ebb6eb2.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/f6b7ff8d47f680149dcc761706ffe9fe.jpg',
          emblemHash: 2133500854,
          emblemColor: {
            red: 162,
            green: 93,
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
          titleRecordHash: 2460356851
        },
        '2305843009263846153': {
          membershipId: '4611686018429412112',
          membershipType: 2,
          characterId: '2305843009263846153',
          dateLastPlayed: '2020-09-16T18:12:51Z',
          minutesPlayedThisSession: '28',
          minutesPlayedTotal: '2827',
          light: 1072,
          stats: {
            '144602215': 46,
            '392767087': 52,
            '1735777505': 27,
            '1935470627': 1072,
            '1943323491': 20,
            '2996146975': 48,
            '4244567218': 36
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/9ec0e286751d89e762a1c94d1431d7bf.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ace1c6a9ccce8a57fe8ba9f3f329c786.jpg',
          emblemHash: 3622268498,
          emblemColor: {
            red: 2,
            green: 8,
            blue: 14,
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
        '2305843009263846154': {
          membershipId: '4611686018429412112',
          membershipType: 2,
          characterId: '2305843009263846154',
          dateLastPlayed: '2020-09-20T01:21:37Z',
          minutesPlayedThisSession: '41',
          minutesPlayedTotal: '96589',
          light: 1078,
          stats: {
            '144602215': 48,
            '392767087': 37,
            '1735777505': 35,
            '1935470627': 1078,
            '1943323491': 52,
            '2996146975': 88,
            '4244567218': 41
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/ef696558825f40dc18234fd0851e9ae9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73835952fbfdb9315de347b5abc2d087.jpg',
          emblemHash: 1138508276,
          emblemColor: {
            red: 1,
            green: 2,
            blue: 5,
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
          titleRecordHash: 4081738395
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009263846152': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 24208,
              weeklyProgress: 851896,
              currentProgress: 9609048,
              level: 96,
              levelCap: -1,
              progressToNextLevel: 9048,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009263846153': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 24208,
              weeklyProgress: 851896,
              currentProgress: 9609048,
              level: 96,
              levelCap: -1,
              progressToNextLevel: 9048,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009263846154': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 24208,
              weeklyProgress: 851896,
              currentProgress: 9609048,
              level: 96,
              levelCap: -1,
              progressToNextLevel: 9048,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018448078542',
          displayName: 'russa7433'
        },
        dateLastPlayed: '2020-09-20T04:30:20Z',
        characterIds: ['2305843009659744390', '2305843009666694863', '2305843009690365293']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 327820,
            dailyLimit: 0,
            weeklyProgress: 1280144,
            weeklyLimit: 0,
            currentProgress: 25934646,
            level: 22,
            levelCap: -1,
            stepIndex: 22,
            progressToNextLevel: 1679646,
            nextLevelAt: 2365000
          },
          powerBonus: 22
        }
      }
    },
    characters: {
      data: {
        '2305843009659744390': {
          membershipId: '4611686018448078542',
          membershipType: 2,
          characterId: '2305843009659744390',
          dateLastPlayed: '2020-09-20T01:15:19Z',
          minutesPlayedThisSession: '225',
          minutesPlayedTotal: '14887',
          light: 1080,
          stats: {
            '144602215': 46,
            '392767087': 51,
            '1735777505': 100,
            '1935470627': 1080,
            '1943323491': 39,
            '2996146975': 78,
            '4244567218': 48
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/5adaec45bd84ff4950126e31ad5057bc.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cadd12b59291c7a1a9fe76b07f0f56d3.jpg',
          emblemHash: 3622268497,
          emblemColor: {
            red: 6,
            green: 4,
            blue: 8,
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
          titleRecordHash: 2757681677
        },
        '2305843009666694863': {
          membershipId: '4611686018448078542',
          membershipType: 2,
          characterId: '2305843009666694863',
          dateLastPlayed: '2020-09-20T04:30:20Z',
          minutesPlayedThisSession: '152',
          minutesPlayedTotal: '10517',
          light: 1082,
          stats: {
            '144602215': 58,
            '392767087': 49,
            '1735777505': 66,
            '1935470627': 1082,
            '1943323491': 73,
            '2996146975': 34,
            '4244567218': 40
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4c4b746951044ef1271ef2c3a811c776.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/17630acd703b5df02955a0b6be68fe7a.jpg',
          emblemHash: 4040838279,
          emblemColor: {
            red: 5,
            green: 7,
            blue: 11,
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
          titleRecordHash: 2757681677
        },
        '2305843009690365293': {
          membershipId: '4611686018448078542',
          membershipType: 2,
          characterId: '2305843009690365293',
          dateLastPlayed: '2020-09-19T21:29:38Z',
          minutesPlayedThisSession: '335',
          minutesPlayedTotal: '420',
          light: 1080,
          stats: {
            '144602215': 76,
            '392767087': 79,
            '1735777505': 76,
            '1935470627': 1080,
            '1943323491': 32,
            '2996146975': 46,
            '4244567218': 38
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/23a276cddad6ace0e2266a7dca2557eb.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/c9045e341668eb434b68cd8d02e3ab21.jpg',
          emblemHash: 4132147349,
          emblemColor: {
            red: 77,
            green: 77,
            blue: 76,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009659744390': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 327818,
              weeklyProgress: 1280128,
              currentProgress: 16042732,
              level: 160,
              levelCap: -1,
              progressToNextLevel: 42732,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009666694863': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 327818,
              weeklyProgress: 1280128,
              currentProgress: 16042732,
              level: 160,
              levelCap: -1,
              progressToNextLevel: 42732,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009690365293': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 327818,
              weeklyProgress: 1280128,
              currentProgress: 16042732,
              level: 160,
              levelCap: -1,
              progressToNextLevel: 42732,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467397086',
          displayName: 'TRUTHM0NG3R'
        },
        dateLastPlayed: '2020-09-19T23:55:33Z',
        characterIds: ['2305843009299337469', '2305843009309966347', '2305843009310844659']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 609068,
            dailyLimit: 0,
            weeklyProgress: 609068,
            weeklyLimit: 0,
            currentProgress: 6903384,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 248384,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009299337469': {
          membershipId: '4611686018467397086',
          membershipType: 3,
          characterId: '2305843009299337469',
          dateLastPlayed: '2020-09-19T23:55:33Z',
          minutesPlayedThisSession: '251',
          minutesPlayedTotal: '24409',
          light: 1063,
          stats: {
            '144602215': 52,
            '392767087': 47,
            '1735777505': 91,
            '1935470627': 1063,
            '1943323491': 47,
            '2996146975': 47,
            '4244567218': 45
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/185cf8ce6d9ad6fbf459663c437d0340.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/535c884f252edc2057959566a5a3dc44.jpg',
          emblemHash: 1736897076,
          emblemColor: {
            red: 0,
            green: 5,
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
          titleRecordHash: 3798931976
        },
        '2305843009310844659': {
          membershipId: '4611686018467397086',
          membershipType: 3,
          characterId: '2305843009310844659',
          dateLastPlayed: '2020-06-09T06:30:20Z',
          minutesPlayedThisSession: '1',
          minutesPlayedTotal: '45274',
          light: 973,
          stats: {
            '144602215': 40,
            '392767087': 22,
            '1735777505': 26,
            '1935470627': 973,
            '1943323491': 45,
            '2996146975': 35,
            '4244567218': 79
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/7bb44c194b65167f7988ef94cf09651f.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/6baf28dcee7a07ecf14b315ce8d92f20.jpg',
          emblemHash: 4132147344,
          emblemColor: {
            red: 25,
            green: 2,
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
          titleRecordHash: 2707428411
        },
        '2305843009309966347': {
          membershipId: '4611686018467397086',
          membershipType: 3,
          characterId: '2305843009309966347',
          dateLastPlayed: '2020-06-09T06:38:41Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '6618',
          light: 970,
          stats: {
            '144602215': 23,
            '392767087': 63,
            '1735777505': 54,
            '1935470627': 970,
            '1943323491': 27,
            '2996146975': 35,
            '4244567218': 92
          },
          raceHash: 898834093,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/501df64f2c64f277c711a507fea19c95.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/503e847cf66591885af7bae27045b3c4.jpg',
          emblemHash: 1940590822,
          emblemColor: {
            red: 87,
            green: 123,
            blue: 125,
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
          titleRecordHash: 2254764897
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299337469': {
          progressions: {
            '1627914615': {
              dailyProgress: 609054,
              weeklyProgress: 609054,
              currentProgress: 6911416,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 11416,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009310844659': {
          progressions: {
            '1627914615': {
              dailyProgress: 609054,
              weeklyProgress: 609054,
              currentProgress: 6911416,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 11416,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009309966347': {
          progressions: {
            '1627914615': {
              dailyProgress: 609054,
              weeklyProgress: 609054,
              currentProgress: 6911416,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 11416,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018442462698',
          displayName: 'TheSerg1026'
        },
        dateLastPlayed: '2020-09-12T18:48:24Z',
        characterIds: ['2305843009260749718', '2305843009260749719', '2305843009351224415']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 9245430,
            level: 13,
            levelCap: -1,
            stepIndex: 13,
            progressToNextLevel: 1325430,
            nextLevelAt: 1375000
          },
          powerBonus: 13
        }
      }
    },
    characters: {
      data: {
        '2305843009260749718': {
          membershipId: '4611686018442462698',
          membershipType: 2,
          characterId: '2305843009260749718',
          dateLastPlayed: '2020-07-23T02:58:58Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '13604',
          light: 1015,
          stats: {
            '144602215': 47,
            '392767087': 51,
            '1735777505': 37,
            '1935470627': 1015,
            '1943323491': 8,
            '2996146975': 49,
            '4244567218': 27
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d49d85a3aeb901807f0a0521d31cd13a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/bda6a4b5f33719af1b13d873e123215f.jpg',
          emblemHash: 1983519834,
          emblemColor: {
            red: 1,
            green: 1,
            blue: 1,
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
          titleRecordHash: 2707428411
        },
        '2305843009260749719': {
          membershipId: '4611686018442462698',
          membershipType: 2,
          characterId: '2305843009260749719',
          dateLastPlayed: '2020-07-29T01:38:04Z',
          minutesPlayedThisSession: '8',
          minutesPlayedTotal: '29381',
          light: 1065,
          stats: {
            '144602215': 40,
            '392767087': 23,
            '1735777505': 50,
            '1935470627': 1065,
            '1943323491': 56,
            '2996146975': 34,
            '4244567218': 27
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/755fa89c615c9a15d757b73d15e1b26e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/283b161c019a1f9a648a897270a1414f.jpg',
          emblemHash: 1138508287,
          emblemColor: {
            red: 2,
            green: 3,
            blue: 8,
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
        },
        '2305843009351224415': {
          membershipId: '4611686018442462698',
          membershipType: 2,
          characterId: '2305843009351224415',
          dateLastPlayed: '2020-09-12T18:48:24Z',
          minutesPlayedThisSession: '32',
          minutesPlayedTotal: '93614',
          light: 1065,
          stats: {
            '144602215': 48,
            '392767087': 34,
            '1735777505': 42,
            '1935470627': 1065,
            '1943323491': 44,
            '2996146975': 41,
            '4244567218': 32
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
    characterProgressions: {
      data: {
        '2305843009260749718': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9253642,
              level: 93,
              levelCap: 100,
              progressToNextLevel: 53642,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009260749719': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9253642,
              level: 93,
              levelCap: 100,
              progressToNextLevel: 53642,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009351224415': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9253642,
              level: 93,
              levelCap: 100,
              progressToNextLevel: 53642,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018471009605',
          displayName: 'Jaybob'
        },
        dateLastPlayed: '2020-09-20T03:00:57Z',
        characterIds: ['2305843009299499722', '2305843009395635938', '2305843009472174992']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 157838,
            dailyLimit: 0,
            weeklyProgress: 175890,
            weeklyLimit: 0,
            currentProgress: 14835522,
            level: 17,
            levelCap: -1,
            stepIndex: 17,
            progressToNextLevel: 755522,
            nextLevelAt: 1815000
          },
          powerBonus: 17
        }
      }
    },
    characters: {
      data: {
        '2305843009299499722': {
          membershipId: '4611686018471009605',
          membershipType: 3,
          characterId: '2305843009299499722',
          dateLastPlayed: '2020-09-20T02:36:57Z',
          minutesPlayedThisSession: '116',
          minutesPlayedTotal: '59719',
          light: 1068,
          stats: {
            '144602215': 31,
            '392767087': 39,
            '1735777505': 61,
            '1935470627': 1068,
            '1943323491': 48,
            '2996146975': 47,
            '4244567218': 42
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/a735d0c785c79aae4a718d25814dae9c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/de8811cbfd27fe4feecbca6c9a011503.jpg',
          emblemHash: 1273131835,
          emblemColor: {
            red: 14,
            green: 13,
            blue: 12,
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
        '2305843009395635938': {
          membershipId: '4611686018471009605',
          membershipType: 3,
          characterId: '2305843009395635938',
          dateLastPlayed: '2020-09-20T03:00:57Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '2306',
          light: 1066,
          stats: {
            '144602215': 44,
            '392767087': 36,
            '1735777505': 27,
            '1935470627': 1066,
            '1943323491': 22,
            '2996146975': 52,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1e0d8f0ef0a80257bc499edc5f01d740.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/64b7b29cb674361bf4027fc9e78292cf.jpg',
          emblemHash: 1530147650,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
        '2305843009472174992': {
          membershipId: '4611686018471009605',
          membershipType: 3,
          characterId: '2305843009472174992',
          dateLastPlayed: '2020-09-20T02:50:46Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '2050',
          light: 1068,
          stats: {
            '144602215': 49,
            '392767087': 43,
            '1735777505': 43,
            '1935470627': 1068,
            '1943323491': 47,
            '2996146975': 31,
            '4244567218': 28
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/09b220aa6116f06073040eee3d74a3c6.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/c895d91c921cddab769c33761166c449.jpg',
          emblemHash: 2390666069,
          emblemColor: {
            red: 5,
            green: 7,
            blue: 11,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299499722': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 157832,
              weeklyProgress: 175884,
              currentProgress: 5002934,
              level: 50,
              levelCap: -1,
              progressToNextLevel: 2934,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009395635938': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 157832,
              weeklyProgress: 175884,
              currentProgress: 5002934,
              level: 50,
              levelCap: -1,
              progressToNextLevel: 2934,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009472174992': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 157832,
              weeklyProgress: 175884,
              currentProgress: 5002934,
              level: 50,
              levelCap: -1,
              progressToNextLevel: 2934,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467296647',
          displayName: 'OmegaDad'
        },
        dateLastPlayed: '2020-09-20T05:07:50Z',
        characterIds: ['2305843009299408099', '2305843009300965634', '2305843009305696677']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 61257,
            dailyLimit: 0,
            weeklyProgress: 1238224,
            weeklyLimit: 0,
            currentProgress: 24173138,
            level: 21,
            levelCap: -1,
            stepIndex: 21,
            progressToNextLevel: 2173138,
            nextLevelAt: 2255000
          },
          powerBonus: 21
        }
      }
    },
    characters: {
      data: {
        '2305843009300965634': {
          membershipId: '4611686018467296647',
          membershipType: 3,
          characterId: '2305843009300965634',
          dateLastPlayed: '2020-09-05T23:03:12Z',
          minutesPlayedThisSession: '2',
          minutesPlayedTotal: '49356',
          light: 1071,
          stats: {
            '144602215': 53,
            '392767087': 38,
            '1735777505': 33,
            '1935470627': 1071,
            '1943323491': 25,
            '2996146975': 64,
            '4244567218': 39
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/207c50a726c83a0abdc83ceb36b80245.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/0e3ebc95c44ff4a62701aa22edac0736.jpg',
          emblemHash: 3639046091,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 2254764897
        },
        '2305843009299408099': {
          membershipId: '4611686018467296647',
          membershipType: 3,
          characterId: '2305843009299408099',
          dateLastPlayed: '2020-09-01T03:16:59Z',
          minutesPlayedThisSession: '8',
          minutesPlayedTotal: '38033',
          light: 1027,
          stats: {
            '144602215': 52,
            '392767087': 33,
            '1735777505': 63,
            '1935470627': 1027,
            '1943323491': 75,
            '2996146975': 20,
            '4244567218': 32
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/b3468b9d7b2118c8be79e536cb009633.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/34ff6a162f8947e151120765f49ea57e.jpg',
          emblemHash: 4132147348,
          emblemColor: {
            red: 4,
            green: 4,
            blue: 3,
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
          titleRecordHash: 3798931976
        },
        '2305843009305696677': {
          membershipId: '4611686018467296647',
          membershipType: 3,
          characterId: '2305843009305696677',
          dateLastPlayed: '2020-09-20T05:07:50Z',
          minutesPlayedThisSession: '96',
          minutesPlayedTotal: '150132',
          light: 1081,
          stats: {
            '144602215': 73,
            '392767087': 58,
            '1735777505': 41,
            '1935470627': 1081,
            '1943323491': 35,
            '2996146975': 60,
            '4244567218': 34
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/011cf2a819d76b14f6cf838e9d20c0e1.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/953404a74d7cf361776fdb2748b46d45.jpg',
          emblemHash: 2939572585,
          emblemColor: {
            red: 37,
            green: 27,
            blue: 10,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009300965634': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 61257,
              weeklyProgress: 1238214,
              currentProgress: 14281120,
              level: 142,
              levelCap: -1,
              progressToNextLevel: 81120,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009299408099': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 61257,
              weeklyProgress: 1238214,
              currentProgress: 14281120,
              level: 142,
              levelCap: -1,
              progressToNextLevel: 81120,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305696677': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 61257,
              weeklyProgress: 1238214,
              currentProgress: 14281120,
              level: 142,
              levelCap: -1,
              progressToNextLevel: 81120,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018429124005',
          displayName: 'FAIRWAZE'
        },
        dateLastPlayed: '2020-09-20T12:26:01Z',
        characterIds: ['2305843009268640343', '2305843009431864197', '2305843009431864198']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 241978,
            dailyLimit: 0,
            weeklyProgress: 1085152,
            weeklyLimit: 0,
            currentProgress: 26572734,
            level: 22,
            levelCap: -1,
            stepIndex: 22,
            progressToNextLevel: 2317734,
            nextLevelAt: 2365000
          },
          powerBonus: 22
        }
      }
    },
    characters: {
      data: {
        '2305843009268640343': {
          membershipId: '4611686018429124005',
          membershipType: 2,
          characterId: '2305843009268640343',
          dateLastPlayed: '2020-09-20T12:26:01Z',
          minutesPlayedThisSession: '27',
          minutesPlayedTotal: '53720',
          light: 1078,
          stats: {
            '144602215': 44,
            '392767087': 32,
            '1735777505': 73,
            '1935470627': 1078,
            '1943323491': 65,
            '2996146975': 70,
            '4244567218': 16
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/fc335bfa56e0d5e220e8a7458d13807a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/6014acd5118e9344702bc20e42d87139.jpg',
          emblemHash: 4179974574,
          emblemColor: {
            red: 4,
            green: 31,
            blue: 92,
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
          titleRecordHash: 1313291220
        },
        '2305843009431864197': {
          membershipId: '4611686018429124005',
          membershipType: 2,
          characterId: '2305843009431864197',
          dateLastPlayed: '2020-09-20T02:22:04Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '65573',
          light: 1079,
          stats: {
            '144602215': 65,
            '392767087': 54,
            '1735777505': 62,
            '1935470627': 1079,
            '1943323491': 72,
            '2996146975': 43,
            '4244567218': 21
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/fc335bfa56e0d5e220e8a7458d13807a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/6014acd5118e9344702bc20e42d87139.jpg',
          emblemHash: 4179974574,
          emblemColor: {
            red: 4,
            green: 31,
            blue: 92,
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
          titleRecordHash: 4081738395
        },
        '2305843009431864198': {
          membershipId: '4611686018429124005',
          membershipType: 2,
          characterId: '2305843009431864198',
          dateLastPlayed: '2020-09-19T15:13:22Z',
          minutesPlayedThisSession: '244',
          minutesPlayedTotal: '8067',
          light: 1073,
          stats: {
            '144602215': 47,
            '392767087': 54,
            '1735777505': 52,
            '1935470627': 1073,
            '1943323491': 79,
            '2996146975': 44,
            '4244567218': 46
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/fc335bfa56e0d5e220e8a7458d13807a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/6014acd5118e9344702bc20e42d87139.jpg',
          emblemHash: 4179974574,
          emblemColor: {
            red: 4,
            green: 31,
            blue: 92,
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
          titleRecordHash: 1693645129
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009268640343': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 241975,
              weeklyProgress: 1085141,
              currentProgress: 16690007,
              level: 166,
              levelCap: -1,
              progressToNextLevel: 90007,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009431864197': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 241975,
              weeklyProgress: 1085141,
              currentProgress: 16690007,
              level: 166,
              levelCap: -1,
              progressToNextLevel: 90007,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009431864198': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 241975,
              weeklyProgress: 1085141,
              currentProgress: 16690007,
              level: 166,
              levelCap: -1,
              progressToNextLevel: 90007,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018428644001',
          displayName: 'BOOYA1968'
        },
        dateLastPlayed: '2020-09-20T03:03:14Z',
        characterIds: ['2305843009261892959', '2305843009261892960', '2305843009270600792']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 160569,
            dailyLimit: 0,
            weeklyProgress: 1225473,
            weeklyLimit: 0,
            currentProgress: 11040052,
            level: 15,
            levelCap: -1,
            stepIndex: 15,
            progressToNextLevel: 260052,
            nextLevelAt: 1595000
          },
          powerBonus: 15
        }
      }
    },
    characters: {
      data: {
        '2305843009261892959': {
          membershipId: '4611686018428644001',
          membershipType: 2,
          characterId: '2305843009261892959',
          dateLastPlayed: '2020-09-20T02:32:48Z',
          minutesPlayedThisSession: '96',
          minutesPlayedTotal: '30282',
          light: 1065,
          stats: {
            '144602215': 51,
            '392767087': 73,
            '1735777505': 48,
            '1935470627': 1065,
            '1943323491': 29,
            '2996146975': 35,
            '4244567218': 43
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/157137504ac5de72705ee6188764ee69.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e2eb6b40eca75c8ab2ceead6d46ae318.jpg',
          emblemHash: 298334059,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        },
        '2305843009261892960': {
          membershipId: '4611686018428644001',
          membershipType: 2,
          characterId: '2305843009261892960',
          dateLastPlayed: '2020-09-20T03:03:14Z',
          minutesPlayedThisSession: '29',
          minutesPlayedTotal: '14140',
          light: 1059,
          stats: {
            '144602215': 39,
            '392767087': 31,
            '1735777505': 43,
            '1935470627': 1059,
            '1943323491': 52,
            '2996146975': 31,
            '4244567218': 29
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/ecc3e805988dd9947f37c46428e4a12b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2660c7e16c0824a9e2ab167cede1fcab.jpg',
          emblemHash: 1059304051,
          emblemColor: {
            red: 126,
            green: 105,
            blue: 122,
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
        '2305843009270600792': {
          membershipId: '4611686018428644001',
          membershipType: 2,
          characterId: '2305843009270600792',
          dateLastPlayed: '2020-09-15T21:05:08Z',
          minutesPlayedThisSession: '34',
          minutesPlayedTotal: '21497',
          light: 1058,
          stats: {
            '144602215': 25,
            '392767087': 41,
            '1735777505': 28,
            '1935470627': 1058,
            '1943323491': 37,
            '2996146975': 30,
            '4244567218': 57
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/00db53e626ef6fffb370cd54f6e878a8.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/9c05d66b6a2fecdd2efd848f7735fa89.jpg',
          emblemHash: 1320113564,
          emblemColor: {
            red: 8,
            green: 8,
            blue: 8,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009261892959': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 79435,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 160568,
              weeklyProgress: 1169415,
              currentProgress: 1169415,
              level: 11,
              levelCap: -1,
              progressToNextLevel: 69415,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009261892960': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 79435,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 160568,
              weeklyProgress: 1169415,
              currentProgress: 1169415,
              level: 11,
              levelCap: -1,
              progressToNextLevel: 69415,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009270600792': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 79435,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 160568,
              weeklyProgress: 1169415,
              currentProgress: 1169415,
              level: 11,
              levelCap: -1,
              progressToNextLevel: 69415,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467678363',
          displayName: 'hans_khan'
        },
        dateLastPlayed: '2020-09-18T21:06:50Z',
        characterIds: ['2305843009299387479', '2305843009304976833', '2305843009393603918']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 223526,
            dailyLimit: 0,
            weeklyProgress: 1538032,
            weeklyLimit: 0,
            currentProgress: 25732280,
            level: 22,
            levelCap: -1,
            stepIndex: 22,
            progressToNextLevel: 1477279,
            nextLevelAt: 2365000
          },
          powerBonus: 22
        }
      }
    },
    characters: {
      data: {
        '2305843009299387479': {
          membershipId: '4611686018467678363',
          membershipType: 3,
          characterId: '2305843009299387479',
          dateLastPlayed: '2020-09-18T18:12:41Z',
          minutesPlayedThisSession: '46',
          minutesPlayedTotal: '6131',
          light: 1075,
          stats: {
            '144602215': 42,
            '392767087': 59,
            '1735777505': 46,
            '1935470627': 1075,
            '1943323491': 34,
            '2996146975': 39,
            '4244567218': 28
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/7a517633163f7ffa8075562926d83174.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/0f18ea4bfaf4d0b405bc4b62c216f86b.jpg',
          emblemHash: 3899944893,
          emblemColor: {
            red: 8,
            green: 8,
            blue: 8,
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
        '2305843009304976833': {
          membershipId: '4611686018467678363',
          membershipType: 3,
          characterId: '2305843009304976833',
          dateLastPlayed: '2020-09-18T21:06:50Z',
          minutesPlayedThisSession: '25',
          minutesPlayedTotal: '6945',
          light: 1074,
          stats: {
            '144602215': 25,
            '392767087': 50,
            '1735777505': 55,
            '1935470627': 1074,
            '1943323491': 49,
            '2996146975': 27,
            '4244567218': 52
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/755fa89c615c9a15d757b73d15e1b26e.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/283b161c019a1f9a648a897270a1414f.jpg',
          emblemHash: 1138508287,
          emblemColor: {
            red: 2,
            green: 3,
            blue: 8,
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
        '2305843009393603918': {
          membershipId: '4611686018467678363',
          membershipType: 3,
          characterId: '2305843009393603918',
          dateLastPlayed: '2020-09-18T20:41:05Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '50840',
          light: 1078,
          stats: {
            '144602215': 39,
            '392767087': 62,
            '1735777505': 68,
            '1935470627': 1078,
            '1943323491': 38,
            '2996146975': 62,
            '4244567218': 41
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
          percentToNextLevel: 0,
          titleRecordHash: 2460356851
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299387479': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 223524,
              weeklyProgress: 1538015,
              currentProgress: 15840248,
              level: 158,
              levelCap: -1,
              progressToNextLevel: 40248,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009304976833': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 223524,
              weeklyProgress: 1538015,
              currentProgress: 15840248,
              level: 158,
              levelCap: -1,
              progressToNextLevel: 40248,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009393603918': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 223524,
              weeklyProgress: 1538015,
              currentProgress: 15840248,
              level: 158,
              levelCap: -1,
              progressToNextLevel: 40248,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467413547',
          displayName: 'Rusty Na1l'
        },
        dateLastPlayed: '2020-09-20T05:59:04Z',
        characterIds: ['2305843009301355368', '2305843009301529148', '2305843009572867486']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 153053,
            dailyLimit: 0,
            weeklyProgress: 1791569,
            weeklyLimit: 0,
            currentProgress: 42786228,
            level: 28,
            levelCap: -1,
            stepIndex: 28,
            progressToNextLevel: 2691228,
            nextLevelAt: 3025000
          },
          powerBonus: 28
        }
      }
    },
    characters: {
      data: {
        '2305843009301355368': {
          membershipId: '4611686018467413547',
          membershipType: 3,
          characterId: '2305843009301355368',
          dateLastPlayed: '2020-09-19T01:38:05Z',
          minutesPlayedThisSession: '8',
          minutesPlayedTotal: '107344',
          light: 1081,
          stats: {
            '144602215': 42,
            '392767087': 53,
            '1735777505': 53,
            '1935470627': 1081,
            '1943323491': 95,
            '2996146975': 34,
            '4244567218': 47
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/3e141965a40812212bb615398c820584.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ef406bc9c79365a70b52044e31630f98.jpg',
          emblemHash: 2868525739,
          emblemColor: {
            red: 6,
            green: 4,
            blue: 4,
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
          titleRecordHash: 1983630873
        },
        '2305843009301529148': {
          membershipId: '4611686018467413547',
          membershipType: 3,
          characterId: '2305843009301529148',
          dateLastPlayed: '2020-09-20T05:59:04Z',
          minutesPlayedThisSession: '210',
          minutesPlayedTotal: '85270',
          light: 1088,
          stats: {
            '144602215': 68,
            '392767087': 51,
            '1735777505': 47,
            '1935470627': 1088,
            '1943323491': 74,
            '2996146975': 31,
            '4244567218': 34
          },
          raceHash: 898834093,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/80c8671a6da9dd5871b8ba13874bfac5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2fa59face35a7f96436adb775ce531a2.jpg',
          emblemHash: 3605490912,
          emblemColor: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0
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
          titleRecordHash: 4081738395
        },
        '2305843009572867486': {
          membershipId: '4611686018467413547',
          membershipType: 3,
          characterId: '2305843009572867486',
          dateLastPlayed: '2020-09-20T02:28:50Z',
          minutesPlayedThisSession: '2',
          minutesPlayedTotal: '15131',
          light: 1086,
          stats: {
            '144602215': 28,
            '392767087': 41,
            '1735777505': 41,
            '1935470627': 1086,
            '1943323491': 73,
            '2996146975': 27,
            '4244567218': 55
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e7502d7fae0f3957f0f08e2d94483019.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/3b6a76184663741c540298fb719e1dc9.jpg',
          emblemHash: 4011836821,
          emblemColor: {
            red: 60,
            green: 1,
            blue: 1,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009301355368': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 153052,
              weeklyProgress: 1791544,
              currentProgress: 32893620,
              level: 328,
              levelCap: -1,
              progressToNextLevel: 93620,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009301529148': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 153052,
              weeklyProgress: 1791544,
              currentProgress: 32893620,
              level: 328,
              levelCap: -1,
              progressToNextLevel: 93620,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009572867486': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 153052,
              weeklyProgress: 1791544,
              currentProgress: 32893620,
              level: 328,
              levelCap: -1,
              progressToNextLevel: 93620,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467238913',
          displayName: 'WorthyD'
        },
        dateLastPlayed: '2020-09-20T02:56:17Z',
        characterIds: ['2305843009310516628', '2305843009319768855', '2305843009319768858']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 108462,
            dailyLimit: 0,
            weeklyProgress: 816282,
            weeklyLimit: 0,
            currentProgress: 15048045,
            level: 17,
            levelCap: -1,
            stepIndex: 17,
            progressToNextLevel: 968045,
            nextLevelAt: 1815000
          },
          powerBonus: 17
        }
      }
    },
    characters: {
      data: {
        '2305843009310516628': {
          membershipId: '4611686018467238913',
          membershipType: 3,
          characterId: '2305843009310516628',
          dateLastPlayed: '2020-09-19T09:09:04Z',
          minutesPlayedThisSession: '26',
          minutesPlayedTotal: '53742',
          light: 1013,
          stats: {
            '144602215': 48,
            '392767087': 51,
            '1735777505': 45,
            '1935470627': 1013,
            '1943323491': 44,
            '2996146975': 55,
            '4244567218': 55
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1955b4739f75a4b6c9ed0d26bbde11b8.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cca0cacbbc6e77c5ea86c3c5b2ff6e53.jpg',
          emblemHash: 3639046094,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 1754983323
        },
        '2305843009319768855': {
          membershipId: '4611686018467238913',
          membershipType: 3,
          characterId: '2305843009319768855',
          dateLastPlayed: '2020-09-20T02:56:17Z',
          minutesPlayedThisSession: '67',
          minutesPlayedTotal: '10708',
          light: 1020,
          stats: {
            '144602215': 45,
            '392767087': 40,
            '1735777505': 35,
            '1935470627': 1020,
            '1943323491': 36,
            '2996146975': 40,
            '4244567218': 32
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1955b4739f75a4b6c9ed0d26bbde11b8.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cca0cacbbc6e77c5ea86c3c5b2ff6e53.jpg',
          emblemHash: 3639046094,
          emblemColor: {
            red: 0,
            green: 0,
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
        '2305843009319768858': {
          membershipId: '4611686018467238913',
          membershipType: 3,
          characterId: '2305843009319768858',
          dateLastPlayed: '2020-09-13T10:12:38Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '5374',
          light: 1043,
          stats: {
            '144602215': 47,
            '392767087': 28,
            '1735777505': 38,
            '1935470627': 1043,
            '1943323491': 67,
            '2996146975': 29,
            '4244567218': 36
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/1955b4739f75a4b6c9ed0d26bbde11b8.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cca0cacbbc6e77c5ea86c3c5b2ff6e53.jpg',
          emblemHash: 3639046094,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 1693645129
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009310516628': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 108460,
              weeklyProgress: 816268,
              currentProgress: 5159559,
              level: 51,
              levelCap: -1,
              progressToNextLevel: 59559,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009319768855': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 108460,
              weeklyProgress: 816268,
              currentProgress: 5159559,
              level: 51,
              levelCap: -1,
              progressToNextLevel: 59559,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009319768858': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 108460,
              weeklyProgress: 816268,
              currentProgress: 5159559,
              level: 51,
              levelCap: -1,
              progressToNextLevel: 59559,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018504387531',
          displayName: 'zTITANx'
        },
        dateLastPlayed: '2020-09-16T01:13:53Z',
        characterIds: ['2305843009653124146']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 122432,
            weeklyLimit: 0,
            currentProgress: 9299390,
            level: 14,
            levelCap: -1,
            stepIndex: 14,
            progressToNextLevel: 4390,
            nextLevelAt: 1485000
          },
          powerBonus: 14
        }
      }
    },
    characters: {
      data: {
        '2305843009653124146': {
          membershipId: '4611686018504387531',
          membershipType: 3,
          characterId: '2305843009653124146',
          dateLastPlayed: '2020-09-16T01:13:53Z',
          minutesPlayedThisSession: '90',
          minutesPlayedTotal: '7458',
          light: 1065,
          stats: {
            '144602215': 54,
            '392767087': 73,
            '1735777505': 39,
            '1935470627': 1065,
            '1943323491': 52,
            '2996146975': 25,
            '4244567218': 53
          },
          raceHash: 898834093,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/2bdef9e2ec9988dc1ac82933f0398be0.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/c2fe52d050e89c74b24a6aa89748df4d.jpg',
          emblemHash: 3622268499,
          emblemColor: {
            red: 4,
            green: 1,
            blue: 1,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009653124146': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 122434,
              currentProgress: 9699419,
              level: 97,
              levelCap: 100,
              progressToNextLevel: 99419,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018472631881',
          displayName: 'CrayolaKilla'
        },
        dateLastPlayed: '2020-09-14T19:39:08Z',
        characterIds: ['2305843009316974472', '2305843009338065652', '2305843009356644249']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 9946356,
            level: 14,
            levelCap: -1,
            stepIndex: 14,
            progressToNextLevel: 651356,
            nextLevelAt: 1485000
          },
          powerBonus: 14
        }
      }
    },
    characters: {
      data: {
        '2305843009316974472': {
          membershipId: '4611686018472631881',
          membershipType: 3,
          characterId: '2305843009316974472',
          dateLastPlayed: '2020-09-06T20:23:18Z',
          minutesPlayedThisSession: '1',
          minutesPlayedTotal: '62364',
          light: 1067,
          stats: {
            '144602215': 59,
            '392767087': 50,
            '1735777505': 38,
            '1935470627': 1067,
            '1943323491': 77,
            '2996146975': 27,
            '4244567218': 42
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/f20c84dd589f957958553214e01ba279.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/12cf71b209a867fde214aa2c82322d38.jpg',
          emblemHash: 3605490916,
          emblemColor: {
            red: 4,
            green: 4,
            blue: 4,
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
          titleRecordHash: 2757681677
        },
        '2305843009338065652': {
          membershipId: '4611686018472631881',
          membershipType: 3,
          characterId: '2305843009338065652',
          dateLastPlayed: '2020-09-14T19:39:08Z',
          minutesPlayedThisSession: '90',
          minutesPlayedTotal: '49792',
          light: 1060,
          stats: {
            '144602215': 37,
            '392767087': 39,
            '1735777505': 39,
            '1935470627': 1060,
            '1943323491': 81,
            '2996146975': 52,
            '4244567218': 46
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8cd39d79c07cb7f7816daf297c090690.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/041f8e2f986949994b7ca8f008b75ff4.jpg',
          emblemHash: 2071635915,
          emblemColor: {
            red: 92,
            green: 59,
            blue: 20,
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
          titleRecordHash: 2254764897
        },
        '2305843009356644249': {
          membershipId: '4611686018472631881',
          membershipType: 3,
          characterId: '2305843009356644249',
          dateLastPlayed: '2020-08-06T02:23:56Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '49409',
          light: 1063,
          stats: {
            '144602215': 74,
            '392767087': 37,
            '1735777505': 38,
            '1935470627': 1063,
            '1943323491': 28,
            '2996146975': 68,
            '4244567218': 38
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8cd39d79c07cb7f7816daf297c090690.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/041f8e2f986949994b7ca8f008b75ff4.jpg',
          emblemHash: 2071635915,
          emblemColor: {
            red: 92,
            green: 59,
            blue: 20,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009316974472': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 62648,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 62648,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009338065652': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 62648,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 62648,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009356644249': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 62648,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 62648,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018477048416',
          displayName: 'bud4189'
        },
        dateLastPlayed: '2020-09-20T12:42:25Z',
        characterIds: ['2305843009363585591', '2305843009401435465', '2305843009675854511']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 240815,
            dailyLimit: 0,
            weeklyProgress: 822184,
            weeklyLimit: 0,
            currentProgress: 23975148,
            level: 21,
            levelCap: -1,
            stepIndex: 21,
            progressToNextLevel: 1975149,
            nextLevelAt: 2255000
          },
          powerBonus: 21
        }
      }
    },
    characters: {
      data: {
        '2305843009363585591': {
          membershipId: '4611686018477048416',
          membershipType: 3,
          characterId: '2305843009363585591',
          dateLastPlayed: '2020-09-20T12:42:25Z',
          minutesPlayedThisSession: '39',
          minutesPlayedTotal: '35420',
          light: 1080,
          stats: {
            '144602215': 43,
            '392767087': 38,
            '1735777505': 52,
            '1935470627': 1080,
            '1943323491': 47,
            '2996146975': 51,
            '4244567218': 43
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cfa357e9ce46d88a852ea7d7b50862bf.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/97cca992fa151efb4e15ea2f671f9a87.jpg',
          emblemHash: 3605490918,
          emblemColor: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0
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
          titleRecordHash: 3798931976
        },
        '2305843009401435465': {
          membershipId: '4611686018477048416',
          membershipType: 3,
          characterId: '2305843009401435465',
          dateLastPlayed: '2020-09-14T02:15:20Z',
          minutesPlayedThisSession: '118',
          minutesPlayedTotal: '6290',
          light: 1078,
          stats: {
            '144602215': 52,
            '392767087': 42,
            '1735777505': 42,
            '1935470627': 1078,
            '1943323491': 36,
            '2996146975': 44,
            '4244567218': 31
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cfa357e9ce46d88a852ea7d7b50862bf.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/97cca992fa151efb4e15ea2f671f9a87.jpg',
          emblemHash: 3605490918,
          emblemColor: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0
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
        '2305843009675854511': {
          membershipId: '4611686018477048416',
          membershipType: 3,
          characterId: '2305843009675854511',
          dateLastPlayed: '2020-09-20T03:11:15Z',
          minutesPlayedThisSession: '190',
          minutesPlayedTotal: '2784',
          light: 1079,
          stats: {
            '144602215': 56,
            '392767087': 52,
            '1735777505': 45,
            '1935470627': 1079,
            '1943323491': 34,
            '2996146975': 58,
            '4244567218': 38
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/a276e924660e27b11d224388b6924db6.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/8ea5bcbd9ffdada75367df86038535d6.jpg',
          emblemHash: 3961503949,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009363585591': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 240812,
              weeklyProgress: 822173,
              currentProgress: 14108145,
              level: 141,
              levelCap: -1,
              progressToNextLevel: 8145,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009401435465': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 240812,
              weeklyProgress: 822173,
              currentProgress: 14108145,
              level: 141,
              levelCap: -1,
              progressToNextLevel: 8145,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009675854511': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 240812,
              weeklyProgress: 822173,
              currentProgress: 14108145,
              level: 141,
              levelCap: -1,
              progressToNextLevel: 8145,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018487563292',
          displayName: '2ToneSig'
        },
        dateLastPlayed: '2020-09-15T07:59:29Z',
        characterIds: ['2305843009444174332', '2305843009445954656', '2305843009445954673']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 17870972,
            level: 19,
            levelCap: -1,
            stepIndex: 19,
            progressToNextLevel: 50973,
            nextLevelAt: 2035000
          },
          powerBonus: 19
        }
      }
    },
    characters: {
      data: {
        '2305843009444174332': {
          membershipId: '4611686018487563292',
          membershipType: 3,
          characterId: '2305843009444174332',
          dateLastPlayed: '2020-09-10T22:46:55Z',
          minutesPlayedThisSession: '98',
          minutesPlayedTotal: '57257',
          light: 1075,
          stats: {
            '144602215': 65,
            '392767087': 37,
            '1735777505': 27,
            '1935470627': 1075,
            '1943323491': 40,
            '2996146975': 46,
            '4244567218': 42
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
          percentToNextLevel: 0,
          titleRecordHash: 3798931976
        },
        '2305843009445954656': {
          membershipId: '4611686018487563292',
          membershipType: 3,
          characterId: '2305843009445954656',
          dateLastPlayed: '2020-09-15T05:27:44Z',
          minutesPlayedThisSession: '78',
          minutesPlayedTotal: '4653',
          light: 1073,
          stats: {
            '144602215': 56,
            '392767087': 34,
            '1735777505': 34,
            '1935470627': 1073,
            '1943323491': 23,
            '2996146975': 58,
            '4244567218': 21
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/e93effcd71c189edc5baa5c0b10c752c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/a85db50469017eb59532c0d6336f6cb9.jpg',
          emblemHash: 1138508273,
          emblemColor: {
            red: 4,
            green: 4,
            blue: 4,
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
        '2305843009445954673': {
          membershipId: '4611686018487563292',
          membershipType: 3,
          characterId: '2305843009445954673',
          dateLastPlayed: '2020-09-15T07:59:29Z',
          minutesPlayedThisSession: '143',
          minutesPlayedTotal: '3995',
          light: 1063,
          stats: {
            '144602215': 51,
            '392767087': 37,
            '1735777505': 33,
            '1935470627': 1063,
            '1943323491': 34,
            '2996146975': 42,
            '4244567218': 47
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009444174332': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7978937,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 78937,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009445954656': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7978937,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 78937,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009445954673': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7978937,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 78937,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018468631746',
          displayName: 'NebulousNate'
        },
        dateLastPlayed: '2020-08-21T03:36:58Z',
        characterIds: ['2305843009618904769', '2305843009637924895', '2305843009637924897']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 1128421,
            weeklyLimit: 0,
            currentProgress: 25555440,
            level: 22,
            levelCap: -1,
            stepIndex: 22,
            progressToNextLevel: 1300440,
            nextLevelAt: 2365000
          },
          powerBonus: 22
        }
      }
    },
    characters: {
      data: {
        '2305843009618904769': {
          membershipId: '4611686018468631746',
          membershipType: 3,
          characterId: '2305843009618904769',
          dateLastPlayed: '2020-08-21T03:36:58Z',
          minutesPlayedThisSession: '43',
          minutesPlayedTotal: '32255',
          light: 1074,
          stats: {
            '144602215': 45,
            '392767087': 54,
            '1735777505': 38,
            '1935470627': 1074,
            '1943323491': 56,
            '2996146975': 58,
            '4244567218': 54
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e1873a599da1e513e655288c49083024.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/93fb4dc92cd3cd0489bb9566a5c74448.jpg',
          emblemHash: 1409726988,
          emblemColor: {
            red: 5,
            green: 5,
            blue: 4,
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
        '2305843009637924895': {
          membershipId: '4611686018468631746',
          membershipType: 3,
          characterId: '2305843009637924895',
          dateLastPlayed: '2020-07-25T17:21:27Z',
          minutesPlayedThisSession: '94',
          minutesPlayedTotal: '3860',
          light: 1072,
          stats: {
            '144602215': 51,
            '392767087': 77,
            '1735777505': 39,
            '1935470627': 1072,
            '1943323491': 38,
            '2996146975': 39,
            '4244567218': 52
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e93effcd71c189edc5baa5c0b10c752c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/a85db50469017eb59532c0d6336f6cb9.jpg',
          emblemHash: 1138508273,
          emblemColor: {
            red: 4,
            green: 4,
            blue: 4,
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
        '2305843009637924897': {
          membershipId: '4611686018468631746',
          membershipType: 3,
          characterId: '2305843009637924897',
          dateLastPlayed: '2020-07-26T07:05:22Z',
          minutesPlayedThisSession: '80',
          minutesPlayedTotal: '2047',
          light: 1068,
          stats: {
            '144602215': 65,
            '392767087': 50,
            '1735777505': 42,
            '1935470627': 1068,
            '1943323491': 62,
            '2996146975': 33,
            '4244567218': 32
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/e93effcd71c189edc5baa5c0b10c752c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/a85db50469017eb59532c0d6336f6cb9.jpg',
          emblemHash: 1138508273,
          emblemColor: {
            red: 4,
            green: 4,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009618904769': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 1128406,
              currentProgress: 15663744,
              level: 156,
              levelCap: -1,
              progressToNextLevel: 63744,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009637924895': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 1128406,
              currentProgress: 15663744,
              level: 156,
              levelCap: -1,
              progressToNextLevel: 63744,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009637924897': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 1128406,
              currentProgress: 15663744,
              level: 156,
              levelCap: -1,
              progressToNextLevel: 63744,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467932013',
          displayName: 'Kleebodious'
        },
        dateLastPlayed: '2020-09-20T03:32:37Z',
        characterIds: ['2305843009335624411', '2305843009394980830', '2305843009409248681']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 244047,
            dailyLimit: 0,
            weeklyProgress: 519353,
            weeklyLimit: 0,
            currentProgress: 11590162,
            level: 15,
            levelCap: -1,
            stepIndex: 15,
            progressToNextLevel: 810162,
            nextLevelAt: 1595000
          },
          powerBonus: 15
        }
      }
    },
    characters: {
      data: {
        '2305843009335624411': {
          membershipId: '4611686018467932013',
          membershipType: 3,
          characterId: '2305843009335624411',
          dateLastPlayed: '2020-09-13T03:25:40Z',
          minutesPlayedThisSession: '28',
          minutesPlayedTotal: '23507',
          light: 1064,
          stats: {
            '144602215': 55,
            '392767087': 79,
            '1735777505': 32,
            '1935470627': 1064,
            '1943323491': 53,
            '2996146975': 17,
            '4244567218': 42
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/e74ff8631f78a8f9c4c98cb270172702.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/21ece12fcc50be9e51599416e964155d.jpg',
          emblemHash: 4162792207,
          emblemColor: {
            red: 3,
            green: 3,
            blue: 10,
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
          titleRecordHash: 2757681677
        },
        '2305843009394980830': {
          membershipId: '4611686018467932013',
          membershipType: 3,
          characterId: '2305843009394980830',
          dateLastPlayed: '2020-09-13T02:56:08Z',
          minutesPlayedThisSession: '10',
          minutesPlayedTotal: '15222',
          light: 1065,
          stats: {
            '144602215': 44,
            '392767087': 35,
            '1735777505': 45,
            '1935470627': 1065,
            '1943323491': 65,
            '2996146975': 66,
            '4244567218': 44
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          titleRecordHash: 2757681677
        },
        '2305843009409248681': {
          membershipId: '4611686018467932013',
          membershipType: 3,
          characterId: '2305843009409248681',
          dateLastPlayed: '2020-09-20T03:32:37Z',
          minutesPlayedThisSession: '204',
          minutesPlayedTotal: '16080',
          light: 1066,
          stats: {
            '144602215': 48,
            '392767087': 60,
            '1735777505': 27,
            '1935470627': 1066,
            '1943323491': 65,
            '2996146975': 26,
            '4244567218': 58
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/51e507d6028b02a61771e1171de16cf5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/84319d03705c5b31900202ce71e0eb81.jpg',
          emblemHash: 842157719,
          emblemColor: {
            red: 1,
            green: 1,
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
          titleRecordHash: 2757681677
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009335624411': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 244046,
              weeklyProgress: 519347,
              currentProgress: 1711206,
              level: 17,
              levelCap: -1,
              progressToNextLevel: 11206,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009394980830': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 244046,
              weeklyProgress: 519347,
              currentProgress: 1711206,
              level: 17,
              levelCap: -1,
              progressToNextLevel: 11206,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009409248681': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 244046,
              weeklyProgress: 519347,
              currentProgress: 1711206,
              level: 17,
              levelCap: -1,
              progressToNextLevel: 11206,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018483787303',
          displayName: 'Grilln_daddy'
        },
        dateLastPlayed: '2020-09-20T06:08:48Z',
        characterIds: ['2305843009404399012', '2305843009410227122', '2305843009423949185']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 41339,
            dailyLimit: 0,
            weeklyProgress: 1187727,
            weeklyLimit: 0,
            currentProgress: 27083176,
            level: 23,
            levelCap: -1,
            stepIndex: 23,
            progressToNextLevel: 463176,
            nextLevelAt: 2475000
          },
          powerBonus: 23
        }
      }
    },
    characters: {
      data: {
        '2305843009404399012': {
          membershipId: '4611686018483787303',
          membershipType: 3,
          characterId: '2305843009404399012',
          dateLastPlayed: '2020-09-20T06:08:48Z',
          minutesPlayedThisSession: '68',
          minutesPlayedTotal: '126867',
          light: 1082,
          stats: {
            '144602215': 72,
            '392767087': 66,
            '1735777505': 44,
            '1935470627': 1082,
            '1943323491': 101,
            '2996146975': 28,
            '4244567218': 36
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/8cd39d79c07cb7f7816daf297c090690.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/041f8e2f986949994b7ca8f008b75ff4.jpg',
          emblemHash: 2071635915,
          emblemColor: {
            red: 92,
            green: 59,
            blue: 20,
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
          titleRecordHash: 2757681677
        },
        '2305843009410227122': {
          membershipId: '4611686018483787303',
          membershipType: 3,
          characterId: '2305843009410227122',
          dateLastPlayed: '2020-09-17T22:11:07Z',
          minutesPlayedThisSession: '253',
          minutesPlayedTotal: '32691',
          light: 1072,
          stats: {
            '144602215': 96,
            '392767087': 25,
            '1735777505': 41,
            '1935470627': 1072,
            '1943323491': 82,
            '2996146975': 70,
            '4244567218': 11
          },
          raceHash: 898834093,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/1d370c910ddd5762ffb10f5021d83026.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/71b80e345b093d1257a980b1c788c6b5.jpg',
          emblemHash: 2182330181,
          emblemColor: {
            red: 2,
            green: 2,
            blue: 3,
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
        },
        '2305843009423949185': {
          membershipId: '4611686018483787303',
          membershipType: 3,
          characterId: '2305843009423949185',
          dateLastPlayed: '2020-09-20T04:56:34Z',
          minutesPlayedThisSession: '45',
          minutesPlayedTotal: '9103',
          light: 1077,
          stats: {
            '144602215': 45,
            '392767087': 37,
            '1735777505': 31,
            '1935470627': 1077,
            '1943323491': 35,
            '2996146975': 110,
            '4244567218': 50
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/a551817345a91a28c10239d1700293db.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e8a9a56736ef0869c76c2fe51dd4d5d1.jpg',
          emblemHash: 3597022727,
          emblemColor: {
            red: 20,
            green: 0,
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
          titleRecordHash: 2860165064
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009404399012': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 41338,
              weeklyProgress: 1187711,
              currentProgress: 17219620,
              level: 172,
              levelCap: -1,
              progressToNextLevel: 19620,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009410227122': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 41338,
              weeklyProgress: 1187711,
              currentProgress: 17219620,
              level: 172,
              levelCap: -1,
              progressToNextLevel: 19620,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009423949185': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 41338,
              weeklyProgress: 1187711,
              currentProgress: 17219620,
              level: 172,
              levelCap: -1,
              progressToNextLevel: 19620,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018437076273',
          displayName: 'TheCorrptedOne'
        },
        dateLastPlayed: '2020-09-08T06:47:24Z',
        characterIds: ['2305843009261342338', '2305843009261342340', '2305843009261342342']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 6712246,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 57246,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009261342338': {
          membershipId: '4611686018437076273',
          membershipType: 2,
          characterId: '2305843009261342338',
          dateLastPlayed: '2020-07-23T21:34:00Z',
          minutesPlayedThisSession: '45',
          minutesPlayedTotal: '1931',
          light: 989,
          stats: {
            '144602215': 47,
            '392767087': 28,
            '1735777505': 49,
            '1935470627': 989,
            '1943323491': 33,
            '2996146975': 48,
            '4244567218': 17
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ebca4d1e4a8c5c22897e5e07794278a9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/caed66337af9088f329aec861a16bb76.jpg',
          emblemHash: 1736897072,
          emblemColor: {
            red: 0,
            green: 2,
            blue: 5,
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
        '2305843009261342340': {
          membershipId: '4611686018437076273',
          membershipType: 2,
          characterId: '2305843009261342340',
          dateLastPlayed: '2020-09-08T06:47:24Z',
          minutesPlayedThisSession: '77',
          minutesPlayedTotal: '53209',
          light: 1061,
          stats: {
            '144602215': 20,
            '392767087': 64,
            '1735777505': 94,
            '1935470627': 1061,
            '1943323491': 44,
            '2996146975': 46,
            '4244567218': 44
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          percentToNextLevel: 0
        },
        '2305843009261342342': {
          membershipId: '4611686018437076273',
          membershipType: 2,
          characterId: '2305843009261342342',
          dateLastPlayed: '2020-07-16T22:51:47Z',
          minutesPlayedThisSession: '157',
          minutesPlayedTotal: '792',
          light: 1025,
          stats: {
            '144602215': 24,
            '392767087': 35,
            '1735777505': 25,
            '1935470627': 1025,
            '1943323491': 24,
            '2996146975': 55,
            '4244567218': 43
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8515b933e6c1e799ed9104c2b04212ee.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/00836c62f46b3fff6bae07fbf39dd2b2.jpg',
          emblemHash: 844563491,
          emblemColor: {
            red: 224,
            green: 40,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009261342338': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7820287,
              level: 79,
              levelCap: 100,
              progressToNextLevel: 20287,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009261342340': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7820287,
              level: 79,
              levelCap: 100,
              progressToNextLevel: 20287,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009261342342': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 7820287,
              level: 79,
              levelCap: 100,
              progressToNextLevel: 20287,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018503133836',
          displayName: 'Downhill Guru'
        },
        dateLastPlayed: '2020-09-20T05:54:33Z',
        characterIds: ['2305843009639734969', '2305843009675485635', '2305843009675485636']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 242243,
            dailyLimit: 0,
            weeklyProgress: 502931,
            weeklyLimit: 0,
            currentProgress: 14551503,
            level: 17,
            levelCap: -1,
            stepIndex: 17,
            progressToNextLevel: 471503,
            nextLevelAt: 1815000
          },
          powerBonus: 17
        }
      }
    },
    characters: {
      data: {
        '2305843009639734969': {
          membershipId: '4611686018503133836',
          membershipType: 3,
          characterId: '2305843009639734969',
          dateLastPlayed: '2020-09-20T05:54:33Z',
          minutesPlayedThisSession: '55',
          minutesPlayedTotal: '14911',
          light: 1068,
          stats: {
            '144602215': 72,
            '392767087': 72,
            '1735777505': 24,
            '1935470627': 1068,
            '1943323491': 40,
            '2996146975': 78,
            '4244567218': 46
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/618c16e0d3e55ed292d59c9dd15a58fe.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/a043a36750a4c5ac3ae128778e304cb1.jpg',
          emblemHash: 2939572588,
          emblemColor: {
            red: 5,
            green: 9,
            blue: 10,
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
        '2305843009675485635': {
          membershipId: '4611686018503133836',
          membershipType: 3,
          characterId: '2305843009675485635',
          dateLastPlayed: '2020-08-01T20:35:52Z',
          minutesPlayedThisSession: '19',
          minutesPlayedTotal: '19',
          light: 767,
          stats: {
            '144602215': 29,
            '392767087': 36,
            '1735777505': 44,
            '1935470627': 767,
            '1943323491': 40,
            '2996146975': 34,
            '4244567218': 21
          },
          raceHash: 898834093,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        '2305843009675485636': {
          membershipId: '4611686018503133836',
          membershipType: 3,
          characterId: '2305843009675485636',
          dateLastPlayed: '2020-08-01T21:01:42Z',
          minutesPlayedThisSession: '24',
          minutesPlayedTotal: '24',
          light: 875,
          stats: {
            '144602215': 16,
            '392767087': 47,
            '1735777505': 47,
            '1935470627': 875,
            '1943323491': 32,
            '2996146975': 27,
            '4244567218': 36
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009639734969': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 242239,
              weeklyProgress: 502923,
              currentProgress: 4670355,
              level: 46,
              levelCap: -1,
              progressToNextLevel: 70355,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009675485635': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 242239,
              weeklyProgress: 502923,
              currentProgress: 4670355,
              level: 46,
              levelCap: -1,
              progressToNextLevel: 70355,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009675485636': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 242239,
              weeklyProgress: 502923,
              currentProgress: 4670355,
              level: 46,
              levelCap: -1,
              progressToNextLevel: 70355,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018477017012',
          displayName: 'TheBluMoose'
        },
        dateLastPlayed: '2020-09-20T12:34:50Z',
        characterIds: ['2305843009365554465', '2305843009377320210', '2305843009410142741']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 371939,
            dailyLimit: 0,
            weeklyProgress: 371939,
            weeklyLimit: 0,
            currentProgress: 15693811,
            level: 17,
            levelCap: -1,
            stepIndex: 17,
            progressToNextLevel: 1613811,
            nextLevelAt: 1815000
          },
          powerBonus: 17
        }
      }
    },
    characters: {
      data: {
        '2305843009365554465': {
          membershipId: '4611686018477017012',
          membershipType: 3,
          characterId: '2305843009365554465',
          dateLastPlayed: '2020-09-20T12:34:50Z',
          minutesPlayedThisSession: '7',
          minutesPlayedTotal: '42652',
          light: 1076,
          stats: {
            '144602215': 83,
            '392767087': 60,
            '1735777505': 43,
            '1935470627': 1076,
            '1943323491': 67,
            '2996146975': 27,
            '4244567218': 33
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ef696558825f40dc18234fd0851e9ae9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73835952fbfdb9315de347b5abc2d087.jpg',
          emblemHash: 1138508276,
          emblemColor: {
            red: 1,
            green: 2,
            blue: 5,
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
          titleRecordHash: 4081738395
        },
        '2305843009377320210': {
          membershipId: '4611686018477017012',
          membershipType: 3,
          characterId: '2305843009377320210',
          dateLastPlayed: '2020-09-20T05:15:26Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '4325',
          light: 1043,
          stats: {
            '144602215': 49,
            '392767087': 41,
            '1735777505': 53,
            '1935470627': 1043,
            '1943323491': 25,
            '2996146975': 70,
            '4244567218': 30
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4d23f2cbdf46c477b9792050a3bf3cf5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/4549eb41ca4bbbe8fa475b53e91c2c0a.jpg',
          emblemHash: 2419113768,
          emblemColor: {
            red: 95,
            green: 92,
            blue: 107,
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
          titleRecordHash: 2182090828
        },
        '2305843009410142741': {
          membershipId: '4611686018477017012',
          membershipType: 3,
          characterId: '2305843009410142741',
          dateLastPlayed: '2020-09-07T21:01:09Z',
          minutesPlayedThisSession: '30',
          minutesPlayedTotal: '13294',
          light: 1062,
          stats: {
            '144602215': 52,
            '392767087': 58,
            '1735777505': 47,
            '1935470627': 1062,
            '1943323491': 29,
            '2996146975': 35,
            '4244567218': 29
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ef696558825f40dc18234fd0851e9ae9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73835952fbfdb9315de347b5abc2d087.jpg',
          emblemHash: 1138508276,
          emblemColor: {
            red: 1,
            green: 2,
            blue: 5,
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
          titleRecordHash: 2182090828
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009365554465': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 371935,
              weeklyProgress: 371935,
              currentProgress: 6203450,
              level: 62,
              levelCap: -1,
              progressToNextLevel: 3450,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009377320210': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 371935,
              weeklyProgress: 371935,
              currentProgress: 6203450,
              level: 62,
              levelCap: -1,
              progressToNextLevel: 3450,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009410142741': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 371935,
              weeklyProgress: 371935,
              currentProgress: 6203450,
              level: 62,
              levelCap: -1,
              progressToNextLevel: 3450,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018487386672',
          displayName: 'armytrixter'
        },
        dateLastPlayed: '2020-09-19T04:53:00Z',
        characterIds: ['2305843009432145888', '2305843009439134155', '2305843009483394872']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 400517,
            weeklyLimit: 0,
            currentProgress: 15950958,
            level: 18,
            levelCap: -1,
            stepIndex: 18,
            progressToNextLevel: 55958,
            nextLevelAt: 1925000
          },
          powerBonus: 18
        }
      }
    },
    characters: {
      data: {
        '2305843009432145888': {
          membershipId: '4611686018487386672',
          membershipType: 3,
          characterId: '2305843009432145888',
          dateLastPlayed: '2020-09-19T04:53:00Z',
          minutesPlayedThisSession: '222',
          minutesPlayedTotal: '60607',
          light: 1072,
          stats: {
            '144602215': 56,
            '392767087': 37,
            '1735777505': 29,
            '1935470627': 1072,
            '1943323491': 75,
            '2996146975': 31,
            '4244567218': 46
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ba127a92c13cef64c11b803efeefef23.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/7398688358ef4348a944d316d958228f.jpg',
          emblemHash: 4182480233,
          emblemColor: {
            red: 0,
            green: 107,
            blue: 255,
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
          titleRecordHash: 1693645129
        },
        '2305843009439134155': {
          membershipId: '4611686018487386672',
          membershipType: 3,
          characterId: '2305843009439134155',
          dateLastPlayed: '2020-08-09T05:25:17Z',
          minutesPlayedThisSession: '235',
          minutesPlayedTotal: '4393',
          light: 1059,
          stats: {
            '144602215': 64,
            '392767087': 50,
            '1735777505': 28,
            '1935470627': 1059,
            '1943323491': 66,
            '2996146975': 39,
            '4244567218': 32
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ba127a92c13cef64c11b803efeefef23.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/7398688358ef4348a944d316d958228f.jpg',
          emblemHash: 4182480233,
          emblemColor: {
            red: 0,
            green: 107,
            blue: 255,
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
          titleRecordHash: 1693645129
        },
        '2305843009483394872': {
          membershipId: '4611686018487386672',
          membershipType: 3,
          characterId: '2305843009483394872',
          dateLastPlayed: '2020-09-05T06:11:15Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '10077',
          light: 1072,
          stats: {
            '144602215': 83,
            '392767087': 33,
            '1735777505': 40,
            '1935470627': 1072,
            '1943323491': 99,
            '2996146975': 46,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/486c1483be15aabd1ef7adb7a87c7a72.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/3d0142ffcf985e9fab3d3e7d89ec192c.jpg',
          emblemHash: 3961503936,
          emblemColor: {
            red: 7,
            green: 5,
            blue: 43,
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
          titleRecordHash: 1693645129
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009432145888': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 400512,
              currentProgress: 6087197,
              level: 60,
              levelCap: -1,
              progressToNextLevel: 87197,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009439134155': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 400512,
              currentProgress: 6087197,
              level: 60,
              levelCap: -1,
              progressToNextLevel: 87197,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009483394872': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 400512,
              currentProgress: 6087197,
              level: 60,
              levelCap: -1,
              progressToNextLevel: 87197,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018483251114',
          displayName: 'neverender158'
        },
        dateLastPlayed: '2020-09-20T04:26:36Z',
        characterIds: ['2305843009402916300', '2305843009436674294', '2305843009459384776']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 57072,
            dailyLimit: 0,
            weeklyProgress: 611464,
            weeklyLimit: 0,
            currentProgress: 23375672,
            level: 21,
            levelCap: -1,
            stepIndex: 21,
            progressToNextLevel: 1375673,
            nextLevelAt: 2255000
          },
          powerBonus: 21
        }
      }
    },
    characters: {
      data: {
        '2305843009402916300': {
          membershipId: '4611686018483251114',
          membershipType: 3,
          characterId: '2305843009402916300',
          dateLastPlayed: '2020-09-20T04:26:36Z',
          minutesPlayedThisSession: '136',
          minutesPlayedTotal: '71219',
          light: 1077,
          stats: {
            '144602215': 52,
            '392767087': 42,
            '1735777505': 39,
            '1935470627': 1077,
            '1943323491': 62,
            '2996146975': 38,
            '4244567218': 34
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/36392232c203c778fdf0998970aadf18.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecb3f3870f18847b588b149cb4f2c66c.jpg',
          emblemHash: 3118323621,
          emblemColor: {
            red: 10,
            green: 12,
            blue: 20,
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
          titleRecordHash: 1693645129
        },
        '2305843009436674294': {
          membershipId: '4611686018483251114',
          membershipType: 3,
          characterId: '2305843009436674294',
          dateLastPlayed: '2020-09-12T20:23:59Z',
          minutesPlayedThisSession: '15',
          minutesPlayedTotal: '23372',
          light: 1075,
          stats: {
            '144602215': 30,
            '392767087': 50,
            '1735777505': 21,
            '1935470627': 1075,
            '1943323491': 12,
            '2996146975': 61,
            '4244567218': 54
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          titleRecordHash: 2460356851
        },
        '2305843009459384776': {
          membershipId: '4611686018483251114',
          membershipType: 3,
          characterId: '2305843009459384776',
          dateLastPlayed: '2020-09-12T20:08:18Z',
          minutesPlayedThisSession: '5',
          minutesPlayedTotal: '8379',
          light: 1075,
          stats: {
            '144602215': 44,
            '392767087': 67,
            '1735777505': 39,
            '1935470627': 1075,
            '1943323491': 31,
            '2996146975': 43,
            '4244567218': 34
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4a96b06fd86e8a089bdd7f1a450c1f47.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ec4f276eefd5ec24ad6e6f303a5dc9ad.jpg',
          emblemHash: 2967682030,
          emblemColor: {
            red: 58,
            green: 139,
            blue: 211,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009402916300': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 57072,
              weeklyProgress: 611453,
              currentProgress: 13486635,
              level: 134,
              levelCap: -1,
              progressToNextLevel: 86635,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009436674294': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 57072,
              weeklyProgress: 611453,
              currentProgress: 13486635,
              level: 134,
              levelCap: -1,
              progressToNextLevel: 86635,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009459384776': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 57072,
              weeklyProgress: 611453,
              currentProgress: 13486635,
              level: 134,
              levelCap: -1,
              progressToNextLevel: 86635,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018488093201',
          displayName: 'GoWester'
        },
        dateLastPlayed: '2020-09-20T12:51:28Z',
        characterIds: ['2305843009464964740', '2305843009634044827', '2305843009678995341']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 331126,
            dailyLimit: 0,
            weeklyProgress: 662471,
            weeklyLimit: 0,
            currentProgress: 11124168,
            level: 15,
            levelCap: -1,
            stepIndex: 15,
            progressToNextLevel: 344168,
            nextLevelAt: 1595000
          },
          powerBonus: 15
        }
      }
    },
    characters: {
      data: {
        '2305843009464964740': {
          membershipId: '4611686018488093201',
          membershipType: 3,
          characterId: '2305843009464964740',
          dateLastPlayed: '2020-09-20T12:51:28Z',
          minutesPlayedThisSession: '134',
          minutesPlayedTotal: '21889',
          light: 1069,
          stats: {
            '144602215': 46,
            '392767087': 53,
            '1735777505': 37,
            '1935470627': 1069,
            '1943323491': 42,
            '2996146975': 24,
            '4244567218': 50
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/4e3c94ae52a17ed521202632c5509d42.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cd8a270e6507f8656554d70bfe5ff3e4.jpg',
          emblemHash: 1138508278,
          emblemColor: {
            red: 2,
            green: 2,
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
          percentToNextLevel: 0
        },
        '2305843009634044827': {
          membershipId: '4611686018488093201',
          membershipType: 3,
          characterId: '2305843009634044827',
          dateLastPlayed: '2020-07-30T18:03:46Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '924',
          light: 1045,
          stats: {
            '144602215': 57,
            '392767087': 61,
            '1735777505': 27,
            '1935470627': 1045,
            '1943323491': 49,
            '2996146975': 34,
            '4244567218': 36
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/a833430eee56759a86a3edfc14cda177.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/854fbc1d49d3924939b1f2969bd32aef.jpg',
          emblemHash: 1983519837,
          emblemColor: {
            red: 2,
            green: 3,
            blue: 1,
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
        '2305843009678995341': {
          membershipId: '4611686018488093201',
          membershipType: 3,
          characterId: '2305843009678995341',
          dateLastPlayed: '2020-07-29T14:50:57Z',
          minutesPlayedThisSession: '146',
          minutesPlayedTotal: '146',
          light: 1028,
          stats: {
            '144602215': 34,
            '392767087': 29,
            '1735777505': 37,
            '1935470627': 1028,
            '1943323491': 43,
            '2996146975': 32,
            '4244567218': 36
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009464964740': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 331120,
              weeklyProgress: 662459,
              currentProgress: 1253184,
              level: 12,
              levelCap: -1,
              progressToNextLevel: 53184,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009634044827': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 331120,
              weeklyProgress: 662459,
              currentProgress: 1253184,
              level: 12,
              levelCap: -1,
              progressToNextLevel: 53184,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009678995341': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 331120,
              weeklyProgress: 662459,
              currentProgress: 1253184,
              level: 12,
              levelCap: -1,
              progressToNextLevel: 53184,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467356916',
          displayName: 'Jiggernought'
        },
        dateLastPlayed: '2020-09-16T17:03:17Z',
        characterIds: ['2305843009299627555', '2305843009305264453', '2305843009314375371']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 254360,
            weeklyLimit: 0,
            currentProgress: 6901467,
            level: 12,
            levelCap: -1,
            stepIndex: 12,
            progressToNextLevel: 246467,
            nextLevelAt: 1265000
          },
          powerBonus: 12
        }
      }
    },
    characters: {
      data: {
        '2305843009299627555': {
          membershipId: '4611686018467356916',
          membershipType: 3,
          characterId: '2305843009299627555',
          dateLastPlayed: '2020-09-16T16:57:33Z',
          minutesPlayedThisSession: '1',
          minutesPlayedTotal: '36037',
          light: 1063,
          stats: {
            '144602215': 23,
            '392767087': 47,
            '1735777505': 55,
            '1935470627': 1063,
            '1943323491': 33,
            '2996146975': 34,
            '4244567218': 31
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/216e600569a45013e1cf3bd90b220b45.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e1c407e098c9493ae8e0e9e7b215fa09.jpg',
          emblemHash: 1983519830,
          emblemColor: {
            red: 2,
            green: 2,
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
          titleRecordHash: 2460356851
        },
        '2305843009305264453': {
          membershipId: '4611686018467356916',
          membershipType: 3,
          characterId: '2305843009305264453',
          dateLastPlayed: '2020-09-16T17:03:17Z',
          minutesPlayedThisSession: '4',
          minutesPlayedTotal: '9492',
          light: 1060,
          stats: {
            '144602215': 34,
            '392767087': 26,
            '1735777505': 30,
            '1935470627': 1060,
            '1943323491': 36,
            '2996146975': 34,
            '4244567218': 28
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 0,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/ecc3e805988dd9947f37c46428e4a12b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2660c7e16c0824a9e2ab167cede1fcab.jpg',
          emblemHash: 1059304051,
          emblemColor: {
            red: 126,
            green: 105,
            blue: 122,
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
        '2305843009314375371': {
          membershipId: '4611686018467356916',
          membershipType: 3,
          characterId: '2305843009314375371',
          dateLastPlayed: '2020-09-16T16:54:19Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '10764',
          light: 1061,
          stats: {
            '144602215': 52,
            '392767087': 38,
            '1735777505': 16,
            '1935470627': 1061,
            '1943323491': 44,
            '2996146975': 25,
            '4244567218': 38
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/9d59645b596c0adf3e164c90a41c4702.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/fc8a4349dc04777c474ec140c7b66d9e.jpg',
          emblemHash: 4085986809,
          emblemColor: {
            red: 5,
            green: 4,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299627555': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 254358,
              currentProgress: 6909457,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 9457,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009305264453': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 254358,
              currentProgress: 6909457,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 9457,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009314375371': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 254358,
              currentProgress: 6909457,
              level: 70,
              levelCap: 100,
              progressToNextLevel: 9457,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018503131108',
          displayName: 'master.christ'
        },
        dateLastPlayed: '2020-08-31T00:08:53Z',
        characterIds: ['2305843009634895201', '2305843009635424917', '2305843009685314173']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 5089170,
            level: 10,
            levelCap: -1,
            stepIndex: 10,
            progressToNextLevel: 634170,
            nextLevelAt: 1045000
          },
          powerBonus: 10
        }
      }
    },
    characters: {
      data: {
        '2305843009635424917': {
          membershipId: '4611686018503131108',
          membershipType: 3,
          characterId: '2305843009635424917',
          dateLastPlayed: '2020-07-26T01:50:24Z',
          minutesPlayedThisSession: '138',
          minutesPlayedTotal: '343',
          light: 1023,
          stats: {
            '144602215': 36,
            '392767087': 67,
            '1735777505': 36,
            '1935470627': 1023,
            '1943323491': 41,
            '2996146975': 27,
            '4244567218': 59
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        '2305843009634895201': {
          membershipId: '4611686018503131108',
          membershipType: 3,
          characterId: '2305843009634895201',
          dateLastPlayed: '2020-08-31T00:08:53Z',
          minutesPlayedThisSession: '41',
          minutesPlayedTotal: '7947',
          light: 1058,
          stats: {
            '144602215': 44,
            '392767087': 84,
            '1735777505': 57,
            '1935470627': 1058,
            '1943323491': 59,
            '2996146975': 24,
            '4244567218': 34
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d316fa414f16795f5f0674a35d2bdae7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/499204adca01083d78780887a3d27042.jpg',
          emblemHash: 4052831236,
          emblemColor: {
            red: 0,
            green: 1,
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
          percentToNextLevel: 0
        },
        '2305843009685314173': {
          membershipId: '4611686018503131108',
          membershipType: 3,
          characterId: '2305843009685314173',
          dateLastPlayed: '2020-08-07T02:06:06Z',
          minutesPlayedThisSession: '24',
          minutesPlayedTotal: '24',
          light: 897,
          stats: {
            '144602215': 22,
            '392767087': 34,
            '1735777505': 46,
            '1935470627': 897,
            '1943323491': 43,
            '2996146975': 31,
            '4244567218': 37
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5dc023c8be5d682eae90be7f5d420f69.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e452c62485491a02fbc0e36f06d301d2.jpg',
          emblemHash: 1907674138,
          emblemColor: {
            red: 15,
            green: 40,
            blue: 48,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009635424917': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 5786525,
              level: 58,
              levelCap: 100,
              progressToNextLevel: 86525,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009634895201': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 5786525,
              level: 58,
              levelCap: 100,
              progressToNextLevel: 86525,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009685314173': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 5786525,
              level: 58,
              levelCap: 100,
              progressToNextLevel: 86525,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018472370002',
          displayName: 'Ingbo'
        },
        dateLastPlayed: '2020-09-20T01:28:35Z',
        characterIds: ['2305843009314224786', '2305843009335934597', '2305843009685114116']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 13705,
            dailyLimit: 0,
            weeklyProgress: 572991,
            weeklyLimit: 0,
            currentProgress: 24901524,
            level: 22,
            levelCap: -1,
            stepIndex: 22,
            progressToNextLevel: 646524,
            nextLevelAt: 2365000
          },
          powerBonus: 22
        }
      }
    },
    characters: {
      data: {
        '2305843009314224786': {
          membershipId: '4611686018472370002',
          membershipType: 3,
          characterId: '2305843009314224786',
          dateLastPlayed: '2020-09-20T01:28:35Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '60838',
          light: 1082,
          stats: {
            '144602215': 43,
            '392767087': 57,
            '1735777505': 54,
            '1935470627': 1082,
            '1943323491': 83,
            '2996146975': 78,
            '4244567218': 65
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/44d0f655745f57be32b75c207c361b9d.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/9d931b3414e83927034d90efd9e61b4b.jpg',
          emblemHash: 1138508286,
          emblemColor: {
            red: 192,
            green: 171,
            blue: 171,
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
          titleRecordHash: 4239091332
        },
        '2305843009335934597': {
          membershipId: '4611686018472370002',
          membershipType: 3,
          characterId: '2305843009335934597',
          dateLastPlayed: '2020-09-16T18:26:00Z',
          minutesPlayedThisSession: '13',
          minutesPlayedTotal: '1823',
          light: 1035,
          stats: {
            '144602215': 45,
            '392767087': 50,
            '1735777505': 32,
            '1935470627': 1035,
            '1943323491': 19,
            '2996146975': 62,
            '4244567218': 42
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/77c833bd8498e2a25506bad10197099a.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/5ab8eda6fedd55da2f3adf3aea557916.jpg',
          emblemHash: 621113310,
          emblemColor: {
            red: 16,
            green: 5,
            blue: 42,
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
        '2305843009685114116': {
          membershipId: '4611686018472370002',
          membershipType: 3,
          characterId: '2305843009685114116',
          dateLastPlayed: '2020-09-18T19:55:06Z',
          minutesPlayedThisSession: '3',
          minutesPlayedTotal: '556',
          light: 1074,
          stats: {
            '144602215': 54,
            '392767087': 73,
            '1735777505': 31,
            '1935470627': 1074,
            '1943323491': 29,
            '2996146975': 29,
            '4244567218': 44
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009314224786': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 13705,
              weeklyProgress: 572983,
              currentProgress: 15477883,
              level: 154,
              levelCap: -1,
              progressToNextLevel: 77883,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009335934597': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 13705,
              weeklyProgress: 572983,
              currentProgress: 15477883,
              level: 154,
              levelCap: -1,
              progressToNextLevel: 77883,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009685114116': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 13705,
              weeklyProgress: 572983,
              currentProgress: 15477883,
              level: 154,
              levelCap: -1,
              progressToNextLevel: 77883,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467478143',
          displayName: 'NEWT'
        },
        dateLastPlayed: '2020-09-03T21:44:46Z',
        characterIds: ['2305843009299777562', '2305843009299881549', '2305843009299993502']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 1511254,
            level: 8,
            levelCap: 12,
            stepIndex: 8,
            progressToNextLevel: 171254,
            nextLevelAt: 500000
          },
          pointsAcquired: 8,
          powerBonusProgression: {
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 1511258,
            level: 6,
            levelCap: -1,
            stepIndex: 6,
            progressToNextLevel: 136258,
            nextLevelAt: 605000
          },
          powerBonus: 6
        }
      }
    },
    characters: {
      data: {
        '2305843009299777562': {
          membershipId: '4611686018467478143',
          membershipType: 3,
          characterId: '2305843009299777562',
          dateLastPlayed: '2020-09-03T21:44:46Z',
          minutesPlayedThisSession: '11',
          minutesPlayedTotal: '17442',
          light: 1020,
          stats: {
            '144602215': 35,
            '392767087': 49,
            '1735777505': 50,
            '1935470627': 1020,
            '1943323491': 99,
            '2996146975': 28,
            '4244567218': 32
          },
          raceHash: 3887404748,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/2a39517e2d2cb522681cb2a23d137139.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/79ce4893d1bb6c1205c2f2e1506333c8.jpg',
          emblemHash: 2420153991,
          emblemColor: {
            red: 18,
            green: 16,
            blue: 74,
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
        '2305843009299881549': {
          membershipId: '4611686018467478143',
          membershipType: 3,
          characterId: '2305843009299881549',
          dateLastPlayed: '2020-08-07T16:57:48Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '2201',
          light: 985,
          stats: {
            '144602215': 36,
            '392767087': 28,
            '1735777505': 40,
            '1935470627': 985,
            '1943323491': 46,
            '2996146975': 32,
            '4244567218': 26
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/59fa6dd017b1333d67f4d92037e4a337.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/49cb9f683064b737bad01ad31113ebd8.jpg',
          emblemHash: 802191383,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        },
        '2305843009299993502': {
          membershipId: '4611686018467478143',
          membershipType: 3,
          characterId: '2305843009299993502',
          dateLastPlayed: '2020-08-07T07:31:10Z',
          minutesPlayedThisSession: '2',
          minutesPlayedTotal: '929',
          light: 1007,
          stats: {
            '144602215': 36,
            '392767087': 37,
            '1735777505': 43,
            '1935470627': 1007,
            '1943323491': 35,
            '2996146975': 38,
            '4244567218': 30
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/fc2a2d570b2a6be1fff0de19e22504bd.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/cc46632e2fe7f7ec633b849b70389b12.jpg',
          emblemHash: 46275857,
          emblemColor: {
            red: 16,
            green: 5,
            blue: 42,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009299777562': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 1518259,
              level: 16,
              levelCap: 100,
              progressToNextLevel: 18259,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009299881549': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 1518259,
              level: 16,
              levelCap: 100,
              progressToNextLevel: 18259,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009299993502': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 1518259,
              level: 16,
              levelCap: 100,
              progressToNextLevel: 18259,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018475612018',
          displayName: 'TheOldOak'
        },
        dateLastPlayed: '2020-09-20T00:49:47Z',
        characterIds: ['2305843009344245985', '2305843009410171637', '2305843009631434782']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 11666,
            dailyLimit: 0,
            weeklyProgress: 1090135,
            weeklyLimit: 0,
            currentProgress: 32017392,
            level: 25,
            levelCap: -1,
            stepIndex: 25,
            progressToNextLevel: 337392,
            nextLevelAt: 2695000
          },
          powerBonus: 25
        }
      }
    },
    characters: {
      data: {
        '2305843009344245985': {
          membershipId: '4611686018475612018',
          membershipType: 3,
          characterId: '2305843009344245985',
          dateLastPlayed: '2020-09-19T23:07:59Z',
          minutesPlayedThisSession: '2',
          minutesPlayedTotal: '32597',
          light: 1081,
          stats: {
            '144602215': 37,
            '392767087': 32,
            '1735777505': 53,
            '1935470627': 1081,
            '1943323491': 38,
            '2996146975': 63,
            '4244567218': 40
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/df631fcdb24ed59b42074d029490b74c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/45fa16772dd440552cf9b0edee65e600.jpg',
          emblemHash: 2394866220,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 1754983323
        },
        '2305843009410171637': {
          membershipId: '4611686018475612018',
          membershipType: 3,
          characterId: '2305843009410171637',
          dateLastPlayed: '2020-09-20T00:49:47Z',
          minutesPlayedThisSession: '100',
          minutesPlayedTotal: '89927',
          light: 1082,
          stats: {
            '144602215': 29,
            '392767087': 54,
            '1735777505': 57,
            '1935470627': 1082,
            '1943323491': 56,
            '2996146975': 83,
            '4244567218': 44
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/a76687ae2dcee20b1e164404850c09a5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ac6b49645fc8a49b9ea8759f08436fa1.jpg',
          emblemHash: 1736897081,
          emblemColor: {
            red: 9,
            green: 4,
            blue: 9,
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
          titleRecordHash: 1754983323
        },
        '2305843009631434782': {
          membershipId: '4611686018475612018',
          membershipType: 3,
          characterId: '2305843009631434782',
          dateLastPlayed: '2020-09-17T20:48:11Z',
          minutesPlayedThisSession: '12',
          minutesPlayedTotal: '5278',
          light: 1079,
          stats: {
            '144602215': 39,
            '392767087': 50,
            '1735777505': 24,
            '1935470627': 1079,
            '1943323491': 50,
            '2996146975': 30,
            '4244567218': 54
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/27b1eb430ad2b6760e5254612c60f2af.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/627acf398289f778d5f01ec4926367c3.jpg',
          emblemHash: 1983519839,
          emblemColor: {
            red: 1,
            green: 1,
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
          titleRecordHash: 1754983323
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009344245985': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 11666,
              weeklyProgress: 1090121,
              currentProgress: 22136076,
              level: 221,
              levelCap: -1,
              progressToNextLevel: 36077,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009410171637': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 11666,
              weeklyProgress: 1090121,
              currentProgress: 22136076,
              level: 221,
              levelCap: -1,
              progressToNextLevel: 36077,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009631434782': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 11666,
              weeklyProgress: 1090121,
              currentProgress: 22136076,
              level: 221,
              levelCap: -1,
              progressToNextLevel: 36077,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018473336302',
          displayName: 'CrowD_KilleR'
        },
        dateLastPlayed: '2020-09-20T03:55:30Z',
        characterIds: ['2305843009319677985', '2305843009320758134', '2305843009339424017']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 406786,
            dailyLimit: 0,
            weeklyProgress: 1339272,
            weeklyLimit: 0,
            currentProgress: 30234288,
            level: 24,
            levelCap: -1,
            stepIndex: 24,
            progressToNextLevel: 1139287,
            nextLevelAt: 2585000
          },
          powerBonus: 24
        }
      }
    },
    characters: {
      data: {
        '2305843009319677985': {
          membershipId: '4611686018473336302',
          membershipType: 3,
          characterId: '2305843009319677985',
          dateLastPlayed: '2020-09-19T20:27:34Z',
          minutesPlayedThisSession: '42',
          minutesPlayedTotal: '22287',
          light: 1084,
          stats: {
            '144602215': 46,
            '392767087': 56,
            '1735777505': 57,
            '1935470627': 1084,
            '1943323491': 44,
            '2996146975': 47,
            '4244567218': 44
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/caeffd922381d7a2d8b70f1e9fe8db6c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/970a0fbc2d1c0108907c3dedd0d4a3a1.jpg',
          emblemHash: 1138508272,
          emblemColor: {
            red: 8,
            green: 13,
            blue: 13,
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
          titleRecordHash: 3798931976
        },
        '2305843009320758134': {
          membershipId: '4611686018473336302',
          membershipType: 3,
          characterId: '2305843009320758134',
          dateLastPlayed: '2020-09-20T03:55:30Z',
          minutesPlayedThisSession: '268',
          minutesPlayedTotal: '88141',
          light: 1083,
          stats: {
            '144602215': 54,
            '392767087': 54,
            '1735777505': 45,
            '1935470627': 1083,
            '1943323491': 43,
            '2996146975': 55,
            '4244567218': 50
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/d92903577bdc9655b6176f6860dca97b.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/46c445c601ee04e660aa71335510b64f.jpg',
          emblemHash: 3639046089,
          emblemColor: {
            red: 0,
            green: 1,
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
          percentToNextLevel: 0,
          titleRecordHash: 2460356851
        },
        '2305843009339424017': {
          membershipId: '4611686018473336302',
          membershipType: 3,
          characterId: '2305843009339424017',
          dateLastPlayed: '2020-09-19T17:44:04Z',
          minutesPlayedThisSession: '1',
          minutesPlayedTotal: '25679',
          light: 1081,
          stats: {
            '144602215': 80,
            '392767087': 48,
            '1735777505': 36,
            '1935470627': 1081,
            '1943323491': 63,
            '2996146975': 32,
            '4244567218': 32
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/27b1eb430ad2b6760e5254612c60f2af.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/627acf398289f778d5f01ec4926367c3.jpg',
          emblemHash: 1983519839,
          emblemColor: {
            red: 1,
            green: 1,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009319677985': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 406781,
              weeklyProgress: 1339257,
              currentProgress: 20350754,
              level: 203,
              levelCap: -1,
              progressToNextLevel: 50754,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009320758134': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 406781,
              weeklyProgress: 1339257,
              currentProgress: 20350754,
              level: 203,
              levelCap: -1,
              progressToNextLevel: 50754,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009339424017': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 406781,
              weeklyProgress: 1339257,
              currentProgress: 20350754,
              level: 203,
              levelCap: -1,
              progressToNextLevel: 50754,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018468017341',
          displayName: 'Jojimbu'
        },
        dateLastPlayed: '2020-09-20T04:25:10Z',
        characterIds: ['2305843009300778229', '2305843009300778232', '2305843009400544562']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 281929,
            dailyLimit: 0,
            weeklyProgress: 1003309,
            weeklyLimit: 0,
            currentProgress: 17864628,
            level: 19,
            levelCap: -1,
            stepIndex: 19,
            progressToNextLevel: 44628,
            nextLevelAt: 2035000
          },
          powerBonus: 19
        }
      }
    },
    characters: {
      data: {
        '2305843009300778229': {
          membershipId: '4611686018468017341',
          membershipType: 3,
          characterId: '2305843009300778229',
          dateLastPlayed: '2020-09-20T04:25:10Z',
          minutesPlayedThisSession: '23',
          minutesPlayedTotal: '48250',
          light: 1079,
          stats: {
            '144602215': 49,
            '392767087': 59,
            '1735777505': 90,
            '1935470627': 1079,
            '1943323491': 60,
            '2996146975': 36,
            '4244567218': 25
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/473ce9170cb9ad2eeb9a87630d0ff321.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/11db866ac33114fa2ac8274a7e11a912.jpg',
          emblemHash: 2526736326,
          emblemColor: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0
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
          titleRecordHash: 3798931976
        },
        '2305843009300778232': {
          membershipId: '4611686018468017341',
          membershipType: 3,
          characterId: '2305843009300778232',
          dateLastPlayed: '2020-09-07T03:04:30Z',
          minutesPlayedThisSession: '31',
          minutesPlayedTotal: '6102',
          light: 1071,
          stats: {
            '144602215': 37,
            '392767087': 41,
            '1735777505': 21,
            '1935470627': 1071,
            '1943323491': 57,
            '2996146975': 35,
            '4244567218': 61
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/34894c188802e5bb817366735024aa15.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/7e4c1b75746bec8fb39c91541f662962.jpg',
          emblemHash: 540603119,
          emblemColor: {
            red: 2,
            green: 3,
            blue: 4,
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
          titleRecordHash: 3798931976
        },
        '2305843009400544562': {
          membershipId: '4611686018468017341',
          membershipType: 3,
          characterId: '2305843009400544562',
          dateLastPlayed: '2020-09-04T21:00:06Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '2361',
          light: 1040,
          stats: {
            '144602215': 39,
            '392767087': 52,
            '1735777505': 51,
            '1935470627': 1040,
            '1943323491': 32,
            '2996146975': 38,
            '4244567218': 36
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/df631fcdb24ed59b42074d029490b74c.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/45fa16772dd440552cf9b0edee65e600.jpg',
          emblemHash: 2394866220,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 3798931976
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009300778229': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 281930,
              weeklyProgress: 1003296,
              currentProgress: 7985634,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 85634,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009300778232': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 281930,
              weeklyProgress: 1003296,
              currentProgress: 7985634,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 85634,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009400544562': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 281930,
              weeklyProgress: 1003296,
              currentProgress: 7985634,
              level: 79,
              levelCap: -1,
              progressToNextLevel: 85634,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467318525',
          displayName: 'Lemillion'
        },
        dateLastPlayed: '2020-09-14T03:22:31Z',
        characterIds: ['2305843009352544341', '2305843009404614170', '2305843009508736255']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 0,
            weeklyLimit: 0,
            currentProgress: 10176064,
            level: 14,
            levelCap: -1,
            stepIndex: 14,
            progressToNextLevel: 881064,
            nextLevelAt: 1485000
          },
          powerBonus: 14
        }
      }
    },
    characters: {
      data: {
        '2305843009352544341': {
          membershipId: '4611686018467318525',
          membershipType: 3,
          characterId: '2305843009352544341',
          dateLastPlayed: '2020-07-07T01:58:00Z',
          minutesPlayedThisSession: '2',
          minutesPlayedTotal: '19802',
          light: 968,
          stats: {
            '144602215': 25,
            '392767087': 42,
            '1735777505': 60,
            '1935470627': 968,
            '1943323491': 49,
            '2996146975': 36,
            '4244567218': 36
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/76e4311f0ccd7d8b5774bbb2154fba13.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/5a2b33e610435ac7836e303422c26e40.jpg',
          emblemHash: 2868525737,
          emblemColor: {
            red: 1,
            green: 1,
            blue: 1,
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
          titleRecordHash: 2254764897
        },
        '2305843009404614170': {
          membershipId: '4611686018467318525',
          membershipType: 3,
          characterId: '2305843009404614170',
          dateLastPlayed: '2020-09-14T00:16:07Z',
          minutesPlayedThisSession: '21',
          minutesPlayedTotal: '47710',
          light: 955,
          stats: {
            '144602215': 55,
            '392767087': 43,
            '1735777505': 41,
            '1935470627': 955,
            '1943323491': 23,
            '2996146975': 41,
            '4244567218': 23
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/730505745026ebe8b612b69ee093cba9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/0f6b66abcea98a5cb3ab71795074505e.jpg',
          emblemHash: 3978281654,
          emblemColor: {
            red: 1,
            green: 1,
            blue: 1,
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
          titleRecordHash: 3798931976
        },
        '2305843009508736255': {
          membershipId: '4611686018467318525',
          membershipType: 3,
          characterId: '2305843009508736255',
          dateLastPlayed: '2020-09-14T03:22:31Z',
          minutesPlayedThisSession: '184',
          minutesPlayedTotal: '31651',
          light: 1065,
          stats: {
            '144602215': 39,
            '392767087': 42,
            '1735777505': 51,
            '1935470627': 1065,
            '1943323491': 49,
            '2996146975': 44,
            '4244567218': 24
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/abe6899124423b89cf6942c94286a4b5.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/19ca9bb6b2641dfb90e61af3bc67a17f.jpg',
          emblemHash: 2526736321,
          emblemColor: {
            red: 15,
            green: 31,
            blue: 171,
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
          titleRecordHash: 3369119720
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009352544341': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 315274,
              level: 3,
              levelCap: -1,
              progressToNextLevel: 15274,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009404614170': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 315274,
              level: 3,
              levelCap: -1,
              progressToNextLevel: 15274,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009508736255': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 315274,
              level: 3,
              levelCap: -1,
              progressToNextLevel: 15274,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018485044134',
          displayName: 'Ripinski Moinskidoinski'
        },
        dateLastPlayed: '2020-09-20T04:33:23Z',
        characterIds: ['2305843009408498083', '2305843009425164638', '2305843009585564757']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 276054,
            dailyLimit: 0,
            weeklyProgress: 508801,
            weeklyLimit: 0,
            currentProgress: 10480635,
            level: 14,
            levelCap: -1,
            stepIndex: 14,
            progressToNextLevel: 1185635,
            nextLevelAt: 1485000
          },
          powerBonus: 14
        }
      }
    },
    characters: {
      data: {
        '2305843009408498083': {
          membershipId: '4611686018485044134',
          membershipType: 3,
          characterId: '2305843009408498083',
          dateLastPlayed: '2020-09-20T04:33:23Z',
          minutesPlayedThisSession: '142',
          minutesPlayedTotal: '66414',
          light: 1066,
          stats: {
            '144602215': 53,
            '392767087': 93,
            '1735777505': 43,
            '1935470627': 1066,
            '1943323491': 33,
            '2996146975': 16,
            '4244567218': 48
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/bf43b31f82edbe9412166147394ac045.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2dc24c1c509002d4ef33eb30e3b5aa3b.jpg',
          emblemHash: 969863968,
          emblemColor: {
            red: 114,
            green: 0,
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
          titleRecordHash: 2860165064
        },
        '2305843009425164638': {
          membershipId: '4611686018485044134',
          membershipType: 3,
          characterId: '2305843009425164638',
          dateLastPlayed: '2020-09-10T22:54:39Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '3604',
          light: 1063,
          stats: {
            '144602215': 28,
            '392767087': 47,
            '1735777505': 38,
            '1935470627': 1063,
            '1943323491': 38,
            '2996146975': 30,
            '4244567218': 46
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 1,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/8db0b72fc882c52eb11bceaeb24039d2.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/0f8ff6d83fac74d419eaaf394e376433.jpg',
          emblemHash: 2054118356,
          emblemColor: {
            red: 58,
            green: 139,
            blue: 211,
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
        '2305843009585564757': {
          membershipId: '4611686018485044134',
          membershipType: 3,
          characterId: '2305843009585564757',
          dateLastPlayed: '2020-08-26T00:04:41Z',
          minutesPlayedThisSession: '11',
          minutesPlayedTotal: '1515',
          light: 1064,
          stats: {
            '144602215': 32,
            '392767087': 31,
            '1735777505': 31,
            '1935470627': 1064,
            '1943323491': 36,
            '2996146975': 48,
            '4244567218': 49
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/cb30b5a9b34f7204b064570b56576562.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/ecafe3e611c54e78656b85b77c8ee2f7.jpg',
          emblemHash: 1907674139,
          emblemColor: {
            red: 83,
            green: 9,
            blue: 5,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009408498083': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 276050,
              weeklyProgress: 508790,
              currentProgress: 677397,
              level: 6,
              levelCap: -1,
              progressToNextLevel: 77397,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009425164638': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 276050,
              weeklyProgress: 508790,
              currentProgress: 677397,
              level: 6,
              levelCap: -1,
              progressToNextLevel: 77397,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009585564757': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 276050,
              weeklyProgress: 508790,
              currentProgress: 677397,
              level: 6,
              levelCap: -1,
              progressToNextLevel: 77397,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 2,
          membershipId: '4611686018452192742',
          displayName: 'travisofearth'
        },
        dateLastPlayed: '2020-09-20T03:16:16Z',
        characterIds: ['2305843009264186114', '2305843009264186115', '2305843009264186116']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 140263,
            dailyLimit: 0,
            weeklyProgress: 663572,
            weeklyLimit: 0,
            currentProgress: 20633344,
            level: 20,
            levelCap: -1,
            stepIndex: 20,
            progressToNextLevel: 778344,
            nextLevelAt: 2145000
          },
          powerBonus: 20
        }
      }
    },
    characters: {
      data: {
        '2305843009264186114': {
          membershipId: '4611686018452192742',
          membershipType: 2,
          characterId: '2305843009264186114',
          dateLastPlayed: '2020-09-06T22:43:43Z',
          minutesPlayedThisSession: '9',
          minutesPlayedTotal: '61659',
          light: 1077,
          stats: {
            '144602215': 32,
            '392767087': 40,
            '1735777505': 60,
            '1935470627': 1077,
            '1943323491': 49,
            '2996146975': 51,
            '4244567218': 43
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1d33d05eeedbe8cd0805e5f9d370a884.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/de08788bd2cd02b7cf8873c1d48ebfb6.jpg',
          emblemHash: 1138508277,
          emblemColor: {
            red: 2,
            green: 4,
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
          percentToNextLevel: 0,
          titleRecordHash: 2757681677
        },
        '2305843009264186115': {
          membershipId: '4611686018452192742',
          membershipType: 2,
          characterId: '2305843009264186115',
          dateLastPlayed: '2020-09-07T20:58:00Z',
          minutesPlayedThisSession: '89',
          minutesPlayedTotal: '28624',
          light: 1073,
          stats: {
            '144602215': 45,
            '392767087': 34,
            '1735777505': 87,
            '1935470627': 1073,
            '1943323491': 53,
            '2996146975': 41,
            '4244567218': 18
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/95b96bdf423edcd2c7f1bc9d70fa46d9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2c1b2c28a8998818b74ff0509d1d7ed7.jpg',
          emblemHash: 298334061,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 3798931976
        },
        '2305843009264186116': {
          membershipId: '4611686018452192742',
          membershipType: 2,
          characterId: '2305843009264186116',
          dateLastPlayed: '2020-09-20T03:16:16Z',
          minutesPlayedThisSession: '229',
          minutesPlayedTotal: '29172',
          light: 1071,
          stats: {
            '144602215': 44,
            '392767087': 49,
            '1735777505': 37,
            '1935470627': 1071,
            '1943323491': 42,
            '2996146975': 54,
            '4244567218': 61
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/95b96bdf423edcd2c7f1bc9d70fa46d9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/2c1b2c28a8998818b74ff0509d1d7ed7.jpg',
          emblemHash: 298334061,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 2707428411
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009264186114': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 140262,
              weeklyProgress: 663563,
              currentProgress: 10751318,
              level: 107,
              levelCap: -1,
              progressToNextLevel: 51318,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009264186115': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 140262,
              weeklyProgress: 663563,
              currentProgress: 10751318,
              level: 107,
              levelCap: -1,
              progressToNextLevel: 51318,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009264186116': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 140262,
              weeklyProgress: 663563,
              currentProgress: 10751318,
              level: 107,
              levelCap: -1,
              progressToNextLevel: 51318,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467555002',
          displayName: 'zonedguy'
        },
        dateLastPlayed: '2020-09-20T04:01:47Z',
        characterIds: ['2305843009300467478', '2305843009303025153', '2305843009304944733']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 134666,
            dailyLimit: 0,
            weeklyProgress: 1300787,
            weeklyLimit: 0,
            currentProgress: 35598064,
            level: 26,
            levelCap: -1,
            stepIndex: 26,
            progressToNextLevel: 1223065,
            nextLevelAt: 2805000
          },
          powerBonus: 26
        }
      }
    },
    characters: {
      data: {
        '2305843009300467478': {
          membershipId: '4611686018467555002',
          membershipType: 3,
          characterId: '2305843009300467478',
          dateLastPlayed: '2020-09-20T04:01:47Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '109960',
          light: 1086,
          stats: {
            '144602215': 58,
            '392767087': 41,
            '1735777505': 41,
            '1935470627': 1086,
            '1943323491': 51,
            '2996146975': 68,
            '4244567218': 39
          },
          raceHash: 2803282938,
          genderHash: 2204441813,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 1,
          emblemPath: '/common/destiny2_content/icons/ef696558825f40dc18234fd0851e9ae9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73835952fbfdb9315de347b5abc2d087.jpg',
          emblemHash: 1138508276,
          emblemColor: {
            red: 1,
            green: 2,
            blue: 5,
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
          titleRecordHash: 1983630873
        },
        '2305843009303025153': {
          membershipId: '4611686018467555002',
          membershipType: 3,
          characterId: '2305843009303025153',
          dateLastPlayed: '2020-09-18T20:22:09Z',
          minutesPlayedThisSession: '0',
          minutesPlayedTotal: '85306',
          light: 1086,
          stats: {
            '144602215': 49,
            '392767087': 53,
            '1735777505': 46,
            '1935470627': 1086,
            '1943323491': 45,
            '2996146975': 51,
            '4244567218': 39
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ef696558825f40dc18234fd0851e9ae9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73835952fbfdb9315de347b5abc2d087.jpg',
          emblemHash: 1138508276,
          emblemColor: {
            red: 1,
            green: 2,
            blue: 5,
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
          titleRecordHash: 4081738395
        },
        '2305843009304944733': {
          membershipId: '4611686018467555002',
          membershipType: 3,
          characterId: '2305843009304944733',
          dateLastPlayed: '2020-09-20T03:55:26Z',
          minutesPlayedThisSession: '118',
          minutesPlayedTotal: '122261',
          light: 1083,
          stats: {
            '144602215': 22,
            '392767087': 44,
            '1735777505': 57,
            '1935470627': 1083,
            '1943323491': 26,
            '2996146975': 69,
            '4244567218': 43
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/ef696558825f40dc18234fd0851e9ae9.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73835952fbfdb9315de347b5abc2d087.jpg',
          emblemHash: 1138508276,
          emblemColor: {
            red: 1,
            green: 2,
            blue: 5,
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
    characterProgressions: {
      data: {
        '2305843009300467478': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 134664,
              weeklyProgress: 1300772,
              currentProgress: 25711532,
              level: 257,
              levelCap: -1,
              progressToNextLevel: 11532,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009303025153': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 134664,
              weeklyProgress: 1300772,
              currentProgress: 25711532,
              level: 257,
              levelCap: -1,
              progressToNextLevel: 11532,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009304944733': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 134664,
              weeklyProgress: 1300772,
              currentProgress: 25711532,
              level: 257,
              levelCap: -1,
              progressToNextLevel: 11532,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018488185475',
          displayName: 'That OG Spence'
        },
        dateLastPlayed: '2020-09-19T23:32:30Z',
        characterIds: ['2305843009468955181', '2305843009490205199', '2305843009686535234']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 1035274,
            weeklyLimit: 0,
            currentProgress: 17187402,
            level: 18,
            levelCap: -1,
            stepIndex: 18,
            progressToNextLevel: 1292402,
            nextLevelAt: 1925000
          },
          powerBonus: 18
        }
      }
    },
    characters: {
      data: {
        '2305843009468955181': {
          membershipId: '4611686018488185475',
          membershipType: 3,
          characterId: '2305843009468955181',
          dateLastPlayed: '2020-09-19T23:32:30Z',
          minutesPlayedThisSession: '1',
          minutesPlayedTotal: '28350',
          light: 1078,
          stats: {
            '144602215': 51,
            '392767087': 49,
            '1735777505': 63,
            '1935470627': 1078,
            '1943323491': 40,
            '2996146975': 51,
            '4244567218': 33
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/73e921bcd54cd20255f87f2e3b6a7885.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/59dab6a0d66aaaefb1434ff5cf7f33de.jpg',
          emblemHash: 1138508279,
          emblemColor: {
            red: 0,
            green: 0,
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
          titleRecordHash: 4239091332
        },
        '2305843009490205199': {
          membershipId: '4611686018488185475',
          membershipType: 3,
          characterId: '2305843009490205199',
          dateLastPlayed: '2020-09-15T05:11:51Z',
          minutesPlayedThisSession: '132',
          minutesPlayedTotal: '4567',
          light: 1076,
          stats: {
            '144602215': 61,
            '392767087': 50,
            '1735777505': 54,
            '1935470627': 1076,
            '1943323491': 46,
            '2996146975': 43,
            '4244567218': 56
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 2,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/73e921bcd54cd20255f87f2e3b6a7885.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/59dab6a0d66aaaefb1434ff5cf7f33de.jpg',
          emblemHash: 1138508279,
          emblemColor: {
            red: 0,
            green: 0,
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
          percentToNextLevel: 0
        },
        '2305843009686535234': {
          membershipId: '4611686018488185475',
          membershipType: 3,
          characterId: '2305843009686535234',
          dateLastPlayed: '2020-09-08T03:45:21Z',
          minutesPlayedThisSession: '29',
          minutesPlayedTotal: '313',
          light: 1069,
          stats: {
            '144602215': 53,
            '392767087': 26,
            '1735777505': 19,
            '1935470627': 1069,
            '1943323491': 41,
            '2996146975': 46,
            '4244567218': 39
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 2,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009468955181': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 1035256,
              currentProgress: 13326512,
              level: 133,
              levelCap: -1,
              progressToNextLevel: 26512,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009490205199': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 1035256,
              currentProgress: 13326512,
              level: 133,
              levelCap: -1,
              progressToNextLevel: 26512,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009686535234': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 1035256,
              currentProgress: 13326512,
              level: 133,
              levelCap: -1,
              progressToNextLevel: 26512,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018467366186',
          displayName: 'Atla'
        },
        dateLastPlayed: '2020-09-16T07:34:49Z',
        characterIds: ['2305843009300876838', '2305843009306145316', '2305843009650004534']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 0,
            dailyLimit: 0,
            weeklyProgress: 53600,
            weeklyLimit: 0,
            currentProgress: 8637743,
            level: 13,
            levelCap: -1,
            stepIndex: 13,
            progressToNextLevel: 717743,
            nextLevelAt: 1375000
          },
          powerBonus: 13
        }
      }
    },
    characters: {
      data: {
        '2305843009300876838': {
          membershipId: '4611686018467366186',
          membershipType: 3,
          characterId: '2305843009300876838',
          dateLastPlayed: '2020-09-16T07:34:49Z',
          minutesPlayedThisSession: '24',
          minutesPlayedTotal: '29759',
          light: 1064,
          stats: {
            '144602215': 74,
            '392767087': 45,
            '1735777505': 38,
            '1935470627': 1064,
            '1943323491': 80,
            '2996146975': 77,
            '4244567218': 22
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/21fad308b1d67a83f64e275ea7111a3f.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/65b4047b1b83aeeeb2e628305071fcea.jpg',
          emblemHash: 1940590820,
          emblemColor: {
            red: 188,
            green: 182,
            blue: 5,
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
        '2305843009306145316': {
          membershipId: '4611686018467366186',
          membershipType: 3,
          characterId: '2305843009306145316',
          dateLastPlayed: '2020-08-23T07:00:46Z',
          minutesPlayedThisSession: '15',
          minutesPlayedTotal: '4646',
          light: 1059,
          stats: {
            '144602215': 65,
            '392767087': 47,
            '1735777505': 27,
            '1935470627': 1059,
            '1943323491': 37,
            '2996146975': 40,
            '4244567218': 27
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 1,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/69adea04559ff05a3422358109747187.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/b322d0772100b5331d145910602d89a2.jpg',
          emblemHash: 4261480751,
          emblemColor: {
            red: 6,
            green: 4,
            blue: 8,
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
        '2305843009650004534': {
          membershipId: '4611686018467366186',
          membershipType: 3,
          characterId: '2305843009650004534',
          dateLastPlayed: '2020-08-09T17:58:35Z',
          minutesPlayedThisSession: '6',
          minutesPlayedTotal: '20',
          light: 904,
          stats: {
            '144602215': 0,
            '392767087': 1,
            '1735777505': 0,
            '1935470627': 904,
            '1943323491': 0,
            '2996146975': 5,
            '4244567218': 0
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 0,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/5dc023c8be5d682eae90be7f5d420f69.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/e452c62485491a02fbc0e36f06d301d2.jpg',
          emblemHash: 1907674138,
          emblemColor: {
            red: 15,
            green: 40,
            blue: 48,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009300876838': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 53599,
              currentProgress: 8645095,
              level: 87,
              levelCap: 100,
              progressToNextLevel: 45095,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009306145316': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 53599,
              currentProgress: 8645095,
              level: 87,
              levelCap: 100,
              progressToNextLevel: 45095,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009650004534': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 53599,
              currentProgress: 8645095,
              level: 87,
              levelCap: 100,
              progressToNextLevel: 45095,
              nextLevelAt: 100000
            },
            '4021269753': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 0,
              level: 0,
              levelCap: -1,
              progressToNextLevel: 0,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipType: 3,
          membershipId: '4611686018485618060',
          displayName: 'highroller33s'
        },
        dateLastPlayed: '2020-09-20T06:34:04Z',
        characterIds: ['2305843009410801790', '2305843009416144077', '2305843009423718172']
      }
    },
    profileProgression: {
      data: {
        seasonalArtifact: {
          artifactHash: 2894222926,
          pointProgression: {
            progressionHash: 2988008811,
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
            progressionHash: 3810510634,
            dailyProgress: 104683,
            dailyLimit: 0,
            weeklyProgress: 913579,
            weeklyLimit: 0,
            currentProgress: 21245526,
            level: 20,
            levelCap: -1,
            stepIndex: 20,
            progressToNextLevel: 1390526,
            nextLevelAt: 2145000
          },
          powerBonus: 20
        }
      }
    },
    characters: {
      data: {
        '2305843009410801790': {
          membershipId: '4611686018485618060',
          membershipType: 3,
          characterId: '2305843009410801790',
          dateLastPlayed: '2020-09-20T06:34:04Z',
          minutesPlayedThisSession: '38',
          minutesPlayedTotal: '120466',
          light: 1079,
          stats: {
            '144602215': 29,
            '392767087': 42,
            '1735777505': 77,
            '1935470627': 1079,
            '1943323491': 49,
            '2996146975': 50,
            '4244567218': 29
          },
          raceHash: 898834093,
          genderHash: 3111576190,
          classHash: 671679327,
          raceType: 2,
          classType: 1,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/1879398bc8a50d47cdd14cc746c073e1.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/b369c32505c95bb6d042487c2e1138f6.jpg',
          emblemHash: 3931192718,
          emblemColor: {
            red: 0,
            green: 1,
            blue: 3,
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
          titleRecordHash: 2757681677
        },
        '2305843009416144077': {
          membershipId: '4611686018485618060',
          membershipType: 3,
          characterId: '2305843009416144077',
          dateLastPlayed: '2020-09-20T05:49:26Z',
          minutesPlayedThisSession: '1',
          minutesPlayedTotal: '1299',
          light: 1063,
          stats: {
            '144602215': 54,
            '392767087': 47,
            '1735777505': 20,
            '1935470627': 1063,
            '1943323491': 22,
            '2996146975': 95,
            '4244567218': 44
          },
          raceHash: 3887404748,
          genderHash: 3111576190,
          classHash: 3655393761,
          raceType: 0,
          classType: 0,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/45318af5e0140ca3d9b71f03776674e3.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/a11eacb0d20137600c0e3bcb10ff2a8b.jpg',
          emblemHash: 3338748564,
          emblemColor: {
            red: 16,
            green: 5,
            blue: 42,
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
        '2305843009423718172': {
          membershipId: '4611686018485618060',
          membershipType: 3,
          characterId: '2305843009423718172',
          dateLastPlayed: '2020-09-20T05:53:20Z',
          minutesPlayedThisSession: '1',
          minutesPlayedTotal: '1334',
          light: 1057,
          stats: {
            '144602215': 37,
            '392767087': 30,
            '1735777505': 29,
            '1935470627': 1057,
            '1943323491': 59,
            '2996146975': 66,
            '4244567218': 60
          },
          raceHash: 2803282938,
          genderHash: 3111576190,
          classHash: 2271682572,
          raceType: 1,
          classType: 2,
          genderType: 0,
          emblemPath: '/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
          emblemBackgroundPath: '/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
          emblemHash: 1907674137,
          emblemColor: {
            red: 109,
            green: 62,
            blue: 4,
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
        }
      },
      privacy: 1
    },
    characterProgressions: {
      data: {
        '2305843009410801790': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 104682,
              weeklyProgress: 913565,
              currentProgress: 11386874,
              level: 113,
              levelCap: -1,
              progressToNextLevel: 86874,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009416144077': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 104682,
              weeklyProgress: 913565,
              currentProgress: 11386874,
              level: 113,
              levelCap: -1,
              progressToNextLevel: 86874,
              nextLevelAt: 100000
            }
          }
        },
        '2305843009423718172': {
          progressions: {
            '1627914615': {
              dailyProgress: 0,
              weeklyProgress: 0,
              currentProgress: 9900000,
              level: 100,
              levelCap: 100,
              progressToNextLevel: 0,
              nextLevelAt: 0
            },
            '4021269753': {
              dailyProgress: 104682,
              weeklyProgress: 913565,
              currentProgress: 11386874,
              level: 113,
              levelCap: -1,
              progressToNextLevel: 86874,
              nextLevelAt: 100000
            }
          }
        }
      }
    }
  }
];
