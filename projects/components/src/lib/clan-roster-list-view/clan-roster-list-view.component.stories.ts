import { Button } from '@storybook/angular/demo';

import { moduleMetadata } from '@storybook/angular';
import { ClanRosterListViewModule } from './clan-roster-list-view.module';
import { ClanRosterListViewComponent } from './clan-roster-list-view.component';
import { MEMBERS } from './_MOCK_ROSTER_LIST';
import { StorybookModule } from '../storybook/storybook.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../shared/modules/material.module';
import { IconsModule } from '../icons/icons.module';
import { PipesModule } from '../pipes/pipes.module';
import { ClassCellComponent, ClassIconPipe } from './class-cell.component';

import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ClanListViewStoryComponent } from './clan-roster-list-view.component-story.stories';

export default {
  title: 'Clan / Member Roster',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        StorybookModule,
        MatTableModule,
        MatSortModule,
        MatIconModule,
        MaterialModule,
        IconsModule,
        PipesModule,
        ClanRosterListViewModule
      ],
      declarations: [ClanListViewStoryComponent]
    })
  ]
};

let members = MEMBERS;

const addRow = () => {
  members = members.concat([MEMBERS[0]]);
  console.log(members);
};

export const base = () => ({
  component: ClanRosterListViewComponent,
  template: `
    <lib-clan-roster-list-view [members]="roster"  [isLoading]="isLoading"></lib-clan-roster-list-view>
   `,
  props: {
    roster: members,
    isLoading: boolean('Is Loading', false),
    click: addRow
  }
});
export const dynamic = () => ({
  component: ClanRosterListViewComponent,
  template: `
    <lib-clan-roster-list-view-story [members]="roster"  [isLoading]="isLoading"></lib-clan-roster-list-view-story>
   `,
  props: {
    roster: members,
    isLoading: boolean('Is Loading', false),
    click: addRow
  }
});
