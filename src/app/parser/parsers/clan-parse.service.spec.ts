import { TestBed } from '@angular/core/testing';

import { ClanParseService } from './clan-parse.service';

describe('ClanParseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClanParseService = TestBed.get(ClanParseService);
    expect(service).toBeTruthy();
  });
});
