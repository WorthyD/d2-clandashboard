import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { ActivityBarChartModule } from './activity-bar-chart.module';
import { ActivityBarChartComponent } from './activity-bar-chart.component';

import { withKnobs, select, object } from '@storybook/addon-knobs';
import { MOCK_GRID_ITEMS } from './_MOCK_GRID_ITEMS';

const events = [MOCK_GRID_ITEMS];

export default {
  title: 'Shared / Activity Bar Chart',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ActivityBarChartModule]
    })
  ]
};

export const base = () => ({
  component: ActivityBarChartComponent,
  template: `
  <div>
        <lib-activity-bar-chart [events]="allEvents[eventIndex]" (cellSelect)="cellSelect($event)"></lib-activity-bar-chart>
  </div>
   `,
  props: {
    allEvents: events,
    eventIndex: select('DataSet', [0, 1], 0),
    cellSelect: action('cell select')
  }
});
