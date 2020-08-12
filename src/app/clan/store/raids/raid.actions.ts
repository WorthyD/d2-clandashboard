import { createAction, props } from '@ngrx/store';

import { ClanMember, MemberProfile, } from 'bungie-models';

const base = '[Raids] - ';

export const loadRaids = createAction(`${base} Load Member Raids`);

export const loadRaidSuccess = createAction(`${base} Load Raid Success`, props<{ raidStats: any[] }>());

export const loadRaidFailure = createAction(`${base} Load Raid Failure`, props<{ error: any }>());
