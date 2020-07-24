import { createAction, props } from '@ngrx/store';

import { ClanMember, MemberProfile, SealMembers, PresentationNodeDefinition } from 'bungie-models';

const base = '[Seals] - ';

export const loadSeals = createAction(`${base} Load Member Seals`, props<{ seals: PresentationNodeDefinition[] }>());

export const loadSealSuccess = createAction(`${base} Load Seals Success`, props<{ sealMembers: SealMembers[] }>());

export const loadSealFailure = createAction(`${base} Load Seals Failure`, props<{ error: any }>());
