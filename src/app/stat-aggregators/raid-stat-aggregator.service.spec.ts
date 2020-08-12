import { TestBed } from '@angular/core/testing';

import { RaidStatAggregatorService } from './raid-stat-aggregator.service';

describe('RaidStatAggregatorService', () => {
  let service: RaidStatAggregatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaidStatAggregatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
