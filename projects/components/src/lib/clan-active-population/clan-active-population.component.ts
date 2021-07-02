import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../core/animations/route.animations.service';

@Component({
  selector: 'lib-clan-active-population',
  templateUrl: './clan-active-population.component.html',
  styleUrls: ['./clan-active-population.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

  // animations: [routeAnimations]
})
export class ClanActivePopulationComponent implements OnInit {
  //  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  @Input()
  last24Hours;
  @Input()
  prev24Hours;

  @Input()
  lastWeek;
  @Input()
  prevWeek;

  @Input()
  lastMonth;

  @Input()
  prevMonth;

  @Input()
  isUpdating;

  constructor() {}

  ngOnInit(): void {}
}
