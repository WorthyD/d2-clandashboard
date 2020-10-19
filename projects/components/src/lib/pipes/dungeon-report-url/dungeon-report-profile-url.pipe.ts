import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';
import { getDungeonReportUrl } from './base-dungeon-report'

@Pipe({
  name: 'dungeonReportProfileUrl'
})
export class DungeonReportProfileUrlPipe implements PipeTransform {

  transform(value: MemberProfile): string {
    return getDungeonReportUrl(
      value.profile.data.userInfo.membershipType,
      value.profile.data.userInfo.displayName,
      value.profile.data.userInfo.membershipId
    );
  }
}
