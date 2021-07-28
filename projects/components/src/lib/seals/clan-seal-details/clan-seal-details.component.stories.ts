import { moduleMetadata } from '@storybook/angular';
import { StorybookModule } from '../../storybook/storybook.module';
import { ClanSealDetailsModule } from './clan-seal-details.module';
import { ClanSealDetailsComponent } from './clan-seal-details.component';

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
  template: `
    <lib-clan-seal-details></lib-clan-seal-details>
   `,
  props: {}
});
