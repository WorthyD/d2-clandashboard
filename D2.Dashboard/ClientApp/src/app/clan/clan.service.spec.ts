import { TestBed } from '@angular/core/testing';

import { ClanService } from './clan.service';

describe('ClanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClanService = TestBed.get(ClanService);
    expect(service).toBeTruthy();
  });
});
