import { Component, OnInit, Input } from '@angular/core';
import { ClanDetails } from 'bungie-models';
@Component({
    selector: 'lib-clan-overview',
    templateUrl: './clan-overview.component.html',
    styleUrls: ['./clan-overview.component.scss']
})
export class ClanOverviewComponent implements OnInit {
    constructor() {}
    @Input()
    clanDetails: ClanDetails;

    ngOnInit(): void {}
}
