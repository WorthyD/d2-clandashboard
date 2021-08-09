import { Component, Input, OnInit } from '@angular/core';
import { PlayerSeal } from '.';

@Component({
  selector: 'lib-player-seal',
  template: `
    <section>
      <h4 *ngIf="playerSeal.guilded">Guilded</h4>
      <div>
        <img src="//bungie.net/{{ playerSeal.sealImage }}" alt="{{ playerSeal.sealTitle }}" />
      </div>
      <h3>{{ playerSeal.sealTitle }}</h3>
      <p>{{ playerSeal.sealDescription }}</p>
    </section>
  `,
  styles: [
    `
      section {
        text-align: center;
      }
      div {
        height: 127px;
        width: 127px;
        position: relative;
        overflow: hidden;
        display: block;
      }

      div:after {
        animation: shine 5s ease-in-out infinite;
        animation-fill-mode: forwards;
        content: '';
        position: absolute;
        top: -110%;
        left: -210%;
        width: 200%;
        height: 200%;
        opacity: 0;
        transform: rotate(30deg);

        background: rgba(255, 255, 255, 0.13);
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.13) 0%,
          rgba(255, 255, 255, 0.13) 77%,
          rgba(255, 255, 255, 0.5) 92%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      .div:active:after {
        opacity: 0;
      }
      /* h4 {
        padding: 12px 48px;
        color: #ffffff;
        background: linear-gradient(to right, #c0c0c0 0, white 10%, #c0c0c0 20%);
        background-position: 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 2s infinite linear;
        animation-fill-mode: forwards;
        -webkit-text-size-adjust: none;
      } */

      /* @keyframes shine {
        0% {
          background-position: 0;
        }
        60% {
          background-position: 180px;
        }
        100% {
          background-position: 280px;
        }
      } */
      @keyframes shine {
        10% {
          opacity: 1;
          top: -30%;
          left: -30%;
          transition-property: left, top, opacity;
          transition-duration: 1s, 1s, 0.15s;
          transition-timing-function: ease;
        }
        100% {
          opacity: 0;
          top: -30%;
          left: -30%;
          transition-property: left, top, opacity;
        }
      }
    `
  ]
})
export class PlayerSealComponent {
  @Input()
  playerSeal: PlayerSeal;

  constructor() {}
}
