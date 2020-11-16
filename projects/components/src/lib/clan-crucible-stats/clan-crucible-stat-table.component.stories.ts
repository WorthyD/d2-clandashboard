import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { ClanCrucibleStatsModule } from './clan-crucible-stats.module';
import { ClanCrucibleStatsComponent } from './clan-crucible-stats.component';
import { MOCK_CRUCIBLE_STATS } from './_MOCK_CRUCIBLE_STATS';

export default {
  title: 'Clan / Clan Crucible Stats',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, ClanCrucibleStatsModule]
    })
  ]
};
export const base = () => ({
  component: ClanCrucibleStatsComponent,
  template: `<lib-clan-crucible-stat-table [memberCrucibleStats]="crucibleStats" [isLoading]="isLoading"></lib-clan-crucible-stat-table>`,
  props: {
    crucibleStats: MOCK_CRUCIBLE_STATS,
    isLoading: boolean('Is Loading', false)
  }
});
