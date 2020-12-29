import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ClanDatabase, ClanMemberRecentActivityService, ProfileService } from '../clan-db';
import { MemberActivityStatsService } from '../clan-db/member-activity-stats/member-activity-stats.service';

import { ClanDungeonService } from './clan-dungeon.service';

describe('ClanDungeonService', () => {
  let service: ClanDungeonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClanMemberRecentActivityService, ProfileService, ClanDatabase, MemberActivityStatsService]
    });
    service = TestBed.inject(ClanDungeonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
