import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ActivityHeatmapModule } from './activity-heatmap.module';
import { ActivityHeatmapComponent } from './activity-heatmap.component';
import { withKnobs, select, object } from '@storybook/addon-knobs';

// import { MOCK_CHARACTER_CARD } from './_MOCK_CHARACTER_CARD';
const sourceData = [
  {
    date: '2020-02-02',
    count: 40
  },
  {
    date: '2020-02-03',
    count: 50
  }
];
const sourceData2 = [
  {
    date: '2020-04-02',
    count: 10
  },
  {
    date: '2020-08-03',
    count: 99
  }
];

const events = [sourceData, sourceData2];

export default {
  title: 'Shared / Activity Heat Map',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ActivityHeatmapModule]
    })
  ]
};

export const base = () => ({
  component: ActivityHeatmapComponent,
  template: `
  <div>
        <lib-activity-heatmap [events]="allEvents[eventIndex]" (cellSelect)="cellSelect($event)"></lib-activity-heatmap>
  </div>
   `,
  props: {
    allEvents: events,
    eventIndex: select('DataSet', [0, 1], 0),
    cellSelect: action('cell select')
  }
});
