import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { MemberProfile, ClanMember } from 'bungie-models';
import { MatSort } from '@angular/material/sort';

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
    displayedColumns: string[] = ['memberId', 'displayName', 'displayName2', 'dateLastPlayed', 'controls'];
    @Input() members: ClanMemberListItem[];

    @Output() viewMember = new EventEmitter<number>();

    @ViewChild(MatSort, {static: true}) sort: MatSort;


    constructor() {}

    ngOnInit() {}

    memberClick(m: ClanMemberListItem) {
        this.viewMember.emit(m.member.destinyUserInfo.membershipId);
    }
}
