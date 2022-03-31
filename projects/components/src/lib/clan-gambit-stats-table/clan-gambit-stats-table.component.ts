import { ChangeDetectionStrategy, Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { compare } from '../utilities/compare';

import { ActivityStats, MemberProfile } from 'bungie-models';
import { downloadCSV } from 'projects/data/src/lib/utility/export-to-csv';
import { formatDate } from 'projects/data/src/lib/utility/format-date';


@Component({
  selector: 'lib-clan-gambit-stats-table',
  templateUrl: './clan-gambit-stats-table.component.html',
  styleUrls: ['./clan-gambit-stats-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanGambitStatsTableComponent implements OnInit {
  _memberGambitStats;
  @Input()
  get memberGambitStats(): ActivityStats[] {
    return this._memberGambitStats;
  }
  set memberGambitStats(value) {
    this._memberGambitStats = value;
    this.sortedData = value.slice();
  }

  @Input()
  isLoading = true;
  @Output() viewMember = new EventEmitter<MemberProfile>();
  sortedData: ActivityStats[];
  displayedColumns: string[] = ['displayName', 'infamyPoints', 'infamyResets', 'controls'];

  constructor() {}

  ngOnInit(): void {}
  sortData(sort: Sort) {
    const data = this.memberGambitStats.slice();
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
  memberClick(m: ActivityStats) {
    this.viewMember.emit(m.memberProfile);
  }
  export() {
    downloadCSV({ filename: `clan-gambit-stats-${formatDate(new Date())}` }, this.applyValues(this.sortedData));
  }
  applyValues(stats: ActivityStats[]) {
    return stats.map((x) => {
      return {
        'Destiny Membership Id': x.memberProfile.profile.data.userInfo.membershipId,
        'Destiny Display Name': x.memberProfile.profile.data.userInfo.displayName,
        'Infamy Points': x.stats.infamyPoints,
        'Total Infamy Resets': x.stats.infamyResets
      };
    });
  }
}
