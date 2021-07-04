import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import * as d3 from 'd3';
import { SECONDS_IN_HOUR } from '@destiny/models/constants';
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
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';

@Component({
  selector: 'lib-activity-bar-chart',
  templateUrl: './activity-bar-chart.component.html',
  styleUrls: ['./activity-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ActivityBarChartComponent implements OnInit {
  x;

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

  // @Input()
  // maxBarCount = 25;

  //@Input()
  startDate: Date;

  // @Input()
  endDate: Date;

  // ----------------
  series: ApexAxisChartSeries = [];
  chart: ApexChart = { type: 'bar', height: 400, zoom: { enabled: false } };
  yaxis: ApexYAxis = {
    title: {
      text: this.convertTo
      //text: '$ (thousands)'
    },
    labels: {
      // formatter: (x) => {
      //   // dynamically calculate

      //   //return `${this.formatPipe.transform(x, false)}`;
      //   return `${this.formatPipe.transform(x, false)}`;
      // }
    }
  };
  xaxis: ApexXAxis = {
    type: 'datetime'
  };
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

  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef) {
    // this.hostElement = this.elRef.nativeElement;
    // this.cd.detach();
    const date = new Date();
    const offset = date.getDay() >= 2 ? 2 : -5;
    this.endDate = new Date(date.setDate(date.getDate() - date.getDay() + offset));
    this.startDate = new Date(new Date(this.endDate).setDate(new Date(this.endDate).getDate() - 182));
  }

  private updateChart(eventData) {
    // if (!this.svg) {
    //   this.createChart(eventData);
    //   return;
    // }
    this.processData(eventData);
  }

  ngOnInit(): void {}

  // private createChart(eventData) {
  //   this.removeExistingChartFromParent();
  //   this.setChartDimentions();

  //   this.addToolTip();

  //   this.processData(eventData);
  // }

  // private removeExistingChartFromParent() {
  //   // !!!!Caution!!!
  //   // Make sure not to do;
  //   //     d3.select('svg').remove();
  //   // That will clear all other SVG elements in the DOM
  //   d3.select(this.hostElement).select('svg').remove();
  // }

  // private setChartDimentions() {
  //   this.svg = d3
  //     .select(this.hostElement)
  //     .attr('class', 'activity-heatmap')
  //     .append('svg')
  //     .attr('width', '100%')
  //     .attr('viewBox', `0 0 ${this.chartWidth} ${this.chartHeight}`)
  //     .append('g');
  //   //    this.x = d3.scaleBand().range([0, this.chartWidth], 0.05);
  //   this.x = d3.scaleTime().range([0, this.chartWidth]);
  //   this.y = d3.scaleLinear().range([this.chartHeight, 0]);
  // }
  // private addToolTip() {
  //   this.tooltip = d3.select(this.hostElement).append('div').attr('class', 'activity-tooltip');
  // }
  private processData(sourceData) {
    if (sourceData) {
      const cleanedData = this.prepData(sourceData);
      this.series = [
        {
          name: '',
          data: cleanedData
        }
      ];

      // this.x.domain(
      //   cleanedData.map(function (d) {
      //     return d.date;
      //   })
      // );
      // this.x.domain([cleanedData[0].date, cleanedData[cleanedData.length - 1].date]);
      // this.y.domain([0, this.threshHold]);

      // const bars = this.svg.selectAll('bar').data(cleanedData).enter().append('rect');

      // bars
      //   .attr('class', 'activity-bar')
      //   .attr('x', (d) => {
      //     return this.x(d.date);
      //   })
      //   .attr('y', (d) => {
      //     return this.y(d.seconds);
      //   })
      //   //.attr('width', this.x.bandwidth())
      //   .attr('width', this.chartWidth / cleanedData.length)
      //   .attr('height', (d) => {
      //     return this.chartHeight - this.y(d.seconds);
      //   });

      // bars
      //   .on('mouseover', (d) => {
      //     this.tooltip.style('opacity', 0.9);
      //     this.tooltip.html(`Week Starting: ${formatDate(d.date)}<br/> Time:  ${this.formatPipe.transform(d.seconds)}`);
      //   })
      //   .on('mousemove', () => {
      //     this.tooltip.style('left', d3.event.pageX + 30 + 'px').style('top', d3.event.pageY + 'px');
      //   })
      //   .on('mouseout', (d) => {
      //     this.tooltip.style('opacity', 0);
      //   });
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
    // return sourceData
    //   .sort((a, b) => {
    //     return compare(a.date, b.date, true);
    //   })
    //   .map((x) => {
    //     return {
    //       date: new Date(x.date),
    //       seconds: x.seconds
    //     };
    //   });
  }
}

function formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
}
