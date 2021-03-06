import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MemberActivityStat } from 'bungie-models';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
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

  @Output()
  dateSelected = new EventEmitter<string>();

  constructor() {}
  cellSelect(cellDate) {
    //console.log(cellDate);
    this.dateSelected.emit(cellDate);
  }
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.events && changes.events.currentValue) {
      this.processData(changes.events.currentValue);
    }
  }

  processData(changes) {
    const raw = changes.map((x) => {
      return { date: formatDate(x.period), seconds: x.values.activityDurationSeconds.basic.value };
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
    this.formattedData = obj2;
  }
}
