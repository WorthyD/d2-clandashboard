import { moduleMetadata } from '@storybook/angular';

import { MemberActivityHeatMapModule } from './member-activity-heat-map.module';
import { MemberActivityHeatMapComponent } from './member-activity-heat-map.component';
import { withKnobs, select, object } from '@storybook/addon-knobs';
import {MOCK_GRID_ITEMS} from './_MOCK_GRID_ITEMS';




export default {
  title: 'Clan Member / Activity Heat Map',
  decorators: [
    moduleMetadata({
      imports: [MemberActivityHeatMapModule]
    })
  ]
};

export const base = () => ({
  component: MemberActivityHeatMapComponent,
  template: `
        <lib-member-activity-heat-map [events]="allEvents" [isLoading]="false"></lib-member-activity-heat-map>
   `,
  props: {
    allEvents: MOCK_GRID_ITEMS,
  }
});

export const Loading = () => ({
  component: MemberActivityHeatMapComponent,
  template: `
        <lib-member-activity-heat-map [events]="allEvents" [isLoading]="true"></lib-member-activity-heat-map>
   `,
  props: {
    allEvents: MOCK_GRID_ITEMS,
  }
});
