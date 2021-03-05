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
import { formatDate } from 'projects/data/src/lib/utility/format-date';
// https://bl.ocks.org/alanvillalobos/14e9f0d80ea6b0d8083ba95a9d571d13
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
  g;
  data;
  x;
  xAxis;
  y;
  yAxis;
  tooltip;

  margin = { top: 20, right: 20, bottom: 30, left: 40 };

  chartHeight = 200;
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

  // @Input()
  // maxBarCount = 25;

  // @Input()
  // startDate: Date;

  // @Input()
  // endDate: Date;

  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef) {
    this.hostElement = this.elRef.nativeElement;
    this.cd.detach();

    // const date = new Date();
    //const offset = date.getDay() >= 2 ? 2 : -5;
    //this.endDate = new Date(date.setDate(date.getDate() - date.getDay() + offset));
    //this.startDate = new Date(new Date(this.endDate).setDate(new Date(this.endDate).getDate() - 182));
  }

  private updateChart(eventData) {
    if (!this.svg) {
      this.createChart(eventData);
      return;
    }

    this.processData(this.events);
  }

  ngOnInit(): void {}

  private createChart(eventData) {
    this.removeExistingChartFromParent();
    this.setChartDimensions();

    this.addToolTip();
    this.addAxis();

    this.processData(eventData);
  }
  private addAxis() {
    this.xAxis = this.g.append('g').attr('class', 'axis axis--x');
    // .attr('transform', 'translate(0,' + this.chartHeight + ')')
    // .attr('y', this.chartHeight - 250)
    // .attr('x', this.chartWidth - 50);

    this.yAxis = this.g.append('g').attr('class', 'axis axis--y');

    // yAxis Label
    this.yAxis
      .append('text')
      .attr('y', 6)
      .attr('fill', 'currentColor')
      .attr('dy', '-4.1em')
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'end')
      .text('Hours');
  }

  private removeExistingChartFromParent() {
    // !!!!Caution!!!
    // Make sure not to do;
    //     d3.select('svg').remove();
    // That will clear all other SVG elements in the DOM
    d3.select(this.hostElement).select('svg').remove();
  }

  private setChartDimensions() {
    // const padding = 100;
    // const svgHeight = this.chartHeight + padding;
    // const svgWidth = this.chartWidth + padding;

    this.svg = d3
      .select(this.hostElement)
      .attr('class', 'activity-heatmap')
      .append('svg')
      .attr('height', this.chartHeight)
      .attr('width', '100%');

    this.g = this.svg.append('g').attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }

  private addToolTip() {
    this.tooltip = d3.select(this.hostElement).append('div').attr('class', 'activity-tooltip');
  }
  private processData(sourceData) {
    if (sourceData) {
      let cleanedData = [];
      const firstData = sourceData[0].date;
      // const bounds = this.svg.node().getBoundingClientRect(),
      // width = bounds.width - this.margin.left - this.margin.right,
      // height = bounds.height - this.margin.top - this.margin.bottom;

      if (firstData instanceof Date) {
        cleanedData = this.prepDateData(sourceData);
        this.x = d3.scaleTime();// .range([0, width]);
        this.x.domain([cleanedData[0].date, cleanedData[cleanedData.length - 1].date]);
          //this.x.domain(cleanedData.map((x) => x.date));

      } else {
        cleanedData = [...sourceData];
        this.x = d3.scaleBand().domain(cleanedData.map((x) => x.date));//.range([0, width]);
        //this.x.domain(cleanedData.map((x) => x.date));
      }
      //console.log(this.x.bandwidth());

      //this.x = d3.scaleTime().domain([cleanedData[0].date, cleanedData[cleanedData.length - 1].date]).range([0, width] );
      //this.x = d3.scaleBand().domain(cleanedData.map((x) => x.date)).range([0, width]);
   //   console.log(this.x.bandwidth());
    //this.x.domain(cleanedData.map((x) => x.date));










      this.y = d3.scaleLinear();
      this.y.domain([0, d3.max(cleanedData, (d) => d.seconds) * 1.1]);



      // this.y = d3.scaleLinear().range([this.chartHeight, 0]);

      // this.y.domain([0, d3.max(cleanedData, (d) => d.seconds) * 1.1]);

      // this.xAxis.call(d3.axisBottom(this.x)).selectAll('text');
      // this.yAxis.call(
      //   d3
      //     .axisLeft(this.y)
      //     .tickFormat(function (d) {
      //       return Math.floor(d / 3600); // Round to every hour
      //     })
      //     .ticks(10)
      // );

      // /// https://codepen.io/netkuy/pen/KzPaBe
      // // Delete old data
      // this.svg.selectAll('rect').remove();

      // const bars = this.svg.selectAll('bar').data(cleanedData).enter().append('rect');

      // const t = d3.transition().duration(750);

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
      //   .attr('height', 0);

      // bars.transition(t).attr('height', (d) => {
      //   return this.chartHeight - this.y(d.seconds);
      // });
      this.renderChart(cleanedData);
    }
  }

  renderChart(cleanedData) {
    const bounds = this.svg.node().getBoundingClientRect(),
      width = bounds.width - this.margin.left - this.margin.right,
      height = bounds.height - this.margin.top - this.margin.bottom;

    this.y.rangeRound([height, 0]);

    // this.x = d3.scaleBand();
     this.x.range([0, width]);
  //  this.x.domain(cleanedData.map((x) => x.date));
    //this.x.rangeRound([0, width]);
    //console.log(this.x.bandwidth());

    // Draw X Axis
    this.g
      .select('.axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(this.x));

    // this.y.domain([0, d3.max(cleanedData, (d) => d.seconds) * 1.1]);
    this.g.select('.axis--y').call(
      d3
        .axisLeft(this.y)
        .tickFormat(function (d) {
          return Math.floor(d / 3600); // Round to every hour
        })
        .ticks(10)
    );

    // Render y Axis
    //this.y = d3.scaleLinear();

    //    this.xAxis.call(d3.axisBottom(this.x)).selectAll('text');
    // this.yAxis.call(
    //   d3
    //     .axisLeft(this.y)
    //     .tickFormat(function (d) {
    //       return Math.floor(d / 3600); // Round to every hour
    //     })
    //     .ticks(10)
    // );

    /// https://codepen.io/netkuy/pen/KzPaBe

    // Delete old data
    this.g.selectAll('rect').remove();

    const bars = this.g.selectAll('bar').data(cleanedData).enter().append('rect');

    const t = d3.transition().duration(750);
    //console.log(this.x.rangeRound([0, width]));
    //const y = d3.axisBottom().scale(this.x).bandwidth
    //    const y = d3.scaleBand().domain().
    //   console.log(y);

    bars
      .attr('class', 'activity-bar')
      .attr('x', (d) => {
        return this.x(d.date);
      })
      .attr('y', (d) => {
        return this.y(d.seconds);
      })
      .attr('width', (d) => {
        return width / cleanedData.length; // this.x(d.date).bandwidth;
      })
      //.attr('width', this.chartWidth / cleanedData.length)
      .attr('height', (d) => {
        return height - this.y(d.seconds);
      });

    // bars.transition(t).attr('height', (d) => {
    //   return this.chartHeight - this.y(d.seconds);
    // });

    this.addToolTips(bars);
  }

  addToolTips(bars) {
    bars
      .on('mouseover', (d) => {
        let label = d.date;
        if (d.date instanceof Date) {
          label = `Date: ${formatDate(d.date)}`;
        }
        this.tooltip.style('opacity', 0.9);
        this.tooltip.html(`${label}<br/> Time:  ${this.formatPipe.transform(d.seconds)}`);
      })
      .on('mousemove', () => {
        this.tooltip.style('left', d3.event.pageX + 30 + 'px').style('top', d3.event.pageY + 'px');
      })
      .on('mouseout', (d) => {
        this.tooltip.style('opacity', 0);
      });
  }

  private prepDateData(sourceData) {
    const preppedData = [];

    return sourceData.sort((a, b) => {
      return compare(a.date, b.date, true);
    });
  }
}
