import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';
import { compare } from '../../utilities/compare';

@Pipe({
  name: 'sortByClass'
})
export class SortByClassPipe implements PipeTransform {
  transform(characterHash: string[], profile: MemberProfile): unknown {
    // console.log(characterHash);
    // console.log(profile);
    // console.log(profile?.characters.data[characterHash[0]].classType);
     const sorted = characterHash?.sort((a, b) => {
        return compare(profile?.characters?.data[a]?.classType, profile?.characters?.data[b]?.classType, true);
      });
    console.log('sorted', sorted);

    return characterHash?.sort((a, b) => {
      // console.log(compare(profile?.characters.data[a].classType, profile?.characters.data[b].classType, true));
      return compare(profile?.characters?.data[a]?.classType, profile?.characters?.data[b]?.classType, true);
    });
  }
}
