import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';

import { ClanRosterActivityTableModule } from './clan-roster-activity-table.module';
import { ClanRosterActivityTableComponent } from './clan-roster-activity-table.component';
import { MOCK_ROSTER_ACTIVITY } from './_MOCK_ROSTER_ACTIVITY_LIST';

export default {
  title: 'Clan / Clan Activity Stats',
  decorators: [
    moduleMetadata({
      imports: [StorybookModule, ClanRosterActivityTableModule]
    })
  ]
};

export const base = () => ({
  component: ClanRosterActivityTableComponent,
  template: `<lib-clan-roster-activity-table [memberActivityStats]="memberStats" [isLoading]="false"></lib-clan-roster-activity-table>`,
  props: {
    memberStats: MOCK_ROSTER_ACTIVITY
  }
});
const loadingVar = MOCK_ROSTER_ACTIVITY.map((x) => {
  return { ...x, stats: undefined };
});

export const loading = () => ({
  component: ClanRosterActivityTableComponent,
  template: `<lib-clan-roster-activity-table [memberActivityStats]="memberStats" [isLoading]="false"></lib-clan-roster-activity-table>`,
  props: {
    memberStats: loadingVar
  }
});
