import { moduleMetadata } from '@storybook/angular';

import { StorybookModule } from '../storybook/storybook.module';

import { ClanSeasonProgressModule } from './clan-season-progress.module';
import { ClanSeasonProgressComponent } from './clan-season-progress.component';
import { MOCK_PROGRESS1 } from './_MOCK_CLAN_PROGRESS';

export default {
    title: 'Clan Season Progress',
    decorators: [
        moduleMetadata({
            imports: [ClanSeasonProgressModule, StorybookModule],
        }),
    ],
};
export const base = () => ({
    component: ClanSeasonProgressComponent,
    template: `
        <lib-clan-season-progress [clanProgress]="progress"></lib-clan-season-progress>
   `,
    props: {
        progress: MOCK_PROGRESS1,
    },
});
