import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivityInfo } from './activity-info-config';
import { MOCK_GRID_ITEMS } from '../shared/charts/bar-chart/_MOCK_GRID_ITEMS';
@Component({
  selector: 'lib-activity-info',
  templateUrl: './activity-info.component.html',
  styleUrls: ['./activity-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityInfoComponent implements OnInit {
  @Input() activityInfo: ActivityInfo;

  @Input()
  events;
  @Input()
  players;

  @Output() viewMember = new EventEmitter<string>();

  // players = [
  //   {
  //     name: 'WorthyD',
  //     value: '1'
  //   },
  //   {
  //     name: 'WorthyD',
  //     value: '1'
  //   },
  //   {
  //     name: 'WorthyD',
  //     value: '1'
  //   },

  //   {
  //     name: 'WorthyD',
  //     value: '1'
  //   },

  //   {
  //     name: 'WorthyD',
  //     value: '1'
  //   }
  // ];

  constructor() {}

  ngOnInit(): void {}
}
