import { moduleMetadata } from '@storybook/angular';
import { MemberOverviewModule } from './member-overview.module';
import { MemberOverviewComponent } from './member-overview.component';
import { MOCK_MEMBER_OVERVIEW, MOCK_MEMBER } from './_MOCK_MEMBER_OVERVIEW';

export default {
    title: 'Member Overview',
    decorators: [
        moduleMetadata({
            imports: [MemberOverviewModule],
        }),
    ],
};

export const base = () => ({
    component: MemberOverviewComponent,
    template: `
        <lib-member-overview [memberOverview]="member"></lib-member-overview>
   `,
    props: {
        member: { memberProfile: MOCK_MEMBER_OVERVIEW, clanMember: MOCK_MEMBER },
    },
});
