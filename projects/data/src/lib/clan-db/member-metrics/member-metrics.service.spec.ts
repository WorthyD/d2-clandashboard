import { TestBed } from '@angular/core/testing';
import { Destiny2Service } from 'bungie-api-angular';
import { ClanDatabase } from '../ClanDatabase';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MemberMetricsService } from './member-metrics.service';

describe('MemberMetricsService', () => {
  let service: MemberMetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Destiny2Service, MemberMetricsService, ClanDatabase]
    });
    service = TestBed.inject(MemberMetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
