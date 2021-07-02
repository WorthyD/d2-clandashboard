import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ClanAggregateActivityService } from './clan-aggregate-activity.service';
@Component({
  selector: 'app-clan-aggregate-activity',
  templateUrl: './clan-aggregate-activity.component.html',
//  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanAggregateActivityComponent implements OnInit {
  constructor(public service: ClanAggregateActivityService) {}

  ngOnInit(): void {
    this.service.load();
  }
}
