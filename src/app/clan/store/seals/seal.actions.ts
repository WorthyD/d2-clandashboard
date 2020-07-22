import { createAction, props } from '@ngrx/store';


import { ClanMember, MemberProfile, SealMembers } from 'bungie-models';

const base = '[Seals] - ';

export const loadSeals = createAction(
  `${base} Load Member Seals`,
  props<{ clanId: number; clanMembers: ClanMember[]; }>()
);

export const loadMemberProfilesEmpty = createAction(`${base} Load MemberProfilesEmpty`);

// export const loadMemberProfilesFromAPI = createAction(
//   `${base} Load MemberProfiles From API`,
//   props<{ memberProfiles: MemberProfile[] }>()
// );

export const loadMemberProfile = createAction(`${base} Load Clan Member`, props<{ memberProfile: MemberProfile }>());

export const loadMemberProfileSuccess = createAction(`${base} Load Clan Members Profiles Success`);

export const loadClanMemberFailure = createAction(`${base} Load Clan Members Failure`, props<{ error: any }>());
