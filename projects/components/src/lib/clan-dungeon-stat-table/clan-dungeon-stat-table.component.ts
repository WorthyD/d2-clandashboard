import { ChangeDetectionStrategy, Input, Component, OnInit } from '@angular/core';
import { AllDungeons, ActivityStats } from 'bungie-models';

import { Sort } from '@angular/material/sort';
import { compare } from '../utilities/compare';

@Component({
  selector: 'lib-clan-dungeon-stat-table',
  templateUrl: './clan-dungeon-stat-table.component.html',
  styleUrls: ['./clan-dungeon-stat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanDungeonStatTableComponent implements OnInit {
  _memberDungeonStats;
  @Input()
  get memberDungeonStats(): ActivityStats[] {
    return this._memberDungeonStats;
  }
  set  memberDungeonStats(value){
    this._memberDungeonStats = value;
    this.sortedData = value.slice();
  }

  @Input()
  isLoading: boolean = true;

  sortedData: ActivityStats[];
  allDungeons = AllDungeons;
  raidColumnsKeys: string[];
  displayedColumns: string[];

  constructor() {}

  ngOnInit(): void {
    this.updateColumns();
  }
  updateColumns() {
    this.displayedColumns = ['displayName', ...this.allDungeons.map((x) => x.key), 'dungeonLink'];
  }

  sortData(sort: Sort) {
    const data = this.memberDungeonStats.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'displayName':
          return compare(
            a.memberProfile.profile.data.userInfo.displayName.toLowerCase(), // TODO make sure this doesn't break.
            b.memberProfile.profile.data.userInfo.displayName.toLowerCase(),
            isAsc
          );
        default:
          return compare(a.stats[sort.active]?.activityCompletions, b.stats[sort.active]?.activityCompletions, isAsc);
      }
    });
  }


}
