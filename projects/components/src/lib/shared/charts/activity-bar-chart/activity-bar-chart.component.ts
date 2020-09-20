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
    this.removeExistingChartFromParent();
    this.setChartDimentions();
    // this.addYearLabels();
    // this.addDayLabels();
    // this.addDayRectangles();
    // this.addLegend();
    // this.addLegendScale();
    this.addToolTip();
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
  private addToolTip() {
    this.tooltip = d3.select(this.hostElement).append('div').attr('class', 'activity-tooltip');
  }
  private processData(sourceData) {
    if (sourceData) {
      const cleanedData = this.prepData(sourceData);

      console.log(sourceData);
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
        .attr('width', this.x.bandwidth())
        .attr('y', (d) => {
          return this.y(d.seconds);
        })
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
    const preppedData = sourceData.sort((a, b) => {
      return compare(a.data, b.date, false);
    });

    const startDate = new Date(preppedData[0].date);
    const endDate = new Date(preppedData[preppedData.length - 1].date);

    for (let i = 1; i < 100; i++) {
      const d = new Date(startDate.setDate(startDate.getDate() + i * 7));
      console.log(d);
      // if (d > endDate){
      //   break;
      // }
      // const formattedDate =
    }

    console.log(new Date(startDate) + ' ' + endDate);

    return preppedData;
  }
}
