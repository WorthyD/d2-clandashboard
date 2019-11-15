import { createAction, props } from '@ngrx/store';
import { MemberActivityStats } from './member-activities.state';
import { ClanMember, MemberActivityStat } from 'bungie-models';

const base = '[MemberActivities] - ';

export const loadMemberActivities = createAction(
    `${base} Load MemberActivities`,
    props<{ clanId: number; member: ClanMember }>()
);

export const loadMemberActivitiesEmpty = createAction(
    `${base} Load MemberActivitiesEmpty`
);

export const loadMemberActivitiesFromAPI = createAction(
    `${base} Load MemberActivities From API`,
    props<{ memberActivities: MemberActivityStats }>()
);

export const loadMemberActivitiesuccess = createAction(
    `${base} Load Clan Members Success`,
    props<{ memberActivities: MemberActivityStats }>()
);
export const loadClanMemberFailure = createAction(
    `${base} Load Clan Members Failure`,
    props<{ error: any }>()
);
