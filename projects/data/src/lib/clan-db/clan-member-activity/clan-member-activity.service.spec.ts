import { TestBed } from '@angular/core/testing';

import { ClanMemberActivityService } from './clan-member-activity.service';
import { ClanDatabase } from '../ClanDatabase';
import { Destiny2Service } from 'bungie-api-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, defer, forkJoin } from 'rxjs';
import { MemberProfile } from 'bungie-models';
import { MOCK_OMEGA_PROFILE, MOCK_WORTHY_PROFILE } from '../../testing-utils/objects/profiles.mock';
import {
  MOCK_DB_ACTIVITIES as MOCKED_DB_ACTIVITIES,
  MOCK_RESP_ACTIVITIES_COMBINED,
  MOCK_RESP_ACTIVITIES_PAGE1,
  MOCK_RESP_ACTIVITIES_PAGE2,
  MOCK_RESP_ACTIVITIES_PAGE3
} from '../../testing-utils/objects/member-activities.mock';
import { HttpErrorResponse } from '@angular/common/http';
import { nowPlusDays } from '../../utility/date-utils';

import { GET_MOCK_PROFILES } from '../../testing-utils/objects/member-profiles.mock';
import { GET_MOCK_ACTIVITIES, GET_MOCK_DB_ACTIVITIES } from '../../testing-utils/objects/member-activities.mock';

describe('ClanMemberActivityService', () => {
  let service: ClanMemberActivityService;
  let dbService: ClanDatabase;
  let d2Service: Destiny2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Destiny2Service, ClanDatabase, ClanMemberActivityService]
    });
    service = TestBed.inject(ClanMemberActivityService);
    dbService = TestBed.inject(ClanDatabase);
    d2Service = TestBed.inject(Destiny2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fdescribe('getAllActivitiesFromCache', () => {
    it('should retrieve data from db', () => {
      const MOCK_PROFILES = GET_MOCK_PROFILES(2);
      const MOCK_ACTIVITIES = GET_MOCK_ACTIVITIES(3);
      const MOCK_DB_ACTIVITIES = GET_MOCK_DB_ACTIVITIES(MOCK_PROFILES, MOCK_ACTIVITIES);

      const dbGetSpy = spyOn(dbService, 'getAll').and.callFake(() => {
        return of(MOCK_DB_ACTIVITIES);
      });

      service.getAllActivitiesFromCache(1, MOCK_PROFILES).subscribe((x) => {
        expect(x.length).toBe(2);
        expect(x[0].activities.length).toEqual(9);
      });
    });
  });

  describe('getMemberCharacterActivitySerialized', () => {
    it('should get profile from DB, but call service if expired', () => {
      const mockDBItem = {
        ...MOCKED_DB_ACTIVITIES[0],
        createDate: nowPlusDays(-10)
      };
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of(mockDBItem);
      });

      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(() => {
        return of({
          Response: { activities: MOCK_RESP_ACTIVITIES_COMBINED }
        });
      });

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      memberProfile.profile.data.dateLastPlayed = new Date();
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_COMBINED.length * 4);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(4);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });

    /*
    it('should get all recent activity', () => {
      // const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(
        (charId, memberId, memberType, getCount, something, pageNumber) => {
          switch (pageNumber) {
            case 0:
              return of({
                Response: MOCK_RESP_ACTIVITIES_PAGE1
              });
            case 1:
              return of({
                Response: MOCK_RESP_ACTIVITIES_PAGE2
              });
            case 2:
              return of({
                Response: MOCK_RESP_ACTIVITIES_PAGE3
              });

            default:
              return of({
                Response: {}
              });
              break;
          }
        }
      );

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      memberProfile.profile.data.dateLastPlayed = new Date();
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getAllRecentActivity(memberProfile, defaultCharacterId).subscribe((x) => {
        expect(serviceSpy).toHaveBeenCalledTimes(6);
      });
    });
    */
    /*
    it('should get all recent activity and stop when done', () => {
      // const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(
        (charId, memberId, memberType, getCount, something, pageNumber) => {
          switch (pageNumber) {
            case 0:
              return of({
                Response: MOCK_RESP_ACTIVITIES_PAGE1
              });
            case 1:
              return of({
                Response: MOCK_RESP_ACTIVITIES_PAGE2
              });
            case 2:
              return of({
                Response: {}
              });

            default:
              return of({
                Response: {}
              });
              break;
          }
        }
      );

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      memberProfile.profile.data.dateLastPlayed = new Date();

      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getAllRecentActivity(memberProfile, defaultCharacterId).subscribe((x) => {
        expect(serviceSpy).toHaveBeenCalledTimes(6);
        //expect(updateSpy).toHaveBeenCalledTimes(1);
        expect(x.activities.length).toBe(4);
      });
    });
    */
    /*
    it('should get all recent activity and stop when done at max page size', () => {
      // const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(
        (charId, memberId, memberType, getCount, something, pageNumber) => {
          return of({
            Response: MOCK_RESP_ACTIVITIES_PAGE1
          });
        }
      );

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      memberProfile.profile.data.dateLastPlayed = new Date();
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getAllRecentActivity(memberProfile, defaultCharacterId).subscribe((x) => {
        expect(serviceSpy).toHaveBeenCalledTimes(34);
        //expect(updateSpy).toHaveBeenCalledTimes(1);
        expect(x.activities.length).toBe(68);
      });
    });
    */

    // todo: Fix later
    it('should get profile from DB and not call service if cache is good', async (done) => {
      const mockDBItem = {
        ...MOCKED_DB_ACTIVITIES[0],
        createDate: nowPlusDays(-10)
      };
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of(mockDBItem);
      });

      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(
        (charId, memberId, memberType, getCount, something, pageNumber) => {
          switch (pageNumber) {
            case 0:
              return of({
                Response: MOCK_RESP_ACTIVITIES_PAGE1
              });
            default:
              return of({
                Response: {}
              });
              break;
          }
        }
      );

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      memberProfile.profile.data.dateLastPlayed = nowPlusDays(-100);
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_COMBINED.length);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(0);
        expect(updateSpy).toHaveBeenCalledTimes(0);
        done();
      });
    });

    it('should call service if not in DB', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of([]);
      });

      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(
        (charId, memberId, memberType, getCount, something, pageNumber) => {
          switch (pageNumber) {
            case 0:
              return of({
                Response: MOCK_RESP_ACTIVITIES_PAGE1
              });
            default:
              return of({
                Response: {}
              });
              break;
          }
        }
      );

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      memberProfile.profile.data.dateLastPlayed = new Date();
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_PAGE1.activities.length);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(5);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });
    it('should handle API down with DB data', async (done) => {
      const mockDBItem = {
        ...MOCKED_DB_ACTIVITIES[0],
        createDate: nowPlusDays(-10)
      };
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of(mockDBItem);
      });

      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404,
        statusText: 'Not Found'
      });
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(() => {
        return defer(() => Promise.reject(errorResponse));
      });

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      memberProfile.profile.data.dateLastPlayed = new Date();
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_COMBINED.length);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(4);
        expect(updateSpy).toHaveBeenCalledTimes(0);
        done();
      });
    });

    it('should handle API down with no DB data', async (done) => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of([]);
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404,
        statusText: 'Not Found'
      });
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(() => {
        return defer(() => Promise.reject(errorResponse));
      });

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      memberProfile.profile.data.dateLastPlayed = new Date();
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe(
        (x) => fail('should have returned error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toContain('404 error');
          done();
        }
      );
    });
  });

  describe('getMemberActivity', () => {
    it('getMemberActivity', () => {
      const mockDBItem = MOCKED_DB_ACTIVITIES;

      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of(mockDBItem);
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(
        (charId, memberId, memberType, getCount, something, pageNumber) => {
          switch (pageNumber) {
            case 0:
              return of({
                Response: MOCK_RESP_ACTIVITIES_PAGE1
              });
            default:
              return of({
                Response: {}
              });
              break;
          }
        }
      );

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;

      service.getMemberActivity(1, memberProfile).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_PAGE1.activities.length * 3);
        expect(dbGetSpy).toHaveBeenCalledTimes(3);
        expect(serviceSpy).toHaveBeenCalledTimes(15);
        expect(updateSpy).toHaveBeenCalledTimes(3);
      });
    });
  });
});
