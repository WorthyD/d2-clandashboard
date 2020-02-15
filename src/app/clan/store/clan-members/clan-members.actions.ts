import { createAction, props } from '@ngrx/store';

import { ClanMember } from 'bungie-models';

const base = '[Clan_Members] - ';

export const loadClanMembers = createAction(
    `${base} Load Clan Members`,
    props<{ clanId: number }>()
);
export const loadClanMembersSuccess = createAction(
    `${base} Load Clan Members Success`,
    props<{ clanMembers: ClanMember[] }>()
);

export const loadClanMembersFromAPI = createAction(
    `${base} Load Clan Members FromAPI`,
    props<{ clanMembers: ClanMember[] }>()
);

export const loadClanMembersEmpty= createAction(
    `${base} Load Clan Members Empty`
);
export const loadClanMemberFailure = createAction(
    `${base} Load Clan Members Failure`,
    props<{ error: any }>()
);


export const selectClanMember = createAction(
    `${base} Select Clan Member`,
    props<{ memberId: number }>()
);
