import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MemberProfile, RaidInfo, MetricDisplayType } from 'bungie-models';
import { Sort } from '@angular/material/sort';
import { compare } from '../utilities/compare';
@Component({
  selector: 'lib-clan-raid-details-table',
  templateUrl: './clan-raid-details-table.component.html',
  styleUrls: ['./clan-raid-details-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanRaidDetailsTableComponent implements OnInit {
  _memberRaidStats;

  @Input()
  get memberRaidStats(): MemberProfile[] {
    return this._memberRaidStats;
  }
  set memberRaidStats(value) {
    this._memberRaidStats = value;
    this.sortedData = value.slice();
  }
  sortedData: MemberProfile[];

  @Input()
  isLoading: boolean = true;

  _raidInfo;
  @Input()
  get raidInfo(): RaidInfo {
    return this._raidInfo;
  }
  set raidInfo(value) {
    this._raidInfo = value;
    this.updateColumns();
  }

  displayedColumns: string[] = [];

  displayThing = MetricDisplayType;

  constructor() {}

  updateColumns() {
    if (this.raidInfo) {
      this.displayedColumns = ['displayName', ...this.raidInfo.trackedMetrics.map((x) => x.key)];
    }
  }

  ngOnInit(): void {}
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
            a.profile.data.userInfo.displayName.toLowerCase(), // TODO make sure this doesn't break.
            b.profile.data.userInfo.displayName.toLowerCase(),
            isAsc
          );
        default:
        // return compare(a.stats[sort.active]?.activityCompletions, b.stats[sort.active]?.activityCompletions, isAsc);
      }
    });
  }
}
