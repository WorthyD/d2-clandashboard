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
  set memberDungeonStats(value) {
    this._memberDungeonStats = value;
    this.sortedData = value.slice();
  }

  @Input()
  isLoading: boolean = true;
  showVaultedContent = false;
  allDungeons;
  sortedData: ActivityStats[];
  raidColumnsKeys: string[];
  displayedColumns: string[];

  constructor() {}

  ngOnInit(): void {
    this.updateColumns();
  }
  updateColumns() {
    this.allDungeons = this.getDungeons();
    this.displayedColumns = ['displayName', ...this.allDungeons.map((x) => x.key), 'dungeonLink'];
  }
  getDungeons() {
    return AllDungeons.filter((x) => {
      if (this.showVaultedContent === false) {
        return x.isVaulted === false;
      }
      return true;
    }).sort((a, b) => a.sortOrder - b.sortOrder);
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
  changeVaulted(event) {
    this.showVaultedContent = event.checked;
    this.updateColumns();
  }
}
