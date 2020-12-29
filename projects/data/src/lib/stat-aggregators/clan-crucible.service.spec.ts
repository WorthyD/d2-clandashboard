import { TestBed } from '@angular/core/testing';

import { ClanCrucibleService } from './clan-crucible.service';
import { ClanDatabase, ClanMemberRecentActivityService, ProfileMilestonesService, ProfileService } from '../clan-db';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ClanCrucibleService', () => {
  let service: ClanCrucibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClanMemberRecentActivityService, ProfileService, ClanDatabase, ProfileMilestonesService]
    });
    service = TestBed.inject(ClanCrucibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
