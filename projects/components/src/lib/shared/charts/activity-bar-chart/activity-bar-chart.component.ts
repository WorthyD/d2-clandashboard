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
  ViewEncapsulation
} from '@angular/core';
//import { SVGGraph, CanvasGraph, StrGraph } from 'calendar-graph';
import * as d3 from 'd3';
import * as moment from 'moment';

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

  chartHeight = 100;
  chartWidth = 1000;
  thresHold = 5000;
  color = d3.scaleLinear().range(['#00ff00', '#ff0000']).domain([0, 1]);

  @Input()
  events: [];

  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.events) {
      this.updateChart(changes.events.currentValue);
    }
  }

  private updateChart(eventData) {
    if (!this.svg) {
      this.createChart(eventData);
      return;
    }
    //this.processData(eventData);
    //this.updateHeatMapActiveCells();
  }

  ngOnInit(): void {}

  private createChart(eventData) {
    console.log('creating chart');
    this.removeExistingChartFromParent();
    this.setChartDimentions();
    // this.addYearLabels();
    // this.addDayLabels();
    // this.addDayRectangles();
    // this.addLegend();
    // this.addLegendScale();
    //this.addToolTip();
    //this.addMonthLabels();
    //this.addMonthBoundaries();

    this.processData(eventData);
    //this.createHeatMapActiveCells();
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
      //.attr('height', this.chartHeight)
      //.attr('data-height', '0.5678')
      .append('g');
    // .attr(
    //   'transform',
    //   'translate(' + (this.width - this.cellSize * 53) / 2 + ',' + (this.height - this.cellSize * 7 - 1) + ')'
    // );
    //this.x = d3.scale.ordinal().rangeRoundBands([0, 1000], 0.05);
    this.x = d3.scaleBand().range([0, this.chartWidth], 0.05);
    this.y = d3.scaleLinear().range([this.chartHeight, 0]);
  }

  private processData(sourceData) {
    if (sourceData) {
      // this.data = d3
      //   .nest()
      //   .key(function (d) {
      //     return d.date;
      //   })
      //   .rollup(function (d) {
      //     const seconds = d[0].seconds;
      //     return { seconds, value: Math.sqrt(d[0].seconds / 86400) };
      //   })
      //   .object(sourceData);
      this.x.domain(
        sourceData.map(function (d) {
          return d.date;
        })
      );
      this.y.domain([
        0,
        d3.max(sourceData, function (d) {
          return d.seconds;
        })
      ]);

      this.svg
        .selectAll('bar')
        .data(sourceData)
        .enter()
        .append('rect')
        .style('fill', (d) => {
          return this.color(d.seconds / 6000);
        })
        //.style('fill', 'steelblue')
        .attr('x', (d) => {
          return this.x(d.date);
        })
        .attr('width', this.x.bandwidth())
        .attr('y', (d) => {
          return this.y(d.seconds);
        })
        .attr('height', (d) => {
          return this.chartHeight - this.y(d.seconds);
        });
    }
  }
}
