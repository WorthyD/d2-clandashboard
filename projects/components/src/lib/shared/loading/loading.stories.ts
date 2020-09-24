import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, object } from '@storybook/addon-knobs';
import { LoadingModule } from './loading.module';
import { LoadingBarComponent } from './loading-bar.component';
import { LoadingComponent } from './loading.component';

export default {
  title: 'Shared / Loading',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [LoadingModule]
    })
  ]
};

export const baseLoading = () => ({
  component: LoadingComponent,
  template: `
  <div>
    <lib-loading></lib-loading>
  </div>
   `,
  props: {}
});

export const baseLoadingBar = () => ({
  component: LoadingBarComponent,
  template: `
  <div>
    <lib-loading-bar></lib-loading-bar>
  </div>
   `,
  props: {}
});
