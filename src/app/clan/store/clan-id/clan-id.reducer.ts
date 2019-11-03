import { createReducer, on } from '@ngrx/store';
import * as clanIdActions from './clan-id.action';

export const ClandIdReducer = createReducer(
    0,
    on(clanIdActions.setClanId, (state, { clanId }) => {
        // console.log({ clanId });
        return clanId;
    })
);
