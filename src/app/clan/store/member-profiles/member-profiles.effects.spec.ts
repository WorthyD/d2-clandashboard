import * as assert from 'assert';
import { TestScheduler } from 'rxjs/testing';
import { ProfileService, ClanDatabase } from '@destiny/data';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Destiny2Service } from 'bungie-api';
import { loadMemberProfiles } from './member-profiles.actions';
import { Actions } from '@ngrx/effects';
import { MemberProfileEffects } from './member-profiles.effects';
import { MOCK_DB_PROFILES, MOCK_WORTHY_PROFILE } from 'projects/data/src/lib/testing-utils/objects/profiles.mock';
import { of } from 'rxjs';
import { MOCK_WORTHY_MEMBER, MOCK_OMEGA_MEMBER } from 'projects/data/src/lib/testing-utils/objects/member.mock';
import { MemberProfile } from 'bungie-models';

describe('Member Profile Effects', () => {
  let service: ProfileService;
  let scheduler;
  let dbService: ClanDatabase;
  let d2Service: Destiny2Service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Destiny2Service, ProfileService, ClanDatabase]
    });
    service = TestBed.inject(ProfileService);
    dbService = TestBed.inject(ClanDatabase);
    d2Service = TestBed.inject(Destiny2Service);

    scheduler = new TestScheduler((actual, expected) => assert.deepStrictEqual(actual, expected));
  });

  it('should emit actionScanFrequencySuccess on success', () => {
    scheduler.run((helpers) => {
      const dbGetSpy = spyOn(dbService, 'getValues').and.callFake(() => {
        return { MemberProfiles: of(MOCK_DB_PROFILES) };
      });
      const updateSpy = spyOn(dbService, 'update').and.callThrough();
      const serviceSpy = spyOn(d2Service, 'destiny2GetProfile').and.callFake(() => {
        return of({
          Response: MOCK_WORTHY_PROFILE
        });
      });

      const { cold } = helpers;

      const mockOldMember: unknown = MOCK_WORTHY_MEMBER as MemberProfile;
      const mockNewMember: unknown = MOCK_OMEGA_MEMBER as MemberProfile;
      const clanMembers = [mockOldMember, mockNewMember];
      const loadAction = loadMemberProfiles({ clanId: 1, clanMembers: clanMembers });
      const values = {
        a: loadAction
      };
      const source = cold('a', values);
      const actions = new Actions(source);


      const effects = new MemberProfileEffects(actions, service);

      effects.loadProfiles$.subscribe((result) => {
        console.log(result);
        //expect(result).toEqual(successAction);
      });
    });
  });
});
