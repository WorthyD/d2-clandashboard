import { createAction, props } from '@ngrx/store';

import { ClanMember, MemberProfile } from 'bungie-models';

const base = '[MemberProfiles] - ';

export const initLoadMemberProfiles = createAction(
  `${base} Init Load MemberProfiles`,
  props<{ clanId: number; clanMembers: ClanMember[] }>()
);

export const loadMemberProfilesEmpty = createAction(`${base} Load MemberProfilesEmpty`);

export const loadMemberProfilesFromAPI = createAction(
  `${base} Load MemberProfiles From API`,
  props<{ memberProfiles: MemberProfile[] }>()
);

export const loadMemberProfile = createAction(`${base} Load Clan Member`, props<{ memberProfile: MemberProfile }>());
export const loadMemberProfiles = createAction(`${base} Load Clan Members`, props<{ memberProfiles: MemberProfile[] }>());

export const loadMemberProfileSuccess = createAction(`${base} Load Clan Members Profiles Success`);

export const loadClanMemberFailure = createAction(`${base} Load Clan Members Failure`, props<{ error: any }>());
