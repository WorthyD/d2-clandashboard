import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, takeUntil, take, filter } from 'rxjs/operators';
import { Store, select, createSelector } from '@ngrx/store';

import { ClanMember, MemberProfile, MemberActivityStat } from 'bungie-models';
import { ActivitiesService, ActivityModeService } from '@destiny/data';

import { Observable, Subject, Subscription, combineLatest } from 'rxjs';

import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanMemberActions from '../store/clan-members/clan-members.actions';
import * as memberProfileSelectors from '../store/member-profiles/member-profiles.selectors';

import { routeAnimations } from 'src/app/core/core.module';

import { PlayerService } from '../../shared/components/player/player.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss'],
  animations: [routeAnimations]
})
export class MemberDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
    // private activityModeService: ActivityModeService,
    // private activityService: ActivitiesService
    private playerService: PlayerService
  ) {
    // this.memberId.pipe(takeUntil(this.destroyed)).subscribe(r => {
    //     store.dispatch(clanMemberActions.selectClanMember({ memberId: r }));
    //     this.loadMemberDetails(r);
    // });
    this.activatedRoute.params
      .pipe(
        map((x) => {
          //this.playerService.memberId.next(x.memberI);
          return x.memberId;
        }, distinctUntilChanged())
      )
      .subscribe((x) => {
        //this.memberId = x;
        //this.playerService.memberIdSource.next(x.memberId);
        store.dispatch(clanMemberActions.selectClanMember({ memberId: x }));
        this.playerService.setMemberId(x);
      });
  }

  memberId = this.playerService.memberId$;
  memberSealInfo$ = this.playerService.memberSealInfo$;

  // memberId = this.activatedRoute.params.pipe(
  //     map(x => x.memberId, distinctUntilChanged())
  // );

  // member$: Observable<ClanMember>;
  // profile$: Observable<MemberProfile>;
  // playerActivities$: Observable<MemberActivityStat[]>;
  // activityModeDefinitions$: Observable<any>;
  // activityDefinitions$: Observable<any>;

  // activityDetails$: Observable<any[]>;
  // activityDetailsTwo$: Observable<any[]>;

  // private destroyed = new Subject();

  ngOnInit() {}

  // loadMemberDetails(memberId) {
  //     this.profile$ = this.store.pipe(select(memberProfileSelectors.getClanMemberById(memberId)));
  //     this.member$ = this.store.pipe(select(clanMemberSelectors.getClanMemberById(memberId)));

  //     // this.profile$
  //     //     .pipe(
  //     //         filter(loaded => !!loaded),
  //     //         take(1)
  //     //     )
  //     //     .subscribe(x => {
  //     //         this.store.dispatch(memberActivityActions.loadMemberActivities({ member: x }));
  //     //     });
  // }

  // ngOnDestroy() {
  //     this.destroyed.next();
  //     this.destroyed.complete();
  // }
}
