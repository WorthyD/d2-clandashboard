import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { getMemberProfileId } from '@destiny/data';
import { MemberProfile } from 'bungie-models';
import { compare } from '../utilities/compare';

import { rowsAnimation } from '../core/animations/table-row';
import { animate, style, transition, trigger } from '@angular/animations';

export interface MemberActivityRecentStats {
  profile: MemberProfile;
  id: string;
  isLoadingStats?: boolean;
  lastNinetyDays?: number;
  lastMonth?: number;
  lastWeek?: number;
  activities?: any[];
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

  _members;
  @Input()
  get memberProfiles(): MemberProfile[] {
    return this._members;
  }
  set memberProfiles(value) {
    this._members = value;
    this.updateViewModel();
  }

  _memberActivities;
  @Input()
  get memberActivities(): MemberActivityRecentStats[] {
    return this._memberActivities;
  }
  set memberActivities(value) {
    this._memberActivities = value;
    this.updateViewModel();
  }

  @Output() viewMember = new EventEmitter<MemberProfile>();
  sortedData: MemberProfile[];

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

  updateViewModel() {
    if (this.memberProfiles.length > 0) {
      if (this.memberProfiles.length !== this.viewModel.length) {
        this.viewModel = this.memberProfiles.map((x) => {
          return { profile: x, id: getMemberProfileId(x) };
        });
      }

      if (this.memberActivities) {
        this.memberActivities.forEach((x) => {
          const vmIndex = this.viewModel.findIndex((vm) => vm.id === x.id);
          if (vmIndex > -1) {
            const vm = this.viewModel[vmIndex];
            vm.lastMonth = x.lastMonth ?? 0;
            vm.lastNinetyDays = x.lastNinetyDays ?? 0;
            vm.lastWeek = x.lastWeek ?? 0;
            vm.activities = x.activities;
          }
        });
      }
    }
  }

  memberClick(m: any) {
    this.viewMember.emit(m.profile);
  }
  sortData(sort: Sort) {
    const data = this.viewModel.slice();
    if (!sort.active || sort.direction === '') {
      this.viewModel = data;
      return;
    }

    this.viewModel = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'displayName':
          return compare(
            a.profile.profile.data.userInfo.displayName.toLowerCase(),
            b.profile.profile.data.userInfo.displayName.toLowerCase(),
            isAsc
          );
        case 'lastWeek':
        case 'lastMonth':
        case 'lastNinetyDays':
          return compare(a[sort.active] ?? 0, b[sort.active], isAsc);
        default:
          return 0;
      }
    });
  }
}
