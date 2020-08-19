import { Pipe, PipeTransform } from '@angular/core';
import { ClanMember } from 'bungie-models';
import { MembershipTypes } from '@destiny/models/enums';
import { getRaidReportUrl } from './base-raid-report-url';

@Pipe({
  name: 'raidReportUrl'
})
export class RaidReportUrlPipe implements PipeTransform {
  transform(value: ClanMember): string {
    return getRaidReportUrl(
      value.destinyUserInfo.membershipType,
      value.destinyUserInfo.displayName,
      value.destinyUserInfo.membershipId
    );
  }
}
