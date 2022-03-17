import { createAction, props } from '@ngrx/store';
import { MemberProfile, MemberActivityStat, MemberActivityStats, MemberActivityTime } from 'bungie-models';

const base = '[MemberActivitiesAll] - ';

export const loadClanMembersActivities = createAction(
  `${base} Load Clan MembersActivities`,
  props<{ clanId: number }>()
);

// -----------------------------
export const loadMemberAllActivities = createAction(`${base} Load MemberActivities`);

export const loadMemberAllActivitiesSuccess = createAction(`${base} Load Clan Members Success`);

// export const loadClanMemberFailure = createAction(`${base} Load Clan Members Failure`, props<{ error: any }>());

// -----------------------------

export const refreshMemberAllActivities = createAction(
  `${base} Update MemberActivities From API`,
  props<{ member: MemberProfile[] }>()
);

export const refreshMemberAllActivitiesComplete = createAction(
  `${base} Update MemberActivities From API Complete`,
  props<{ memberActivities: MemberActivityTime[] }>()
);

export const refreshMemberAllActivitiesFailure = createAction(
  `${base} refresh Clan Members Failure`,
  props<{ error: any }>()
);
