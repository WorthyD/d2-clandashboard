import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, object } from '@storybook/addon-knobs';
import { StorybookModule } from '../../../storybook/storybook.module';
import { MemberSearchModule } from './member-search.module';
import { MemberSearchComponent } from './member-search.component';
import { of } from 'rxjs';

export default {
  title: 'Shared / inputs / Member Select',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [MemberSearchModule, StorybookModule]
    })
  ]
};

export const baseLoading = () => ({
  component: MemberSearchComponent,
  template: `
  <div>
    <lib-member-search [data]="data | async" (selection)="selection($event)"></lib-member-search>
  </div>
   `,
  props: {
    selection: action(' select'),
    data: of(['Ted', 'Fred', 'Jed'])
    //  defs: hashes
  }
});
