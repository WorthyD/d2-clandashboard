import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { MOCK_CLAN_SEAL } from './_MOCK_CLAN_SEAL';
import { ClanSealModule } from './clan-seal.module';
import { ClanSealComponent } from './clan-seal.component';

export default {
  title: 'Clan Seal',
  decorators: [
    moduleMetadata({
      imports: [StorybookModule, ClanSealModule]
    })
  ]
};

export const base = () => ({
  component: ClanSealComponent,
  template: `<lib-clan-seal [sealMembers]="seals"></lib-clan-seal>`,
  props: {
    seals: MOCK_CLAN_SEAL
  }
});
