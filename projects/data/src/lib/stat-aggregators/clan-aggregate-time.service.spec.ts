import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ClanDatabase, ClanMemberRecentActivityService, ProfileService } from '../clan-db';
import { MOCK_RESP_ACTIVITIES_COMBINED } from '../testing-utils/objects/member-activities.mock';
import { ClanAggregateTimeService } from './clan-aggregate-time.service';

fdescribe('ClanAggregateTimeService', () => {
  let service: ClanAggregateTimeService;
  let profileService: ProfileService;
  let activityService: ClanMemberRecentActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfileService, ClanMemberRecentActivityService, ClanDatabase]
    });
    service = TestBed.inject(ClanAggregateTimeService);
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
        return of({
          activities: MOCK_RESP_ACTIVITIES_COMBINED
        });
      });
    });

    it('should be a function', () => {
      expect(service.getClanActivityStatsForDays).toBeDefined();
    });

    it('should do something', () => {});
  });
});
