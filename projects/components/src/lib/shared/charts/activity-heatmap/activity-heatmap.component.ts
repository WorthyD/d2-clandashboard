import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { SVGGraph, CanvasGraph, StrGraph } from 'calendar-graph';
import * as d3 from 'd3';
import * as moment from 'moment';

@Component({
  selector: 'lib-activity-heatmap',
  templateUrl: './activity-heatmap.component.html',
  styleUrls: ['./activity-heatmap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityHeatmapComponent implements OnInit {
  hostElement;
  svg;
  rect;
  legend;
  width = 900;
  height = 105;
  cellSize = 12;
  day = d3.timeFormat('%w');
  week = d3.timeFormat('%U');

  week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  @Input()
  events: [];

  maxCount = 100;

  sourceData = [
    {
      date: '2020-02-02',
      count: 40
    },
    {
      date: '2020-02-03',
      count: 50
    }
  ];

  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    //this.renderChart();
    this.updateChart(this.sourceData);
  }

  private updateChart(eventData) {
    if (!this.svg) {
      this.createChart(eventData);
    }
  }
  private createChart(eventData) {
    this.removeExistingChartFromParent();
    this.setChartDimentions();
    this.addYearLabels();
    this.addDayLabels();
    this.addDayRectangles();
    this.addLegend();
    this.addMonthLabels();
  }
  private setChartDimentions() {
    this.svg = d3
      .select(this.hostElement)
      .selectAll('svg')
      .data(d3.range(2019, 2021))
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
      .text(function (d) {
        return d;
      });
  }
  private addDayLabels() {
    for (var i = 0; i < 7; i++) {
      this.svg
        .append('text')
        .attr('transform', 'translate(-5,' + this.cellSize * (i + 1) + ')')
        .style('text-anchor', 'end')
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
      .attr('x', (d) => {
        return this.week(d) * this.cellSize;
      })
      .attr('y', (d) => {
        return this.day(d) * this.cellSize;
      })
      .attr('fill', '#fff')
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
  private addMonthLabels() {
    this.legend
      .append('text')
      .attr('class', (d, i) => {
        return this.months[i];
      })
      .style('text-anchor', 'end')
      .attr('dy', '-.25em')
      .text((d, i) => {
        return this.months[i];
      });
  }

  renderChart() {
    function click(date) {
      console.log('click');
    }
    var width = 900,
      height = 105,
      cellSize = 12,
      week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var day = d3.timeFormat('%w'),
      week = d3.timeFormat('%U'),
      percent = d3.format('.1%'),
      format = d3.timeFormat('%Y%m%d'),
      parseDate = d3.timeFormat('%Y%m%d').parse;

    var color = d3.scaleLinear().range(['white', '#002b53']).domain([0, 1]);

    var svg = d3
      .select(this.hostElement)
      .selectAll('svg')
      .data(d3.range(2019, 2021))
      .enter()
      .append('svg')
      .attr('width', '100%')
      .attr('data-height', '0.5678')
      .attr('viewBox', '0 0 900 105')
      .attr('class', 'RdYlGn')
      .append('g')
      .attr('transform', 'translate(' + (width - cellSize * 53) / 2 + ',' + (height - cellSize * 7 - 1) + ')');

    svg
      .append('text')
      .attr('transform', 'translate(-38,' + cellSize * 3.5 + ')rotate(-90)')
      .style('text-anchor', 'middle')
      .text(function (d) {
        return d;
      });

    for (var i = 0; i < 7; i++) {
      svg
        .append('text')
        .attr('transform', 'translate(-5,' + cellSize * (i + 1) + ')')
        .style('text-anchor', 'end')
        .attr('dy', '-.25em')
        .text(function (d) {
          return week_days[i];
        });
    }

    var rect = svg
      .selectAll('.day')
      .data(function (d) {
        return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1));
      })
      .enter()
      .append('rect')
      .attr('class', 'day')
      .attr('width', cellSize)
      .attr('stroke', '#666')
      .attr('height', cellSize)
      .attr('x', function (d) {
        return week(d) * cellSize;
      })
      .attr('y', function (d) {
        return day(d) * cellSize;
      })
      .attr('fill', '#fff')
      .datum(d3.timeFormat('%Y-%m-%d'));

    var legend = svg
      .selectAll('.legend')
      .data(month)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', function (d, i) {
        return 'translate(' + ((i + 1) * 50 + 8) + ',0)';
      });

    legend
      .append('text')
      .attr('class', function (d, i) {
        return month[i];
      })
      .style('text-anchor', 'end')
      .attr('dy', '-.25em')
      .text(function (d, i) {
        return month[i];
      });

    svg
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
      .attr('id', function (d, i) {
        return month[i];
      })
      .attr('d', monthPath);

    var Comparison_Type_Max = 100;

    console.log('-------');
    var data = d3
      .nest()
      .key(function (d) {
        console.log(d);
        return d.date;
      })
      .rollup(function (d) {
        console.log(d[0].count);
        return Math.sqrt(d[0].count / Comparison_Type_Max);
      })
      .object(this.sourceData);
    console.log(data);

    rect
      .filter(function (d) {
        return d in data;
      })
      .attr('fill', function (d) {
        console.log('fill', color(data[d]));
        return color(data[d]);
      })
      .attr('data-title', function (d) {
        return 'value : ' + Math.round(data[d] * 100);
      });
    rect.on('click', click);
    rect.on('mouseover', mouseover);
    function mouseover(d) {
      console.log(d);
    }

    function numberWithCommas(x) {
      x = x.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
      return x;
    }

    function monthPath(t0) {
      var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
        d0 = +day(t0),
        w0 = +week(t0),
        d1 = +day(t1),
        w1 = +week(t1);
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
  }
}
/*
var width = 900,
  height = 105,
  cellSize = 12; // cell size
week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

var day = d3.time.format('%w'),
  week = d3.time.format('%U'),
  percent = d3.format('.1%'),
  format = d3.time.format('%Y%m%d');
parseDate = d3.time.format('%Y%m%d').parse;

var color = d3.scale.linear().range(['white', '#002b53']).domain([0, 1]);

var svg = d3
  .select('.calender-map')
  .selectAll('svg')
  .data(d3.range(2011, 2015))
  .enter()
  .append('svg')
  .attr('width', '100%')
  .attr('data-height', '0.5678')
  .attr('viewBox', '0 0 900 105')
  .attr('class', 'RdYlGn')
  .append('g')
  .attr(
    'transform',
    'translate(' +
      (width - cellSize * 53) / 2 +
      ',' +
      (height - cellSize * 7 - 1) +
      ')'
  );

svg
  .append('text')
  .attr('transform', 'translate(-38,' + cellSize * 3.5 + ')rotate(-90)')
  .style('text-anchor', 'middle')
  .text(function (d) {
    return d;
  });

for (var i = 0; i < 7; i++) {
  svg
    .append('text')
    .attr('transform', 'translate(-5,' + cellSize * (i + 1) + ')')
    .style('text-anchor', 'end')
    .attr('dy', '-.25em')
    .text(function (d) {
      return week_days[i];
    });
}

var rect = svg
  .selectAll('.day')
  .data(function (d) {
    return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1));
  })
  .enter()
  .append('rect')
  .attr('class', 'day')
  .attr('width', cellSize)
  .attr('height', cellSize)
  .attr('x', function (d) {
    return week(d) * cellSize;
  })
  .attr('y', function (d) {
    return day(d) * cellSize;
  })
  .attr('fill', '#fff')
  .datum(format);

var legend = svg
  .selectAll('.legend')
  .data(month)
  .enter()
  .append('g')
  .attr('class', 'legend')
  .attr('transform', function (d, i) {
    return 'translate(' + ((i + 1) * 50 + 8) + ',0)';
  });

legend
  .append('text')
  .attr('class', function (d, i) {
    return month[i];
  })
  .style('text-anchor', 'end')
  .attr('dy', '-.25em')
  .text(function (d, i) {
    return month[i];
  });

svg
  .selectAll('.month')
  .data(function (d) {
    return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1));
  })
  .enter()
  .append('path')
  .attr('class', 'month')
  .attr('id', function (d, i) {
    return month[i];
  })
  .attr('d', monthPath);

d3.csv('data.csv', function (error, csv) {
  csv.forEach(function (d) {
    d.Comparison_Type = parseInt(d.Comparison_Type);
  });

  var Comparison_Type_Max = d3.max(csv, function (d) {
    return d.Comparison_Type;
  });

  var data = d3
    .nest()
    .key(function (d) {
      return d.Date;
    })
    .rollup(function (d) {
      return Math.sqrt(d[0].Comparison_Type / Comparison_Type_Max);
    })
    .map(csv);

  rect
    .filter(function (d) {
      return d in data;
    })
    .attr('fill', function (d) {
      return color(data[d]);
    })
    .attr('data-title', function (d) {
      return 'value : ' + Math.round(data[d] * 100);
    });
  $('rect').tooltip({ container: 'body', html: true, placement: 'top' });
});

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
  return x;
}

function monthPath(t0) {
  var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
    d0 = +day(t0),
    w0 = +week(t0),
    d1 = +day(t1),
    w1 = +week(t1);
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
*/
