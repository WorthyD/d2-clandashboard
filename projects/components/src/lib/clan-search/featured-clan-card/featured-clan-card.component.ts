import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-featured-clan-card',
  templateUrl: './featured-clan-card.component.html',
  styleUrls: ['./featured-clan-card.component.scss'],
})
export class FeaturedClanCardComponent implements OnInit {
  @Input()
  cardTitle: string;

  @Input()
  cardTip: string;


  @Input()
  featuredClans: any[];

  @Output() viewClan = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  clanClick(clan) {
    this.viewClan.emit(clan);
}
}
