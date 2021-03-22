import { moduleMetadata } from '@storybook/angular';
import { StorybookModule } from '../storybook/storybook.module';
import { MemberCalloutModule } from './member-callout.module';
import { MemberCalloutComponent } from './member-callout.component';

export default {
  title: 'Clan Member / Member Callout',
  decorators: [
    moduleMetadata({
      imports: [MemberCalloutModule, StorybookModule]
    })
  ]
};

export const base = () => ({
  component: MemberCalloutComponent,
  template: `
    <lib-member-callout [title]="title" [callouts]="callouts"></lib-member-callout>
   `,
  props: {
    title: 'Title Card',
    callouts: [
      {
        title: 'One',
        value: '1234'
      },
      {
        title: 'two',
        value: '1234',
        subValue: '4567',
        subTtile: 'Sub title'
      }
    ]
  }
});
