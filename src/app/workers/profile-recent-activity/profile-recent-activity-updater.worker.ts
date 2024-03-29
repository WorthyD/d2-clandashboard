// import { ClanMemberActivityService } from 'projects/data/src/lib/clan-db/clan-member-activity/clan-member-activity.service';
import { ClanMemberRecentActivityService } from 'projects/data/src/lib/clan-db/clan-member-recent-activity/clan-member-recent-activity.service';
import { ClanDatabase } from 'projects/data/src/lib/clan-db/ClanDatabase';
import { take } from 'rxjs/operators';

addEventListener('message', ({ data }) => {
  const clanDatabase = new ClanDatabase();
  const profileService = new ClanMemberRecentActivityService(clanDatabase, data.apiKey);

  const progress = (progressData) => {
    postMessage({ type: 'progress', data: progressData });
  };

  profileService
    .updateAllActivityCache(data.clanId, data.clanMembers, progress)
    .pipe(take(1))
    .subscribe((x) => {
      postMessage({ type: 'complete', data: x });
    });
});
