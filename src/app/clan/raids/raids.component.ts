import { Component, OnInit } from '@angular/core';
import { Store, createSelector, select } from '@ngrx/store';
import { getClanMemberEntities } from '../store/clan-members/clan-members.selectors';
import { ClanMemberListItem } from '@destiny/components';
import { Observable, from, of } from 'rxjs';
import { ClanMember } from 'bungie-models';

import { getMemberProfileEntities, getAllMembers } from '../store/member-profiles/member-profiles.selectors';
import { switchMap, take, takeUntil, filter, withLatestFrom, mergeMap, toArray, map } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { loadMemberProfileSuccess } from '../store/member-profiles/member-profiles.actions';
import { Destiny2Service } from 'bungie-api';
@Component({
  selector: 'app-raids',
  templateUrl: './raids.component.html',
  styleUrls: ['./raids.component.scss']
})
export class RaidsComponent implements OnInit {
  members$: Observable<any[]> = this.store.pipe(select(getAllMembers));
  members;
  displayedColumns: string[] = [
    'displayName',
    'levi',
    'levip',
    'levigg',
    'eow',
    'eowp',
    'eowgg',
    'spire',
    'spirep',
    'spiregg',
    'lw',
    'lwgg',
    'scourge',
    'scourgegg',
    'crown',
    'crowngg',
    'garden',
    'gardengg'
  ];
  raidHashes = {
    levip: { hashes: [417231112, 757116822, 1685065161, 2449714930, 3446541099, 3879860661] },
    levi: { hashes: [2693136600, 2693136601, 2693136602, 2693136603, 2693136604, 2693136605] },
    levigg: { hashes: [89727599, 287649202, 1699948563, 1875726950, 3916343513, 4039317196] },
    eowP: { hashes: [809170886] },
    eow: { hashes: [3089205900] },
    eowgg: { hashes: [2164432138] },
    spireP: { hashes: [3213556450] },
    spire: { hashes: [119944200] },
    spireGG: { hashes: [3004605630] },
    lw: { hashes: [2122313384] },
    lwgg: { hashes: [1661734046] },
    scourge: { hashes: [548750096] },
    scourgeGG: { hashes: [2812525063] },
    crown: { hashes: [3333172150] },
    crowngg: { hashes: [960175301] },
    garden: { hashes: [2659723068] },
    gardenGG: { hashes: [3845997235] }
  };

  constructor(private store: Store<any>, private actions$: Actions, private d2Service: Destiny2Service) {}

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
          return from(members).pipe(
            mergeMap((x) => {
              return from(x.profile.data.characterIds).pipe(
                mergeMap((characterId: number) => {
                  return this.d2Service
                    .destiny2GetDestinyAggregateActivityStats(
                      characterId,
                      x.profile.data.userInfo.membershipId,
                      x.profile.data.userInfo.membershipType
                    )
                    .pipe(
                      map((x) => {
                        return x.Response;
                      })
                    );

                  return of(characterId);
                }),
                toArray(),
                map((y) => {
                  return this.serializeRaidStats(x, y);
                  return {
                    name: x.profile.data.userInfo.displayName,
                    ids: y
                  };
                })
              );
            }, 5),
            toArray()
          );
          return members;
        })
        //toArray()
        //take(1)
      )
      .subscribe((x) => {
        this.members = x;
      });
  }

  serializeRaidStats(member, stats) {
    return {
      name: member.profile.data.userInfo.displayName,
      levip: this.getStats(stats, this.raidHashes.levip.hashes),
      levi: this.getStats(stats, this.raidHashes.levi.hashes),
      levigg: this.getStats(stats, this.raidHashes.levigg.hashes),
      eowP: this.getStats(stats, this.raidHashes.eowP.hashes),
      eow: this.getStats(stats, this.raidHashes.eow.hashes),
      eowgg: this.getStats(stats, this.raidHashes.eowgg.hashes),
      spireP: this.getStats(stats, this.raidHashes.spireP.hashes),
      spire: this.getStats(stats, this.raidHashes.spire.hashes),
      spireGG: this.getStats(stats, this.raidHashes.spireGG.hashes),
      lw: this.getStats(stats, this.raidHashes.lw.hashes),
      lwgg: this.getStats(stats, this.raidHashes.lwgg.hashes),
      scourge: this.getStats(stats, this.raidHashes.scourge.hashes),
      scourgeGG: this.getStats(stats, this.raidHashes.scourgeGG.hashes),
      crown: this.getStats(stats, this.raidHashes.crown.hashes),
      crowngg: this.getStats(stats, this.raidHashes.crowngg.hashes),
      garden: this.getStats(stats, this.raidHashes.garden.hashes),
      gardenGG: this.getStats(stats, this.raidHashes.gardenGG.hashes)
    };
  }
  getStats(stats, hashes) {
    return stats.reduce((prevCharact, character) => {
      const characterCompletions = hashes.reduce((prevHash, curHash) => {
        const activityCompletion = character.activities?.find((x) => x.activityHash === curHash)?.values
          ?.activityCompletions?.basic?.value;

        return prevHash + (activityCompletion ? activityCompletion : 0);
      }, 0);

      return parseInt(prevCharact, 0) + characterCompletions;
    }, 0);
  }
}
