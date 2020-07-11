import { TestBed } from '@angular/core/testing';

import { ClanMemberActivityService } from './clan-member-activity.service';

describe('ClanMemberActivityService', () => {
  let service: ClanMemberActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanMemberActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
