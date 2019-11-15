import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, of, from } from 'rxjs';


import { GroupV2Service, Destiny2Service } from 'bungie-api';

import * as cacheSelectors from '../store/clan-cache/clan-cache.selectors';
import * as cacheActions from '../store/clan-cache/clan-cache.actions';


@Injectable()
export class MemberUpdater {
    constructor(
        private store: Store<any>,
        private groupService: GroupV2Service,
        private d2Service: Destiny2Service
    ) {

    }
}
