import { Component, OnInit, Input, ChangeDetectionStrategy, PipeTransform, Pipe } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
@Component({
  selector: 'lib-clan-roster-list-view-story',
  template: `
    <lib-clan-roster-list-view [members]="members" [isLoading]="isLoading"></lib-clan-roster-list-view>
    <button (click)="click()">Button</button>
  `
})
export class ClanListViewStoryComponent implements OnInit {
  @Input()
  members;

  @Input()
  isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.members = this.members.concat([this.members[0]]);
  }
}
