import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, combineLatest } from 'rxjs';


import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';

import { Router, ActivatedRoute } from '@angular/router';
import { getClanMemberId, ClanRosterService } from '@destiny/data';
import { ClanMember } from 'bungie-models';
import { bufferTime, filter, map, mergeMap, switchMap, take, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-clan-roster',
  templateUrl: './clan-roster.component.html',
  styleUrls: ['./clan-roster.component.scss']
})
export class ClanRosterComponent implements OnInit {
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  clanMembers$ = this.store.select(clanMemberSelectors.getAllMembers);
  isLoading = true;
  members = [];
  selectedMembers$ = new BehaviorSubject([]);

  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMembers$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );
  clanMemberNames$ = this.preloadedInfo$.pipe(
    map(([isMemberLoaded, id, clanMembers]) => {
      return clanMembers.map((x) => x.destinyUserInfo.displayName);
    })
  );

  members$ = combineLatest([this.preloadedInfo$, this.selectedMembers$]).pipe(
    switchMap(([[isMemberLoaded, id, clanMembers], selectedMembers]) => {
      this.isLoading = true;
      this.members = [];
      if (selectedMembers.length > 0) {
        clanMembers = clanMembers.filter((members) => {
          return selectedMembers.indexOf(members.destinyUserInfo.displayName) > -1;
        });
      }

      return this.clanRosterService.getClanRosterStats(id, clanMembers).pipe(
        bufferTime(1000, undefined, 100),
        mergeMap((members) => {
          this.members = this.members.concat(members);
          return members;
        }),
        toArray(),
        map((stats) => {
          this.isLoading = false;
        })
      );
    })
  );


  ngOnInit() {
    this.members$.subscribe();
  }

  memberSearch(members) {
    this.selectedMembers$.next(members);
  }
  viewMember(member: ClanMember) {
    this.router.navigate(['../../../member-details', getClanMemberId(member)], {
      relativeTo: this.route
    });
  }

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private clanRosterService: ClanRosterService
  ) {}
}
