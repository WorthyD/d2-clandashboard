import { TestBed } from '@angular/core/testing';

import { BungieApiService } from './bungie-api.service';

describe('BungieApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BungieApiService = TestBed.inject(BungieApiService);
    expect(service).toBeTruthy();
  });
});
