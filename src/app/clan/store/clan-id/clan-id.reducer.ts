import { createReducer, on } from '@ngrx/store';
import * as clanIdActions from './clan-id.action';

export const ClanIdReducer = createReducer(
    100,
    on(clanIdActions.setClanId, (state, { clanId }) => {
        // console.log({ clanId });
        return clanId;
    })
);
