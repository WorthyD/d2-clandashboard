// // import {ClanDetails} from 'bungie-models';
// import { MemberActivityStat, MemberActivityRecentStats } from 'bungie-models';

// import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// export interface MemberRecentActivityStatState extends EntityState<MemberActivityRecentStats> {
//   loaded: boolean;
//   loading: boolean;
// }

// export const MemberRecentActivityStatAdapter: EntityAdapter<MemberActivityRecentStats> = createEntityAdapter<
//   MemberActivityRecentStats
// >({
//   selectId: (cm: MemberActivityRecentStats) => cm.id,
//   sortComparer: false
// });

// export const MemberActivityStatInitialState: MemberRecentActivityStatState = MemberRecentActivityStatAdapter.getInitialState(
//   {
//     loaded: false,
//     loading: true
//   }
// );
