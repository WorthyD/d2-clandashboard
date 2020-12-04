import { Component, OnInit, Input, ChangeDetectionStrategy, PipeTransform, Pipe } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
@Component({
  selector: 'lib-activity-bar-chart-story',
  styles: [
    `
      .loading-row {
        height: auto;
        max-height: 40px;
        overflow: hidden;
        transition: max-height 1s ease-out;
      }
      .loading-done {
        max-height: 400px;
        transition: max-height 1s ease-out;
      }
    `
  ],
  template: `
    <div [ngClass]="{ 'loading-row': true, 'loading-done': !isLoading }">
      <div *ngIf="!isLoading; else loadingActivities">
        <lib-activity-bar-chart [events]="events"> </lib-activity-bar-chart>
      </div>
    </div>
    <ng-template #loadingActivities>
      <lib-loading-bar></lib-loading-bar>
    </ng-template>
  `
})
export class LoadingActivityComponent implements OnInit {
  @Input()
  events;

  @Input()
  isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  // click() {
  //   this.members = this.members.concat([this.members[0]]);
  // }
}
