import { Component, OnInit } from '@angular/core';

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
    {
      type: Views.weekly,
      text: 'Weekly'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(newSelection: Views) {
    if (this.selection !== newSelection) {
      this.selection = newSelection;
      // Emit
    }
  }
}
