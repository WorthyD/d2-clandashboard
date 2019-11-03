import { ClanCacheDetails } from '../../models/ClanCacheDetails';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface CacheDetailState extends EntityState<ClanCacheDetails> {}

export const ClanCacheDetailsAdapter: EntityAdapter<
    ClanCacheDetails
> = createEntityAdapter<ClanCacheDetails>({
    selectId: (cd: ClanCacheDetails) => cd.id,
    sortComparer: false
});

export const ClandCachdeDetailsInitialState: CacheDetailState = ClanCacheDetailsAdapter.getInitialState(
    {}
);
