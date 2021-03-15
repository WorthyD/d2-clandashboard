import { moduleMetadata } from '@storybook/angular';
import { StorybookModule } from '../../../storybook/storybook.module';
import { CounterModule } from './counter.module';
import { CounterComponent } from './counter.component';

export default {
  title: 'Shared / Components / Counter',
  decorators: [
    moduleMetadata({
      imports: [CounterModule, StorybookModule]
    })
  ]
};

export const base = () => ({
  component: CounterComponent,
  template: `
  <lib-counter></lib-counter>
   `,
  props: {
  }
});
