import { Pipe, PipeTransform } from '@angular/core';
import { ClanMember } from 'bungie-models';
@Pipe({
  name: 'bungieProfileUrl'
})
export class BungieProfileUrlPipe implements PipeTransform {
  readonly baseUrl = 'https://bungie.net/en/profile/';

  transform(value: ClanMember): unknown {
    return `${this.baseUrl}${value.destinyUserInfo.membershipType}/${value.destinyUserInfo.membershipId}`;
  }
}
