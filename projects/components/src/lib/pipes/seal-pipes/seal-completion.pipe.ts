import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';

@Pipe({
  name: 'sealCompletion'
})
export class SealCompletionPipe implements PipeTransform {

  transform(value: MemberProfile[], hash): unknown {
    const totalCount = value.length;

    const completeCount = value.filter((m) => {
      const records = m.profileRecords.data.records[hash]?.objectives;

      if (records) {
        return records[0]?.complete;
      }
      return false;
    }).length;

    return `${completeCount} / ${totalCount}`;
  }
}
