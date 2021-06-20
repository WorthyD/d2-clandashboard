import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BungieInfo } from 'bungie-models';

@Component({
  selector: 'lib-bungie-info',
  templateUrl: './bungie-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./bungie-info.component.scss']
})
export class BungieInfoComponent implements OnInit {
  @Input()
  bungieInfo: BungieInfo;

  @Input()
  loading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
