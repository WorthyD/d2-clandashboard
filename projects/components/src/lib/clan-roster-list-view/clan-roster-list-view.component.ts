import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ChangeDetectionStrategy
} from '@angular/core';

import { MemberProfile, ClanMember } from 'bungie-models';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';

export interface ClanMemberListItem {
    member: ClanMember;
    profile: MemberProfile;
}

@Component({
    selector: 'lib-clan-roster-list-view',
    templateUrl: './clan-roster-list-view.component.html',
    styleUrls: ['./clan-roster-list-view.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClanRosterListViewComponent implements OnInit {
    displayedColumns: string[] = ['displayName', 'characters', 'joinDate', 'dateLastPlayed', 'controls'];
    sortedData: ClanMemberListItem[];

    @Input() members: ClanMemberListItem[];

    @Output() viewMember = new EventEmitter<number>();

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor() {}

    ngOnInit() {
        this.sortedData = this.members.slice();
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

    sortData(sort: Sort) {
        const data = this.members.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'displayName':
                    return compare(
                        a.member.destinyUserInfo.displayName,
                        b.member.destinyUserInfo.displayName,
                        isAsc
                    );
                case 'dateLastPlayed':
                    return compare(
                        a.profile?.profile.data.dateLastPlayed,
                        b.profile?.profile.data.dateLastPlayed,
                        isAsc
                    );
                case 'joinDate':
                    return compare(a.member?.joinDate, b.member?.joinDate, isAsc);

                case 'characters':
                    return compare(this.getHighestLight(a), this.getHighestLight(b), isAsc);
               default:
                    return 0;
            }
        });
    }

    // This is probably terribly un-performant, but whatever
    getHighestLight(item: ClanMemberListItem) {
        const lights = item.profile.profile.data.characterIds.map(hash => {
            return item.profile.characters.data[hash].light;
        });
        return Math.max(...lights);
    }

    memberClick(m: ClanMemberListItem) {
        this.viewMember.emit(m.member.destinyUserInfo.membershipId);
    }
}
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
