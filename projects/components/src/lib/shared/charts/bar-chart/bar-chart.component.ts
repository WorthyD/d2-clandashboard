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
import * as d3 from 'd3';
import { SECONDS_IN_HOUR } from '@destiny/models/constants';
import { PlaytimePipe } from '../../../pipes/playtime/playtime.pipe';
import { compare } from '../../../utilities/compare';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
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

  chartHeight = 400;
  threshHold = SECONDS_IN_HOUR * 20;
  color = d3.scaleLinear().range(['#00ff00', '#ff0000']).domain([0, 1]);

  formatPipe = new PlaytimePipe();
  // (window:resize)=”onResize($event)”

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
  private changeSubject = new Subject<any>();

  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef, private zone: NgZone) {
    this.hostElement = this.elRef.nativeElement;
    this.cd.detach();
    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'resize')
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((e: Event) => {
          this.zone.run(() => {
            this.changeSubject.next(e);
          });
        });
    });
    this.changeSubject.subscribe((e: Event) => {
      this.updateChart(this.events);
    });
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

      if (firstData instanceof Date) {
        cleanedData = this.prepDateData(sourceData);
        //this.x = d3.scaleTime();
        //  this.x.domain([cleanedData[0].date, cleanedData[cleanedData.length - 1].date]);
        // console.log(
        //   d3.min(cleanedData, (d) => {
        //     return d3.timeDay.offset(d.date, 0);
        //   })
        // );
        // console.log(
        //   d3.max(cleanedData, (d) => {
        //     return d3.timeDay.offset(d.date, 0);
        //   })
        // );

        // this.x.domain([
        //   d3.min(cleanedData, (d) => {
        //     return d3.timeDay.offset(d.date, 0);
        //   }),
        //   d3.max(cleanedData, (d) => {
        //     return d3.timeDay.offset(d.date, 0);
        //   })
        // ]);
        //this.x.domain(cleanedData.map((x) => x.date));

        //this.x = d3.scaleTime();
        this.x = d3.scaleBand();
        this.x.domain(cleanedData.map((x) => x.date));

        // console.log(cleanedData[0].date + ' ' + cleanedData[cleanedData.length - 1].date);
      } else {
        cleanedData = [...sourceData];
        this.x = d3.scaleBand().domain(cleanedData.map((x) => x.date));
      }

      this.y = d3.scaleLinear();
      this.y.domain([0, d3.max(cleanedData, (d) => d.seconds) * 1.1]);

      this.renderChart(cleanedData);
    }
  }

  renderChart(cleanedData) {
    const bounds = this.svg.node().getBoundingClientRect(),
      width = bounds.width - this.margin.left - this.margin.right,
      height = bounds.height - this.margin.top - this.margin.bottom;

    this.y.rangeRound([height, 0]);
    this.x.range([0, width]);

    // Draw X Axis
    const firstData = cleanedData[0].date;
    let xFunc = d3.axisBottom(this.x);

    if (firstData instanceof Date) {
      const r = cleanedData.length > 25 ? 5 : 3;
      xFunc = d3
        .axisBottom(this.x)
        .tickFormat((x) => {
          return formatDate(x);
        })
        .tickValues(
          this.x.domain().filter(function (d, i) {
            return !(i % r);
          })
        );
    }

    this.g
      .select('.axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xFunc);

    this.g.select('.axis--y').call(
      d3
        .axisLeft(this.y)
        .tickFormat(function (d) {
          return Math.floor(d / 3600); // Round to every hour
        })
        .ticks(10)
    );

    this.g.selectAll('rect').remove();

    const bars = this.g.selectAll('bar').data(cleanedData).enter().append('rect');

    bars
      .attr('class', 'activity-bar')
      .attr('x', (d) => {
        return this.x(d.date);
      })
      .attr('width', (d) => {
        return width / cleanedData.length;
      })
      .attr('y', (d) => {
        return this.y(0);
      })
      .attr('height', 0);
    const t = d3.transition().duration(500);
    bars
      .transition(t)
      .attr('y', (d) => {
        return this.y(d.seconds);
      })
      .attr('height', (d) => {
        return height - this.y(d.seconds);
      });

    this.addToolTips(bars);
  }

  addToolTips(bars) {
    bars
      .on('mouseover', (d) => {
        let label = d.date;
        if (d.date instanceof Date) {
          //label = `Date: ${formatDate(d.date)}`;
          label = `Date: ${d.date}`;
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
