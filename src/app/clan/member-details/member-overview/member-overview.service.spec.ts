import { TestBed } from '@angular/core/testing';

import { MemberOverviewService } from './member-overview.service';

describe('MemberOverviewService', () => {
  let service: MemberOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
