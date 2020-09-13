import { Pipe, PipeTransform } from '@angular/core';
import { MemberRaidStats } from 'bungie-models';

import { AllRaids } from 'bungie-models';
@Pipe({
  name: 'raidCompletionTotal'
})
export class RaidCompletionTotalPipe implements PipeTransform {
  transform(elements: MemberRaidStats[], raidKey: string): unknown {
    if (raidKey) {
      return this.totalRaid(elements, raidKey);
    }

    return AllRaids.reduce((prev, cur) => {
      return prev + this.totalRaid(elements, cur.key);
    }, 0);
  }

  private totalRaid(elements: MemberRaidStats[], raidKey: string) {
    return elements.reduce((prev, cur) => {
      return prev + cur.stats[raidKey].activityCompletions;
    }, 0);
  }
}
