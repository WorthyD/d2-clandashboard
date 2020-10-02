import { createAction, props } from '@ngrx/store';
import { MemberProfile, MemberActivityStat, MemberActivityStats, MemberActivityRecentStats } from 'bungie-models';

const base = '[MemberRecentActivities] - ';

export const loadClanMembersActivities = createAction(`${base} Load Clan MembersRecentActivities`);
export const loadClanMembersActivitiesSuccess = createAction(`${base} Load Clan MembersRecentActivities Success`);

export const loadMemberActivities = createAction(
  `${base} Load MemberRecentActivities`,
  props<{ member: MemberProfile }>()
);

export const loadMemberActivitiesEmpty = createAction(`${base} Load MemberRecentActivitiesEmpty`);

export const loadMemberRecentActivitiesSuccess = createAction(
  `${base} Load Clan Members Success`,
  props<{ memberActivities: MemberActivityRecentStats }>()
);
export const loadMembersRecentActivitiesSuccess = createAction(
  `${base} Load Clan Members Activites Success`,
  props<{ memberActivities: MemberActivityRecentStats[] }>()
);
export const loadClanMemberFailure = createAction(`${base} Load Clan Members Failure`, props<{ error: any }>());
