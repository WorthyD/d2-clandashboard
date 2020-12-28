import { TestBed } from '@angular/core/testing';

import { ClanRosterService } from './clan-roster.service';
import { ClanDatabase, ClanMemberRecentActivityService, ProfileMilestonesService, ProfileService } from '../clan-db';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ClanRosterService', () => {
  let service: ClanRosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClanMemberRecentActivityService, ProfileService, ClanDatabase, ProfileMilestonesService]
    });
    service = TestBed.inject(ClanRosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
