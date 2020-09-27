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
  ChangeDetectorRef
} from '@angular/core';
//import { SVGGraph, CanvasGraph, StrGraph } from 'calendar-graph';
import * as d3 from 'd3';
import * as moment from 'moment';
import { SECONDS_IN_HOUR } from '@destiny/models/constants';
import { PlaytimePipe } from '../../../pipes/playtime/playtime.pipe';
import { compare } from '../../../utilities/compare';

@Component({
  selector: 'lib-activity-bar-chart',
  templateUrl: './activity-bar-chart.component.html',
  styleUrls: ['./activity-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ActivityBarChartComponent implements OnInit {
  hostElement;
  svg;
  data;
  x;
  y;
  tooltip;

  chartHeight = 100;
  chartWidth = 1000;
  threshHold = SECONDS_IN_HOUR * 20;
  color = d3.scaleLinear().range(['#00ff00', '#ff0000']).domain([0, 1]);

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
  maxBarCount = 25;

  @Input()
  startDate: Date;

  @Input()
  endDate: Date;

  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef) {
    this.hostElement = this.elRef.nativeElement;
    this.cd.detach();

    const date = new Date();
    const offset = date.getDay() >= 2 ? 2 : -5;
    this.endDate = new Date(date.setDate(date.getDate() - date.getDay() + offset));
    this.startDate = new Date(new Date().setDate(new Date(this.endDate).getDate() - 182));
  }

  private updateChart(eventData) {
    if (!this.svg) {
      this.createChart(eventData);
      return;
    }
  }

  ngOnInit(): void {}

  private createChart(eventData) {
    this.removeExistingChartFromParent();
    this.setChartDimentions();

    this.addToolTip();

    this.processData(eventData);
  }

  private removeExistingChartFromParent() {
    // !!!!Caution!!!
    // Make sure not to do;
    //     d3.select('svg').remove();
    // That will clear all other SVG elements in the DOM
    d3.select(this.hostElement).select('svg').remove();
  }

  private setChartDimentions() {
    this.svg = d3
      .select(this.hostElement)
      .attr('class', 'activity-heatmap')
      .append('svg')
      .attr('width', '100%')
      .attr('viewBox', `0 0 ${this.chartWidth} ${this.chartHeight}`)
      .append('g');
    this.x = d3.scaleBand().range([0, this.chartWidth], 0.05);
    this.y = d3.scaleLinear().range([this.chartHeight, 0]);
  }
  private addToolTip() {
    this.tooltip = d3.select(this.hostElement).append('div').attr('class', 'activity-tooltip');
  }
  private processData(sourceData) {
    if (sourceData) {
      const cleanedData = this.prepData(sourceData);
      this.x.domain(
        cleanedData.map(function (d) {
          return d.date;
        })
      );
      this.y.domain([0, this.threshHold]);

      const bars = this.svg.selectAll('bar').data(cleanedData).enter().append('rect');

      bars
        .attr('class', 'activity-bar')
        .attr('x', (d) => {
          return this.x(d.date);
        })
        .attr('y', (d) => {
          return this.y(d.seconds);
        })
        .attr('width', this.x.bandwidth())
        .attr('height', (d) => {
          return this.chartHeight - this.y(d.seconds);
        });

      bars
        .on('mouseover', (d) => {
          this.tooltip.style('opacity', 0.9);
          this.tooltip.html(
            `Week Starting: ${moment(d.date).format('M-D-YYYY')}<br/> Time:  ${this.formatPipe.transform(d.seconds)}`
          );
        })
        .on('mousemove', () => {
          this.tooltip.style('left', d3.event.pageX + 30 + 'px').style('top', d3.event.pageY + 'px');
        })
        .on('mouseout', (d) => {
          this.tooltip.style('opacity', 0);
        });
    }
  }
  private formatActivityDuration(seconds) {
    return moment().startOf('day').seconds(seconds).format('H:mm');
  }

  private prepData(sourceData) {
    const preppedData = [];

    for (let i = 1; i < 52; i++) {
      // Needing to add 1 because of utc conversion i think.
      const d = new Date(new Date(this.startDate).setDate(this.startDate.getDate() + i * 7));
      if (d > this.endDate) {
        break;
      }
      if (d >= this.startDate) {
        const dFormatted = formatDate(d);

        const data = sourceData.find((x) => x.date === dFormatted);

        if (data) {
          preppedData.push(data);
        } else {
          preppedData.push({ date: dFormatted, seconds: 0 });
        }
      }
    }

    preppedData.sort((a, b) => {
      return compare(a.date, b.date, true);
    });

    return preppedData;
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
