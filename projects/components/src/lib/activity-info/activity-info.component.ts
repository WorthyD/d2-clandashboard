import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivityData, ActivityInfo } from './activity-info-config';
@Component({
  selector: 'lib-activity-info',
  templateUrl: './activity-info.component.html',
  styleUrls: ['./activity-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityInfoComponent implements OnInit {
  @Input() activityInfo: ActivityInfo;

  @Input()
  activityData: ActivityData;

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
