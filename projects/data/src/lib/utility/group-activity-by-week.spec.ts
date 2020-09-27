import { groupActivitiesByWeek } from './group-activity-by-week';
const _MOCK_DATA = [
  {
    period: '2020-08-23T01:38:09Z',
    activityDetails: {},
    values: {
      activityDurationSeconds: {
        statId: 'activityDurationSeconds',
        basic: {
          value: 400
        }
      }
    }
  },

  {
    period: '2020-08-25T01:38:09Z',
    activityDetails: {},
    values: {
      activityDurationSeconds: {
        statId: 'activityDurationSeconds',
        basic: {
          value: 400
        }
      }
    }
  },

  {
    period: '2020-08-27T01:38:09Z',
    activityDetails: {},
    values: {
      activityDurationSeconds: {
        statId: 'activityDurationSeconds',
        basic: {
          value: 400
        }
      }
    }
  },
  {
    period: '2020-08-27T01:27:28Z',
    activityDetails: {},
    values: {
      activityDurationSeconds: {
        statId: 'activityDurationSeconds',
        basic: {
          value: 300
        }
      }
    }
  },
  {
    period: '2020-08-30T01:27:28Z',
    activityDetails: {},
    values: {
      activityDurationSeconds: {
        statId: 'activityDurationSeconds',
        basic: {
          value: 300
        }
      }
    }
  }
];
describe('Group activities by week', () => {
  it('should group activities by week', () => {
    const formatted = groupActivitiesByWeek(_MOCK_DATA);
    expect(formatted.length).toEqual(2);
  });
});
