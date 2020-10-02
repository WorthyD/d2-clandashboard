import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClanDetails, ClanMember, MemberProfile } from 'bungie-models';

import { Event, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import * as clanDetailSelectors from './store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from './store/clan-detail/clan-detail.state';
import * as clanDetailActions from './store/clan-detail/clan-detail.actions';

import * as clanIdActions from './store/clan-id/clan-id.action';

import * as clanMemberSelectors from './store/clan-members/clan-members.selectors';
import * as clanMemberActions from './store/clan-members/clan-members.actions';
import * as memberActivityActions from './store/member-activities/member-activities.actions';
import * as clanRewardActions from './store/clan-rewards/clan-rewards.actions';
import * as memberProfileActions from './store/member-profiles/member-profiles.actions';

import * as routerStore from '../root-store/router/router.selectors';
import { actionSettingsChangeClan, actionSettingsChangeTheme } from '../root-store/settings/settings.actions';

// import { Clan } from 'bungie-parse';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, Subscription, forkJoin, of, interval, from } from 'rxjs';
import { filter, map, distinctUntilChanged, takeUntil, take, mergeMap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ProfileService } from '@destiny/data';
import { ClanDatabase } from '@destiny/data';
import { AboutComponent } from '../about/about.component';
import { MatDialog } from '@angular/material/dialog';

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
    private router: Router,
    public dialog: MatDialog,
    private db: ClanDatabase
  ) {
    this.clanId.pipe(takeUntil(this.destroyed)).subscribe((r) => this.loadClan(r));
  }

  clanId = this.activatedRoute.params.pipe(map((x) => x.id, distinctUntilChanged()));

  clanDetails$: Observable<ClanDetails> = this.store.pipe(select(clanDetailSelectors.getClanDetail));
  private destroyed = new Subject();

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  openLink(url) {
    window.open(url, '_blank');
  }
  openAbout() {
    this.dialog.open(AboutComponent);
  }

  loadClan(clanId) {
    this.store.dispatch(clanRewardActions.loadRewards({ clanId: clanId }));
    this.store.dispatch(clanIdActions.setClanId({ clanId: clanId }));
    this.store.dispatch(clanDetailActions.loadClan({ clanId: clanId }));
    this.store.dispatch(clanMemberActions.loadClanMembers({ clanId: clanId }));
  }

  goHome(){
    this.store.dispatch(actionSettingsChangeClan({ selectedClanId: 0 }));
      this.router.navigate(['/']);
  }

  resetDatabase() {
    this.clanId.pipe(take(1)).subscribe((x) => {
      this.db.deleteDatabase(x);
      this.router.navigate(['/']);
    });
  }
  changeTheme(event) {
    this.store.dispatch(actionSettingsChangeTheme({ theme: event }));
  }
}
