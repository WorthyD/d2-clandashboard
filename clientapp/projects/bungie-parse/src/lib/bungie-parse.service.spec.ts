import { TestBed } from '@angular/core/testing';

import { BungieParseService } from './bungie-parse.service';

describe('BungieParseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BungieParseService = TestBed.get(BungieParseService);
    expect(service).toBeTruthy();
  });
});
