import { Component, OnInit } from '@angular/core';
import { ActivityTimeChartService } from './activity-time-chart.service';

@Component({
  selector: 'app-activity-time-chart',
  templateUrl: './activity-time-chart.component.html',
  styleUrls: ['./activity-time-chart.component.scss'],
  providers: [ActivityTimeChartService]
})
export class ActivityTimeChartComponent implements OnInit {
  constructor(public service: ActivityTimeChartService) {}

  ngOnInit(): void {
    this.service.load();
  }
}
