import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { MemberProfile, ClanMember } from 'bungie-models';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ClanMemberListItem {
    member: ClanMember;
    profile: MemberProfile;
}

@Component({
    selector: 'lib-clan-roster-list-view',
    templateUrl: './clan-roster-list-view.component.html',
    styleUrls: ['./clan-roster-list-view.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClanRosterListViewComponent implements OnInit {
    displayedColumns: string[] = ['memberId', 'displayName', 'displayName2', 'dateLastPlayed', 'controls'];
    dataSource;

    @Input() members: ClanMemberListItem[];

    @Output() viewMember = new EventEmitter<number>();

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor() {}

    ngOnInit() {
        // console.log(this.members);
        // this.dataSource = new MatTableDataSource(this.members);
        // this.dataSource.sortingDataAccessor = (item, property) => {
        //     switch (property) {
        //         case 'dateLastPlayed':
        //             return item.profile?.profile.data.dateLastPlayed;
        //         default:
        //             return item[property];
        //     }
        // };
        // this.dataSource.sort = this.sort;
    }

    memberClick(m: ClanMemberListItem) {
        this.viewMember.emit(m.member.destinyUserInfo.membershipId);
    }
}
