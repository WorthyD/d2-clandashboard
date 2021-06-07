import { Injectable } from '@angular/core';
import { Destiny2Service } from 'bungie-api-angular';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class PlayerSearchService {
  constructor(private destiny2Service: Destiny2Service) {}

  loadingSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading = this.loadingSource.asObservable();

  textPlayerSearch(currentQuery) {
    return this.destiny2Service.destiny2SearchDestinyPlayer(currentQuery, -1, true).pipe(
      //tap((x) => this.loadingSource.next(true)),
      map((searchResults) => {
        return searchResults.Response.slice(0, 10).map((profile) => {
          console.log(profile);
          return {
            iconName: this.getIcon(profile.membershipType),
            name: profile.displayName,
            membershipType: profile.membershipType,
            membershipId: profile.membershipId
          };
        });
      })
      //tap((x) => this.loadingSource.next(false))
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
