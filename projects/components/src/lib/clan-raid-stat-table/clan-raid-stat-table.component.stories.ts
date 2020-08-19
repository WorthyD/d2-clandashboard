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
  template: `<lib-clan-raid-stat-table [memberRaidStats]="raidStats" [isLoading]="false"></lib-clan-raid-stat-table>`,
  props: {
    raidStats: MOCK_RAID_STATS
  }
});

export const isLoading = () => ({
  component: ClanRaidStatTableComponent,
  template: `<lib-clan-raid-stat-table [memberRaidStats]="raidStats" isLoading="true"></lib-clan-raid-stat-table>`,
  props: {
    raidStats: MOCK_RAID_STATS
  }
});
