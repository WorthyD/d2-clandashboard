import { moduleMetadata } from '@storybook/angular';

import { StorybookModule } from '../../storybook/storybook.module';
import { FEATURED_CLANS } from './_MOCK_FEATURED_CLANS';
import { FeaturedClanCardComponent } from './featured-clan-card.component';
//import { FeaturedClanCardModule } from 'src/app/clan-search/featured-clan-card/featured-clan-card.module';
import { FeaturedClanCardModule } from './featured-clan-card.module';

export default {
  title: 'Clan Search / Clan Search Card',
  decorators: [
    moduleMetadata({
      imports: [StorybookModule, FeaturedClanCardModule],
    }),
  ],
};

export const base = () => ({
  component: FeaturedClanCardComponent,
  template: `
  <lib-featured-clan-card [cardTitle]="'Title'" [featuredClans]="clans"></lib-featured-clan-card>
   `,
  props: {
    clans: FEATURED_CLANS,
  },
});
