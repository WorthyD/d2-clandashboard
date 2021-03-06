import { createSelector } from '@ngrx/store';

import { getClanState } from '../clan-state.selector';

import { NotificationState, NotificationAdapter } from './notifications.state';

export const getNotificationEntityState = createSelector(getClanState, (state) => state.notifications);

export const {
  selectIds: getNotificationIds,
  selectEntities: getNotificationEntities,
  selectAll: getAllNotifications,
  selectTotal: getTotalNotificaitons
} = NotificationAdapter.getSelectors(getNotificationEntityState);
