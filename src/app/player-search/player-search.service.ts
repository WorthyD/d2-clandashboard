import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class PlayerSearchService {
  constructor(private httpClient: HttpClient) {}

  loadingSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading = this.loadingSource.asObservable();

  textPlayerSearch(currentQuery) {
    const url = `https://www.bungie.net/Platform//User/Search/Prefix/${currentQuery}/0`;
    //this.httpClient.get(
    // return this.destiny2Service.destiny2SearchDestinyPlayer(currentQuery, -1).pipe(
    return this.httpClient.get(url).pipe(
      map((searchResults: any) => {
        return searchResults.Response.searchResults.slice(0, 10).map((profile) => {
          const displayName = `${profile.bungieGlobalDisplayName}#${profile.bungieGlobalDisplayNameCode}`;
          const memberships = profile.destinyMemberships;
          const crossSaveOverride = memberships.find((x) => x.crossSaveOverride !== 0);
          let membership;
          if (crossSaveOverride) {
            membership = memberships.find((x) => x.membershipType === crossSaveOverride.crossSaveOverride);
          } else {
            membership = memberships[0];
          }

          return {
            iconName: this.getIcon(membership.membershipType),
            name: displayName,
            membershipType: membership.membershipType,
            membershipId: membership.membershipId
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
}
