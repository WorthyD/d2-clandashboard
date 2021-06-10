import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';

@Pipe({
  name: 'd2ChecklistUrl'
})
export class D2ChecklistUrlPipe implements PipeTransform {

  readonly baseUrl = 'https://www.d2checklist.com/';

  transform(value: MemberProfile): unknown {
    return `${this.baseUrl}${value.profile.data?.userInfo?.membershipType}/${value.profile.data?.userInfo?.membershipId}`;
  }
}
