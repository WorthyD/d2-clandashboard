import { TestBed } from '@angular/core/testing';

import { RaidsService } from './raids.service';

describe('RaidsService', () => {
  let service: RaidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
