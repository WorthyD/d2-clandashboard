import { moduleMetadata } from '@storybook/angular';

import { ActivityHeatmapModule } from './activity-heatmap.module';
import { ActivityHeatmapComponent } from './activity-heatmap.component';

// import { MOCK_CHARACTER_CARD } from './_MOCK_CHARACTER_CARD';

export default {
  title: 'Clan Member / Activity Heat Map',
  decorators: [
    moduleMetadata({
      imports: [ActivityHeatmapModule]
    })
  ]
};

export const base = () => ({
  component: ActivityHeatmapComponent,
  template: `
        <lib-activity-heatmap [events]="events" [isLoading]="false"></lib-activity-heatmap>
   `,
  props: {
    events: []
  }
});
export const Loading = () => ({
  component: ActivityHeatmapComponent,
  template: `
        <lib-activity-heatmap [events]="events" [isLoading]="true"></lib-activity-heatmap>
   `,
  props: {
    events: [{ tacos: '' }]
  }
});
