import { Pipe, PipeTransform } from '@angular/core';
import { ClanMember } from 'bungie-models';

@Pipe({
  name: 'raidReportUrl'
})
export class RaidReportUrlPipe implements PipeTransform {
  readonly baseUrl = 'https://raid.report';
  transform(value: ClanMember): string {
    switch (value.destinyUserInfo.membershipType) {
      case 1:
        return this.getXBOXUrl(value);
      case 2:
        return this.getPSUrl(value);
      case 3:
        return this.getPCUrl(value);
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
}
