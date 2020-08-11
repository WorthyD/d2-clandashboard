import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { MOCK_RAID_STATS } from './_MOCK_RAID_STATS';
import { ClanRaidStatTableModule } from './clan-raid-stat-table.module';
import { ClanRaidStatTableComponent } from './clan-raid-stat-table.component';

export default {
  title: 'Clan Raid Stats',
  decorators: [
    moduleMetadata({
      imports: [StorybookModule, ClanRaidStatTableModule]
    })
  ]
};

export const base = () => ({
  component: ClanRaidStatTableComponent,
  template: `<lib-clan-seal [sealMembers]="seals"></lib-clan-seal>`,
  props: {
    raidStats: MOCK_RAID_STATS
  }
});
