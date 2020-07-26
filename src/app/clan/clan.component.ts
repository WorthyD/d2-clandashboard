import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClanDetails, ClanMember, MemberProfile } from 'bungie-models';

import { Event, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
// import { GroupV2Service } from 'bungie-api';
// import { GroupV2Service } from 'projects/bungie-api/src/lib';
import * as clanDetailSelectors from './store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from './store/clan-detail/clan-detail.state';
import * as clanDetailActions from './store/clan-detail/clan-detail.actions';

import * as clanCacheActions from './store/clan-cache/clan-cache.actions';
import * as clanCacheSelectors from './store/clan-cache/clan-cache.selectors';

import * as clanIdActions from './store/clan-id/clan-id.action';

import * as clanMemberSelectors from './store/clan-members/clan-members.selectors';
import * as clanMemberActions from './store/clan-members/clan-members.actions';
import * as memberActivityActions from './store/member-activities/member-activities.actions';
import * as clanRewardActions from './store/clan-rewards/clan-rewards.actions';
import * as memberProfileActions from './store/member-profiles/member-profiles.actions';

import * as routerStore from '../root-store/router/router.selectors';
import {} from 'bungie-models';

// import { Clan } from 'bungie-parse';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, Subscription, forkJoin, of, interval, from } from 'rxjs';
import { filter, map, distinctUntilChanged, takeUntil, take, mergeMap } from 'rxjs/operators';

// import { RewardsUpdater } from './services/clanRewardsUpdater';
import { environment } from 'src/environments/environment';
import { ProfileService } from '@destiny/data';
// import { MOCK_WORTHY_MEMBER, MOCK_OMEGA_MEMBER } from 'projects/data/src/lib/testing-utils/objects/member.mock';
import { ClanDatabase } from '@destiny/data';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss']
})
export class ClanComponent implements OnInit, OnDestroy {
  versionNumber = environment.versions.app;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<clanDetailStore.ClanDetailState>,
    private db: ClanDatabase //private rStore: Store<routerStore.State>, // private clanRewards: RewardsUpdater, //private profileService: ProfileService
  ) {
    this.clanId.pipe(takeUntil(this.destroyed)).subscribe((r) => this.loadClan(r));
  }

  clanId = this.activatedRoute.params.pipe(map((x) => x.id, distinctUntilChanged()));

  clanDetails$: Observable<ClanDetails> = this.store.pipe(select(clanDetailSelectors.getClanDetail));
  // clanMembers$: Observable<ClanMember[]> = this.store.pipe(
  //     select(clanMemberSelectors.getAllMembers)
  // );

  private destroyed = new Subject();

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  openLink(url) {
    window.open(url, '_blank');
  }

  loadClan(clanId) {
    // if valid clan load the rest

    this.store.dispatch(clanCacheActions.initializeCache({ clanId: clanId }));

    this.store
      .select(clanCacheSelectors.isCacheLoaded)
      .pipe(
        filter((loaded) => !!loaded),
        take(1)
      )
      .subscribe((x) => {
        // this.clanRewards.update('clanRewards', clanId);
        this.store.dispatch(clanRewardActions.loadRewards({ clanId: clanId }));

        this.store.dispatch(clanIdActions.setClanId({ clanId: clanId }));
        this.store.dispatch(clanDetailActions.loadClan({ clanId: clanId }));
        this.store.dispatch(clanMemberActions.loadClanMembers({ clanId: clanId }));

        // this.store.dispatch(memberProfileActions.loadMemberProfiles({ clanId: clanId }));
        // this.store.dispatch(
        //   memberActivityActions.loadClanMembersActivities({
        //     clanId: clanId
        //   })
        // );
      });

    // const mockOldMember: unknown = MOCK_WORTHY_MEMBER as MemberProfile;
    // const mockNewMember: unknown = MOCK_OMEGA_MEMBER as MemberProfile;
    // const members = [mockOldMember, mockNewMember];

    // this.profileService.getSerializedProfiles(clanId.toString(), members).subscribe((x) => {
    //   console.log('subbing', x);
    // });
    // const profileRequest = [];
    // members.forEach((m) => {
    //   profileRequest.push(
    //     this.profileService.getSerializedProfile(clanId, m).pipe(
    //       map((x) => {
    //         console.log('duur', x);
    //         return x;
    //       })
    //     )
    //   );
    // });
    // // . console.log('pre fork', profileRequest);
    // const fork = forkJoin(...profileRequest)
    //   .pipe((map) => {
    //     console.log('map', map);
    //     return map;
    //   })
    //   .subscribe((data) => {
    //     console.log('look ma', data);
    //   });

    // // from(members)
    // //   .pipe(mergeMap((x) => this.profileService.getSerializedProfile(clanId, x)))
    // //   .subscribe({
    // //     next: (x) => {
    // //       console.log('sub', x);
    // //     },
    // //     error: (x) => {
    // //       console.log('error');
    // //     },
    // //     complete: () => {
    // //       console.log('done');
    // //     }
    // //   });
    // // console.log('function', fork);
    // // fork.subscribe((x) => {
    // //   console.log('actual fork', x);
    // // });
    // // this.profileService.getSerializedProfile(clanId.toString(), members[0]).subscribe((x) => {
    // //   console.log('subbing 2', x);
    // // });

    // const example = forkJoin(
    //   //emit 'Hello' immediately
    //   of('Hello'),
    //   //emit 'World' after 1 second
    //   of('World'),
    //   this.profileService.getSerializedProfile(clanId, mockNewMember),
    //   //emit 0 after 1 second
    //   interval(1000).pipe(take(1)),
    //   //emit 0...1 in 1 second interval
    //   interval(1000).pipe(take(2))
    //   //promise that resolves to 'Promise Resolved' after 5 seconds
    //   //myPromise('RESULT')
    // );
    // console.log('example', example);
    // //output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
    // const subscribe = example.subscribe((val) => console.log(val));
  }

  resetDatabase() {
    this.clanId.subscribe((x) => {
      this.db.deleteDatabase(x);
    });
    console.log('resetting');
  }
}
