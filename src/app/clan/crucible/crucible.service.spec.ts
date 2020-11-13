import { TestBed } from '@angular/core/testing';

import { CrucibleService } from './crucible.service';

describe('CrucibleService', () => {
  let service: CrucibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrucibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
