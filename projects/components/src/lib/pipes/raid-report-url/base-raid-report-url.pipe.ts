import { Pipe, PipeTransform } from '@angular/core';
import { ClanMember } from 'bungie-models';
import { MembershipTypes } from '@destiny/models/enums';

@Pipe({
  name: 'raidReportUrl'
})
export class RaidReportUrlPipe implements PipeTransform {
  readonly baseUrl = 'https://raid.report';
  transform(value: ClanMember): string {
    switch (value.destinyUserInfo.membershipType) {
      case MembershipTypes.Xbox:
        return this.getXBOXUrl(value);
      case MembershipTypes.Psn:
        return this.getPSUrl(value);
      case MembershipTypes.Steam:
        return this.getPCUrl(value);
      case MembershipTypes.Stadia:
        return this.getStadiaUrl(value);
      default:
        return '';
    }
  }

  getPSUrl(value: ClanMember) {
    return `${this.baseUrl}/ps/${escape(value.destinyUserInfo.displayName)}`;
  }

  getXBOXUrl(value: ClanMember) {
    return `${this.baseUrl}/xb/${escape(value.destinyUserInfo.displayName)}`;
  }

  getPCUrl(value: ClanMember) {
    return `${this.baseUrl}/pc/${value.destinyUserInfo.membershipId}`;
  }
  getStadiaUrl(value: ClanMember) {
    return `${this.baseUrl}/stadia/${value.destinyUserInfo.membershipId}`;
  }
}
