import { Action } from '@ngrx/store';

import { Clan } from 'bungie-parse';

const base = '[Clan_Details] - ';

export const LOAD_CLAN = `${base} Load Clans`;
export const LOAD_CLAN_FAIL = `${base} Load Clans Fail`;
export const LOAD_CLAN_SUCCESS = `${base} Load Clans Success`;

export class LoadClan {
    readonly type = LOAD_CLAN;
    constructor(public payload: Clan) {}
}

// export class LoadClanFail {
//   readonly type = LOAD_CLAN_FAIL;
//   constructor(public payload: any) {}
// }

// export class LoadClanSuccess {
//   readonly type = LOAD_CLAN_SUCCESS;
//   constructor(public payload: any) {}
// }

export type Actions = LoadClan;
