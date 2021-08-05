import { Component, Input, OnInit } from '@angular/core';
import { PlayerSeal } from '.';

@Component({
  selector: 'lib-player-seals',
  templateUrl: './player-seals.component.html',
  styleUrls: ['./player-seals.component.scss']
})
export class PlayerSealsComponent implements OnInit {
  @Input()
  playerSealse: PlayerSeal[];

  constructor() {}

  ngOnInit(): void {}
}
