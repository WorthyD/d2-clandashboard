import { TestBed } from '@angular/core/testing';

import { ClanCrucibleService } from './clan-crucible.service';

describe('ClanCrucibleService', () => {
  let service: ClanCrucibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanCrucibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
