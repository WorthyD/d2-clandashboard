import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { ClanMember, MemberProfile } from 'bungie-models';

import { Observable, Subject, Subscription } from 'rxjs';

import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as memberProfileSelectors from '../store/member-profiles/member-profiles.selectors';

@Component({
    selector: 'app-member-details',
    templateUrl: './member-details.component.html',
    styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit, OnDestroy {
    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store<any>
    ) {
        this.memberId
            .pipe(takeUntil(this.destroyed))
            .subscribe(r => this.loadMemberDetails(r));
    }

    private memberId = this.activatedRoute.params.pipe(
        map(x => x.memberId, distinctUntilChanged())
    );

    member$: Observable<ClanMember>;
    profile$: Observable<MemberProfile>;

    private destroyed = new Subject();

    ngOnInit() {}

    loadMemberDetails(memberId) {
        this.member$ = this.store.pipe(
            select(clanMemberSelectors.getClanMemberById(memberId))
        );
        this.profile$ = this.store.pipe(
            select(memberProfileSelectors.getClanMemberById(memberId))
        );
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
