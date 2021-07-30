import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MemberProfile, PresentationNodeDefinition } from 'bungie-models';

@Component({
  selector: 'lib-clan-seal-details',
  templateUrl: './clan-seal-details.component.html',
  styleUrls: ['./clan-seal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanSealDetailsComponent implements OnInit {
  @Input()
  seal: PresentationNodeDefinition;

  @Input()
  totalMembers: number;

  @Input()
  completedNumber: number;

  @Input()
  completedPercentage: number;

  @Input()
  guildedNumber: number;

  @Input()
  guildedPercentage: number;


  @Input()
  hasGuilded: boolean;

  // @Input()
  // members: MemberProfile[];

  constructor() {}

  ngOnInit(): void {}
}
