import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MemberProfile } from 'bungie-models';

export interface ActivityTableItem {
  profile: MemberProfile;
  isLoadingStats: boolean;
  lastNinetyDays: number;
  lastMonth: number;
  lastWeek: number;
  stats: any[];
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
  get memberActivityStats(): ActivityTableItem[] {
    return this._memberActivityStats;
  }
  set memberActivityStats(value) {
    this._memberActivityStats = value;
    this.sortedData = value.slice();
  }

  @Output() viewMember = new EventEmitter<MemberProfile>();
  sortedData: ActivityTableItem[];

  calculatedColumns = ['lastNinteyDays', 'lastMonth', 'lastWeek'];

  displayedColumns: string[] = ['displayName', 'activityChart', ...this.calculatedColumns, 'activityLink'];

  constructor() {}

  ngOnInit(): void {}

  memberClick(m: ActivityTableItem) {
    this.viewMember.emit(m.profile);
  }
}
