import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';

import { Destiny2Service } from 'bungie-api';
import { ClanDatabase } from '../ClanDatabase';
import { of, from } from 'rxjs';
import { MOCK_DB_PROFILES, MOCK_WORTHY_PROFILE, MOCK_OMEGA_PROFILE } from '../../testing-utils/objects/profiles.mock';
import { MOCK_WORTHY_MEMBER, MOCK_OMEGA_MEMBER } from '../../testing-utils/objects/member.mock';
import { ClanMember, MemberProfile } from 'bungie-models';

describe('ProfileService', () => {
  let service: ProfileService;
  let dbService: ClanDatabase;
  let d2Service: Destiny2Service;

  const mockOldMember: unknown = MOCK_WORTHY_MEMBER;
  const mockNewMember: unknown = MOCK_OMEGA_MEMBER;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Destiny2Service, ProfileService]
    });
    service = TestBed.inject(ProfileService);
    dbService = TestBed.inject(ClanDatabase);
    d2Service = TestBed.inject(Destiny2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProfile', () => {
    it('should get profile from DB, but call service if expired', () => {
      const dbGetSpy = spyOn(dbService, 'getValues').and.callFake(() => {
        return { MemberProfiles: of(MOCK_DB_PROFILES) };
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return of({
          Response: MOCK_WORTHY_PROFILE
        });
      });

      service.getProfile('1', mockOldMember as ClanMember).subscribe((x) => {
        expect(x).toBe((MOCK_WORTHY_PROFILE as unknown) as MemberProfile);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });

    it('should get profile from DB and not call service if cache is good', () => {
      const dbGetSpy = spyOn(dbService, 'getValues').and.callFake(() => {
        return { MemberProfiles: of(MOCK_DB_PROFILES) };
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return of({
          Response: MOCK_OMEGA_PROFILE
        });
      });

      service.getProfile('1', mockNewMember as ClanMember).subscribe((x) => {
        expect(x).toBe((MOCK_OMEGA_PROFILE as unknown) as MemberProfile);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(0);
        expect(updateSpy).toHaveBeenCalledTimes(0);
      });
    });

    it('should call service if not in DB', () => {
      const dbGetSpy = spyOn(dbService, 'getValues').and.callFake(() => {
        return { MemberProfiles: of([]) };
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return of({
          Response: MOCK_WORTHY_PROFILE
        });
      });

      service.getProfile('1', mockOldMember as ClanMember).subscribe((x) => {
        expect(x).toBe((MOCK_WORTHY_PROFILE as unknown) as MemberProfile);
        expect(dbGetSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(updateSpy).toHaveBeenCalledTimes(1);
      });
    });

    it('should handle API down', () => {

    });
  });
});
