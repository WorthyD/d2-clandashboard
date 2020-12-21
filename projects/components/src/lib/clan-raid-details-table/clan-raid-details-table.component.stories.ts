import { moduleMetadata } from '@storybook/angular';
import { StorybookModule } from '../storybook/storybook.module';
import { MOCK_RAID_STATS } from './_MOCK_RAID_DETAILS';
import { ClanRaidDetailsTableModule } from './clan-raid-details-table.module';
import { ClanRaidDetailsTableComponent } from './clan-raid-details-table.component';
import { DeepStoneCryptInfo } from '@destiny/models';

import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Clan / Clan Raid Detail',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, ClanRaidDetailsTableModule]
    })
  ]
};

export const base = () => ({
  component: ClanRaidDetailsTableComponent,
  template: `<lib-clan-raid-details-table [memberRaidStats]="raidStats" [raidInfo]="raidInfo" [isLoading]="isLoading"></lib-clan-raid-details-table>`,
  props: {
    raidInfo: DeepStoneCryptInfo,
    raidStats: MOCK_RAID_STATS,
    isLoading: boolean('Is Loading', false)
  }
});
