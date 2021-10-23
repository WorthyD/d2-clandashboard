import { Component, OnInit, OnDestroy } from '@angular/core';

import { Event, NavigationEnd, Router, ActivatedRoute } from '@angular/router';

import { ClanDetails, ClanMember } from 'bungie-models';
// import { GroupV2Service } from 'projects/bungie-api/src/lib';
import * as clanDetailSelectors from '../store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from '../store/clan-detail/clan-detail.state';
import * as clanDetailActions from '../store/clan-detail/clan-detail.actions';

import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanMemberActions from '../store/clan-members/clan-members.actions';

import * as routerStore from '../../root-store/router/router.selectors';
import {} from 'bungie-models';

// import { Clan } from 'bungie-parse';
import { Store, select } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ClanDetailService } from './clan-detail.service';
import { ActivityInfo } from '@destiny/components';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: ['./clan-detail.component.scss'],
  providers: [ClanDetailService]
})
export class ClanDetailComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<clanDetailStore.ClanDetailState>,
    public clanDetails: ClanDetailService
  ) {}

  strikeInfo: ActivityInfo = {
    title: 'Strike Activity',
    activityCode: 18,
    color:'#306d85'
  };
  crucibleInfo: ActivityInfo = {
    title: 'Crucible Activity',
    activityCode: 5,
    color:'#8e2323'
  };
  gambitInfo: ActivityInfo = {
    title: 'Gambit Activity',
    activityCode: 63,
    color:'#44eaae'
  };
  raidInfo: ActivityInfo = {
    title: 'Raid Activity',
    activityCode: 4,
    color:'#d6812c'
  };

  clanDetails$: Observable<ClanDetails> = this.store.pipe(select(clanDetailSelectors.getClanDetail));

  private destroyed = new Subject();

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
