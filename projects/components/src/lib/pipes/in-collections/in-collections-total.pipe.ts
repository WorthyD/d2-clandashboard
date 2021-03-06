import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';
import { hasItem } from './has-item';

@Pipe({
  name: 'inCollectionsTotal'
})
export class InCollectionsTotalPipe implements PipeTransform {
  transform(memberProfiles: MemberProfile[], collectionHash: number): unknown {
    return memberProfiles.reduce((prev, cur) => {
      const value = hasItem(cur.profileCollectibles?.data?.collectibles[collectionHash]) ? 1 : 0;
      return prev + value;
    }, 0);
  }
}
