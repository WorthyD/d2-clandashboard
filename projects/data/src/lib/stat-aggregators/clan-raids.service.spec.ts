import { TestBed } from '@angular/core/testing';

import { ClanRaidsService } from './clan-raids.service';
import { MOCK_PROFILES } from '../testing-utils/objects/profiles.mock';
import { MemberProfile } from 'bungie-models';
import { MemberActivityStatsService } from '../clan-db/member-activity-stats/member-activity-stats.service';
import { Destiny2Service } from 'bungie-api-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClanDatabase } from '../clan-db';

import { MemberMetricsService } from '../clan-db';

describe('ClanRaidsService', () => {
  let service: ClanRaidsService;
  let activityService: MemberActivityStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MemberActivityStatsService, MemberMetricsService, Destiny2Service, ClanDatabase]
    });
    service = TestBed.inject(ClanRaidsService);
    activityService = TestBed.inject(MemberActivityStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
