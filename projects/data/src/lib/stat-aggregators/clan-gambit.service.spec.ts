import { TestBed } from '@angular/core/testing';

import { ClanGambitService } from './clan-gambit.service';

describe('ClanGambitService', () => {
  let service: ClanGambitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanGambitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
