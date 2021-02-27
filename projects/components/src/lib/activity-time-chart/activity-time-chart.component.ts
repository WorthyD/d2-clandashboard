import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import { SECONDS_IN_WEEK, SECONDS_IN_DAY } from '@destiny/models/constants';
enum Views {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
  season = 'season'
}

@Component({
  selector: 'lib-activity-time-chart',
  templateUrl: './activity-time-chart.component.html',
  styleUrls: ['./activity-time-chart.component.scss']
})
export class ActivityTimeChartComponent implements OnInit {
  selection: Views = Views.daily;

  buttons = [
    {
      type: Views.daily,
      text: 'Daily'
    },
    {
      type: Views.weekly,
      text: 'Weekly'
    },
    {
      type: Views.monthly,
      text: 'Monthly'
    },
    {
      type: Views.season,
      text: 'Season'
    }
  ];

  @Input()
  events;

  @Input()
  loading;

  @Input()
  updating;

  @Output() selectionChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(newSelection: Views) {
    if (this.selection !== newSelection) {
      this.selection = newSelection;
      this.selectionChange.emit(newSelection);
      // Emit
    }
  }
}
