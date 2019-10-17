import { Component, OnInit } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
    getClanMemberEntities,
    getAllMembers
} from '../store/clan-members/clan-members.selectors';
import { getMemberProfileEntities } from '../store/member-profiles/member-profiles.selectors';

import { ClanMemberListItem } from '@destiny/components';

const clanMembers = createSelector(
    getAllMembers,
    getMemberProfileEntities,
    (members, profiles) => {
        const allUsers: ClanMemberListItem[] = [];
        members.forEach(x => {
            allUsers.push({
                member: x,
                profile: profiles[x.destinyUserInfo.membershipId]
            });
        });
        return allUsers;
    }
);

@Component({
    selector: 'app-clan-roster',
    templateUrl: './clan-roster.component.html',
    styleUrls: ['./clan-roster.component.scss']
})
export class ClanRosterComponent implements OnInit {
    constructor(private store: Store<any>) {}

    members$: Observable<ClanMemberListItem[]> = this.store.pipe(
        select(clanMembers)
    );

    ngOnInit() {}
}
