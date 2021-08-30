import { moduleMetadata, Story } from '@storybook/angular';
import { StorybookModule } from '../../storybook/storybook.module';
import { PlayerSealsModule } from './player-seals.module';
import { PlayerSealsComponent } from './player-seals.component';
import { sealInfo } from './_MOCK_PLAYER_SEAL';

export default {
  title: 'Seals / Player Seals',
  component: PlayerSealsComponent,
  decorators: [
    moduleMetadata({
      imports: [PlayerSealsModule, StorybookModule]
    })
  ]
};
const Template: Story<PlayerSealsComponent> = (args) => ({
  props: args
});

export const base = Template.bind({});
base.args = {
  playerSeals: sealInfo
};
base.argTypes = {};
