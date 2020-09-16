import { TestBed } from '@angular/core/testing';

import { ClanMemberRecentActivityService } from './clan-member-recent-activity.service';

describe('ClanMemberRecentActivityService', () => {
  let service: ClanMemberRecentActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanMemberRecentActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
