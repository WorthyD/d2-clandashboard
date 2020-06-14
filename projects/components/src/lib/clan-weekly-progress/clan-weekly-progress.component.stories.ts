import { moduleMetadata } from '@storybook/angular';
/// import { ActivityGridComponent } from './activity-grid.component';
// import { ActivityGridModule } from './activity-grid.module';
// import {MOCK_GRID_ITEMS} from './_MOCK_GRID_ITEMS';
import { ClanWeeklyProgressComponent } from './clan-weekly-progress.component';
import { ClanWeeklyProgressModule } from './clan-weekly-progress.module';
import { MOCK_WEEKLY_PROGRESS } from './_MOCK_WEEKLY_PROGRESS';
import { StorybookModule } from '../storybook/storybook.module';

export default {
    title: 'Clan Weekly Progress',
    decorators: [
        moduleMetadata({
            imports: [ClanWeeklyProgressModule, StorybookModule]
        })
    ]
};

export const base = () => ({
    component: ClanWeeklyProgressComponent,
    template: `
        <lib-clan-weekly-progress [clanRewards]="progress"></lib-clan-weekly-progress>
   `,
    props: {
        progress: MOCK_WEEKLY_PROGRESS
    }
});
