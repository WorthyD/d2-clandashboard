import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MemberProfile } from 'bungie-models';

export interface MemberActivityRecentStats {
  profile: MemberProfile;
  isLoadingStats: boolean;
  lastNinetyDays: number;
  lastMonth: number;
  lastWeek: number;
  activities: any[];
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

  _members;
  @Input()
  get memberProfiles(): MemberProfile[] {
    return this._members;
  }
  set memberProfiles(value) {
    this._members = value;
    if (value) {
      this.sortedData = value.slice();
    }
  }

  _memberActivities;
  @Input()
  get memberActivities(): MemberActivityRecentStats[] {
    return this._memberActivities;
  }
  set memberActivities(value) {
    this._memberActivities = value;
    // if (value) {
    //   this.sortedData = value.slice();
    // }
  }

  @Output() viewMember = new EventEmitter<MemberProfile>();
  sortedData: MemberProfile[];

  calculatedColumns = ['lastWeek', 'lastMonth', 'lastNinetyDays'];

  displayedColumns: string[] = ['displayName', 'activityChart', ...this.calculatedColumns, 'activityLink'];

  constructor() {}

  ngOnInit(): void {}

  memberClick(m: any) {
    this.viewMember.emit(m);
  }
}
