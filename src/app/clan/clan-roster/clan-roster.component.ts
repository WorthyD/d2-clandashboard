import { Component, OnInit } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';

import { getClanMemberEntities, getAllMembers } from '../store/clan-members/clan-members.selectors';
import { getMemberProfileEntities } from '../store/member-profiles/member-profiles.selectors';

import { getIsMembersProfilesLoaded } from '../store/member-profiles/member-profiles.selectors';
import * as clanMemberSelectors from '../store/clan-members/clan-members.selectors';
import * as clanIdSelectors from '../store/clan-id/clan-id.selector';

import { ClanMemberListItem } from '@destiny/components';
import { Router, ActivatedRoute } from '@angular/router';
import { getClanMemberId, ClanRosterService } from '@destiny/data';
import { ClanMember } from 'bungie-models';
import { bufferTime, filter, map, mergeMap, switchMap, take, toArray } from 'rxjs/operators';

// const clanMembers = createSelector(getAllMembers, getMemberProfileEntities, (members, profiles) => {
//   const allUsers: ClanMemberListItem[] = [];
//   members.forEach((x) => {
//     allUsers.push({
//       member: x,
//       profile: profiles[getClanMemberId(x)]
//     });
//   });
//   return allUsers;
// });

@Component({
  selector: 'app-clan-roster',
  templateUrl: './clan-roster.component.html',
  styleUrls: ['./clan-roster.component.scss']
})
export class ClanRosterComponent implements OnInit {
  isMembersLoaded$ = this.store.pipe(select(getIsMembersProfilesLoaded));
  clanId$ = this.store.select(clanIdSelectors.getClanIdState);
  clanMembers$ = this.store.select(clanMemberSelectors.getAllMembers);
  clanMemberNames$ = this.clanMembers$.pipe(map(m => {
    return m?.map(x => x.destinyUserInfo.displayName);
  }));

  isLoading = true;
  members = [];
  preloadedInfo$ = combineLatest([this.isMembersLoaded$, this.clanId$, this.clanMembers$]).pipe(
    filter(([isMembersLoaded, id, m]) => isMembersLoaded === true),
    map((x) => {
      return x;
    })
  );
  members$ = this.preloadedInfo$.pipe(
    switchMap(([isMemberLoaded, id, clanMembers]) => {
      this.isLoading = true;
      return this.clanRosterService.getClanRosterStats(id, clanMembers).pipe(
        bufferTime(500, undefined, 20),
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

  //members$: Observable<ClanMemberListItem[]> = this.store.pipe(select(clanMembers));

  ngOnInit() {
    this.members$.pipe(take(1)).subscribe();
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
