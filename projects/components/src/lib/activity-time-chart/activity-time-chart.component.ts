import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import { SECONDS_IN_WEEK, SECONDS_IN_DAY } from '@destiny/models/constants';
enum Views {
  daily = 'daily',
  weekly = 'weekly'
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
    // {
    //   type: Views.weekly,
    //   text: 'Weekly'
    // }
  ];

  @Input()
  events;

  @Input()
  loading;

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(newSelection: Views) {
    if (this.selection !== newSelection) {
      this.selection = newSelection;
      // Emit
    }
  }
}
