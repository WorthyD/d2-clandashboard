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
//import * as d3 from 'd3';
import { PlaytimePipe } from '../../../pipes/playtime/playtime.pipe';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTheme,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis
} from 'ng-apexcharts';
import { formatHeatmapData } from './activity-heatmap-formatter';
import { getDayOfWeek } from 'projects/data/src/lib/utility/date-utils';

export interface ChartOptions {
  // series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  toolTip: ApexTooltip;
  xaxis: ApexXAxis;
  theme: ApexTheme;
}

@Component({
  selector: 'lib-activity-heatmap',
  templateUrl: './activity-heatmap.component.html',
  styleUrls: ['./activity-heatmap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ActivityHeatmapComponent implements OnInit {
  // hostElement;
  // svg;
  // rect;
  // legend;
  // tooltip;
  // width = 900;
  // height = 105;
  // cellSize = 12;
  // day = d3.timeFormat('%w');
  // week = d3.timeFormat('%U');
  // data;
  // transitionDuration = 500;
  // startYear = 2017; //new Date().getFullYear() - 1;
  // endYear = new Date().getFullYear() + 1;

  // week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // color = d3.scaleLinear().range(['#00ff00', '#ff0000']).domain([0, 1]);
  // emptyFill = '#fff';
  // labelFontSize = '10px';

  formatPipe = new PlaytimePipe();

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

  dataSets;
  lastKey = '';
  lastData: any = {};

  @Output()
  cellSelect = new EventEmitter<string>();

  public chartOptions: Partial<ChartOptions>;

  constructor(private elRef: ElementRef) {
    this.chartOptions = {
      chart: {
        height: 250,
        type: 'heatmap',
        events: {
          dataPointSelection: (event, chartContext, config) => {
            /// ...
            // return this.toolTip({ series: null, seriesIndex: config.seriesIndex, dataPointIndex, w });
            const data = this.lookupData(config.seriesIndex, config.dataPointIndex, config.w.config.title.text);
            this.cellSelect.emit(data.date);
          }
        },
        animations: {
          speed: 50
        }
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          // useFillColorAsStroke: true,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 1,
                name: ' ',
                color: '#fafafa'
                // color: this.colorTheme === 'light' ? '#fafafa' : '#303030'
              },
              {
                from: 2,
                to: 17280,
                name: '0 - 5hr',
                color: '#00A100'
              },
              {
                from: 17281,
                to: 34560,
                name: '5 - 10 hr',
                color: '#128FD9'
              },
              {
                from: 34560,
                to: 51840,
                name: '10 -  15 hr',
                color: '#FFB200'
              },
              {
                from: 51841,
                to: 86400,
                name: '15 - 24 hr',
                color: '#FF0000'
              }
            ]
          }
        }
      },
      theme: {
        mode: this.colorTheme
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'category',
        labels: {
          show: true,
          formatter: (value: string, timestamp?: number, opts?: any) => {
            return this.xAxisLabelFormatter(value);
          }
        },
        tooltip: {
          enabled: false
        }
      },
      title: {
        //  text: 'HeatMap Chart with Color Range'
      },
      toolTip: {
        custom: ({ series, seriesIndex, dataPointIndex, w }) => this.toolTip({ series, seriesIndex, dataPointIndex, w })
        // custom: function({series, seriesIndex, dataPointIndex, w}) {
        //   return '<div class="arrow_box">' +
        //     '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
        //     '</div>'
        // }
        // fixed: {
        //   enabled: false
        // },
        // x: {
        //   show: false
        // },
        //  y: {
        //   formatter: (val, opts) => {
        //     let convertedVal = 0;
        //     //console.log(opts);
        //     // if (this.convertTo === 'Minutes') {
        //     //   convertedVal = val * 60;
        //     // } else if (this.convertTo === 'Hours') {
        //     //           convertedVal = val * 60 * 60;
        //     // }
        //     return `${this.formatPipe.transform(val)}`;
        //     //return 'test';
        //   }
        // }
      }
    };
  }

  ngOnInit(): void {}

  toolTip({ series, seriesIndex, dataPointIndex, w }) {
    const key = `${seriesIndex}-${dataPointIndex}-${w.config.title.text}`;

    if (this.lastKey !== key) {
      this.lastKey = key;
      this.lastData = this.lookupData(seriesIndex, dataPointIndex, w.config.title.text);
      // console.log(this.lastData.date);
      // console.log(this.lastData.date.toDateString());
      // console.log(this.lastData.date.toLocaleDateString());
    }
    return `<div class="p-1">
       <div>Date: ${formatDate(this.lastData.date)}</div>
       <div>Time: ${this.formatPipe.transform(this.lastData.y)}</div>
       </div>`;
  }

  xAxisLabelFormatter(val) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const labelWeeks = ['w0', 'w4', 'w8', 'w13', 'w17', 'w22', 'w26', 'w30', 'w34', 'w39', 'w45', 'w49'];
    const index = labelWeeks.indexOf(val);

    return index > -1 ? months[index] : '';
  }

  lookupData(seriesIndex, dataPointIndex, year): any {
    const yearData = this.dataSets.find((x) => x.year === year);
    const dayOfWeek = this.getDayOfWeekReverse(seriesIndex);
    const weekData = yearData.data.find((x) => x.name === dayOfWeek);
    const dayData = weekData.data.find((x) => x.x === `w${dataPointIndex}`);
    return dayData;
  }
  getDayOfWeekReverse(dayIndex) {
    switch (dayIndex) {
      case 6:
        return 'Sunday';
      case 5:
        return 'Monday';
      case 4:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 2:
        return 'Thursday';
      case 1:
        return 'Friday';
      case 0:
        return 'Saturday';
    }
  }
  updateChart(events) {
    this.dataSets = formatHeatmapData(events);
    //  console.log(this.dataSets);
    //    console.log(this.dataSets);
  }

  //TODO: change this.
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.events) {
  //     this.updateChart(changes.events.currentValue);
  //   }
  // }

  // private updateChart(eventData) {
  //   if (!this.svg) {
  //     this.createChart(eventData);
  //     return;
  //   }
  //   this.processData(eventData);
  //   this.updateHeatMapActiveCells();
  // }

  // private createChart(eventData) {
  //   this.removeExistingChartFromParent();
  //   this.setChartDimentions(eventData);
  //   this.addYearLabels();
  //   this.addDayLabels();
  //   this.addDayRectangles();
  //   this.addLegend();
  //   this.addLegendScale();
  //   this.addToolTip();
  //   this.addMonthLabels();
  //   this.addMonthBoundaries();

  //   this.processData(eventData);
  //   this.createHeatMapActiveCells();
  // }

  // private setChartDimentions(eventData) {
  //   console.log(eventData);
  //   const dates = eventData.map((x) => new Date(x.date));
  //   const mnDate = dates.reduce((a, b) => {
  //     return a < b ? a : b;
  //   }).getFullYear();

  //   const mxDate = dates.reduce( (a, b) =>{
  //     return a > b ? a : b;
  //   }).getFullYear();

  //   console.log(mnDate);
  //   console.log(mxDate);
  //   this.svg = d3
  //     .select(this.hostElement)
  //     .attr('class', 'activity-heatmap')
  //     .selectAll('svg')
  //     .data(d3.range(mnDate, mxDate+1))
  //     .enter()
  //     .append('svg')
  //     .attr('width', '100%')
  //     .attr('data-height', '0.5678')
  //     .attr('viewBox', '0 0 900 105')
  //     .append('g')
  //     .attr(
  //       'transform',
  //       'translate(' + (this.width - this.cellSize * 53) / 2 + ',' + (this.height - this.cellSize * 7 - 1) + ')'
  //     );
  // }

  // private addLegendScale() {
  //   const legend = d3
  //     .select(this.hostElement)
  //     .append('svg')
  //     .attr('width', '100%')
  //     .attr('viewBox', '0 0 900 105')
  //     .append('g')
  //     .attr(
  //       'transform',
  //       'translate(' + (this.width - this.cellSize * 53) / 2 + ',' + (this.height - this.cellSize * 7 - 1) + ')'
  //     );
  //   const categoriesCount = 12;

  //   const legendWidth = 50;
  //   const categories = [...Array(categoriesCount)].map((_, i) => {
  //     const upperBound = (86400 / categoriesCount) * (i + 1);
  //     const lowerBound = (86400 / categoriesCount) * i;

  //     return {
  //       upperBound,
  //       lowerBound,
  //       color: this.color(upperBound / 86400),
  //       selected: true
  //     };
  //   });

  //   legend
  //     .selectAll('rect')
  //     .data(categories)
  //     .enter()
  //     .append('rect')
  //     .attr('fill', (d) => d.color)
  //     .attr('x', (d, i) => legendWidth * i)
  //     .attr('width', legendWidth)
  //     .attr('height', 15);

  //   legend
  //     .selectAll('text')
  //     .data(categories)
  //     .join('text')
  //     .attr('x', (d, i) => legendWidth * i)
  //     .attr('y', 30)
  //     .attr('class', 'legend-key')
  //     .attr('text-anchor', 'start')
  //     .text((d) => `${d.lowerBound.toFixed(2) / 3600} - ${d.upperBound.toFixed(2) / 3600}`);

  //   legend.append('text').attr('dy', -5).attr('class', 'legend-desc').text('Hours Played');
  // }

  // private addYearLabels() {
  //   this.svg
  //     .append('text')
  //     .attr('class', 'year-label')
  //     .attr('transform', 'translate(-38,' + this.cellSize * 3.5 + ')rotate(-90)')
  //     .style('text-anchor', 'middle')
  //     .text(function (d) {
  //       return d;
  //     });
  // }
  // private addDayLabels() {
  //   for (let i = 0; i < 7; i++) {
  //     this.svg
  //       .append('text')
  //       .attr('class', 'day-label')
  //       .attr('transform', 'translate(-5,' + this.cellSize * (i + 1) + ')')
  //       .style('text-anchor', 'end')
  //       .attr('dy', '-.25em')
  //       .text((d) => {
  //         return this.week_days[i];
  //       });
  //   }
  // }

  // private addDayRectangles() {
  //   this.rect = this.svg
  //     .selectAll('.day')
  //     .data((d) => {
  //       return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1));
  //     })
  //     .enter()
  //     .append('rect')
  //     .attr('class', 'day')
  //     .attr('width', this.cellSize)
  //     .attr('stroke', '#666')
  //     .attr('height', this.cellSize)
  //     .attr('x', (d) => this.week(d) * this.cellSize)
  //     .attr('y', (d) => this.day(d) * this.cellSize)
  //     .attr('fill', this.emptyFill)
  //     .on('click', (d) => this.cellSelect.emit(d))
  //     .datum(d3.timeFormat('%Y-%m-%d'));
  // }

  // private removeExistingChartFromParent() {
  //   // !!!!Caution!!!
  //   // Make sure not to do;
  //   //     d3.select('svg').remove();
  //   // That will clear all other SVG elements in the DOM
  //   d3.select(this.hostElement).select('svg').remove();
  // }
  // private addLegend() {
  //   this.legend = this.svg
  //     .selectAll('.legend')
  //     .data(this.months)
  //     .enter()
  //     .append('g')
  //     .attr('class', 'legend')
  //     .attr('transform', (d, i) => {
  //       return 'translate(' + ((i + 1) * 50 + 8) + ',0)';
  //     });
  // }
  // private addToolTip() {
  //   this.tooltip = d3.select(this.hostElement).append('div').attr('class', 'heatmap-tooltip');
  // }
  // private addMonthLabels() {
  //   this.legend
  //     .append('text')
  //     .attr('class', 'month-label')
  //     .style('text-anchor', 'end')
  //     .attr('dy', '-.25em')
  //     .text((d, i) => {
  //       return this.months[i];
  //     });
  // }
  // private addMonthBoundaries() {
  //   this.svg
  //     .selectAll('.month')
  //     .data(function (d) {
  //       return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1));
  //     })
  //     .enter()
  //     .append('path')
  //     .attr('class', 'month')
  //     .attr('fill', 'none')
  //     .attr('stroke', '#000')
  //     .attr('stroke-width', '2px')
  //     .attr('id', (d, i) => {
  //       return this.months[i];
  //     })
  //     .attr('d', (t0) => this.monthPath(t0));
  // }
  // private monthPath(t0) {
  //   const t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
  //     d0 = +this.day(t0),
  //     w0 = +this.week(t0),
  //     d1 = +this.day(t1),
  //     w1 = +this.week(t1),
  //     cellSize = this.cellSize;
  //   return (
  //     'M' +
  //     (w0 + 1) * cellSize +
  //     ',' +
  //     d0 * cellSize +
  //     'H' +
  //     w0 * cellSize +
  //     'V' +
  //     7 * cellSize +
  //     'H' +
  //     w1 * cellSize +
  //     'V' +
  //     (d1 + 1) * cellSize +
  //     'H' +
  //     (w1 + 1) * cellSize +
  //     'V' +
  //     0 +
  //     'H' +
  //     (w0 + 1) * cellSize +
  //     'Z'
  //   );
  // }

  // private processData(sourceData) {
  //   if (sourceData) {
  //     this.data = d3
  //       .nest()
  //       .key(function (d) {
  //         return d.date;
  //       })
  //       .rollup(function (d) {
  //         const seconds = d[0].seconds;
  //         return { seconds, value: Math.sqrt(d[0].seconds / 86400) };
  //       })
  //       .object(sourceData);
  //   }
  // }
  // private updateHeatMapActiveCells() {
  //   this.rect
  //     .filter((d) => {
  //       return !(d in this.data);
  //     })
  //     .transition()
  //     .duration(this.transitionDuration)
  //     .attr('fill', (d) => this.emptyFill);

  //   this.createHeatMapActiveCells();
  // }
  // private createHeatMapActiveCells() {
  //   if (this.data) {
  //     const activeCells = this.rect.filter((d) => {
  //       return d in this.data;
  //     });

  //     activeCells
  //       .transition()
  //       .duration(this.transitionDuration)
  //       .attr('class', 'day active')
  //       .attr('fill', (d) => this.color(this.data[d].value));

  //     //Reset tool tips
  //     this.rect.attr('class', 'day').on('mouseover', null);

  //     const that = this;
  //     activeCells
  //       .on('mouseover', (d) => {
  //         const data = this.data[d];
  //         this.tooltip.style('opacity', 0.9);
  //         this.tooltip.html(`Date: ${formatDate(d)}<br/> Time:  ${this.formatActivityDuration(data.seconds)}`);
  //       })
  //       .on('mousemove', () => {
  //         that.tooltip.style('left', d3.event.pageX + 30 + 'px').style('top', d3.event.pageY + 'px');
  //       })
  //       .on('mouseout', (d) => {
  //         this.tooltip.style('opacity', 0);
  //       });
  //   }
  // }
  // private formatActivityDuration(seconds) {
  //   return this.formatPipe.transform(seconds);
  // }
}
