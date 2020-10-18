import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { ClanDungeonStatTableModule } from './clan-dungeon-stat-table.module';
import { ClanDungeonStatTableComponent } from './clan-dungeon-stat-table.component';
import { MOCK_DUNGEON_STATS } from './_MOCK_DUNGEON_STATS';

export default {
  title: 'Clan / Clan Dungeon Stats',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, ClanDungeonStatTableModule]
    })
  ]
};
export const base = () => ({
  component: ClanDungeonStatTableComponent,
  template: `<lib-clan-dungeon-stat-table [memberDungeonStats]="dungeonStats" [isLoading]="isLoading"></lib-clan-dungeon-stat-table>`,
  props: {
    dungeonStats: MOCK_DUNGEON_STATS,
    isLoading: boolean('Is Loading', false)
  }
});
