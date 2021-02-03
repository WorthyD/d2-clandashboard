import { createAction, props } from '@ngrx/store';
import { MemberProfile, MemberActivityStat, MemberActivityStats, MemberActivityTime } from 'bungie-models';

const base = '[MemberActivities] - ';

export const loadClanMembersActivities = createAction(
  `${base} Load Clan MembersActivities`,
  props<{ clanId: number }>()
);

// -----------------------------
export const loadMemberActivities = createAction(`${base} Load MemberActivities`, props<{ member: MemberProfile[] }>());

export const loadMemberActivitiesSuccess = createAction(
  `${base} Load Clan Members Success`,
  props<{ memberActivities: MemberActivityTime[] }>()
);

export const loadClanMemberFailure = createAction(`${base} Load Clan Members Failure`, props<{ error: any }>());

// -----------------------------

export const refreshMemberActivities = createAction(
  `${base} Update MemberActivities From API`,
  props<{ member: MemberProfile[] }>()
);

export const refreshMemberActivitiesComplete = createAction(
  `${base} Update MemberActivities From API Complete`,
  props<{ memberActivities: MemberActivityTime[] }>()
);


export const refreshMemberActivitiesFailure = createAction(`${base} refresh Clan Members Failure`, props<{ error: any }>());
