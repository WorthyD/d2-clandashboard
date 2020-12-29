import { TestBed } from '@angular/core/testing';

import { MemberMetricsService } from './member-metrics.service';

describe('MemberMetricsService', () => {
  let service: MemberMetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberMetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
