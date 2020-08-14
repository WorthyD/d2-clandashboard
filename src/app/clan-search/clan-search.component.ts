import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { GroupV2Service } from 'bungie-api';

import { ClanDetails } from 'bungie-models';
import { Subscription, Observable, of } from 'rxjs';

import { FormControl } from '@angular/forms';
import { map, sampleTime, shareReplay, switchMap, tap, catchError } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

import { ClanSearchState } from './state/clan-search.state';
import { Store } from '@ngrx/store';
import { addClan } from './state/loaded-clans/loaded-clans.actions';

interface LoadClanResult {
  id: number;
  clanDetails: ClanDetails;
}
@Component({
  selector: 'app-clan-search',
  templateUrl: './clan-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./clan-search.component.scss']
})
export class ClanSearchComponent implements OnInit {
  loadSubscription: Subscription;

  loading: boolean;
  constructor(private groupService: GroupV2Service, private router: Router, private store: Store<ClanSearchState>) {}

  autocompleteControl = new FormControl('');

  autocompleteResult$ = this.autocompleteControl.valueChanges.pipe(
    tap(() => (this.loading = true)),
    sampleTime(500),
    switchMap((currentQuery) => {
      if (!currentQuery) {
        this.loading = false;
        return of([]);
      }
      if (!isNaN(currentQuery)) {
        return this.numericClanSearch(currentQuery);
      } else if (currentQuery.indexOf('https://www.bungie.net/') > -1) {
        const clanId = currentQuery.split('=')[1];
        return this.numericClanSearch(clanId);
      } else {
        return this.textClanSearch(currentQuery);
      }
    }),
    shareReplay(1),
    catchError((err) => {
      console.log(err);
      this.loading = false;
      // Just remapping the data to show the error
      // There are better ways of doing this
      return of([{ login: 'Error from server' }]);
    })
  );

  numericClanSearch(clanId) {
    return this.groupService.groupV2GetGroup(clanId).pipe(
      map((clanResult) => {
        this.loading = false;
        return [clanResult.Response.detail];
      })
    );
  }

  textClanSearch(currentQuery) {
    return this.groupService
      .groupV2GroupSearch({
        name: currentQuery,
        groupType: 1,
        groupMemberCountFilter: null,
        tagText: null,
        localeFilter: null
      })
      .pipe(
        map((clanListResults) => {
          this.loading = false;
          const currentQuery = this.autocompleteControl.value;
          const clanList = clanListResults.Response.results;
          if (!currentQuery || clanList.find((repo) => repo.name.toUpperCase() === currentQuery.toUpperCase())) {
            return clanList;
          }

          return clanList.slice(0, 10);
        })
      );
  }

  ngOnInit() {}

  /** Navigate to the select location from the autocomplete options. */
  autocompleteSelected(event: MatAutocompleteSelectedEvent) {
    this.persistSelection(event.option.value);
    this.open(event.option.value);
  }

  persistSelection(group: any) {
    this.store.dispatch(addClan({ clan: { name: group.name, id: group.groupId } }));
  }

  open(group: any) {
    this.router.navigate(['clan', group.groupId]);
  }

  load(clanId: number) {
    const clanResult: LoadClanResult = {
      id: 0,
      clanDetails: {}
    };

    this.groupService
      .groupV2GetGroup(clanId)
      .pipe(
        map((result) => {
          clanResult.clanDetails = result.Response.detail;
        })
      )
      .subscribe((x) => {});
  }

  // persistData(clanResult: LoadClanResult) {
  //   const dbId: string = clanResult.clanDetails.groupId.toString();
  //   clanResult.id = clanResult.clanDetails.groupId;
  //   this.clanDB.update(dbId, 'ClanDetails', [clanResult]);
  //   // look at home-page.ts
  // }
}
