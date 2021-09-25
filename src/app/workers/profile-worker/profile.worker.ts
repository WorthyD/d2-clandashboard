import { ClanDatabase } from 'projects/data/src/lib/clan-db/ClanDatabase';
import { ProfileService } from 'projects/data/src/lib/clan-db/profiles/profile.service';
import { take } from 'rxjs/operators';
//import { environment } from '../../../environments/environment';

addEventListener('message', ({ data }) => {
  const clanDatabase = new ClanDatabase();
  const profileService = new ProfileService(clanDatabase, data.apiKey);

  const progress = (progressData) => {
    postMessage({ type: 'progress', data: progressData });
  };

  profileService
    .getSerializedProfilesWithProgress(data.clanId, data.clanMembers, progress)
    .pipe(take(1))
    .subscribe((x) => {
      postMessage({ type: 'complete', data: x });
    });
});
