import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ActivityHeatmapModule } from './activity-heatmap.module';
import { ActivityHeatmapComponent } from './activity-heatmap.component';
import { withKnobs, select, object } from '@storybook/addon-knobs';
import { MOCK_GRID_ITEMS, MOCK_GRID_ITEMS2 } from './_MOCK_GRID_ITEMS';
const events = [MOCK_GRID_ITEMS, MOCK_GRID_ITEMS2];
// import { MOCK_CHARACTER_CARD } from './_MOCK_CHARACTER_CARD';
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
        <lib-activity-heatmap [events]="allEvents[eventIndex]" [colorTheme]="theme" (cellSelect)="cellSelect($event)" ></lib-activity-heatmap>
  </div>
   `,
  props: {
    allEvents: events,
    eventIndex: select('DataSet', [0, 1], 0),
    theme: select('color theme', ['light', 'dark'], 'light'),
    cellSelect: action('cell select')
  }
});
