import { TestBed } from '@angular/core/testing';

import { GambitService } from './gambit.service';

describe('GambitService', () => {
  let service: GambitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GambitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
