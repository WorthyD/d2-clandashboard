import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';

import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RaidCardModule } from './raid-card.module';
import { RaidCardComponent } from './raid-card.component';
import { AllRaidInfos, DeepStoneCryptInfo } from '@destiny/models';
import {MOCK_RAID_STATS} from '../clan-raid-stat-table/_MOCK_RAID_STATS';

export default {
  title: 'Clan / Raid Card',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, RaidCardModule]
    })
  ]
};

export const base = () => ({
  component: RaidCardComponent,
  template: `<lib-raid-card [raid]="raid" [memberRaidStats]="memberRaidStats"></lib-raid-card>`,
  props: {
    raid: DeepStoneCryptInfo,
    memberRaidStats: MOCK_RAID_STATS
  }
});
