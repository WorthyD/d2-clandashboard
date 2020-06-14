import { Component, OnInit, Input } from '@angular/core';
import { ClanProgress } from 'bungie-models';

@Component({
    selector: 'lib-clan-season-progress',
    templateUrl: './clan-season-progress.component.html',
    styleUrls: ['./clan-season-progress.component.scss'],
})
export class ClanSeasonProgressComponent implements OnInit {
    constructor() {}

    @Input()
    clanProgress: ClanProgress;

    get seasonProgress() {
        if (this.clanProgress?.level === this.clanProgress?.levelCap){
            return 100;
        }
        return (this.clanProgress?.progressToNextLevel / this.clanProgress?.nextLevelAt) * 100;
    }

    ngOnInit(): void {}
}
