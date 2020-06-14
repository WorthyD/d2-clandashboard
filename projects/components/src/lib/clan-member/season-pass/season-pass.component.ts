import { Component, OnInit, Input } from '@angular/core';
import { ClanMemberSeasonPassProgression } from '../../models/ClanMemberSeasonPass';

@Component({
    selector: 'lib-season-pass',
    templateUrl: './season-pass.component.html',
    styleUrls: ['./season-pass.component.scss'],
})
export class SeasonPassComponent implements OnInit {
    constructor() {}

    @Input()
    clanMemberSeasonPass: ClanMemberSeasonPassProgression;

    get seasonPassProgress() {
        return (
            this.clanMemberSeasonPass?.progression?.level +
            this.clanMemberSeasonPass?.prestigeProgression?.level
        );
    }

    get seasonPassProgressBarValue() {
        return (
            (this.clanMemberSeasonPass?.progression?.level /
                this.clanMemberSeasonPass?.progression?.levelCap) *
            100
        );
    }

    ngOnInit(): void {}
}
