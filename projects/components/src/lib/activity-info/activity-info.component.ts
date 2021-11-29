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

  @Input()
  loading;
  @Input()
  theme;

  @Output() viewMember = new EventEmitter<string>();



  constructor() {}

  ngOnInit(): void {}
}
