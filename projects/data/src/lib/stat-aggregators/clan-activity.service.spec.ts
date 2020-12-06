import { TestBed } from '@angular/core/testing';

import { ClanActivityService } from './clan-activity.service';

describe('ClanActivityService', () => {
  let service: ClanActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
