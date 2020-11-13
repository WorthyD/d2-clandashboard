import { TestBed } from '@angular/core/testing';

import { ClanMemberRecentActivityService } from './clan-member-recent-activity.service';
import { Destiny2Service } from 'bungie-api-angular';
import { MemberProfile } from 'bungie-models';
import { MOCK_WORTHY_PROFILE } from '../../testing-utils/objects/profiles.mock';
import {
  MOCK_DB_ACTIVITIES,
  MOCK_RESP_ACTIVITIES_COMBINED,
  MOCK_RESP_ACTIVITIES_PAGE1,
  MOCK_RESP_ACTIVITIES_PAGE2,
  MOCK_RESP_ACTIVITIES_PAGE3
} from '../../testing-utils/objects/member-activities.mock';
import { HttpErrorResponse } from '@angular/common/http';
import { ClanDatabase } from '../ClanDatabase';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, defer, forkJoin } from 'rxjs';


describe('ClanMemberRecentActivityService', () => {
  let service: ClanMemberRecentActivityService;
  let dbService: ClanDatabase;
  let d2Service: Destiny2Service


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Destiny2Service, ClanDatabase, ClanMemberRecentActivityService]
    });
    service = TestBed.inject(ClanMemberRecentActivityService);
    dbService = TestBed.inject(ClanDatabase);
    d2Service = TestBed.inject(Destiny2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
