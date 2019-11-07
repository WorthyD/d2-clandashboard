import { createAction, props } from '@ngrx/store';

import { ClanCacheDetails } from '../../models/ClanCacheDetails';

const base = '[Clan Cache Details] - ';
export const initializeCache = createAction(
    `${base} - initialize cache`,
    props<{ clanId }>()
);


export const loadCache = createAction(
    `${base} - load cache`,
    props<{ caches: ClanCacheDetails[] }>()
);
export const updateCache = createAction(
    `${base} - update cache`,
    props<{ cache: ClanCacheDetails }>()
);
