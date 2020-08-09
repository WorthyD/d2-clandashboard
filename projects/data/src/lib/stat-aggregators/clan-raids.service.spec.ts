import { TestBed } from '@angular/core/testing';

import { ClanRaidsService } from './clan-raids.service';

describe('ClanRaidsService', () => {
  let service: ClanRaidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanRaidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
