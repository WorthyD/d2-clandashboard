import { ChangeDetectionStrategy, Input, Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { compare } from '../utilities/compare';

import { ActivityStats } from 'bungie-models';

@Component({
  selector: 'lib-clan-crucible-stats-table',
  templateUrl: './clan-crucible-stats-table.component.html',
  styleUrls: ['./clan-crucible-stats-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanCrucibleStatsTableComponent implements OnInit {
  _memberCrucibleStats;
  @Input()
  get memberCrucibleStats(): ActivityStats[] {
    return this._memberCrucibleStats;
  }
  set memberCrucibleStats(value) {
    this._memberCrucibleStats = value;
    this.sortedData = value.slice();
  }

  @Input()
  isLoading = true;

  sortedData: ActivityStats[];
  displayedColumns: string[] = ['displayName', 'valorPoints', 'gloryPoints'];

  constructor() {}

  ngOnInit(): void {}
  sortData(sort: Sort) {
    const data = this.memberCrucibleStats.slice();
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
          return compare(a.stats[sort.active], b.stats[sort.active], isAsc);
      }
    });
  }
}
