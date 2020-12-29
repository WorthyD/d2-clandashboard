import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';

import { Destiny2Service } from 'bungie-api-angular';
import { ClanDatabase } from '../ClanDatabase';
import { of, from, defer } from 'rxjs';
import { MOCK_DB_PROFILES, MOCK_WORTHY_PROFILE, MOCK_OMEGA_PROFILE } from '../../testing-utils/objects/profiles.mock';
import { MOCK_WORTHY_MEMBER, MOCK_OMEGA_MEMBER } from '../../testing-utils/objects/member.mock';
import { ClanMember, MemberProfile } from 'bungie-models';
import { HttpErrorResponse } from '@angular/common/http';
import { tap, toArray } from 'rxjs/operators';

describe('ProfileService', () => {
  let service: ProfileService;
  let dbService: ClanDatabase;
  let d2Service: Destiny2Service;

  const mockOldMember: unknown = MOCK_WORTHY_MEMBER as MemberProfile;
  const mockNewMember: unknown = MOCK_OMEGA_MEMBER as MemberProfile;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Destiny2Service, ProfileService, ClanDatabase]
    });
    service = TestBed.inject(ProfileService);
    dbService = TestBed.inject(ClanDatabase);
    d2Service = TestBed.inject(Destiny2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProfile', () => {
    it('should get profile from DB, but call service if expired', async (done) => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((a, b, id) => {
        return of(MOCK_DB_PROFILES.find((x) => x.id === id));
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return of({
          Response: MOCK_WORTHY_PROFILE
        });
      });

      service.getSerializedProfile('1', mockOldMember as ClanMember).subscribe((x) => {
        expect(x.profile.data.userInfo.displayName).toBe(MOCK_WORTHY_PROFILE.profile.data.userInfo.displayName);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
        done();
      });
    });

    it('should get profile from DB and not call service if cache is good', async (done) => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((a, b, id) => {
        return of(MOCK_DB_PROFILES.find((x) => x.id === id));
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return of({
          Response: MOCK_OMEGA_PROFILE
        });
      });

      service.getSerializedProfile('1', mockNewMember as ClanMember).subscribe((x) => {
        expect(x.profile.data.userInfo.displayName).toBe(MOCK_OMEGA_PROFILE.profile.data.userInfo.displayName);
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
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return of({
          Response: MOCK_WORTHY_PROFILE
        });
      });

      service.getSerializedProfile('1', mockOldMember as ClanMember).subscribe((x) => {
        expect(x.profile.data.userInfo.displayName).toBe(MOCK_WORTHY_PROFILE.profile.data.userInfo.displayName);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle API down with DB data', async (done) => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((a, b, id) => {
        return of(MOCK_DB_PROFILES.find((x) => x.id === id));
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const errorResponse = new HttpErrorResponse({
        error: '404 error',
        status: 404,
        statusText: 'Not Found'
      });
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return defer(() => Promise.reject(errorResponse));
      });

      service.getSerializedProfile('1', mockOldMember as ClanMember).subscribe((x) => {
        expect(x.profile.data.userInfo.displayName).toBe(MOCK_WORTHY_PROFILE.profile.data.userInfo.displayName);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
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
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return defer(() => Promise.reject(errorResponse));
      });

      service.getSerializedProfile('1', mockOldMember as ClanMember).subscribe(
        (x) => fail('should have returned error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404);
          expect(error.error).toContain('404 error');
          done();
        }
      );
    });
  });

  describe('getProfiles', () => {
    it('should get users profiles', () => {
      const dbGetSpy = spyOn(dbService, 'getById').and.callFake((a, b, id) => {
        return of(MOCK_DB_PROFILES.find((x) => x.id === id));
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return of({
          Response: MOCK_WORTHY_PROFILE
        });
      });

      const clanMembers = [mockOldMember, mockNewMember];
      service
        .getSerializedProfiles('1', clanMembers)
        .pipe(toArray())
        .subscribe(
          (x) => {
            expect(x.length).toEqual(clanMembers.length);
            expect(dbGetSpy).toHaveBeenCalledTimes(2);
            expect(updateSpy).toHaveBeenCalledTimes(1);
            expect(serviceSpy).toHaveBeenCalledTimes(1);
          },
          (err) => {}
        );
    });
  });
});
