import { createAction } from '@ngrx/store';

export const logoutClan = createAction(
  `Clan - Logout`
);
export function logoutState(reducer) {
  return function (state, action) {

    if (action.type === logoutClan) {
      state.clan = undefined;
    }

    return reducer(state, action);
  };
}
