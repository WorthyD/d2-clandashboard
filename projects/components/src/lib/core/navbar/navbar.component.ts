import { Component, OnInit, Input } from '@angular/core';
import { ClanDetails } from 'bungie-models';

@Component({
    selector: 'lib-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @Input()
    clanDetails: ClanDetails;
    constructor() {}

    ngOnInit(): void {}
}
