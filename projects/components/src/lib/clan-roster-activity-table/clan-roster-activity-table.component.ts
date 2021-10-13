import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { getMemberProfileId } from '@destiny/data';
import { ActivityStats, MemberProfile } from 'bungie-models';
import { compare } from '../utilities/compare';

import { rowsAnimation } from '../core/animations/table-row';
import { animate, style, transition, trigger } from '@angular/animations';
import { PlaytimePipe } from '../pipes/playtime/playtime.pipe';

export interface MemberActivityRecentStats {
  profileName: string;
  lastNinetyDays?: string;
  lastMonth?: string;
  lastWeek?: string;
}

@Component({
  selector: 'lib-clan-roster-activity-table',
  templateUrl: './clan-roster-activity-table.component.html',
  styleUrls: ['./clan-roster-activity-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [rowsAnimation]
})
export class ClanRosterActivityTableComponent implements OnInit {
  @Input()
  isLoading: boolean = true;
  @Input()
  memberProfilesLoading: boolean;

  sortedData: ActivityStats[];

  pipe: PlaytimePipe = new PlaytimePipe();

  @Input()
  theme;

  _memberActivityStats;
  @Input()
  get memberActivityStats(): ActivityStats[] {
    return this._memberActivityStats;
  }
  set memberActivityStats(value) {
    this._memberActivityStats = value;
    this.sortedData = value.slice();
  }

  // _memberActivityStats;
  // @Input()
  // get memberActivityStats(): MemberActivityRecentStats[] {
  //   return this._memberActivityStats;
  // }
  // set memberActivityStat(value) {
  //   this._memberActivityStats = value;
  //   if (value) {
  //     this.sortedData = value.slice();
  //   }
  // }

  viewModel: MemberActivityRecentStats[] = [];

  // _members;
  // @Input()
  // get memberProfiles(): MemberProfile[] {
  //   return this._members;
  // }
  // set memberProfiles(value) {
  //   this._members = value;
  //   this.updateViewModel();
  // }

  // _memberActivities;
  // @Input()
  // get memberActivities(): MemberActivityRecentStats[] {
  //   return this._memberActivities;
  // }
  // set memberActivities(value) {
  //   this._memberActivities = value;
  //   this.updateViewModel();
  // }

  @Output() viewMember = new EventEmitter<MemberProfile>();
  //  sortedData: MemberProfile[];

  calculatedColumns = [
    { key: 'lastWeek', value: 'Last Week' },
    { key: 'lastMonth', value: 'Last Month' },
    { key: 'lastNinetyDays', value: 'Last 90 Days' }
  ];

  displayedColumns: string[] = [
    'displayName',
    'activityChart',
    ...this.calculatedColumns.map((x) => x.key),
    'activityLink'
  ];

  constructor() {}

  ngOnInit(): void {}
  export() {
    console.log(this.applyValues(this.sortedData));
    this.downloadCSV('', this.applyValues(this.sortedData));
  }

  applyValues(stats: ActivityStats[]): MemberActivityRecentStats[] {
    return stats.map((x) => {
      return {
        profileName: x.memberProfile.profile.data?.userInfo?.displayName,
        lastNinetyDays: this.pipe.transform(x.stats.lastNinetyDays),
        lastMonth: this.pipe.transform(x.stats.lastMonth),
        lastWeek: this.pipe.transform(x.stats.lastWeek)
      };
    });
  }

  // updateViewModel() {
  //   if (this.memberProfiles.length > 0) {
  //     if (this.memberProfiles.length !== this.viewModel.length) {
  //       this.viewModel = this.memberProfiles.map((x) => {
  //         return { profile: x, id: getMemberProfileId(x) };
  //       });
  //     }

  //     if (this.memberActivities) {
  //       this.memberActivities.forEach((x) => {
  //         const vmIndex = this.viewModel.findIndex((vm) => vm.id === x.id);
  //         if (vmIndex > -1) {
  //           const vm = this.viewModel[vmIndex];
  //           vm.lastMonth = x.lastMonth ?? 0;
  //           vm.lastNinetyDays = x.lastNinetyDays ?? 0;
  //           vm.lastWeek = x.lastWeek ?? 0;
  //           vm.activities = x.activities;
  //         }
  //       });
  //     }
  //   }
  // }

  memberClick(m: any) {
    this.viewMember.emit(m.memberProfile);
  }
  sortData(sort: Sort) {
    const data = this.memberActivityStats.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'displayName':
          return compare(
            a.memberProfile.profile.data.userInfo.displayName.toLowerCase(),
            b.memberProfile.profile.data.userInfo.displayName.toLowerCase(),
            isAsc
          );
        case 'lastWeek':
        case 'lastMonth':
        case 'lastNinetyDays':
          return compare(a.stats[sort.active] ?? 0, b.stats[sort.active], isAsc);
        default:
          return 0;
      }
    });
  }
  convertArrayOfObjectsToCSV(args) {
    let result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function (item) {
      ctr = 0;
      keys.forEach(function (key) {
        if (ctr > 0) {
          result += columnDelimiter;
        }

        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }
  downloadCSV(args, stockData) {
    let data, filename, link;
    let csv = this.convertArrayOfObjectsToCSV({
      data: stockData
    });
    if (csv == null) {
      return;
    }

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }
}
