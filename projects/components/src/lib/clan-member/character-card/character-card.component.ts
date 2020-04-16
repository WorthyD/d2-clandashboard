import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'bungie-models';

export interface CharacterCardModel extends Character {}

@Component({
    selector: 'lib-character-card',
    templateUrl: './character-card.component.html',
    styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
    @Input()
    character: CharacterCardModel;
    constructor() {}

    ngOnInit(): void {}
}
