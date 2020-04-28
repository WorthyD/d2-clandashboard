import { Component, OnInit } from '@angular/core';
import { MemberOverviewService } from './member-overview.service';

import { ClanMemberState } from '../../store/clan-members/clan-members.state';
import { MemberProfileState } from '../../store/member-profiles/member-profiles.state';
import { Store, select } from '@ngrx/store';
import { getSelectedClanMember, getClanMemberById } from '../../store/clan-members/clan-members.selectors';
import { take } from 'rxjs/operators';
@Component({
    selector: 'app-member-overview',
    templateUrl: './member-overview.component.html',
    styleUrls: ['./member-overview.component.scss'],
    providers: [MemberOverviewService],
})
export class MemberOverviewComponent implements OnInit {
    constructor(
        public memberOverviewService: MemberOverviewService,
        private memberStore: Store<ClanMemberState>
    ) {}
    selectedMember;
    selectedMember2;
    ngOnInit(): void {
        // 4611686018467238913
     this.selectedMember =   this.memberStore.pipe(select(getSelectedClanMember));// .subscribe((x) => {
     this.selectedMember2 =   this.memberStore.pipe(select(getClanMemberById('4611686018467238913')));// .subscribe((x) => {
        //     console.log('subbing', x);
        //     this.selectedMember = x;
        // });
    }
}
