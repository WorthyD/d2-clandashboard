import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import * as clanDetailSelectors from '../store/clan-detail/clan-detail.selectors';
import * as clanDetailStore from '../store/clan-detail/clan-detail.state';
//  import { GroupV2Service } from 'bungie-api';
import { Store, select } from '@ngrx/store';

@Injectable()
export class CoursesGuard implements CanActivate {
    constructor(
        // private gs: GroupV2Service,
        private store: Store<clanDetailStore.ClanDetailState>
    ) {}

    canActivate(): Observable<boolean> {
        // return of(true | false)
        return this.hasClan(0);
    }

    hasInStore(id: number) {
        return this.store.pipe(
            select(clanDetailSelectors.getClanDetailEntities),
            map(entities => !!entities[id]),
            take(1)
        );
    }

    hasInApi(id: number): Observable<boolean> {
        // Finish here. Need to get back to actual work
        // https://github.com/ngrx/platform/blob/master/projects/example-app/src/app/books/guards/book-exists.guard.ts
        // https://ultimatecourses.com/blog/preloading-ngrx-store-route-guards
        return of(false);
    }

    hasClan(id: number): Observable<boolean> {
        return this.hasInStore(id).pipe(
            switchMap(inStore => {
                if (inStore) {
                    return of(inStore);
                }
                return this.hasInApi(id);
            })
        );
    }
}
