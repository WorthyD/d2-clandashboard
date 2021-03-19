import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface Callout {
  title: string;
  value: number | string;
  subValue: number | string;
  subTitle: string;
}

@Component({
  selector: 'lib-member-callout',
  templateUrl: './member-callout.component.html',
  styleUrls: ['./member-callout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberCalloutComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  callouts: Callout[];

  constructor() {}

  ngOnInit(): void {}
}
