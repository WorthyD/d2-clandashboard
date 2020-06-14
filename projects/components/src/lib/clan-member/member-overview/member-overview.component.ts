import { Component, OnInit, Input } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';

export interface MemberOverview {
    memberProfile: MemberProfile;
}

@Component({
    selector: 'lib-member-overview',
    templateUrl: './member-overview.component.html',
    styleUrls: ['./member-overview.component.scss'],
})
export class MemberOverviewComponent implements OnInit {
    @Input()
    memberOverview: MemberProfile;

    constructor() {}

    ngOnInit(): void {}
}
