import { TestBed } from '@angular/core/testing';

import { MemberActivityStatsService } from './member-activity-stats.service';

describe('MemberActivityStatsService', () => {
  let service: MemberActivityStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberActivityStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
