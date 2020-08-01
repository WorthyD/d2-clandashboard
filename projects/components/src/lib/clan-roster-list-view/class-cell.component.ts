import { Component, OnInit, Input, ChangeDetectionStrategy, PipeTransform, Pipe } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
@Component({
  selector: 'lib-class-cell',
  template: `
     <mat-icon [svgIcon]="(profile?.characters.data)[characterHash].classType | classicon"></mat-icon>
    {{ (profile?.characters.data)[characterHash].light }}
  `,
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
        return 'titan';
      case 1:
        return 'hunter';
      case 2:
        return 'warlock';
    }
  }
}
