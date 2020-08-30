import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MemberActivityStat } from 'bungie-models';
import * as moment from 'moment';
@Component({
  selector: 'lib-member-activity-heat-map',
  templateUrl: './member-activity-heat-map.component.html',
  styleUrls: ['./member-activity-heat-map.component.scss']
})
export class MemberActivityHeatMapComponent implements OnInit, OnChanges {
  @Input()
  events: MemberActivityStat[];

  formattedData;

  @Input()
  isLoading: boolean = true;

  constructor() {}
  cellSelect(cellDate) {
    //console.log(cellDate);
  }
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.events) {
      console.log('changes', changes.events);
      this.processData(changes.events.currentValue);
    }
  }

  processData(changes) {
    const raw = changes.map((x) => {
      return { date: moment(x.period).format('YYYY-MM-DD'), seconds: x.values.activityDurationSeconds.basic.value };
    });


    // Todo: Find better way to handle this.
    let holder = {};

    raw.forEach(function (d) {
      if (holder.hasOwnProperty(d.date)) {
        holder[d.date] = holder[d.date] + d.seconds;
      } else {
        holder[d.date] = d.seconds;
      }
    });

    let obj2 = [];

    for (let prop in holder) {
      obj2.push({ date: prop, seconds: holder[prop] });
    }
    console.log(obj2);
    this.formattedData = obj2;

    console.log(this.formattedData);
  }
}
