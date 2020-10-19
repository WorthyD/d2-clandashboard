// import { SealMembers, ActivityStats } from 'bungie-models';

// import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// export interface DungeonState extends EntityState<ActivityStats> {
//   loaded: boolean;
//   loading: boolean;
// }

// export const DungeonAdapter: EntityAdapter<ActivityStats> = createEntityAdapter<ActivityStats>({
//   selectId: (cm: ActivityStats) => cm.memberProfile.profile.data.userInfo.membershipId,
//   sortComparer: false
// });

// export const DungeonInitialState: DungeonState = DungeonAdapter.getInitialState({
//   loaded: false,
//   loading: true
// });
