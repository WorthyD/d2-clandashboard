import { ClanMemberActivityService } from 'projects/data/src/lib/clan-db/clan-member-activity/clan-member-activity.service';

import { ClanDatabase } from 'projects/data/src/lib/clan-db/ClanDatabase';
import { WeeklyClanAggregateTimeService } from 'projects/data/src/lib/stat-aggregators/clan-aggregate-time/weekly-clan-aggregate-time.service';
import { playtime } from 'projects/data/src/lib/utility/date-utils';
import { map, take } from 'rxjs/operators';

addEventListener('message', ({ data }) => {
  const clanDatabase = new ClanDatabase();
  const profileService = new ClanMemberActivityService(clanDatabase, data.apiKey);
  const weekAggregator = new WeeklyClanAggregateTimeService(clanDatabase, data.apiKey);

  console.log(data.memberProfiles);
  profileService
    .getAllActivitiesFromCache2(data.clanId, data.memberProfiles, data.activityId)
    .pipe(
      take(1),
      map((x) => {
        return x.map((y) => {
          return {
            ...y,
            profileName: data.memberProfiles.find(
              (p) => `${p.profile.data.userInfo.membershipType}-${p.profile.data.userInfo.membershipId}` === y.id
            )?.profile.data.userInfo.displayName
          };
        });
      }),
      map((x) => {
        return {
          events: weekAggregator.getClanActivityStatsForDuration(x, 0),
          players: weekAggregator
            .getClanActivityByPlayer(x, 0)
            .sort((a, b) => {
              return b.seconds - a.seconds;
            })
            .map((y) => {
              return {
                name: data.memberProfiles.find(
                  (p) => `${p.profile.data.userInfo.membershipType}-${p.profile.data.userInfo.membershipId}` === y.id
                )?.profile.data.userInfo.displayName,
                value: playtime(y.seconds)
              };
            })
        };
      })
    )
    .subscribe((x) => {
      postMessage({ type: 'complete', data: x });
    });
});
