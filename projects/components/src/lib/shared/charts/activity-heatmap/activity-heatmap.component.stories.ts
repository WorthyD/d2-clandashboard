import { moduleMetadata } from '@storybook/angular';

import { ActivityHeatmapModule } from './activity-heatmap.module';
import { ActivityHeatmapComponent } from './activity-heatmap.component';

// import { MOCK_CHARACTER_CARD } from './_MOCK_CHARACTER_CARD';

export default {
  title: 'Shared / Activity Heat Map',
  decorators: [
    moduleMetadata({
      imports: [ActivityHeatmapModule]
    })
  ]
};

export const base = () => ({
  component: ActivityHeatmapComponent,
  template: `
        <lib-activity-heatmap [events]="events"></lib-activity-heatmap>
   `,
  props: {
    events: []
  }
});
