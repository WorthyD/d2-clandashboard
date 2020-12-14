import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivityModeDefinition } from '@destiny/models/definitions';

@Component({
  selector: 'lib-activity-mode-select',
  templateUrl: './activity-mode-select.component.html',
  styleUrls: ['./activity-mode-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityModeSelectComponent implements OnInit {
  @Input()
  definitions: ActivityModeDefinition[];

  @Output() selectedMode = new EventEmitter<ActivityModeDefinition>();

  selected;

  constructor() {}

  ngOnInit(): void {}
  selectMode(event) {
    this.selectedMode.emit(event.value);
  }
}
