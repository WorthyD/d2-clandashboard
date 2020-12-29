const users = ['WorthyD', 'Zoned', 'Omega', 'ted', 'frank', 'tacos'];
import { MemberRaidStats, AllRaids } from 'bungie-models';
export const MOCK_RAID_STATS = [];
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

users.forEach((u) => {
  const stats = {};
  // AllRaids.forEach((r) => {
  //   stats[r.key] = {
  //     activityCompletions: getRandomNumber()
  //   };
  // });

  MOCK_RAID_STATS.push({
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
    },
    metrics: {
      data: {
        metrics: {
          '954805812': {
            invisible: false,
            objectiveProgress: {
              objectiveHash: 1428773193,
              progress: getRandomNumber(),
              completionValue: 20,
              complete: false,
              visible: true
            }
          },
          '2330596844': {
            invisible: false,
            objectiveProgress: {
              objectiveHash: 806830593,
              progress: getRandomNumber(),
              completionValue: 50,
              complete: false,
              visible: true
            }
          },
          '2466440160': {
            invisible: false,
            objectiveProgress: {
              objectiveHash: 416612120,
              progress: getRandomNumber(),
              completionValue: 5,
              complete: false,
              visible: true
            }
          },
          '3679202587': {
            invisible: false,
            objectiveProgress: {
              objectiveHash: 2824062586,
              progress: 300000,
              completionValue: 5400000,
              complete: false,
              visible: true
            }
          }
        }
      }
    }
  });
});

/*

[
  {
    "profile": {
      "data": {
        "userInfo": {
          "membershipType": 3,
          "membershipId": "4611686018504387531",
          "displayName": "zTITANx"
        }
      }
    },
    "metrics": {
      "data": {
        "metrics": {
          "954805812": {
            "invisible": false,
            "objectiveProgress": {
              "objectiveHash": 1428773193,
              "progress": 0,
              "completionValue": 20,
              "complete": false,
              "visible": true
            }
          },
          "2330596844": {
            "invisible": false,
            "objectiveProgress": {
              "objectiveHash": 806830593,
              "progress": 0,
              "completionValue": 50,
              "complete": false,
              "visible": true
            }
          },
          "2466440160": {
            "invisible": false,
            "objectiveProgress": {
              "objectiveHash": 416612120,
              "progress": 0,
              "completionValue": 5,
              "complete": false,
              "visible": true
            }
          },
          "3679202587": {
            "invisible": false,
            "objectiveProgress": {
              "objectiveHash": 2824062586,
              "progress": 0,
              "completionValue": 5400000,
              "complete": false,
              "visible": true
            }
          }
        }
      }
    }
  },
  {
    "profile": {
      "data": {
        "userInfo": {
          "membershipType": 3,
          "membershipId": "4611686018467359972",
          "displayName": "TeamRckt"
        }
      }
    },
    "metrics": {
      "data": {
        "metrics": {
          "954805812": {
            "invisible": false,
            "objectiveProgress": {
              "objectiveHash": 1428773193,
              "progress": 1,
              "completionValue": 20,
              "complete": false,
              "visible": true
            }
          },
          "2330596844": {
            "invisible": false,
            "objectiveProgress": {
              "objectiveHash": 806830593,
              "progress": 0,
              "completionValue": 50,
              "complete": false,
              "visible": true
            }
          },
          "2466440160": {
            "invisible": false,
            "objectiveProgress": {
              "objectiveHash": 416612120,
              "progress": 0,
              "completionValue": 5,
              "complete": false,
              "visible": true
            }
          },
          "3679202587": {
            "invisible": false,
            "objectiveProgress": {
              "objectiveHash": 2824062586,
              "progress": 300000,
              "completionValue": 5400000,
              "complete": true,
              "visible": true
            }
          }
        }
      }
    }
  }*/
