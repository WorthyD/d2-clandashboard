import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MemberProfile } from 'bungie-models';
import { of } from 'rxjs';

import { ClanDatabase, ClanMemberRecentActivityService, ProfileService } from '../../clan-db';
import { MOCK_RESP_ACTIVITIES_COMBINED } from '../../testing-utils/objects/member-activities.mock';
import { nowPlusDays } from '../../utility/date-utils';
import { DailyClanAggregateTimeService } from './daily-clan-aggregate-time.service';
import { formatDate } from '../../utility/format-date';
const dummyActivities = {
  activities: [
    {
      period: nowPlusDays(-1),
      activityDetails: {
        referenceId: 788769683,
        directorActivityHash: 3847433434,
        instanceId: '7698637287',
        mode: 25,
        modes: [5, 25],
        isPrivate: false,
        membershipType: 3
      },
      values: {
        activityDurationSeconds: {
          statId: 'activityDurationSeconds',
          basic: {
            value: 100,
            displayValue: '4m 26s'
          }
        },
        completed: {
          statId: 'completed',
          basic: {
            value: 1,
            displayValue: 'Yes'
          }
        }
      }
    },
    {
      period: nowPlusDays(-5),
      activityDetails: {
        referenceId: 1009746517,
        directorActivityHash: 3847433434,
        instanceId: '7698602750',
        mode: 25,
        modes: [5, 25],
        isPrivate: false,
        membershipType: 3
      },
      values: {
        activityDurationSeconds: {
          statId: 'activityDurationSeconds',
          basic: {
            value: 200,
            displayValue: '5m 39s'
          }
        },
        completed: {
          statId: 'completed',
          basic: {
            value: 1,
            displayValue: 'Yes'
          }
        }
      }
    },
    {
      period: nowPlusDays(-10),
      activityDetails: {
        referenceId: 1009746517,
        directorActivityHash: 3847433434,
        instanceId: '7698602750',
        mode: 25,
        modes: [5, 25],
        isPrivate: false,
        membershipType: 3
      },
      values: {
        activityDurationSeconds: {
          statId: 'activityDurationSeconds',
          basic: {
            value: 300,
            displayValue: '5m 39s'
          }
        },
        completed: {
          statId: 'completed',
          basic: {
            value: 1,
            displayValue: 'Yes'
          }
        }
      }
    }
  ]
};
const memberProfile = {
  profile: {
    data: {
      userInfo: {
        membershipId: 1,
        membershipType: 1
      },
      dateLastPlayed: new Date()
    }
  }
} as MemberProfile;

fdescribe('DailyClanAggregateTimeService', () => {
  let service: DailyClanAggregateTimeService;
  let profileService: ProfileService;
  let activityService: ClanMemberRecentActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService, ClanMemberRecentActivityService, ClanDatabase]
    });
    service = TestBed.inject(DailyClanAggregateTimeService);
    profileService = TestBed.inject(ProfileService);
    activityService = TestBed.inject(ClanMemberRecentActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('should aggregate days of data', () => {
    let serviceSpy;
    beforeEach(() => {
      const serviceSpy = spyOn(activityService, 'getMemberActivity').and.callFake(() => {
        return of(dummyActivities);
      });
    });

    it('should be a function', () => {
      expect(service.getClanActivityStatsForDuration).toBeDefined();
    });

    it('should appropriately group by date', () => {
      const searchDate = nowPlusDays(-30);
      service.getClanActivityStatsForDuration(1, [memberProfile, memberProfile], searchDate, 0).subscribe((x) => {
        expect(x.length).toBe(3);
      });
    });
    it('should sum accurately', () => {
      const searchDate = nowPlusDays(-30);
      const yesterday = nowPlusDays(-1);
      service.getClanActivityStatsForDuration(1, [memberProfile, memberProfile], searchDate, 0).subscribe((x) => {
        const date = x.find((y) => y.date === formatDate(yesterday));
        expect(date.seconds).toBe(200);
      });
    });
  });
});
