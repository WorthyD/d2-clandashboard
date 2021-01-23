import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ActivityTimeChartComponent } from './activity-time-chart.component';
import { ActivityTimeChartModule } from './activity-time-chart.module';

export default {
  title: 'Shared / Activity Time Chart',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, ActivityTimeChartModule]
    })
  ]
};
export const base = () => ({
  component: ActivityTimeChartComponent,
  template: `<lib-activity-time-chart></lib-activity-time-chart>`,
  props: {
    //isLoading: boolean('Is Loading', false)
  }
});
