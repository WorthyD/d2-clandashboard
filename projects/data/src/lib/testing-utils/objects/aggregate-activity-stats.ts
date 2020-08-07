import { DBObject } from '../../clan-db/app-indexed-db';
import * as moment from 'moment';

export const MOCK_AGGREGATE_ACTIVITY_STATS = {
  activities: [
    {
      activityHash: 2163254576,
      values: {
        fastestCompletionMsForActivity: {
          statId: 'fastestCompletionMsForActivity',
          basic: {
            value: 0.0,
            displayValue: '0:00.000'
          },
          activityId: '0'
        },
        activityCompletions: {
          statId: 'activityCompletions',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityDeaths: {
          statId: 'activityDeaths',
          basic: {
            value: 14.0,
            displayValue: '14'
          }
        },
        activityKills: {
          statId: 'activityKills',
          basic: {
            value: 108.0,
            displayValue: '108'
          }
        },
        activitySecondsPlayed: {
          statId: 'activitySecondsPlayed',
          basic: {
            value: 1546.0,
            displayValue: '25m 46s'
          }
        },
        activityWins: {
          statId: 'activityWins',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityGoalsMissed: {
          statId: 'activityGoalsMissed',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activitySpecialActions: {
          statId: 'activitySpecialActions',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityBestGoalsHit: {
          statId: 'activityBestGoalsHit',
          basic: {
            value: 0.0,
            displayValue: '0'
          },
          activityId: '0'
        },
        activityGoalsHit: {
          statId: 'activityGoalsHit',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activitySpecialScore: {
          statId: 'activitySpecialScore',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityBestSingleGameScore: {
          statId: 'activityBestSingleGameScore',
          basic: {
            value: 0.0,
            displayValue: '0'
          },
          activityId: '5391868397'
        },
        activityKillsDeathsRatio: {
          statId: 'activityKillsDeathsRatio',
          basic: {
            value: 7.7142857142857144,
            displayValue: '7.71'
          }
        },
        activityAssists: {
          statId: 'activityAssists',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityKillsDeathsAssists: {
          statId: 'activityKillsDeathsAssists',
          basic: {
            value: 7.7142857142857144,
            displayValue: '7.71'
          }
        },
        activityPrecisionKills: {
          statId: 'activityPrecisionKills',
          basic: {
            value: 31.0,
            displayValue: '31'
          }
        }
      }
    },
    {
      activityHash: 2177866802,
      values: {
        fastestCompletionMsForActivity: {
          statId: 'fastestCompletionMsForActivity',
          basic: {
            value: 4600.0,
            displayValue: '0:04.600'
          },
          activityId: '5032612517'
        },
        activityCompletions: {
          statId: 'activityCompletions',
          basic: {
            value: 1.0,
            displayValue: '1'
          }
        },
        activityDeaths: {
          statId: 'activityDeaths',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityKills: {
          statId: 'activityKills',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activitySecondsPlayed: {
          statId: 'activitySecondsPlayed',
          basic: {
            value: 4.0,
            displayValue: '0m 4s'
          }
        },
        activityWins: {
          statId: 'activityWins',
          basic: {
            value: 1.0,
            displayValue: '1'
          }
        },
        activityGoalsMissed: {
          statId: 'activityGoalsMissed',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activitySpecialActions: {
          statId: 'activitySpecialActions',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityBestGoalsHit: {
          statId: 'activityBestGoalsHit',
          basic: {
            value: 0.0,
            displayValue: '0'
          },
          activityId: '5032612517'
        },
        activityGoalsHit: {
          statId: 'activityGoalsHit',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activitySpecialScore: {
          statId: 'activitySpecialScore',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityBestSingleGameScore: {
          statId: 'activityBestSingleGameScore',
          basic: {
            value: 0.0,
            displayValue: '0'
          },
          activityId: '5032612517'
        },
        activityKillsDeathsRatio: {
          statId: 'activityKillsDeathsRatio',
          basic: {
            value: 0.0,
            displayValue: '0.00'
          }
        },
        activityAssists: {
          statId: 'activityAssists',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        },
        activityKillsDeathsAssists: {
          statId: 'activityKillsDeathsAssists',
          basic: {
            value: 0.0,
            displayValue: '0.00'
          }
        },
        activityPrecisionKills: {
          statId: 'activityPrecisionKills',
          basic: {
            value: 0.0,
            displayValue: '0'
          }
        }
      }
    }
  ]
};

export const MOCK_DB_ACTIVITY_STATS: DBObject[] = [
  {
    id: '1-1-1',
    createDate: new Date(),
    data: MOCK_AGGREGATE_ACTIVITY_STATS
  }
];
