import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';

import { ClanState } from '../store/clan-state.state';

export type UpdateState = 'can-update' | 'updating' | 'updated';

export type UpdatableType = 'clanDetails';

export type UpdaterState = {
    [key in UpdatableType]: UpdateState;
};

@Injectable()
export class Updater {
    constructor(private store: Store<ClanState>) {}
    state = new BehaviorSubject<UpdaterState>({
        clanDetails: 'can-update'
    });
    private updateClanDetails(clanId: number) {
        // get and validate clan cache
    }

    update(type: UpdatableType, clanId: number) {
        switch (type) {
            case 'clanDetails':
                return this.updateClanDetails(clanId);
            default:
                return null;
        }
    }
}
