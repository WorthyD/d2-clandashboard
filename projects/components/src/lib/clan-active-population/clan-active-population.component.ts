import { Component, OnInit } from '@angular/core';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../core/animations/route.animations.service';

@Component({
  selector: 'lib-clan-active-population',
  templateUrl: './clan-active-population.component.html',
  styleUrls: ['./clan-active-population.component.scss'],
  animations: [routeAnimations]
})
export class ClanActivePopulationComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor() { }

  ngOnInit(): void {
  }

}
