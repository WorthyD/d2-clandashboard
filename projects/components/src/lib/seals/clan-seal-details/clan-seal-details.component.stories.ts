import { moduleMetadata } from '@storybook/angular';
import { StorybookModule } from '../../storybook/storybook.module';
import { ClanSealDetailsModule } from './clan-seal-details.module';
import { ClanSealDetailsComponent } from './clan-seal-details.component';
import { GUILDED_SEAL } from './_MOCK_SEAL_GUILDED';
import { NONGUILDED_SEAL } from './_MOCK_SEAL_NONGUILDED';

export default {
  title: 'Seals / Clan Seal Details',
  decorators: [
    moduleMetadata({
      imports: [ClanSealDetailsModule, StorybookModule]
    })
  ]
};

export const base = () => ({
  component: ClanSealDetailsComponent,
  props: {
    seal: GUILDED_SEAL,
    totalMembers: 100,
    completedNumber: 30,
    completedPercentage: 30,
    guildedNumber: 33,
    guildedPercentage: 33,
    hasGuilded: false
  }
});
