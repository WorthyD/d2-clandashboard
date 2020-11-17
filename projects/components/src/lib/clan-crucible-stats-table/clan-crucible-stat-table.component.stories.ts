import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { ClanCrucibleStatsModule } from './clan-crucible-stats-table.module';
import { ClanCrucibleStatsTableComponent } from './clan-crucible-stats-table.component';
import { MOCK_CRUCIBLE_STATS } from './_MOCK_CRUCIBLE_STATS';

export default {
  title: 'Clan / Clan Crucible Stats Table',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, ClanCrucibleStatsModule]
    })
  ]
};
export const base = () => ({
  component: ClanCrucibleStatsTableComponent,
  template: `<lib-clan-crucible-stats-table [memberCrucibleStats]="crucibleStats" [isLoading]="isLoading"></lib-clan-crucible-stats-table>`,
  props: {
    crucibleStats: MOCK_CRUCIBLE_STATS,
    isLoading: boolean('Is Loading', false)
  }
});
