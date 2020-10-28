import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-member-type',
  template: `<mat-icon [svgIcon]="type | memberType"></mat-icon>`,
  encapsulation: ViewEncapsulation.None
})
export class MemberTypeComponent implements OnInit {
  @Input()
  type;

  constructor() {}

  ngOnInit(): void {}
}
