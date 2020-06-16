import { TestBed } from '@angular/core/testing';

import { ClanDetailService } from './clan-detail.service';

describe('ClanDetailService', () => {
  let service: ClanDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanDetailService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
