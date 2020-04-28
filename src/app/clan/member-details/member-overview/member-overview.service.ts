import { Injectable } from '@angular/core';

import { ClanMemberState } from '../../store/clan-members/clan-members.state';
import { MemberProfileState } from '../../store/member-profiles/member-profiles.state';
import { Store, select } from '@ngrx/store';
import { getSelectedClanMember } from '../../store/clan-members/clan-members.selectors';
import { getClanMemberById } from '../../store/member-profiles/member-profiles.selectors';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class MemberOverviewService {
    constructor(
        private memberStore: Store<ClanMemberState>,
        private profileStore: Store<MemberProfileState>
    ) {
        console.log('constructor');
    }

    // selectedMember$ = this.memberStore.pipe(select(getSelectedClanMember));
    // selectedProfile$ = this.selectedMember$.pipe(
    //     switchMap((item) => {
    //         console.log(item);
    //         return null;
    //     })
    // );

    // this.selectedMember$.pipe(map(x =>{
    //     return this.profileStore.pipe(select(getClanMemberById(x)));
    // }));
}
