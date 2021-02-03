import { TestBed } from '@angular/core/testing';

import { ClanAggregateActivityService } from './clan-aggregate-activity.service';

describe('ClanAggregateActivityService', () => {
  let service: ClanAggregateActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanAggregateActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
