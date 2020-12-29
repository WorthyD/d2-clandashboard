import { TestBed } from '@angular/core/testing';

import { ClanGambitService } from './clan-gambit.service';
import { ClanDatabase, ClanMemberRecentActivityService, ProfileMilestonesService, ProfileService } from '../clan-db';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ClanGambitService', () => {
  let service: ClanGambitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClanMemberRecentActivityService, ProfileService, ClanDatabase, ProfileMilestonesService]
    });
    service = TestBed.inject(ClanGambitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
