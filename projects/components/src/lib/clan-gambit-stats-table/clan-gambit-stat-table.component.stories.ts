import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { ClanGambitStatsModule } from './clan-gambit-stats-table.module';
import { ClanGambitStatsTableComponent } from './clan-gambit-stats-table.component';
import { MOCK_GAMBIT_STATS } from './_MOCK_GAMBIT_STATS';

export default {
  title: 'Clan / Clan Gambit Stats Table',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, ClanGambitStatsModule]
    })
  ]
};
export const base = () => ({
  component: ClanGambitStatsTableComponent,
  template: `<lib-clan-gambit-stats-table [memberGambitStats]="gambitStats" [isLoading]="isLoading"></lib-clan-gambit-stats-table>`,
  props: {
    gambitStats: MOCK_GAMBIT_STATS,
    isLoading: boolean('Is Loading', false)
  }
});
