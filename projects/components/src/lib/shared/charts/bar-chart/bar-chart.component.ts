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
import * as d3 from 'd3';
import { SECONDS_IN_HOUR } from '@destiny/models/constants';
import { PlaytimePipe } from '../../../pipes/playtime/playtime.pipe';
import { compare } from '../../../utilities/compare';

@Component({
  selector: 'lib-activity-bar-chart',
  template: '',
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {
  hostElement;
  svg;
  data;
  x;
  y;
  tooltip;

  chartHeight = 500;
  chartWidth = 600;
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
    //this.endDate = new Date(date.setDate(date.getDate() - date.getDay() + offset));
    //this.startDate = new Date(new Date(this.endDate).setDate(new Date(this.endDate).getDate() - 182));
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
    this.setChartDimensions();

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

  private setChartDimensions() {
    this.svg = d3
      .select(this.hostElement)
      .attr('class', 'activity-heatmap')
      .append('svg')
      .attr('width', this.chartWidth + 200)
      .attr('height', this.chartHeight + 200)
      //.attr('viewBox', `0 0 ${this.chartWidth} ${this.chartHeight}`)
      .append('g')
      .attr('transform', 'translate(' + 100 + ',' + 100 + ')');

    //this.x = d3.scaleBand().range([0, this.chartWidth], 0.05);
    this.x = d3.scaleBand().range([0, this.chartWidth]).padding(0.05);
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
          return new Date(d.date);
        })
      );
      // this.x.domain(
      //   d3.extent(cleanedData, function (d) {
      //     return d.date;
      //   })
      // );
      this.y.domain([0, d3.max(cleanedData, (d) => d.seconds) * 1.1]);
      console.log(cleanedData);

      // Footer
      this.svg
        .append('g')
        .attr('transform', 'translate(0,' + this.chartHeight + ')')
        .attr('y', this.chartHeight - 250)
        .attr('x', this.chartWidth - 50)
        .call(d3.axisBottom(this.x).tickFormat(d3.timeFormat('%Y-%m-%d')))
        //   .ticks(d3.timeDay.every(14))
        //   .tickFormat(d3.timeFormat('%Y-%m-%d')))
        //.ticks(d3.timeDay.every(24)).tickFormat(d3.timeFormat('%Y-%m-%d')))
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)');

      this.svg
        .append('g')
        .call(
          d3
            .axisLeft(this.y)
            .tickFormat(function (d) {
              return d;
            })
            .ticks(10)
        )
        .append('text')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('value');

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
          //this.tooltip.html(`Week Starting: ${formatDate(d.date)}<br/> Time:  ${this.formatPipe.transform(d.seconds)}`);
          this.tooltip.html(`Week Starting: ${formatDate(d.date)}<br/> Time:  ${d.seconds}`);
        })
        .on('mousemove', () => {
          this.tooltip.style('left', d3.event.pageX + 30 + 'px').style('top', d3.event.pageY + 'px');
        })
        .on('mouseout', (d) => {
          this.tooltip.style('opacity', 0);
        });
    }
  }

  private prepData(sourceData) {
    const preppedData = [];

    //for (let i = 1; i < 52; i++) {
      // Needing to add 1 because of utc conversion i think.

      //const d = new Date(new Date(this.startDate).setDate(this.startDate.getDate() + i * 7));
      // if (d > this.endDate) {
      //   break;
      // }
      //if (d >= this.startDate) {
      // const dFormatted = formatDate(d);

      // const data = sourceData.find((x) => x.date === dFormatted);

      // if (data) {
      //   preppedData.push(data);
      // } else {
      //   preppedData.push({ date: dFormatted, seconds: 0 });
      // }
      //}
    //}

    // preppedData.sort((a, b) => {
    //   return compare(a.date, b.date, true);
    // });

    //const parseTime = d3.timeParse('%Y-%m-%d');
    return sourceData.map((x) => {
      return {
        date: new Date(x.date),
        seconds: x.seconds
      };
    });
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
