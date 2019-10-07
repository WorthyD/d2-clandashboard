import { createAction, props } from '@ngrx/store';

import { ClanDetails } from 'bungie-models';

const base = '[Clan_Details] - ';

//export const LOAD_CLAN = `${base} Load Clan`;
// export const LOAD_CLAN_FAIL = `${base} Load Clan Fail`;
// export const LOAD_CLAN_SUCCESS = `${base} Load Clan Success`;

export const loadClan = createAction(
    `${base} Load Clan`,
    props<{ clanId: number }>()
);
export const loadClanSuccess = createAction(
    `${base} Load Clan Success`,
    props<{ clanDetails: ClanDetails }>()
);
export const loadClanFailure = createAction(
    `${base} Load Clan Failure`,
    props<{ error: any }>()
);
