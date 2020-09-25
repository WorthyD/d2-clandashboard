import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { getMemberProfileId } from '@destiny/data';
import { MemberProfile } from 'bungie-models';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanRosterActivityTableComponent implements OnInit {
  @Input()
  isLoading: boolean = true;

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

  calculatedColumns = ['lastWeek', 'lastMonth', 'lastNinetyDays'];

  displayedColumns: string[] = ['displayName', 'activityChart', ...this.calculatedColumns, 'activityLink'];

  constructor() {}

  ngOnInit(): void {}

  updateViewModel() {
    if (this.memberProfiles.length > 0) {
      if (this.memberProfiles.length !== this.viewModel.length) {
        this.viewModel = this.memberProfiles.map((x) => {
          console.log(x);
          return { profile: x, id: getMemberProfileId(x) };
        });
      }

      this.memberActivities.forEach((x) => {
        const vmIndex = this.viewModel.findIndex((vm) => vm.id === x.id);
        if (vmIndex > -1 && !this.viewModel[vmIndex].activities) {
          const vm = this.viewModel[vmIndex];
          vm.lastMonth = x.lastMonth;
          vm.lastNinetyDays = x.lastNinetyDays;
          vm.lastWeek = x.lastWeek;
          vm.activities = x.activities;
        }
      });
    }
  }

  memberClick(m: any) {
    this.viewMember.emit(m);
  }
}
