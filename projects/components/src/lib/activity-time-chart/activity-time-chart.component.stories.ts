import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ActivityTimeChartComponent } from './activity-time-chart.component';
import { ActivityTimeChartModule } from './activity-time-chart.module';
import { formatDate } from 'projects/data/src/lib/utility/format-date';
import { SECONDS_IN_DAY } from '@destiny/models/constants';
const stats = [];

const today = new Date(new Date().setDate(new Date().getDate() + ((2 + 7 - new Date().getDay()) % 7) - 189));

for (let i = 0; i < 50; i++) {
  const d = new Date(today);
  const d2 = new Date(d.setDate(d.getDate() + i * 7));
  stats.push({
    date: formatDate(d2),
    seconds: Math.floor(Math.random() * SECONDS_IN_DAY + 1)
  });
}

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
  template: `<lib-activity-time-chart [loading]="isLoading" [events]="events"></lib-activity-time-chart>`,
  props: {
    isLoading: boolean('Is Loading', false),
    events: stats
  }
});
