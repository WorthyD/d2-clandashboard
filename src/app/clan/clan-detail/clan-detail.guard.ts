// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
// import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

// import * as clanDetailSelectors from '../store/clan-detail/clan-detail.selectors';
// import * as clanDetailStore from '../store/clan-detail/clan-detail.state';

// import * as clanDetailActions from '../store/clan-detail/clan-detail.actions';
// import { GroupV2Service } from 'bungie-api';
// import { Store, select } from '@ngrx/store';
// // import { ClanParseService } from 'bungie-parse';

// @Injectable({
//     providedIn: 'root'
// })
// export class ClanDetailGuard implements CanActivate {
//     constructor(
//         private gs: GroupV2Service,
//         private router: Router,
//         private clanParser: ClanParseService,
//         private store: Store<clanDetailStore.ClanDetailState>
//     ) {}

//     canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
//          return of(true)
//         // return this.hasClan(route.params['id']);
//     }

//     // hasInStore(id: number) {
//     //     return this.store.pipe(
//     //         select(clanDetailSelectors.getClanDetailEntities),
//     //         map(entities => !!entities[id]),
//     //         take(1)
//     //     );
//     // }

//     // hasInApi(id: number): Observable<boolean> {
//     //     // Finish here. Need to get back to actual work
//     //     // https://github.com/ngrx/platform/blob/master/projects/example-app/src/app/books/guards/book-exists.guard.ts
//     //     // https://ultimatecourses.com/blog/preloading-ngrx-store-route-guards

//     //     return this.gs.groupV2GetGroup(id).pipe(
//     //         map(clanDetail => {
//     //             return new clanDetailActions.LoadClan(this.clanParser.parseClan(clanDetail.Response.detail));
//     //         }),
//     //         tap(action => {
//     //             return this.store.dispatch(action);
//     //         }),
//     //         map(clan => !!clan),
//     //         catchError((e) => {
//     //             console.log(e);
//     //             // clan not found
//     //             // this.router.navigate(['/404'])
//     //             return of(false);
//     //         })
//     //     );
//     // }

//     // hasClan(id: number): Observable<boolean> {
//     //     return this.hasInStore(id).pipe(
//     //         switchMap(inStore => {
//     //             console.log('has in store');
//     //             if (inStore) {
//     //                 return of(inStore);
//     //             }
//     //             return this.hasInApi(id);
//     //         })
//     //     );
//     // }
// }
