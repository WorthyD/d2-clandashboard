import { createAction, props } from '@ngrx/store';
import { LoadedClan } from '../../models/loaded-clan';
const base = '[Loaded Clans] -';

export const addClan = createAction(`${base} Add Clan`, props<{ clan: LoadedClan }>());
