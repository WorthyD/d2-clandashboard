import { Component, Input, OnInit } from '@angular/core';
import { PlayerSeal } from '.';

@Component({
  selector: 'lib-player-seals',
  templateUrl: './player-seals.component.html',
  styleUrls: ['./player-seals.component.scss']
})
export class PlayerSealsComponent implements OnInit {
  guildedSeals: PlayerSeal[] = [];
  completedSeals: PlayerSeal[] = [];
  partialSeals: PlayerSeal[] = [];

  _playerSeals;
  @Input()
  get playerSeals(): PlayerSeal[] {
    return this._playerSeals;
  }
  set playerSeals(value) {
    this._playerSeals = value;
    this.applySeals(value);
  }

  applySeals(seals: PlayerSeal[]) {
    this.guildedSeals = seals?.filter((x) => x.guilded === true && x.complete === true);
    this.completedSeals = seals?.filter((x) => x.complete === true && x.guilded === false);
    this.partialSeals = seals?.filter((x) => x.complete === false && x.guilded === false);
  }

  constructor() {}

  ngOnInit(): void {}
}
