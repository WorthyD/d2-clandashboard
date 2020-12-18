import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';

import { withKnobs, boolean } from '@storybook/addon-knobs';
import { RaidCardModule } from './raid-card.module';
import { RaidCardComponent } from './raid-card.component';

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
  template: `<lib-raid-card></lib-raid-card>`,
  props: {}
});
