import { TestBed } from '@angular/core/testing';

import { MemberActivityService } from './member-activity.service';

describe('MemberActivityService', () => {
  let service: MemberActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
