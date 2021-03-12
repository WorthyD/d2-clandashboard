import { moduleMetadata } from '@storybook/angular';
import { StorybookModule } from '../storybook/storybook.module';
import { ClanActivePopulationComponent } from './clan-active-population.component';
import { ClanActivePopulationModule } from './clan-active-population.module';

export default {
  title: 'Clan / Active Population',
  decorators: [
    moduleMetadata({
      imports: [ClanActivePopulationModule, StorybookModule]
    })
  ]
};

export const base = () => ({
  component: ClanActivePopulationComponent,
  template: `
    <lib-clan-active-population></lib-clan-active-population>
   `,
  props: {
  }
});
