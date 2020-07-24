import { Component, OnInit } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { getClanMemberEntities } from '../store/clan-members/clan-members.selectors';
import { ClanMemberListItem } from '@destiny/components';
import { Observable, from, of } from 'rxjs';
import { ClanMember } from 'bungie-models';

import { getMemberProfileEntities, getAllMembers } from '../store/member-profiles/member-profiles.selectors';
import { switchMap, take, takeUntil, filter, withLatestFrom, mergeMap, toArray } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { loadMemberProfileSuccess } from '../store/member-profiles/member-profiles.actions';
@Component({
  selector: 'app-raids',
  templateUrl: './raids.component.html',
  styleUrls: ['./raids.component.scss']
})
export class RaidsComponent implements OnInit {
  members$: Observable<any[]> = this.store.pipe(select(getAllMembers));
  members;

  constructor(private store: Store<any>, private actions$: Actions) {}

  ngOnInit(): void {
    // this.members$.subscribe((x) => {
    //   this.members = x;
    // });
    //loadMemberProfileSuccess;
    this.actions$
      .pipe(
        ofType(loadMemberProfileSuccess),
        withLatestFrom(this.members$),
        switchMap(([actions, members]) => {
          console.log('mapping', members);
          return from(members).pipe(
            mergeMap((x) => {
              console.log('merge mapping', x);
              return x;
            })
          );
          return members;
        }),
        take(1)
      )
      .subscribe((x) => {
        console.log('done', x);
      });
    /*
    this.members$
      .pipe(
        // takeUntil((x) => x.length),
        filter((x) => {
          return x.length > 0;
        }),
        take(1),
        switchMap((x) => {
          console.log('swithc mapping', x);
          if (x.length) {
            return x;
            // return from(x).pipe(
            //   switchMap((y) => {
            //     console.log(y);
            //     return y;
            //   })
            // );
          }
          return of(false);
        })
      )
      .subscribe((x) => {
        console.log('subbing', x);
      });
      */

    //   return from(member.profile.data.characterIds).pipe(
    //     mergeMap((characterId) => {
    //       return this.getMemberCharacterActivitySerialized(clanId, member, characterId);
    //     }),
    //     map((x) => {
    //       return x.activities;
    //     }),
    //     toArray(),
    //     map((x) => {
    //       return {
    //         id: `${member.profile.data.userInfo.membershipType}-${member.profile.data.userInfo.membershipId}`,
    //         activities: [].concat(...x)
    //       };
    //     })
    //   }
    // });
  }
}
