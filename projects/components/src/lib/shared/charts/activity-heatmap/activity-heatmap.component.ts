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
  @Input()
  events: [];

  @Input()
  isLoading: boolean = true;
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

  hostElement; // Native element hosting the SVG container
  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
    console.log(this.hostElement);
  }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    //https://bl.ocks.org/mbostock/4063318/3997ed47bdfc5ef196001aa6f9677f9b5001851c
    const width = 960,
      height = 136,
      cellSize = 12;

    const formatPercent = d3.format('.1%');
    const week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const color = d3
      .scaleQuantize()
      .domain([0, 100])
      .range([
        '#a50026',
        '#d73027',
        '#f46d43',
        '#fdae61',
        '#fee08b',
        '#ffffbf',
        '#d9ef8b',
        '#a6d96a',
        '#66bd63',
        '#1a9850',
        '#006837'
      ]);

    //    console.log('svg', d3.select(this.hostElement).select('svg'));
    const thisYear = new Date().getFullYear() + 1;
    const lastYear = thisYear - 2;
    console.log(thisYear);
    console.log(d3.range(lastYear, thisYear));



    const svgr = d3
      .select(this.hostElement)
      .selectAll('.heat-map')
      console.log('this', svgr);

    const svg = d3
      .select(this.hostElement)
      .selectAll('svg')
      .data(d3.range(lastYear, thisYear))
      .enter()
      .append('svg')
      .attr('viewBox', '0 0 960 136')
      .attr('width', '100%')
      //.attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width - cellSize * 53) / 2 + ',' + (height - cellSize * 7 - 1) + ')');

    // var svg = d3
    // .select(this.hostElement)
    // .selectAll('svg')
    // .data(d3.range(2011, 2015))
    // .enter()
    // .append('svg')
    // .attr('width', '100%')
    // .attr('data-height', '0.5678')
    // .attr('viewBox', '0 0 900 105')
    // .attr('class', 'RdYlGn')
    // .append('g')
    // .attr(
    //   'transform',
    //   'translate(' +
    //     (width - cellSize * 53) / 2 +
    //     ',' +
    //     (height - cellSize * 7 - 1) +
    //     ')'
    // );

    // Left Legend
    // svg
    //   .append('text')
    //   .attr('transform', 'translate(-6,' + cellSize * 3.5 + ')rotate(-90)')
    //   .attr('font-family', 'sans-serif')
    //   .attr('font-size', 10)
    //   .attr('text-anchor', 'middle')
    //   .text(function (d) {
    //     return d;
    //   });
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

    // const week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // var legend = svg
    //   .selectAll('.legend')
    //   .data(month)
    //   .enter()
    //   .append('g')
    //   .attr('class', 'legend')
    //   .attr('transform', function (d, i) {
    //     return 'translate(' + ((i + 1) * 50 + 8) + ',0)';
    //   });

    // legend
    //   .append('text')
    //   .attr('class', function (d, i) {
    //     return month[i];
    //   })
    //   .style('text-anchor', 'end')
    //   .attr('dy', '-.25em')
    //   .text(function (d, i) {
    //     return month[i];
    //   });

    // for (var i = 0; i < 7; i++) {
    //   svg
    //     .append('text')
    //     .attr('transform', 'translate(-5,' + cellSize * (i + 1) + ')')
    //     .style('text-anchor', 'end')
    //     .attr('dy', '-.25em')
    //     .text(function (d) {
    //       return week_days[i];
    //     });
    // }

    const endDate = new Date();
    const startDate = moment().add(-365, 'days');

    const rect = svg
      .append('g')
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .selectAll('rect')
      .data(function (d) {
        return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1));
      })
      .enter()
      .append('rect')
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('x', function (d) {
        // console.log('x', d);
        return d3.timeWeek.count(d3.timeYear(d), d) * cellSize;
      })
      .attr('y', function (d) {
        return d.getDay() * cellSize;
      })
      .attr('title', function (d) {
        return d;
      })
      .datum(d3.timeFormat('%Y-%m-%d'));
    // rect.on('click', mouseover);
    // rect.on('mouseover', mouseover);
    // function mouseover(d) {
    //   console.log(d);
    // }

    //////// Month bariers
    svg
      .append('g')
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .selectAll('path')
      .data(function (d) {
        return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1));
      })
      .enter()
      .append('path')
      .attr('d', pathMonth);

    // d3.csv('dji.csv', function (error, csv) {
    //   if (error) throw error;

    const data = d3
      .nest()
      .key(function (d) {
        return d.date;
      })
      .rollup(function (d) {
        return d[0].count;
      })
      .object(this.sourceData);

    rect
      .filter(function (d) {
        console.log(`${d} - ${d in data}`);
        return d in data;
      })
      .attr('fill', function (d) {
        return color(data[d]);
      })
      .append('title')
      .text(function (d) {
        return d + ': ' + formatPercent(data[d]);
      });
    // });

    function pathMonth(t0) {
      var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
        d0 = t0.getDay(),
        w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
        d1 = t1.getDay(),
        w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
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

    function click(date) {
      console.log('click');
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
