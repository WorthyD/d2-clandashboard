import { TestBed } from '@angular/core/testing';

import { PlayerSearchService } from './player-search.service';

describe('PlayerSearchService', () => {
  let service: PlayerSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
