import { Component, OnInit, Input, ChangeDetectionStrategy, PipeTransform, Pipe } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
@Component({
  selector: 'lib-class-cell',
  template: `
    <div [ngClass]="(profile?.characters.data)[characterHash].classType | classicon">
      {{ (profile?.characters.data)[characterHash].light }}
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1 1 33.33%;
        align-items: center;
      }
      :host > div {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        text-align: center;
        justify-content:center;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassCellComponent implements OnInit {
  @Input() characterHash: string;

  @Input() profile: MemberProfile;

  constructor() {}

  ngOnInit(): void {}

  getIcon(): string {
    const classType = (this.profile?.characters.data)[this.characterHash].classType;
    switch (classType) {
      case 0:
        return 'titan';
      case 1:
        return 'hunter';
      case 2:
        return 'warlock';
    }
  }
}
@Pipe({
  name: 'classicon',
  pure: true
})
export class ClassIconPipe implements PipeTransform {
  constructor() {}

  transform(classType: number): any {
    switch (classType) {
      case 0:
        return 'titan-cell';
      case 1:
        return 'hunter-cell';
      case 2:
        return 'warlock-cell';
    }
  }
}
