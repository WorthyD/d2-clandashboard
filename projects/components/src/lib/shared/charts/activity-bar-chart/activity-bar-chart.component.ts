import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import { PlaytimePipe } from '../../../pipes/playtime/playtime.pipe';
import { compare } from '../../../utilities/compare';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTheme,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';

@Component({
  selector: 'lib-activity-bar-chart',
  template: `<apx-chart
    [series]="series"
    [chart]="chart"
    [plotOptions]="plotOptions"
    [tooltip]="tooltip"
    [xaxis]="xaxis"
    [theme]="theme"
  ></apx-chart> `,
  styleUrls: ['./activity-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ActivityBarChartComponent implements OnInit {
  formatPipe = new PlaytimePipe();

  _events;
  @Input()
  get events(): [] {
    return this._events;
  }

  set events(value) {
    if (value && value.length && value !== this._events) {
      this._events = value;
      this.updateChart(this._events);
    }
  }

  @Input()
  convertTo = 'Minutes';

  startDate: Date;

  endDate: Date;

  // ----------------
  series: ApexAxisChartSeries = [];
  chart: ApexChart = {
    type: 'bar',
    height: 75,
    animations: {
      enabled: false
    },
    sparkline: {
      enabled: true
    }
  };

  yaxis: ApexYAxis = {
    title: {
      text: this.convertTo
    },
    labels: {}
  };
  theme: ApexTheme = {
    mode: 'light'
  };
  xaxis: ApexXAxis = {
    type: 'datetime'
  };
  legend: ApexLegend = {};

  plotOptions: ApexPlotOptions = {
    bar: {
      columnWidth: '80%'
    }
  };
  dataLabels: ApexDataLabels = {
    enabled: false
  };
  fill: ApexFill = {
    opacity: 1
  };
  stroke: ApexStroke = {
    show: true,
    width: 2,
    colors: ['transparent']
  };

  tooltip: ApexTooltip = {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      formatter: (val) => {
        let convertedVal = 0;
        if (this.convertTo === 'Minutes') {
          convertedVal = val * 60;
        } else if (this.convertTo === 'Hours') {
          convertedVal = val * 60 * 60;
        }
        return `${this.formatPipe.transform(convertedVal)}`;
      }
    },
    marker: {
      show: false
    }
  };

  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef) {
    const date = new Date();
    const offset = date.getDay() >= 2 ? 2 : -5;
    this.endDate = new Date(date.setDate(date.getDate() - date.getDay() + offset));
    this.startDate = new Date(new Date(this.endDate).setDate(new Date(this.endDate).getDate() - 182));
  }

  private updateChart(eventData) {
    this.processData(eventData);
  }

  ngOnInit(): void {}

  private processData(sourceData) {
    if (sourceData) {
      const cleanedData = this.prepData(sourceData);
      this.series = [
        {
          name: '',
          data: cleanedData
        }
      ];
    }
  }

  private prepData(sourceData) {
    const preppedData = [];

    for (let i = 1; i < 52; i++) {
      // Needing to add 1 because of utc conversion i think.
      const y = new Date(new Date(this.startDate).setDate(this.startDate.getDate() + i * 7));
      const d = new Date(y.toDateString());
      if (d > this.endDate) {
        break;
      }
      if (d >= this.startDate) {
        //const dFormatted = formatDate(d);

        const data = sourceData.find((x) => x.date.toDateString() === d.toDateString());

        if (data) {
          let convertedSeconds = 0;
          if (this.convertTo === 'Minutes') {
            convertedSeconds = Math.floor(data.seconds / 60);
          } else if (this.convertTo === 'Hours') {
            convertedSeconds = data.seconds / 60 / 60;
          }

          preppedData.push({ x: data.date, y: convertedSeconds });
        } else {
          preppedData.push({ x: d, y: 0 });
        }
      }
    }

    preppedData.sort((a, b) => {
      return compare(a.x, b.x, true);
    });

    return preppedData;
  }
}
