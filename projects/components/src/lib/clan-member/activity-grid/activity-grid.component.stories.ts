import { moduleMetadata } from '@storybook/angular';
import { ActivityGridComponent } from './activity-grid.component';
import { ActivityGridModule } from './activity-grid.module';
import {MOCK_GRID_ITEMS} from './_MOCK_GRID_ITEMS';

export default {
    title: 'Clan Member / Activity Grid',
    decorators: [
        moduleMetadata({
            imports: [ActivityGridModule]
        })
    ]
};

export const base = () => ({
    component: ActivityGridComponent,
    template: `
        <lib-activity-grid [activityItems]="activityItems"></lib-activity-grid>
   `,
    props: {
        activityItems: MOCK_GRID_ITEMS
    }
});
