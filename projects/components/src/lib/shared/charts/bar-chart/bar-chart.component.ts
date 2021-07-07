import {
  Component,
  OnInit,
  Output,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  SimpleChanges,
  OnChanges,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';

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

import { PlaytimePipe } from '../../../pipes/playtime/playtime.pipe';
import { compare } from '../../../utilities/compare';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
// https://bl.ocks.org/alanvillalobos/14e9f0d80ea6b0d8083ba95a9d571d13

@Component({
  selector: 'lib-bar-chart',
  template: `
    <apx-chart
      [series]="series"
      [chart]="chart"
      [dataLabels]="dataLabels"
      [plotOptions]="plotOptions"
      [yaxis]="yaxis"
      [legend]="legend"
      [fill]="fill"
      [stroke]="stroke"
      [tooltip]="tooltip"
      [xaxis]="xaxis"
      [theme]="theme"
    ></apx-chart>
  `,
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {
  // hostElement;
  // svg;
  // g;
  // data;
  // x;
  // xAxis;
  // y;
  // yAxis;
  // tooltip;

  // margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // chartHeight = 400;
  // threshHold = SECONDS_IN_HOUR * 20;
  // color = d3.scaleLinear().range(['#00ff00', '#ff0000']).domain([0, 1]);

  formatPipe = new PlaytimePipe();
  // (window:resize)=”onResize($event)”
  @Input()
  convertTo: string = 'Minutes';

  @Input()
  colorTheme: 'light' | 'dark';

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

  // ----------------
  series: ApexAxisChartSeries = [];
  chart: ApexChart = { type: 'bar', height: 400, zoom: { enabled: false } };
  yaxis: ApexYAxis;
  theme: ApexTheme;
  // yaxis: ApexYAxis = {
  //   title: {
  //     text: this.convertTo
  //     //text: '$ (thousands)'
  //   },
  //   labels: {
  //     // formatter: (x) => {
  //     //   // dynamically calculate
  //     //   //return `${this.formatPipe.transform(x, false)}`;
  //     //   return `${this.formatPipe.transform(x, false)}`;
  //     // }
  //   }
  // };
  xaxis: ApexXAxis;
  legend: ApexLegend = {};

  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: '75%'
      // endingShape: 'rounded'
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
    }
  };

  // private changeSubject = new Subject<any>();

  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef, private zone: NgZone) {}

  private updateChart(eventData) {
    // if (!this.svg) {
    //   this.createChart(eventData);
    //   return;
    // }

    this.processData(this.events);
  }

  ngOnInit(): void {
    this.yaxis = {
      title: {
        text: this.convertTo
      },
      labels: {
        formatter: (x) => {
          return x.toString();
        }
      }
    };
    this.theme = {
      mode: this.colorTheme
    };
  }

  private processData(sourceData) {
    if (sourceData) {
      let cleanedData = [];
      const firstData = sourceData[0].date;

      if (firstData instanceof Date) {
        this.xaxis = {
          type: 'datetime'
        };
      } else {
        this.xaxis = {
          type: 'category'
        };
      }
      cleanedData = this.prepDateData(sourceData);
      this.series = [
        {
          name: '',
          data: cleanedData
        }
      ];
      // } else {
      //   cleanedData = [...sourceData];
      //   console.log(cleanedData);
      //   this.series = [
      //     {
      //       name: '',
      //       data: cleanedData
      //     }
      //   ];
      // }
    }
  }

  private prepDateData(sourceData) {
    const preppedData = [];
    sourceData.forEach((data) => {
      let convertedSeconds = 0;
      if (this.convertTo === 'Minutes') {
        convertedSeconds = Math.floor(data.seconds / 60);
      } else if (this.convertTo === 'Hours') {
        convertedSeconds = data.seconds / 60 / 60;
      }

      preppedData.push({ x: data.date, y: convertedSeconds });
    });

    return preppedData.sort((a, b) => {
      return compare(a.x, b.x, true);
    });
  }
}
