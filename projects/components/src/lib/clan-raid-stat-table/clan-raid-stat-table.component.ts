import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MemberRaidStats, AllRaids } from 'bungie-models';
import { Sort } from '@angular/material/sort';

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
  isLoading: boolean;

  sortedData: MemberRaidStats[];
  displayedColumns: string[] = ['displayName'];

  constructor() {}

  ngOnInit(): void {}
}
