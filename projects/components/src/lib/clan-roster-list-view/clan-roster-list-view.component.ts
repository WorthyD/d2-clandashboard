import { Component, OnInit, Input } from '@angular/core';

import { MemberProfile, ClanMember } from 'bungie-models';

export interface ClanMemberListItem {
    member: ClanMember;
    profile: MemberProfile;
}

@Component({
    selector: 'lib-clan-roster-list-view',
    templateUrl: './clan-roster-list-view.component.html',
    styleUrls: ['./clan-roster-list-view.component.css']
})
export class ClanRosterListViewComponent implements OnInit {
    @Input() members: ClanMemberListItem[];
    constructor() {}

    ngOnInit() {}
}
