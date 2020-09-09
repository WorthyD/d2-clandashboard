import { TestBed } from '@angular/core/testing';

import { ClanMemberActivityService } from './clan-member-activity.service';
import { ClanDatabase } from '../ClanDatabase';
import { Destiny2Service } from 'bungie-api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, defer } from 'rxjs';
import * as moment from 'moment';
import * as _ from 'lodash';
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

  describe('getMemberCharacterActivitySerialized', () => {
    it('should get profile from DB, but call service if expired', () => {
      const mockDBItem = {
        ...MOCK_DB_ACTIVITIES[0],
        createDate: new Date(moment(new Date()).add(-10, 'days').valueOf())
      };
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake(() => {
        return of(mockDBItem);
      });

      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetActivityHistory').and.callFake(() => {
        return of({
          Response: MOCK_RESP_ACTIVITIES_COMBINED
        });
      });

      const memberProfile = ({ ...MOCK_WORTHY_PROFILE } as unknown) as MemberProfile;
      _.set(memberProfile, 'profile.data.dateLastPlayed', new Date());
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_COMBINED.activities.length);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });
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
      _.set(memberProfile, 'profile.data.dateLastPlayed', new Date());
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getAllRecentActivity(memberProfile, defaultCharacterId).subscribe((x) => {
        //expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(3);
        //expect(updateSpy).toHaveBeenCalledTimes(1);
        //expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES.activities.length);
      });
    });
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
      _.set(memberProfile, 'profile.data.dateLastPlayed', new Date());
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getAllRecentActivity(memberProfile, defaultCharacterId).subscribe((x) => {
        expect(serviceSpy).toHaveBeenCalledTimes(3);
        //expect(updateSpy).toHaveBeenCalledTimes(1);
        expect(x.activities.length).toBe(4);
      });
    });
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
      _.set(memberProfile, 'profile.data.dateLastPlayed', new Date());
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getAllRecentActivity(memberProfile, defaultCharacterId).subscribe((x) => {
        expect(serviceSpy).toHaveBeenCalledTimes(31);
        //expect(updateSpy).toHaveBeenCalledTimes(1);
        expect(x.activities.length).toBe(62);
      });
    });

    it('should get profile from DB and not call service if cache is good', () => {
      const mockDBItem = {
        ...MOCK_DB_ACTIVITIES[0],
        createDate: new Date(moment(new Date()).add(-10, 'days').valueOf())
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
      _.set(memberProfile, 'profile.data.dateLastPlayed', new Date(moment(new Date()).add(-100, 'days').valueOf()));
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_COMBINED.activities.length);
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
      _.set(memberProfile, 'profile.data.dateLastPlayed', new Date());
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_PAGE1.activities.length);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });
    it('should handle API down with DB data', () => {
      const mockDBItem = {
        ...MOCK_DB_ACTIVITIES[0],
        createDate: new Date(moment(new Date()).add(-10, 'days').valueOf())
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
      _.set(memberProfile, 'profile.data.dateLastPlayed', new Date());
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe((x) => {
        expect(x.activities.length).toBe(MOCK_RESP_ACTIVITIES_COMBINED.activities.length);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(0);
      });
    });

    it('should handle API down with no DB data', () => {
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
      _.set(memberProfile, 'profile.data.dateLastPlayed', new Date());
      const defaultCharacterId = memberProfile.profile.data.characterIds[0];

      service.getMemberCharacterActivitySerialized(1, memberProfile, defaultCharacterId).subscribe(
        (x) => fail('should have returned error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toContain('404 error');
        }
      );
    });
  });

  describe('getMemberActivity', () => {
    it('getMemberActivity', () => {
      const mockDBItem = MOCK_DB_ACTIVITIES;

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
        expect(serviceSpy).toHaveBeenCalledTimes(3);
        expect(updateSpy).toHaveBeenCalledTimes(3);
      });
    });
  });
});
