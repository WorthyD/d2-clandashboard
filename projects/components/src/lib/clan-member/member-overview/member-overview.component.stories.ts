import { moduleMetadata } from '@storybook/angular';
// import { ActivityGridComponent } from './activity-grid.component';
// import { ActivityGridModule } from './activity-grid.module';
import {MemberOverviewModule} from './member-overview.module';
//import {MOCK_GRID_ITEMS} from './_MOCK_GRID_ITEMS';
import {MOCK_MEMBER_OVERVIEW} from './_MOCK_MEMBER_OVERVIEW';

export default {
    title: 'Activity Grid',
    decorators: [
        moduleMetadata({
            imports: [MemberOverviewModule]
        })
    ]
};

export const base = () => ({
    component: ActivityGridComponent,
    template: `
        <lib-activity-grid [activityItems]="activityItems"></lib-activity-grid>
   `,
    props: {
        activityItems: MOCK_MEMBER_OVERVIEW
    }
});
