import { Pipe, PipeTransform } from '@angular/core';

import { ClanMember } from 'bungie-models';
import { MembershipTypes } from '@destiny/models/enums';

@Pipe({
  name: 'destinyTrackerUrl'
})
export class DestinyTrackerUrlPipe implements PipeTransform {
  readonly baseUrl = 'https://destinytracker.com/destiny-2/profile';
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
    return `${this.baseUrl}/psn/${escape(value.destinyUserInfo.displayName)}`;
  }

  getXBOXUrl(value: ClanMember) {
    return `${this.baseUrl}/xbl/${escape(value.destinyUserInfo.displayName)}`;
  }

  getPCUrl(value: ClanMember) {
    return `${this.baseUrl}/steam/${value.destinyUserInfo.membershipId}`;
  }
  getStadiaUrl(value: ClanMember) {
    return `${this.baseUrl}/stadia/${value.destinyUserInfo.membershipId}`;
  }
}
