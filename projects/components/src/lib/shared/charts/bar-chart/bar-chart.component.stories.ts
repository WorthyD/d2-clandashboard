import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { BarChartModule } from './bar-chart.module';
import { BarChartComponent } from './bar-chart.component';

import { withKnobs, select, object, boolean } from '@storybook/addon-knobs';
import { MOCK_GRID_ITEMS, REAL_DATA } from './_MOCK_GRID_ITEMS';
import { MaterialModule } from '../../modules/material.module';
import { LoadingModule } from '../../loading/loading.module';
const events = [MOCK_GRID_ITEMS];

export default {
  title: 'Shared / Bar Chart',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [BarChartModule, MaterialModule, LoadingModule],
    })
  ]
};

export const base = () => ({
  component: BarChartComponent,
  template: `
  <div style="max-width:800px;">
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
  component: BarChartComponent,
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
  component: BarChartComponent,
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