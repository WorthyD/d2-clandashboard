import { Component, OnInit } from '@angular/core';
import { MemberActivityGridItem } from '@destiny/components';
import { Observable } from 'rxjs';

import { ClanMemberState } from '../../store/clan-members/clan-members.state';
import { getSelectedClanMember } from '../../store/clan-members/clan-members.selectors';
import { Store, select } from '@ngrx/store';
import { ActivitiesService, ActivityModeService } from '@destiny/data';

import { MemberActivityService } from './member-activity.service';

@Component({
    selector: 'app-member-activity',
    templateUrl: './member-activity.component.html',
    styleUrls: ['./member-activity.component.scss'],
    providers: [MemberActivityService]
})
export class MemberActivityComponent implements OnInit {
    // activityDetails$: Observable<MemberActivityGridItem[]>;

    // selectedMember$ = this.store.pipe(select(getSelectedClanMember));
    constructor(public memberActivityService: MemberActivityService) {}

    ngOnInit(): void {}
}
