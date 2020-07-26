import { Pipe, PipeTransform } from '@angular/core';
import { MemberProfile } from 'bungie-models';

@Pipe({
  name: 'completion',
  pure: true
})
export class CompletionPipe implements PipeTransform {
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

@Pipe({
  name: 'completed',
  pure: true
})
export class CompletedPipe implements PipeTransform {
  transform(value: MemberProfile[], hash): unknown {
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
