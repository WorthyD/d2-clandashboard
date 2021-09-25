import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MemberProfile } from 'bungie-models';
import { of } from 'rxjs';

import { ClanDatabase, ClanMemberRecentActivityService, ProfileService } from '../../clan-db';
import { MOCK_RESP_ACTIVITIES_COMBINED } from '../../testing-utils/objects/member-activities.mock';
import { getBungieStartDate, nowPlusDays } from '../../utility/date-utils';
import { WeeklyClanAggregateTimeService } from './weekly-clan-aggregate-time.service';
import { formatDate } from '../../utility/format-date';

function datePlusDays(date: Date, days: number) {
  return new Date(new Date().setDate(date.getDate() + days));
}
const yesterday = getBungieStartDate(nowPlusDays(-1));
const lastWeek = datePlusDays(new Date(yesterday), -4);
const twoWeeks = datePlusDays(new Date(yesterday), -15);
const twoWeeks2 = datePlusDays(new Date(yesterday), -18);
const threeWeeks = datePlusDays(new Date(yesterday), -22);
const dates = [lastWeek, twoWeeks, twoWeeks2, threeWeeks];


const dummyActivities = dates.map((x) => {
  return {
    date: x,
    seconds: 100
  };
});
describe('WeeklyClanAggregateTimeService', () => {
  let service: WeeklyClanAggregateTimeService;
  //let profileService: ProfileService;
  let activityService: ClanMemberRecentActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ ClanMemberRecentActivityService, ClanDatabase]
    });
    service = TestBed.inject(WeeklyClanAggregateTimeService);
    // profileService = TestBed.inject(ProfileService);
    activityService = TestBed.inject(ClanMemberRecentActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('should aggregate days of data', () => {
    let serviceSpy;

    it('should be a function', () => {
      expect(service.getClanActivityStatsForDuration).toBeDefined();
    });

    it('should appropriately group by week', () => {
      const activities = [
        { id: '0', activities: dummyActivities },
        { id: '1', activities: dummyActivities }
      ];
      const orig = JSON.stringify(activities);

      const grouped = service.getClanActivityStatsForDuration(activities, 0);
      expect(grouped.length).toBe(3);
      expect(JSON.stringify(activities)).toEqual(orig);
    });
    it('should sum accurately', () => {
      const activities = [
        { id: '0', activities: dummyActivities },
        { id: '1', activities: dummyActivities }
      ];
      const orig = JSON.stringify(activities);
      const grouped = service.getClanActivityStatsForDuration(activities, 0);
      expect(grouped[0].seconds).toBe(200);
      expect(JSON.stringify(activities)).toEqual(orig);
    });
  });
});
