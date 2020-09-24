import { Pipe, PipeTransform } from '@angular/core';
import { getMemberProfileId } from '@destiny/data';
import { MemberActivityRecentStats, MemberProfile } from 'bungie-models';

@Pipe({
  name: 'activitySelector'
})
export class ActivitySelectorPipe implements PipeTransform {
  transform(activities: MemberActivityRecentStats[], user: MemberProfile): MemberActivityRecentStats {
    return activities?.find((x) => x.id === getMemberProfileId(user));
  }
}
