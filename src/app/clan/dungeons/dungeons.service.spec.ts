import { TestBed } from '@angular/core/testing';

import { DungeonsService } from './dungeons.service';

describe('DungeonsService', () => {
  let service: DungeonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DungeonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
