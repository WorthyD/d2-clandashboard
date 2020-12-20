import { Component, Input, OnInit } from '@angular/core';
import { MemberRaidStats, RaidInfo } from '@destiny/models';

@Component({
  selector: 'lib-raid-card',
  templateUrl: './raid-card.component.html',
  styleUrls: ['./raid-card.component.scss']
})
export class RaidCardComponent implements OnInit {
  constructor() {}
  @Input()
  raid: RaidInfo;

  @Input()
  memberRaidStats: MemberRaidStats[];

  @Input()
  isLoading: boolean;

  ngOnInit(): void {}
}
