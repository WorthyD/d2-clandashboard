import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';

@Pipe({
  name: 'sealCompleted'
})
export class SealCompletedPipe implements PipeTransform {
  transform(value: MemberProfile[], hash): any[] {
    // TODO: Find new way to do this. Put in separate file or something.
    const completed = value.filter((m) => {
      const records = m.profileRecords.data.records[hash]?.objectives;

      if (records) {
        return records[0]?.complete;
      }
      return false;
    });

    return completed;
  }
}
