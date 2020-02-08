import { createReducer, on, State, Action } from '@ngrx/store';
import * as clanIdActions from './clan-id.action';

const _ClanIdReducer = createReducer(
    100,
    on(clanIdActions.setClanId, (state, { clanId }) => {
        // console.log({ clanId });
        return clanId;
    })
);

export function ClanIdReducer(state: any | undefined, action: Action) {
    return _ClanIdReducer(state, action);
}
