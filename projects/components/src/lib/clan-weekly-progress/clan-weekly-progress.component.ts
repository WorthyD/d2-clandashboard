import { Component, OnInit, Input } from '@angular/core';
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
  styleUrls: ['./clan-weekly-progress.component.scss']
})
export class ClanWeeklyProgressComponent implements OnInit {
  @Input()
  clanRewards: ClanWeeklyProgressModel;

  @Input()
  isLoading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
