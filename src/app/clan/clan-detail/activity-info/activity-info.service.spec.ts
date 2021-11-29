import { TestBed } from '@angular/core/testing';

import { ActivityInfoService } from './activity-info.service';

describe('ActivityInfoService', () => {
  let service: ActivityInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
