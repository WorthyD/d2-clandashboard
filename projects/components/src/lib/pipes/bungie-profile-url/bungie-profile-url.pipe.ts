import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';

@Pipe({
  name: 'bungieProfileUrl'
})
export class BungieProfileUrlPipe implements PipeTransform {
  readonly baseUrl = 'https://bungie.net/en/profile/';

  transform(value: MemberProfile): unknown {
    return `${this.baseUrl}${value.profile.data?.userInfo?.membershipType}/${value.profile.data?.userInfo?.membershipId}`;
  }
}
