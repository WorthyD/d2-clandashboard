import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { FormControl } from '@angular/forms';

import { Subscription, Observable, of, forkJoin } from 'rxjs';

import { GroupV2Service, Destiny2Service } from 'bungie-api';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { map, sampleTime, shareReplay, switchMap, tap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { addClan } from '../state/loaded-clans/loaded-clans.actions';
import { ClanSearchState } from 'src/app/clan-search/state/clan-search.state';
import { actionSettingsChangeClan } from '../../root-store/settings/settings.actions';

@Component({
  selector: 'app-clan-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './clan-search.component.html',
  styleUrls: ['./clan-search.component.scss']
})
export class ClanSearchComponent implements OnInit {
  loadSubscription: Subscription;
  loading: boolean;

  constructor(
    private groupService: GroupV2Service,
    private destiny2Service: Destiny2Service,
    private router: Router,
    private store: Store<ClanSearchState>
  ) {}

  autocompleteControl = new FormControl('');

  autocompleteResult$ = this.autocompleteControl.valueChanges.pipe(
    tap(() => (this.loading = true)),
    sampleTime(1000),
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
        //return this.textClanSearch(currentQuery);
        return this.combinedSearch(currentQuery);
      }
    }),
    shareReplay(1),
    catchError((err) => {
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

  combinedSearch(currentQuery) {
    const clanSearch = this.textClanSearch(currentQuery);
    const playerSearch = this.textPlayerSearch(currentQuery);

    return forkJoin([clanSearch, playerSearch]).pipe(
      map(([clanSearchResults, playerSearchResults]) => {
        console.log(clanSearchResults);
        console.log(playerSearchResults);
        return [...clanSearchResults, ...playerSearchResults];
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
          //console.log(clanListResults);
          // if (!currentQuery || clanList.find((repo) => repo.name.toUpperCase() === currentQuery.toUpperCase())) {
          //   return [{ iconName: this.getIcon(-1), ...clanList }];
          // }

          return clanList.slice(0, 10).map((c) => {
            return { iconName: this.getIcon(-1), ...c };
          });
        })
      );
  }

  textPlayerSearch(currentQuery) {
    return this.destiny2Service.destiny2SearchDestinyPlayer(currentQuery, -1, true).pipe(
      map((searchResults) => {
        console.log(searchResults.Response);
        return searchResults.Response.slice(0, 10).map((profile) => {
          return {
            iconName: this.getIcon(profile.membershipType),
            name: profile.displayName,
            membershipType: profile.membershipType,
            membershipId: profile.membershipId,
            type: 'player'
          };
        });
      })
    );
  }
  getIcon(type: number) {
    switch (type) {
      case -1:
        return 'people';
      case 1:
        return 'xbox';
      case 2:
        return 'playstation';
      case 3:
        return 'steam';
      default:
        return 'sports_esports';
    }
  }

  /** Navigate to the select location from the autocomplete options. */
  autocompleteSelected(event: MatAutocompleteSelectedEvent) {
    const selectedItem = event.option.value;

    if (selectedItem.type === 'player') {
      this.findPlayerClan(selectedItem).then((result) => {
        this.persistSelection(result);
        this.open(result);
      });
    } else {
      this.persistSelection(event.option.value);
      this.open(event.option.value);
    }
  }
  findPlayerClan(selectedItem) {
    return this.groupService
      .groupV2GetGroupsForMember(0, 1, selectedItem.membershipId, selectedItem.membershipType)
      .toPromise()
      .then(({ Response }) => {
        if (Response.totalResults === 1) {
          return Response.results[0]?.group;
        } else if (Response.totalResults > 1) {
          // Show more than one group
        } else {
          // group not found
        }
      });
  }

  persistSelection(group: any) {
    this.store.dispatch(addClan({ clan: { name: group.name, id: group.groupId } }));
  }

  open(group: any) {
    this.store.dispatch(actionSettingsChangeClan({ selectedClanId: group.groupId }));
    this.router.navigate(['clan', group.groupId]);
  }

  ngOnInit(): void {}
}
