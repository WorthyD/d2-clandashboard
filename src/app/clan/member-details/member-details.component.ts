import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, takeUntil, take, filter } from 'rxjs/operators';
import { Store, select, createSelector } from '@ngrx/store';

import { ClanMember, MemberProfile, MemberActivityStat } from 'bungie-models';

import { Observable, Subject, Subscription } from 'rxjs';

import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as memberProfileSelectors from '../store/member-profiles/member-profiles.selectors';

import * as memberActivitySelectors from '../store/member-activities/member-activities.selectors';
import * as memberActivityActions from '../store/member-activities/member-activities.actions';

export const getRecentClanMemberActivities = memberId =>
    createSelector(memberActivitySelectors.getClanMemberActivities(memberId), activities => {
        if (!memberId || !activities) {
            return null;
        }

        return activities.sort((a, b) => new Date(a.period).getTime() - new Date(b.period).getTime()).slice(0, 10);
    });

@Component({
    selector: 'app-member-details',
    templateUrl: './member-details.component.html',
    styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit, OnDestroy {
    constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) {
        this.memberId.pipe(takeUntil(this.destroyed)).subscribe(r => this.loadMemberDetails(r));
    }

    private memberId = this.activatedRoute.params.pipe(map(x => x.memberId, distinctUntilChanged()));

    member$: Observable<ClanMember>;
    profile$: Observable<MemberProfile>;
    activities$: Observable<MemberActivityStat[]>;

    private destroyed = new Subject();

    ngOnInit() {}

    loadMemberDetails(memberId) {
        this.member$ = this.store.pipe(select(clanMemberSelectors.getClanMemberById(memberId)));
        this.profile$ = this.store.pipe(select(memberProfileSelectors.getClanMemberById(memberId)));

        this.activities$ = this.store.pipe(select(getRecentClanMemberActivities(memberId)));

        this.profile$
            .pipe(
                filter(loaded => !!loaded),
                take(1)
            )
            .subscribe(x => {
                this.store.dispatch(memberActivityActions.loadMemberActivities({ member: x }));
            });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
