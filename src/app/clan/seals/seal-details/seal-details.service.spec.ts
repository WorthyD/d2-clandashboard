import { TestBed } from '@angular/core/testing';

import { SealDetailsService } from './seal-details.service';

describe('SealDetailsService', () => {
  let service: SealDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SealDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
