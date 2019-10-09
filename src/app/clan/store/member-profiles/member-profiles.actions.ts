import { createAction, props } from '@ngrx/store';

import { ClanMember, MemberProfile } from 'bungie-models';

const base = '[MemberProfiles] - ';

export const loadMemberProfiles = createAction(
    `${base} Load MemberProfiles`,
    props<{ clanMembers: ClanMember[] }>()
);
export const loadMemberProfileSuccess = createAction(
    `${base} Load Clan Members Success`,
    props<{ memberProfile: MemberProfile }>()
);
export const loadClanMemberFailure = createAction(
    `${base} Load Clan Members Failure`,
    props<{ error: any }>()
);
