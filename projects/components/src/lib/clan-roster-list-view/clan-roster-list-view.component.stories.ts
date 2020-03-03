import { Button } from '@storybook/angular/demo';

// export default { title: 'My Button' }

// export const withText = () => ({
//   component: Button,
//   props: {
//     text: 'Hello Button',
//   },
// });

// export const withEmoji = () => ({
//   component: Button,
//   props: {
//     text: '😀 😎 👍 💯',
//   },
// });
import { moduleMetadata } from '@storybook/angular';
import { ClanRosterListViewModule } from './clan-roster-list-view.module';
import { ClanRosterListViewComponent } from './clan-roster-list-view.component';
import {MEMBERS} from './_MOCK_ROSTER_LIST';
// import { ActivityGridComponent } from './activity-grid.component';
// import { ActivityGridModule } from './activity-grid.module';
// import {MOCK_GRID_ITEMS} from './_MOCK_GRID_ITEMS';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export default {
    title: 'Member Roster',
    decorators: [
        moduleMetadata({
            imports: [ClanRosterListViewModule, BrowserAnimationsModule]
        })
    ]
};

export const base = () => ({
    component: ClanRosterListViewComponent,
    template: `
    <lib-clan-roster-list-view [members]="roster"></lib-clan-roster-list-view>
   `,
    props: {
        roster: MEMBERS
    }
});
