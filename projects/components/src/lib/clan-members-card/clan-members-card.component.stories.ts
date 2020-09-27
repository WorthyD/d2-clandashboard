import { moduleMetadata } from '@storybook/angular';
import { ClanMembersCardModule } from './clan-members-card.module';
import { ClanMembersCardComponent } from './clan-members-card.component';
import { MEMBERS } from './_MOCK_ROSTER_LIST';
import { StorybookModule } from '../storybook/storybook.module';
import { SharedModule } from '../shared/shared.module';
export default {
  title: 'Clan / Clan Members Card',
  decorators: [
    moduleMetadata({
      imports: [StorybookModule, ClanMembersCardModule, SharedModule]
    })
  ]
};

export const base = () => ({
  component: ClanMembersCardComponent,
  template: `
    <lib-clan-members-card [cardTitle]="'Recent Members'" [members]="roster" [itemTemplate]="itemTemplate">
    <ng-template let-member #itemTemplate>
    <div >
    View
    </div>
    </ng-template>
    </lib-clan-members-card>
   `,
  props: {
    roster: MEMBERS
  }
});
