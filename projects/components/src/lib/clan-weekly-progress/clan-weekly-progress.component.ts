import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MilestoneRewardDefinition } from 'bungie-models';

export interface ClanWeeklyProgressModel {
  title: string;
  rewards: ClanWeeklyRewardModel;
}

export interface ClanWeeklyRewardModel {
  earned: boolean;
  definition: MilestoneRewardDefinition;
}

@Component({
  selector: 'lib-clan-weekly-progress',
  templateUrl: './clan-weekly-progress.component.html',
  styleUrls: ['./clan-weekly-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanWeeklyProgressComponent implements OnInit {
  tab = 'week';

  @Input()
  clanRewards: ClanWeeklyProgressModel;

  @Input()
  clanRewardsLastWeek: ClanWeeklyProgressModel;

  @Input()
  isLoading: boolean;

  constructor() {}

  ngOnInit(): void {}
  onSelectionChange(type) {
    this.tab = type;
  }
}
