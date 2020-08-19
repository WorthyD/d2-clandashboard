import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';
import { MembershipTypes } from '@destiny/models/enums';
import { getRaidReportUrl } from './base-raid-report-url';

@Pipe({
  name: 'raidReportProfileUrl'
})
export class RaidReportProfileUrlPipe implements PipeTransform {
  transform(value: MemberProfile): string {
    return getRaidReportUrl(
      value.profile.data.userInfo.membershipType,
      value.profile.data.userInfo.displayName,
      value.profile.data.userInfo.membershipId
    );
  }
}
