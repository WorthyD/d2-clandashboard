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
    return this.store.pipe(
      select(selectSelectedClanId),
      map((clanId) => {
        if (clanId && clanId > 0) {
          this.router.navigate(['/clan', clanId]);
        }
        return true;
      })
    );
  }
}
