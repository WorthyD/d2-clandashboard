import { moduleMetadata } from '@storybook/angular';
/// import { ActivityGridComponent } from './activity-grid.component';
// import { ActivityGridModule } from './activity-grid.module';
// import {MOCK_GRID_ITEMS} from './_MOCK_GRID_ITEMS';

import { StorybookModule } from '../storybook/storybook.module';
import { ClanOverviewModule } from './clan-overview.module';
import { ClanOverviewComponent } from './clan-overview.component';
import { CLAN_OVERVIEW } from './_MOCK_CLAN_OVERVIEW';

// import {} from './

export default {
    title: 'Clan Details Card',
    decorators: [
        moduleMetadata({
            imports: [ClanOverviewModule, StorybookModule]
        })
    ]
};

export const base = () => ({
    component: ClanOverviewComponent,
    template: `
        <lib-clan-overview [clanDetails]="details"></lib-clan-overview>
   `,
    props: {
        details: CLAN_OVERVIEW
    }
});
export const loading = () => ({
  component: ClanOverviewComponent,
  template: `
      <lib-clan-overview [clanDetails]="details" [isLoading]="true"></lib-clan-overview>
 `,
  props: {
      details: CLAN_OVERVIEW
  }
});
