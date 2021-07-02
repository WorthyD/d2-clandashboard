import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ClanDetails } from 'bungie-models';
@Component({
  selector: 'lib-clan-overview',
  templateUrl: './clan-overview.component.html',
  styleUrls: ['./clan-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanOverviewComponent implements OnInit {
  constructor() {}
  @Input()
  clanDetails: ClanDetails;
  @Input()
  isLoading: boolean;

  ngOnInit(): void {}
}
