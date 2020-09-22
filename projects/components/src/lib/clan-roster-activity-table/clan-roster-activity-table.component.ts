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

  _memberActivityStats;
  @Input()
  get memberActivityStats(): MemberActivityRecentStats[] {
    return this._memberActivityStats;
  }
  set memberActivityStats(value) {
    this._memberActivityStats = value;
    this.sortedData = value.slice();
  }

  @Output() viewMember = new EventEmitter<MemberProfile>();
  sortedData: MemberActivityRecentStats[];

  calculatedColumns = ['lastWeek', 'lastMonth', 'lastNinetyDays'];

  displayedColumns: string[] = ['displayName', 'activityChart', ...this.calculatedColumns, 'activityLink'];

  constructor() {}

  ngOnInit(): void {}

  memberClick(m: MemberActivityRecentStats) {
    this.viewMember.emit(m.profile);
  }
}
