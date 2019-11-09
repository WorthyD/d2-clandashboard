import { createAction, props } from '@ngrx/store';

import {  MemberProfile } from 'bungie-models';

const base = '[MemberProfiles] - ';

export const loadMemberProfiles = createAction(
    `${base} Load MemberProfiles`,
    props<{ clanId: number }>()
);

export const loadMemberProfilesEmpty = createAction(
    `${base} Load MemberProfilesEmpty`
);

export const loadMemberProfilesFromAPI = createAction(
    `${base} Load MemberProfiles From API`,
    props<{ memberProfiles: MemberProfile[] }>()
);

export const loadMemberProfileSuccess = createAction(
    `${base} Load Clan Members Success`,
    props<{ memberProfiles: MemberProfile[] }>()
);
export const loadClanMemberFailure = createAction(
    `${base} Load Clan Members Failure`,
    props<{ error: any }>()
);
