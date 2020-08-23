import { moduleMetadata } from '@storybook/angular';
import { StorybookModule } from '../../storybook/storybook.module';
import { NavbarComponent } from './navbar.component';
import { NavbarModule } from './navbar.module';

import { ClanDetails } from 'bungie-models';

const clan = {
  name: 'Lorem Ipsum'
};

export default {
  title: 'Core Navbar',
  decorators: [
    moduleMetadata({
      imports: [StorybookModule, NavbarModule]
    })
  ]
};

export const base = () => ({
  component: NavbarComponent,
  template: `<lib-navbar [clanDetails]="clan"></lib-navbar>`,
  props: {
    clan: clan
  }
});
