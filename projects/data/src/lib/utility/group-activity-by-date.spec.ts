import { groupActivitiesByDate } from './group-activity-by-date';
const _MOCK_DATA = [
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
fdescribe('Group activities by date', () => {
  it('should group activities by date', () => {
    const formatted = groupActivitiesByDate(_MOCK_DATA);
    expect(formatted.length).toEqual(2);
    expect(formatted.find(x => x.date === '2020-08-26').seconds).toEqual(700);
  });
});
