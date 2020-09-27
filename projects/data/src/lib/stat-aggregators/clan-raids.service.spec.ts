import { TestBed } from '@angular/core/testing';

import { ClanRaidsService } from './clan-raids.service';
import { MOCK_PROFILES } from '../testing-utils/objects/profiles.mock';
import { MemberProfile } from 'bungie-models';
import { MemberActivityStatsService } from '../clan-db/member-activity-stats/member-activity-stats.service';
import { Destiny2Service } from 'bungie-api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClanDatabase } from '../clan-db';
import { of } from 'rxjs';
const MOCK_MEMBERS = [
  {
    profile: {
      data: {
        userInfo: {
          membershipId: 1,
          membershipType: 1
        },
        characterIds: [1, 2, 3]
      }
    }
  },
  {
    profile: {
      data: {
        userInfo: {
          membershipId: 2,
          membershipType: 1
        },
        characterIds: [5, 6, 7]
      }
    }
  }
] as MemberProfile[];

const MOCK_ACTIVITY = [
  {
    activityHash: 3089205900,
    values: {
      activityCompletions: { statId: 'activityCompletions', basic: { value: 0, displayValue: '0' } }
    }
  },
  {
    activityHash: 2693136600,
    values: {
      activityCompletions: { statId: 'activityCompletions', basic: { value: 1, displayValue: '1' } }
    }
  },
  {
    activityHash: 2693136601,
    values: {
      activityCompletions: { statId: 'activityCompletions', basic: { value: 7, displayValue: '7' } }
    }
  },
  {
    activityHash: 548750096,
    values: {
      activityCompletions: { statId: 'activityCompletions', basic: { value: 100, displayValue: '100' } }
    }
  }
];
describe('ClanRaidsService', () => {
  let service: ClanRaidsService;
  let activityService: MemberActivityStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MemberActivityStatsService, Destiny2Service, ClanDatabase]
    });
    service = TestBed.inject(ClanRaidsService);
    activityService = TestBed.inject(MemberActivityStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getClanRaidStats', () => {
    it('should return expected results', () => {
      const serviceSpy = spyOn(activityService, 'getMemberCharacterActivityStatsSerialized').and.callFake(() => {
        return of(MOCK_ACTIVITY);
      });

      service.getClanRaidStats(2, MOCK_MEMBERS).subscribe((x) => {
        expect(x).toBeTruthy();
        //console.log(x);
      });
    });
  });
});
