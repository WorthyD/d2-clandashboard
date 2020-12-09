import { Component, Input, OnInit } from '@angular/core';
import { ActivityModeDefinition } from '@destiny/models/definitions';

@Component({
  selector: 'lib-activity-mode-select',
  templateUrl: './activity-mode-select.component.html',
  styleUrls: ['./activity-mode-select.component.scss']
})
export class ActivityModeSelectComponent implements OnInit {
  @Input()
  definitions: ActivityModeDefinition[];

  constructor() {}

  ngOnInit(): void {}
}
