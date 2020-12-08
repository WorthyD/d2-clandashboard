import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { MOCK_CLAN_SEAL } from './_MOCK_CLAN_SEAL';
import { ClanSealModule } from './clan-seal.module';
import { ClanSealComponent } from './clan-seal.component';

import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Clan / Clan Seal',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, ClanSealModule]
    })
  ]
};

export const base = () => ({
  component: ClanSealComponent,
  template: `<lib-clan-seal [seal]="seals" [members]="members" [isLoading]="isLoading"></lib-clan-seal>`,
  props: {
    seals: MOCK_CLAN_SEAL.seal,
    members: MOCK_CLAN_SEAL.members,
    isLoading: boolean('Is Loading', false)
  }
});
