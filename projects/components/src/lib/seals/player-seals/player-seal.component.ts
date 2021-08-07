import { Component, Input, OnInit } from '@angular/core';
import { PlayerSeal } from '.';

@Component({
  selector: 'lib-player-seal',
  template: `
    <section>
      <h2>{{playerSeal.sealTitle}}</h2>
    </section>
  `,
  styles: [``]
})
export class PlayerSealComponent {
  @Input()
  playerSeal: PlayerSeal;

  constructor() {}
}
