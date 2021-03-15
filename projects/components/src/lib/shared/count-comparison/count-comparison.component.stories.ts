import { moduleMetadata } from '@storybook/angular';
import { StorybookModule } from '../../storybook/storybook.module';
import { CountComparisonComponent } from './count-comparison.component';
import { CountComparisonModule } from './count-comparison.module';

export default {
  title: 'Shared / Count Comparison',
  decorators: [
    moduleMetadata({
      imports: [CountComparisonModule, StorybookModule]
    })
  ]
};

export const base = () => ({
  component: CountComparisonComponent,
  template: `
    <lib-count-comparison [title]="title" [current]="current"></lib-count-comparison>
   `,
  props: {
    title: 'Active Players',
    current: 40
  }
});
