import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MemberRaidStats, AllRaids } from 'bungie-models';
import { Sort } from '@angular/material/sort';
import { compare } from '../utilities/compare';

@Component({
  selector: 'lib-clan-raid-stat-table',
  templateUrl: './clan-raid-stat-table.component.html',
  styleUrls: ['./clan-raid-stat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanRaidStatTableComponent implements OnInit {
  _memberRaidStats;
  @Input()
  get memberRaidStats(): MemberRaidStats[] {
    return this._memberRaidStats;
  }
  set memberRaidStats(value) {
    this._memberRaidStats = value;
    this.sortedData = value.slice();
  }

  @Input()
  isLoading: boolean = true;

  showGG = false;
  sortedData: MemberRaidStats[];

  // allRaids = AllRaids.filter((x) => {
  //   console.log('filtering');
  //   if (this.showGG === false) {
  //     return x.isGuidedGames === false;
  //   }
  //   return true;
  // }).sort((a, b) => a.sortOrder - b.sortOrder);
  allRaids;
  raidColumnsKeys: string[]; // = this.allRaids.map((r) => r.key);
  displayedColumns: string[]; // = ['displayName', ...this.raidColumnsKeys];

  constructor() {}

  ngOnInit(): void {
    this.updateColumns();
  }

  getRaids() {
    return AllRaids.filter((x) => {
      if (this.showGG === false) {
        return x.isGuidedGames === false;
      }
      return true;
    }).sort((a, b) => a.sortOrder - b.sortOrder);
  }
  updateColumns() {
    this.allRaids = this.getRaids();
    this.displayedColumns = ['displayName', ...this.allRaids.map((x) => x.key)];
  }

  sortData(sort: Sort) {
    const data = this.memberRaidStats.slice();
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
  changeGG(event) {
    this.showGG = event.checked;
    this.updateColumns();
  }
}
