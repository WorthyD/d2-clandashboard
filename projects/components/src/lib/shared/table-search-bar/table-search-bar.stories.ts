import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, object } from '@storybook/addon-knobs';
import { TableSearchBarModule } from './table-search-bar.module';
import { TableSearchBarComponent } from './table-search-bar.component';
import { InputsModule } from '../inputs/inputs.module';
import { StorybookModule } from '../../storybook/storybook.module';
const hashes = [
  {
    displayProperties: {
      name: 'All'
    },
    modeType: 0
  },
  {
    displayProperties: {
      name: 'Story'
    },
    modeType: 2
  },
  {
    displayProperties: {
      name: 'Raid'
    },
    modeType: 4
  }
];

export default {
  title: 'Shared / Table Search Bar',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [TableSearchBarModule, InputsModule,StorybookModule]
    })
  ]
};

export const baseSearchBar = () => ({
  component: TableSearchBarComponent,
  template: `
  <div>
    <lib-table-search-bar>
      <lib-activity-mode-select [definitions]="defs"></lib-activity-mode-select>
    </lib-table-search-bar>
  </div>
   `,
  props: {
    defs: hashes
  }
});
