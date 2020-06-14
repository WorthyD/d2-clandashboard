import { Button } from '@storybook/angular/demo';

import { moduleMetadata } from '@storybook/angular';
// import { ClanRosterListViewModule } from './clan-roster-list-view.module';
//import { ClanRosterListViewComponent } from './clan-roster-list-view.component';
import { ClanMembersCardModule } from './clan-members-card.module';
import { ClanMembersCardComponent } from './clan-members-card.component';
import { MEMBERS } from './_MOCK_ROSTER_LIST';
import { StorybookService } from '../storybook/storybook.service';
import { StorybookModule } from '../storybook/storybook.module';
import { SharedModule } from '../shared/shared.module';
export default {
    title: 'Clan Members Card',
    decorators: [
        moduleMetadata({
            imports: [StorybookModule, ClanMembersCardModule, SharedModule],
        }),
    ],
};

export const base = () => ({
    component: ClanMembersCardComponent,
    template: `
    <lib-clan-members-card [cardTitle]="'Recent Members'" [members]="roster" [itemTemplate]="itemTemplate">
    <ng-template let-member #itemTemplate>
    <div >
    {{member.member.destinyUserInfo.displayName}}
    </div>
    </ng-template>
    </lib-clan-members-card>
   `,
    props: {
        roster: MEMBERS,
    },
});
