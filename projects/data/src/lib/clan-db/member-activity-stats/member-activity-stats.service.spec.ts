import { TestBed } from '@angular/core/testing';

import { MemberActivityStatsService } from './member-activity-stats.service';
import { ClanDatabase } from '../ClanDatabase';
import { Destiny2Service } from 'bungie-api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MOCK_AGGREGATE_ACTIVITY_STATS,
  MOCK_DB_ACTIVITY_STATS
} from '../../testing-utils/objects/aggregate-activity-stats';
import { of, defer } from 'rxjs';
import { ClanMember, MemberProfile } from 'bungie-models';
import { HttpErrorResponse } from '@angular/common/http';

fdescribe('MemberActivityStatsService', () => {
  let service: MemberActivityStatsService;
  let dbService: ClanDatabase;
  let d2Service: Destiny2Service;

  const activityHashes = [2163254576, 2177866802];
  const statTracked = ['activityCompletions', 'activityPrecisionKills'];
  const memberProfile = {
    profile: {
      data: {
        userInfo: {
          membershipId: 1,
          membershipType: 1
        }
      }
    }
  } as MemberProfile;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Destiny2Service, MemberActivityStatsService, ClanDatabase]
    });
    service = TestBed.inject(MemberActivityStatsService);
    dbService = TestBed.inject(ClanDatabase);
    d2Service = TestBed.inject(Destiny2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getMemberCharacterActivityStatsSerialized', () => {
    it('should get profile from DB, but call service if expired', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((repo, store, id) => {
        return of(MOCK_DB_ACTIVITY_STATS.find((x) => x.id === id));
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetDestinyAggregateActivityStats').and.callFake(() => {
        return of({
          Response: MOCK_AGGREGATE_ACTIVITY_STATS
        });
      });

      service
        .getMemberCharacterActivityStatsSerialized(1, memberProfile, 1, activityHashes, statTracked)
        .subscribe((x) => {
          console.log(JSON.stringify(x));
          expect(x).toBeTruthy();
          expect(dbGetSpy).toHaveBeenCalledTimes(1);
          expect(serviceSpy).toHaveBeenCalledTimes(1);
          expect(updateSpy).toHaveBeenCalledTimes(1);
        });
    });

    it('should get profile from DB and not call service if cache is good', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((repo, store, id) => {
        const m = MOCK_DB_ACTIVITY_STATS.find((x) => x.id === id);
        return of(m);
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetDestinyAggregateActivityStats').and.callFake(() => {
        return of({
          Response: MOCK_AGGREGATE_ACTIVITY_STATS
        });
      });
      const profile = { ...memberProfile };
      profile.profile.data.dateLastPlayed = new Date('1/1/1900');
      service.getMemberCharacterActivityStatsSerialized(1, profile, 1, activityHashes, statTracked).subscribe((x) => {
        expect(x).toBeTruthy();
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(0);
        expect(updateSpy).toHaveBeenCalledTimes(0);
      });
    });

    it('should call service if not in DB', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((repo, store, id) => {
        return of({});
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetDestinyAggregateActivityStats').and.callFake(() => {
        return of({
          Response: MOCK_AGGREGATE_ACTIVITY_STATS
        });
      });

      const profile = { ...memberProfile };
      service.getMemberCharacterActivityStatsSerialized(1, profile, 1, activityHashes, statTracked).subscribe((x) => {
        expect(x).toBeTruthy();
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle API down with DB data', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((repo, store, id) => {
        const m = MOCK_DB_ACTIVITY_STATS.find((x) => x.id === id);
        m.createDate = new Date('1/1/1900');
        return of(m);
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404,
        statusText: 'Not Found'
      });
      const serviceSpy = spyOn(d2Service, 'destiny2GetDestinyAggregateActivityStats').and.callFake(() => {
        return defer(() => Promise.reject(errorResponse));
      });

      const profile = { ...memberProfile };
      service.getMemberCharacterActivityStatsSerialized(1, profile, 1, activityHashes, statTracked).subscribe((x) => {
        expect(x).toBeTruthy();
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(0);
      });
    });

    it('should handle API down with no DB data', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((repo, store, id) => {
        return of({});
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404,
        statusText: 'Not Found'
      });
      const serviceSpy = spyOn(d2Service, 'destiny2GetDestinyAggregateActivityStats').and.callFake(() => {
        return defer(() => Promise.reject(errorResponse));
      });

      const profile = { ...memberProfile };
      service.getMemberCharacterActivityStatsSerialized(1, profile, 1, activityHashes, statTracked).subscribe(
        (x) => fail('should have returned error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toContain('404 error');
        }
      );
    });
  });
});
