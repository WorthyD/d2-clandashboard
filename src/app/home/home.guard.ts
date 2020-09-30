import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
// import * as routerActions from '../ngrx/router/router.actions';
import { selectSelectedClanId } from '../root-store/settings/settings.selectors';

@Injectable()
export class HomeGuard implements CanActivate {
  constructor(private store: Store<any>, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // if (!this.authService.isUserAuthenticated()) {
    //     this.router.navigate(['/account', 'login'], { queryParams: { retUrl: state.url } });
    //    return false;
    // }
    return this.store.pipe(
      select(selectSelectedClanId),
      map((x) => {
        console.log(x);
        return true;
      })
    );

    // return this.checkStore().pipe(
    //     switchMap(() => of(true)),
    //     catchError(err => {
    //         return of(false);
    //     })
    // );
  }

  // checkStore(): Observable<boolean> {
  //   // Dispatch

  //   return this.store.pipe(
  //     select(userSelectors.userLoaded),
  //     tap((loaded) => {
  //       if (!loaded) {
  //         this.store.dispatch(new userActions.SetInitialSessionAction());
  //       }
  //     }),
  //     map(() => true)
  //   );
  // }
}
