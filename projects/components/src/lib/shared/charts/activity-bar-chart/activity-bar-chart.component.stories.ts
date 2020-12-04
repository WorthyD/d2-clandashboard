import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { ActivityBarChartModule } from './activity-bar-chart.module';
import { ActivityBarChartComponent } from './activity-bar-chart.component';

import { withKnobs, select, object, boolean } from '@storybook/addon-knobs';
import { MOCK_GRID_ITEMS, REAL_DATA } from './_MOCK_GRID_ITEMS';
import { LoadingActivityComponent } from './activity-bar-chart.component-story.stories';
import { MaterialModule } from '../../modules/material.module';
import { LoadingModule } from '../../loading/loading.module';
const events = [MOCK_GRID_ITEMS];

export default {
  title: 'Shared / Activity Bar Chart',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [ActivityBarChartModule, MaterialModule, LoadingModule],
      declarations: [LoadingActivityComponent]
    })
  ]
};

export const base = () => ({
  component: ActivityBarChartComponent,
  template: `
  <div>
        <lib-activity-bar-chart [events]="allEvents[eventIndex]" (cellSelect)="cellSelect($event)"></lib-activity-bar-chart>
        <hr>
        <textarea style="width:100%; height:500px">
        {{allEvents[eventIndex] | json}}
        </textarea>
  </div>
   `,
  props: {
    allEvents: events,
    eventIndex: select('DataSet', [0, 1], 0),
    cellSelect: action('cell select')
  }
});

export const realData = () => ({
  component: ActivityBarChartComponent,
  template: `
  <div>
        <lib-activity-bar-chart [events]="events" (cellSelect)="cellSelect($event)"></lib-activity-bar-chart>
        <hr>
        <textarea style="width:100%; height:500px">
        </textarea>
  </div>
   `,
  props: {
    events: REAL_DATA
  }
});

export const loadingTest = () => ({
  component: ActivityBarChartComponent,
  template: `
  <div>
        <lib-activity-bar-chart-story [events]="events" [isLoading]="isLoading"></lib-activity-bar-chart-story>
  </div>
   `,
  props: {
    events: REAL_DATA,
    isLoading: boolean('Is Loading', true)
  }
});
