import { Pipe, PipeTransform } from '@angular/core';

import { AllDungeons, ActivityStats } from 'bungie-models';
@Pipe({
  name: 'dungeonCompletionTotal'
})
export class DungeonCompletionTotalPipe implements PipeTransform {
  transform(elements: ActivityStats[], dungeonKey: string): unknown {
    if (dungeonKey) {
      return this.totalRaid(elements, dungeonKey);
    }

    return AllDungeons.reduce((prev, cur) => {
      return prev + this.totalRaid(elements, cur.key);
    }, 0);
  }

  private totalRaid(elements: ActivityStats[], raidKey: string) {
    return elements.reduce((prev, cur) => {
      return prev + cur.stats[raidKey].activityCompletions;
    }, 0);
  }
}
