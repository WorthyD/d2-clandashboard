import { moduleMetadata } from '@storybook/angular';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';

import { ClanRosterActivityTableModule } from './clan-roster-activity-table.module';
import { ClanRosterActivityTableComponent } from './clan-roster-activity-table.component';
import {
  MOCK_ROSTER_ACTIVITY,
  MOCK_ROSTER_ACTIVITIES,
  MOCK_ROSTER_ACTIVITIES_COMBINE
} from './_MOCK_ROSTER_ACTIVITY_LIST';
import { withKnobs, boolean } from '@storybook/addon-knobs';
export default {
  title: 'Clan / Clan Activity Stats',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [StorybookModule, ClanRosterActivityTableModule]
    })
  ]
};

export const base = () => ({
  component: ClanRosterActivityTableComponent,
  template: `<lib-clan-roster-activity-table [memberActivityStats]="memberStats"  [isLoading]="isLoading" [memberProfilesLoading]="areProfilesLoading" ></lib-clan-roster-activity-table>`,
  props: {
    memberStats: MOCK_ROSTER_ACTIVITIES_COMBINE,
    areProfilesLoading: boolean('profiles Loading', false),
    isLoading: boolean('Is Loading', false)
  }
});

export const loadingTable = () => ({
  component: ClanRosterActivityTableComponent,
  template: `<lib-clan-roster-activity-table [memberActivityStats]="memberStats" [isLoading]="isLoading"  [memberProfilesLoading]="areProfilesLoading"></lib-clan-roster-activity-table>`,
  props: {
    memberStats: MOCK_ROSTER_ACTIVITIES_COMBINE,

    areProfilesLoading: boolean('profiles Loading', true),
    isLoading: boolean('Is Loading', true)
  }
});
export const loadingProfilesTable = () => ({
  component: ClanRosterActivityTableComponent,
  template: `<lib-clan-roster-activity-table [memberActivityStats]="memberStats" [isLoading]="isLoading" [memberProfilesLoading]="areProfilesLoading"></lib-clan-roster-activity-table>`,
  props: {
    memberStats: MOCK_ROSTER_ACTIVITIES_COMBINE,

    isLoading: boolean('Is Loading', false),
    areProfilesLoading: boolean('profiles Loading', true)
  }
});
