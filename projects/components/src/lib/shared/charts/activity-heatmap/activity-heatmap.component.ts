import {
  Component,
  OnInit,
  Output,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  SimpleChanges,
  OnChanges,
  EventEmitter
} from '@angular/core';
//import { SVGGraph, CanvasGraph, StrGraph } from 'calendar-graph';
import * as d3 from 'd3';
//import * as moment from 'moment';

@Component({
  selector: 'lib-activity-heatmap',
  templateUrl: './activity-heatmap.component.html',
  styleUrls: ['./activity-heatmap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityHeatmapComponent implements OnInit, OnChanges {
  hostElement;
  svg;
  rect;
  legend;
  tooltip;
  width = 900;
  height = 105;
  cellSize = 12;
  day = d3.timeFormat('%w');
  week = d3.timeFormat('%U');
  data;
  transitionDuration = 500;
  startYear = new Date().getFullYear() - 1;
  endYear = new Date().getFullYear() + 1;

  week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //color = d3.scaleLinear().range(['#dae289', '#3b6427']).domain([0, 1]);
  color = d3.scaleLinear().range(['#00ff00', '#ffff00', '#ff0000']).domain([0, 1]);
  emptyFill = '#fff';
  labelFontSize = '10px';

  @Input()
  events: [];

  @Output()
  cellSelect = new EventEmitter<string>();

  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.events) {
      this.updateChart(changes.events.currentValue);
    }
  }

  private updateChart(eventData) {
    if (!this.svg) {
      this.createChart(eventData);
      return;
    }
    this.processData(eventData);
    this.updateHeatMapActiveCells();
  }

  private createChart(eventData) {
    this.removeExistingChartFromParent();
    this.setChartDimentions();
    this.addYearLabels();
    this.addDayLabels();
    this.addDayRectangles();
    this.addLegend();
    this.addToolTip();
    this.addMonthLabels();
    this.addMonthBoundaries();

    this.processData(eventData);
    this.createHeatMapActiveCells();
  }

  private setChartDimentions() {
    this.svg = d3
      .select(this.hostElement)
      .selectAll('svg')
      .data(d3.range(this.startYear, this.endYear))
      .enter()
      .append('svg')
      .attr('width', '100%')
      .attr('data-height', '0.5678')
      .attr('viewBox', '0 0 900 105')
      .append('g')
      .attr(
        'transform',
        'translate(' + (this.width - this.cellSize * 53) / 2 + ',' + (this.height - this.cellSize * 7 - 1) + ')'
      );
  }

  private addYearLabels() {
    this.svg
      .append('text')
      .attr('transform', 'translate(-38,' + this.cellSize * 3.5 + ')rotate(-90)')
      .style('text-anchor', 'middle')
      .style('font-size', this.labelFontSize)
      .text(function (d) {
        return d;
      });
  }
  private addDayLabels() {
    for (let i = 0; i < 7; i++) {
      this.svg
        .append('text')
        .attr('transform', 'translate(-5,' + this.cellSize * (i + 1) + ')')
        .style('text-anchor', 'end')
        .style('font-size', this.labelFontSize)
        .attr('dy', '-.25em')
        .text((d) => {
          return this.week_days[i];
        });
    }
  }

  private addDayRectangles() {
    this.rect = this.svg
      .selectAll('.day')
      .data((d) => {
        return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1));
      })
      .enter()
      .append('rect')
      .attr('class', 'day')
      .attr('width', this.cellSize)
      .attr('stroke', '#666')
      .attr('height', this.cellSize)
      .attr('x', (d) => this.week(d) * this.cellSize)
      .attr('y', (d) => this.day(d) * this.cellSize)
      .attr('fill', this.emptyFill)
      .on('click', (d) => this.cellSelect.emit(d))
      .datum(d3.timeFormat('%Y-%m-%d'));
  }

  private removeExistingChartFromParent() {
    // !!!!Caution!!!
    // Make sure not to do;
    //     d3.select('svg').remove();
    // That will clear all other SVG elements in the DOM
    d3.select(this.hostElement).select('svg').remove();
  }
  private addLegend() {
    this.legend = this.svg
      .selectAll('.legend')
      .data(this.months)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => {
        return 'translate(' + ((i + 1) * 50 + 8) + ',0)';
      });
  }
  private addToolTip() {
    this.tooltip = d3.select(this.hostElement).append('div').attr('class', 'tooltip');
  }
  private addMonthLabels() {
    this.legend
      .append('text')
      .attr('class', (d, i) => {
        return this.months[i];
      })
      .style('text-anchor', 'end')
      .style('font-size', this.labelFontSize)
      .attr('dy', '-.25em')
      .text((d, i) => {
        return this.months[i];
      });
  }
  private addMonthBoundaries() {
    this.svg
      .selectAll('.month')
      .data(function (d) {
        return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1));
      })
      .enter()
      .append('path')
      .attr('class', 'month')
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .attr('stroke-width', '2px')
      .attr('id', (d, i) => {
        return this.months[i];
      })
      .attr('d', (t0) => this.monthPath(t0));
  }
  private monthPath(t0) {
    const t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = +this.day(t0),
      w0 = +this.week(t0),
      d1 = +this.day(t1),
      w1 = +this.week(t1),
      cellSize = this.cellSize;
    return (
      'M' +
      (w0 + 1) * cellSize +
      ',' +
      d0 * cellSize +
      'H' +
      w0 * cellSize +
      'V' +
      7 * cellSize +
      'H' +
      w1 * cellSize +
      'V' +
      (d1 + 1) * cellSize +
      'H' +
      (w1 + 1) * cellSize +
      'V' +
      0 +
      'H' +
      (w0 + 1) * cellSize +
      'Z'
    );
  }

  private processData(sourceData) {
    if (sourceData) {
      this.data = d3
        .nest()
        .key(function (d) {
          return d.date;
        })
        .rollup(function (d) {
          const seconds = d[0].seconds;
          return { seconds, time: Math.sqrt(d[0].seconds / 86400) };
        })
        .object(sourceData);
    }
  }
  private updateHeatMapActiveCells() {
    this.rect
      .filter((d) => {
        return !(d in this.data);
      })
      .transition()
      .duration(this.transitionDuration)
      .attr('fill', (d) => this.emptyFill);

    this.createHeatMapActiveCells();
  }
  private createHeatMapActiveCells() {
    if (this.data) {
      this.rect
        .filter((d) => {
          return d in this.data;
        })
        .transition()
        .duration(this.transitionDuration)
        .attr('fill', (d) => this.color(this.data[d].time));

      //Reset tool tips
      this.rect.on('mouseover', null);

      this.rect
        .filter((d) => {
          return d in this.data;
        })
        .on('mouseover', (d) => {
          console.log(d);
        });

      //   .append('svg:title', (d) => {
      //     return 'value : ' + this.data[d];
      //   });
      //this.rect.on('mouseover', (d) => {
      // console.log(this.data[d]);
      // div.transition().duration(200).style('opacity', 0.9);
      // div
      //   .html(formatTime(d.date) + '<br/>' + d.close)
      //   .style('left', d3.event.pageX + 'px')
      //   .style('top', d3.event.pageY - 28 + 'px');
      // });
      //.on('mouseout', function (d) {
      //div.transition().duration(500).style('opacity', 0);
      //});
    }
    // rect.on('click', click);
    // rect.on('mouseover', mouseover);
    // function mouseover(d) {
    //   console.log(d);
    // }
  }
}
