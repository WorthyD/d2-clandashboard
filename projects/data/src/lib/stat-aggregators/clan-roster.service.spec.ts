import { TestBed } from '@angular/core/testing';

import { ClanRosterService } from './clan-roster.service';

describe('ClanRosterService', () => {
  let service: ClanRosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanRosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
