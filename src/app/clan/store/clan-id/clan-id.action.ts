import { createAction, props } from '@ngrx/store';

const base = '[ClanId] - ';

export const setClanId = createAction(
    `${base} Set Id`,
    props<{ clanId: number }>()
)
