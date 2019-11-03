import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';

import { ClanState } from '../store/clan-state.state';
import { ClanDatabase } from 'src/app/services/ClanDatabase';
import { take } from 'rxjs/operators';

export type UpdateState = 'can-update' | 'updating' | 'updated';

export type UpdatableType = 'clanDetails';

export type UpdaterState = {
    [key in UpdatableType]: UpdateState;
};

@Injectable()
export class Updater {
    constructor(private store: Store<ClanState>,
        private clanDB: ClanDatabase,
        ) {}
    state = new BehaviorSubject<UpdaterState>({
        clanDetails: 'can-update'
    });


    // private updateClanDetails(clanId: number) {
    //      this.clanDB.getValues(clanId.toString()).CacheDetails.pipe(take(1),
    //      map(cacheDetails)

    //     // get and validate clan cache
    // }

    update(type: UpdatableType, clanId: number) {
        switch (type) {
            case 'clanDetails':
                return null; // this.updateClanDetails(clanId);
            default:
                return null;
        }
    }
}
