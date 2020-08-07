import { TestBed } from '@angular/core/testing';

import { ClanRewardsService } from './clan-rewards.service';

// import { ClanDetailsService } from './clan-details.service';
import { ClanDatabase } from '../ClanDatabase';
// import { GroupV2Service } from 'bungie-api';
import { Destiny2Service } from 'bungie-api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, defer } from 'rxjs';
// import { MOCK_DB_CLAN_DETAILS, MOCK_CLAN_OVERVIEW } from '../../testing-utils/objects/clan-details.mock';
import { HttpErrorResponse } from '@angular/common/http';
import { MOCK_CLAN_REWARDS, MOCK_DB_CLAN_REWARDS } from '../../testing-utils/objects/clan-rewards.mock';

describe('ClanRewardsService', () => {
  let service: ClanRewardsService;
  let dbService: ClanDatabase;
  let d2Service: Destiny2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Destiny2Service, ClanRewardsService, ClanDatabase]
    });
    dbService = TestBed.inject(ClanDatabase);
    d2Service = TestBed.inject(Destiny2Service);
    service = TestBed.inject(ClanRewardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('clan rewards', () => {
    it('should get profile from DB, but call service if expired', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of(MOCK_DB_CLAN_REWARDS);
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetClanWeeklyRewardState').and.callFake(() => {
        return of({
          Response: MOCK_CLAN_REWARDS
        });
      });

      service.getClanRewardsSerialized(1).subscribe((x) => {
        expect(x).toBe(MOCK_CLAN_REWARDS);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });

    it('should get profile from DB and not call service if cache is good', () => {
      const mockDBItem = { ...MOCK_DB_CLAN_REWARDS[0], createDate: new Date() };
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of(mockDBItem);
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetClanWeeklyRewardState').and.callFake(() => {
        return of({
          Response: MOCK_CLAN_REWARDS
        });
      });

      service.getClanRewardsSerialized(1).subscribe((x) => {
        expect(x).toBe(MOCK_CLAN_REWARDS);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(0);
        expect(updateSpy).toHaveBeenCalledTimes(0);
      });
    });

    it('should call service if not in DB', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of([]);
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetClanWeeklyRewardState').and.callFake(() => {
        return of({
          Response: MOCK_CLAN_REWARDS
        });
      });

      service.getClanRewardsSerialized(1).subscribe((x) => {
        expect(x).toBe(MOCK_CLAN_REWARDS);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle API down with DB data', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        //return { ClanDetails: of([]) };
        return of(MOCK_DB_CLAN_REWARDS);
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404,
        statusText: 'Not Found'
      });
      const serviceSpy = spyOn(d2Service, 'destiny2GetClanWeeklyRewardState').and.callFake(() => {
        return defer(() => Promise.reject(errorResponse));
      });

      service.getClanRewardsSerialized(1).subscribe((x) => {
        expect(x).toBe(MOCK_CLAN_REWARDS);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(0);
      });
    });
    it('should handle API down with no DB data', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of({});
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404,
        statusText: 'Not Found'
      });
      const serviceSpy = spyOn(d2Service, 'destiny2GetClanWeeklyRewardState').and.callFake(() => {
        return defer(() => Promise.reject(errorResponse));
      });

      service.getClanRewardsSerialized(1).subscribe(
        (x) => fail('should have returned error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toContain('404 error');
        }
      );
    });
  });
});
