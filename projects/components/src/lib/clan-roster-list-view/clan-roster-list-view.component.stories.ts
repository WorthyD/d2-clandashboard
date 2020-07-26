import { Button } from '@storybook/angular/demo';

import { moduleMetadata } from '@storybook/angular';
import { ClanRosterListViewModule } from './clan-roster-list-view.module';
import { ClanRosterListViewComponent } from './clan-roster-list-view.component';
import { MEMBERS } from './_MOCK_ROSTER_LIST';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';

export default {
    title: 'Member Roster',
    decorators: [
        moduleMetadata({
            imports: [StorybookModule, ClanRosterListViewModule ]
        })
    ]};

export const base = () => ({
    component: ClanRosterListViewComponent,
    template: `
    <lib-clan-roster-list-view [members]="roster"></lib-clan-roster-list-view>
   `,
    props: {
        roster: MEMBERS
    }
});
