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
    <lib-clan-active-population [last24Hours]="20" [prev24Hours]="100" [lastWeek]="3" [prevWeek]="3" [lastMonth]="3" [prevMonth]="3" [isUpdating]="false"></lib-clan-active-population>
   `,
  props: {
  }
});
