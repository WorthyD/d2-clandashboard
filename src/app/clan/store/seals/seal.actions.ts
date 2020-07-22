import { createAction, props } from '@ngrx/store';

import { ClanMember, MemberProfile, SealMembers, PresentationNodeDefinition } from 'bungie-models';

const base = '[Seals] - ';

export const loadSeals = createAction(
  `${base} Load Member Seals`,
  props<{ clanId: number; clanMembers: ClanMember[]; seals: PresentationNodeDefinition[] }>()
);

// export const loadMemberProfilesEmpty = createAction(`${base} Load MemberProfilesEmpty`);

// export const loadMemberProfilesFromAPI = createAction(
//   `${base} Load MemberProfiles From API`,
//   props<{ memberProfiles: MemberProfile[] }>()
// );

// export const loadMemberProfile = createAction(`${base} Load Clan Member`, props<{ memberProfile: MemberProfile }>());

export const loadSealSuccess = createAction(`${base} Load Seals Success`, props<{ sealMembers: SealMembers[] }>());

export const loadSealFailure = createAction(`${base} Load Seals Failure`, props<{ error: any }>());
