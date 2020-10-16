import { DBObject } from '../../clan-db/app-indexed-db';
import { nowPlusDays } from '../../utility/date-utils';

// export const MOCK_RESP_ACTIVITIES = {
//   activities: [
//     {
//       period: '2020-06-28T03:07:47Z',
//       activityDetails: {
//         referenceId: 1073289414,
//         directorActivityHash: 1073289414,
//         instanceId: '6534425938',
//         mode: 6,
//         modes: [7, 6],
//         isPrivate: false,
//         membershipType: 3
//       },
//       values: {
//         assists: { statId: 'assists', basic: { value: 7.0, displayValue: '7' } },
//         score: { statId: 'score', basic: { value: 0.0, displayValue: '0' } },
//         kills: { statId: 'kills', basic: { value: 294.0, displayValue: '294' } },
//         averageScorePerKill: { statId: 'averageScorePerKill', basic: { value: 0.0, displayValue: '0.00' } },
//         deaths: { statId: 'deaths', basic: { value: 8.0, displayValue: '8' } },
//         averageScorePerLife: { statId: 'averageScorePerLife', basic: { value: 0.0, displayValue: '0.00' } },
//         completed: { statId: 'completed', basic: { value: 0.0, displayValue: 'No' } },
//         opponentsDefeated: { statId: 'opponentsDefeated', basic: { value: 301.0, displayValue: '301' } },
//         efficiency: { statId: 'efficiency', basic: { value: 37.625, displayValue: '37.63' } },
//         killsDeathsRatio: { statId: 'killsDeathsRatio', basic: { value: 36.75, displayValue: '36.75' } },
//         killsDeathsAssists: { statId: 'killsDeathsAssists', basic: { value: 37.1875, displayValue: '37.19' } },
//         activityDurationSeconds: {
//           statId: 'activityDurationSeconds',
//           basic: { value: 2280.0, displayValue: '38m 0s' }
//         },
//         team: { statId: 'team', basic: { value: 0.0, displayValue: '' } },
//         completionReason: { statId: 'completionReason', basic: { value: 255.0, displayValue: 'Unknown' } },
//         fireteamId: { statId: 'fireteamId', basic: { value: -9.0136600064966666e18, displayValue: '-2147483648' } },
//         startSeconds: { statId: 'startSeconds', basic: { value: 0.0, displayValue: '0m 0s' } },
//         timePlayedSeconds: { statId: 'timePlayedSeconds', basic: { value: 2251.0, displayValue: '37m 31s' } },
//         playerCount: { statId: 'playerCount', basic: { value: 1.0, displayValue: '1' } },
//         teamScore: { statId: 'teamScore', basic: { value: 0.0, displayValue: '0' } }
//       }
//     },
//     {
//       period: '2020-06-28T02:13:26Z',
//       activityDetails: {
//         referenceId: 2509539864,
//         directorActivityHash: 2509539864,
//         instanceId: '6534092631',
//         mode: 77,
//         modes: [7, 77],
//         isPrivate: false,
//         membershipType: 3
//       },
//       values: {
//         assists: { statId: 'assists', basic: { value: 46.0, displayValue: '46' } },
//         score: { statId: 'score', basic: { value: 0.0, displayValue: '0' } },
//         kills: { statId: 'kills', basic: { value: 84.0, displayValue: '84' } },
//         averageScorePerKill: { statId: 'averageScorePerKill', basic: { value: 0.0, displayValue: '0.00' } },
//         deaths: { statId: 'deaths', basic: { value: 1.0, displayValue: '1' } },
//         averageScorePerLife: { statId: 'averageScorePerLife', basic: { value: 0.0, displayValue: '0.00' } },
//         completed: { statId: 'completed', basic: { value: 1.0, displayValue: 'Yes' } },
//         opponentsDefeated: { statId: 'opponentsDefeated', basic: { value: 130.0, displayValue: '130' } },
//         efficiency: { statId: 'efficiency', basic: { value: 130.0, displayValue: '130.00' } },
//         killsDeathsRatio: { statId: 'killsDeathsRatio', basic: { value: 84.0, displayValue: '84.00' } },
//         killsDeathsAssists: { statId: 'killsDeathsAssists', basic: { value: 107.0, displayValue: '107.00' } },
//         activityDurationSeconds: {
//           statId: 'activityDurationSeconds',
//           basic: { value: 737.0, displayValue: '12m 17s' }
//         },
//         team: { statId: 'team', basic: { value: 0.0, displayValue: '' } },
//         completionReason: { statId: 'completionReason', basic: { value: 0.0, displayValue: 'Objective Completed' } },
//         fireteamId: { statId: 'fireteamId', basic: { value: 5.4891897291224259e18, displayValue: '-2147483648' } },
//         startSeconds: { statId: 'startSeconds', basic: { value: 2.0, displayValue: '0m 2s' } },
//         timePlayedSeconds: { statId: 'timePlayedSeconds', basic: { value: 735.0, displayValue: '12m 15s' } },
//         playerCount: { statId: 'playerCount', basic: { value: 6.0, displayValue: '6' } },
//         teamScore: { statId: 'teamScore', basic: { value: 0.0, displayValue: '0' } }
//       }
//     },
//     {
//       period: '2020-06-22T01:46:41Z',
//       activityDetails: {
//         referenceId: 4159221189,
//         directorActivityHash: 4159221189,
//         instanceId: '6500414450',
//         mode: 6,
//         modes: [7, 6],
//         isPrivate: false,
//         membershipType: 0
//       },
//       values: {
//         assists: { statId: 'assists', basic: { value: 0.0, displayValue: '0' } },
//         score: { statId: 'score', basic: { value: 0.0, displayValue: '0' } },
//         kills: { statId: 'kills', basic: { value: 0.0, displayValue: '0' } },
//         averageScorePerKill: { statId: 'averageScorePerKill', basic: { value: 0.0, displayValue: '0.00' } },
//         deaths: { statId: 'deaths', basic: { value: 0.0, displayValue: '0' } },
//         averageScorePerLife: { statId: 'averageScorePerLife', basic: { value: 0.0, displayValue: '0.00' } },
//         completed: { statId: 'completed', basic: { value: 0.0, displayValue: 'No' } },
//         opponentsDefeated: { statId: 'opponentsDefeated', basic: { value: 0.0, displayValue: '0' } },
//         efficiency: { statId: 'efficiency', basic: { value: 0.0, displayValue: '0.00' } },
//         killsDeathsRatio: { statId: 'killsDeathsRatio', basic: { value: 0.0, displayValue: '0.00' } },
//         killsDeathsAssists: { statId: 'killsDeathsAssists', basic: { value: 0.0, displayValue: '0.00' } },
//         activityDurationSeconds: {
//           statId: 'activityDurationSeconds',
//           basic: { value: 30.0, displayValue: '0m 30s' }
//         },
//         team: { statId: 'team', basic: { value: -1.0, displayValue: '-' } },
//         completionReason: { statId: 'completionReason', basic: { value: 255.0, displayValue: 'Unknown' } },
//         fireteamId: { statId: 'fireteamId', basic: { value: 0.0, displayValue: '' } },
//         startSeconds: { statId: 'startSeconds', basic: { value: 0.0, displayValue: '0m 0s' } },
//         timePlayedSeconds: { statId: 'timePlayedSeconds', basic: { value: 26.0, displayValue: '0m 26s' } },
//         playerCount: { statId: 'playerCount', basic: { value: 1.0, displayValue: '1' } },
//         teamScore: { statId: 'teamScore', basic: { value: 0.0, displayValue: '0' } }
//       }
//     },
//     {
//       period: '2020-06-22T01:33:28Z',
//       activityDetails: {
//         referenceId: 3644215993,
//         directorActivityHash: 3644215993,
//         instanceId: '6500411159',
//         mode: 58,
//         modes: [7, 58],
//         isPrivate: false,
//         membershipType: 3
//       },
//       values: {
//         assists: { statId: 'assists', basic: { value: 0.0, displayValue: '0' } },
//         score: { statId: 'score', basic: { value: 0.0, displayValue: '0' } },
//         kills: { statId: 'kills', basic: { value: 56.0, displayValue: '56' } },
//         averageScorePerKill: { statId: 'averageScorePerKill', basic: { value: 0.0, displayValue: '0.00' } },
//         deaths: { statId: 'deaths', basic: { value: 5.0, displayValue: '5' } },
//         averageScorePerLife: { statId: 'averageScorePerLife', basic: { value: 0.0, displayValue: '0.00' } },
//         completed: { statId: 'completed', basic: { value: 1.0, displayValue: 'Yes' } },
//         opponentsDefeated: { statId: 'opponentsDefeated', basic: { value: 56.0, displayValue: '56' } },
//         efficiency: { statId: 'efficiency', basic: { value: 11.2, displayValue: '11.20' } },
//         killsDeathsRatio: { statId: 'killsDeathsRatio', basic: { value: 11.2, displayValue: '11.20' } },
//         killsDeathsAssists: { statId: 'killsDeathsAssists', basic: { value: 11.2, displayValue: '11.20' } },
//         activityDurationSeconds: {
//           statId: 'activityDurationSeconds',
//           basic: { value: 760.0, displayValue: '12m 40s' }
//         },
//         team: { statId: 'team', basic: { value: 0.0, displayValue: '' } },
//         completionReason: { statId: 'completionReason', basic: { value: 0.0, displayValue: 'Objective Completed' } },
//         fireteamId: { statId: 'fireteamId', basic: { value: -7.0834315902588211e18, displayValue: '-2147483648' } },
//         startSeconds: { statId: 'startSeconds', basic: { value: 0.0, displayValue: '0m 0s' } },
//         timePlayedSeconds: { statId: 'timePlayedSeconds', basic: { value: 760.0, displayValue: '12m 40s' } },
//         playerCount: { statId: 'playerCount', basic: { value: 1.0, displayValue: '1' } },
//         teamScore: { statId: 'teamScore', basic: { value: 0.0, displayValue: '0' } }
//       }
//     }
//   ]
// };
const mockValues = {
  assists: { statId: 'assists', basic: { value: 7.0, displayValue: '7' } },
  score: { statId: 'score', basic: { value: 0.0, displayValue: '0' } },
  kills: { statId: 'kills', basic: { value: 294.0, displayValue: '294' } },
  averageScorePerKill: { statId: 'averageScorePerKill', basic: { value: 0.0, displayValue: '0.00' } },
  deaths: { statId: 'deaths', basic: { value: 8.0, displayValue: '8' } },
  averageScorePerLife: { statId: 'averageScorePerLife', basic: { value: 0.0, displayValue: '0.00' } },
  completed: { statId: 'completed', basic: { value: 0.0, displayValue: 'No' } },
  opponentsDefeated: { statId: 'opponentsDefeated', basic: { value: 301.0, displayValue: '301' } },
  efficiency: { statId: 'efficiency', basic: { value: 37.625, displayValue: '37.63' } },
  killsDeathsRatio: { statId: 'killsDeathsRatio', basic: { value: 36.75, displayValue: '36.75' } },
  killsDeathsAssists: { statId: 'killsDeathsAssists', basic: { value: 37.1875, displayValue: '37.19' } },
  activityDurationSeconds: {
    statId: 'activityDurationSeconds',
    basic: { value: 2280.0, displayValue: '38m 0s' }
  },
  team: { statId: 'team', basic: { value: 0.0, displayValue: '' } },
  completionReason: { statId: 'completionReason', basic: { value: 255.0, displayValue: 'Unknown' } },
  fireteamId: { statId: 'fireteamId', basic: { value: -9.0136600064966666e18, displayValue: '-2147483648' } },
  startSeconds: { statId: 'startSeconds', basic: { value: 0.0, displayValue: '0m 0s' } },
  timePlayedSeconds: { statId: 'timePlayedSeconds', basic: { value: 2251.0, displayValue: '37m 31s' } },
  playerCount: { statId: 'playerCount', basic: { value: 1.0, displayValue: '1' } },
  teamScore: { statId: 'teamScore', basic: { value: 0.0, displayValue: '0' } }
};

const currentYear = new Date().getFullYear();
export const MOCK_RESP_ACTIVITIES_PAGE1 = {
  activities: [
    {
      period: new Date(currentYear, 1, 1).toJSON(),
      activityDetails: {
        referenceId: 1073289414,
        directorActivityHash: 1073289414,
        instanceId: '6534425938',
        mode: 6,
        modes: [7, 6],
        isPrivate: false,
        membershipType: 3
      },
      values: { ...mockValues }
    },
    {
      period: new Date(currentYear, 1, 2).toJSON(),
      activityDetails: {
        referenceId: 1073289414,
        directorActivityHash: 1073289414,
        instanceId: '6534425938',
        mode: 6,
        modes: [7, 6],
        isPrivate: false,
        membershipType: 3
      },
      values: { ...mockValues }
    }
  ]
};
export const MOCK_RESP_ACTIVITIES_PAGE2 = {
  activities: [
    {
      period: new Date(currentYear, 1, 1).toJSON(),
      activityDetails: {
        referenceId: 1073289414,
        directorActivityHash: 1073289414,
        instanceId: '6534425938',
        mode: 6,
        modes: [7, 6],
        isPrivate: false,
        membershipType: 3
      },
      values: { ...mockValues }
    },
    {
      period: new Date(currentYear - 1, 1, 2).toJSON(),
      activityDetails: {
        referenceId: 1073289414,
        directorActivityHash: 1073289414,
        instanceId: '6534425938',
        mode: 6,
        modes: [7, 6],
        isPrivate: false,
        membershipType: 3
      },
      values: { ...mockValues }
    }
  ]
};

export const MOCK_RESP_ACTIVITIES_PAGE3 = {
  activities: [
    {
      period: new Date(currentYear, 1, 1).toJSON(),
      activityDetails: {
        referenceId: 1073289414,
        directorActivityHash: 1073289414,
        instanceId: '6534425938',
        mode: 6,
        modes: [7, 6],
        isPrivate: false,
        membershipType: 3
      },
      values: { ...mockValues }
    },
    {
      period: new Date(currentYear - 2, 11, 25).toJSON(),
      activityDetails: {
        referenceId: 1073289414,
        directorActivityHash: 1073289414,
        instanceId: '6534425938',
        mode: 6,
        modes: [7, 6],
        isPrivate: false,
        membershipType: 3
      },
      values: { ...mockValues }
    }
  ]
};
export const MOCK_RESP_ACTIVITIES_COMBINED = [
  ...MOCK_RESP_ACTIVITIES_PAGE1.activities,
  ...MOCK_RESP_ACTIVITIES_PAGE2.activities,
  ...MOCK_RESP_ACTIVITIES_PAGE3.activities
];

export const MOCK_DB_ACTIVITIES: DBObject[] = [
  {
    id: '3-4611686018467238913-2305843009310516628',
    createDate: new Date(),
    data: MOCK_RESP_ACTIVITIES_COMBINED
  },
  {
    id: '3-4611686018467238913-2305843009319768855',
    createDate: new Date(),
    data: MOCK_RESP_ACTIVITIES_COMBINED
  },
  {
    id: '3-4611686018467238913-2305843009319768858',
    createDate: nowPlusDays(-10),
    data: MOCK_RESP_ACTIVITIES_COMBINED
  }
];
