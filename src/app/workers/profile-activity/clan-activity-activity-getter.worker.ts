import { ClanMemberActivityService } from 'projects/data/src/lib/clan-db/clan-member-activity/clan-member-activity.service';

import { ClanDatabase } from 'projects/data/src/lib/clan-db/ClanDatabase';
import { take } from 'rxjs/operators';

addEventListener('message', ({ data }) => {
  const clanDatabase = new ClanDatabase();
  const profileService = new ClanMemberActivityService(clanDatabase, data.apiKey);


  profileService
    .getAllActivitiesFromCache2(data.clanId, data.memberProfiles, data.activityId)
    .pipe(take(1))
    .subscribe((x) => {
      postMessage({ type: 'complete', data: x });
    });
});
