//import { withTheme } from './theme-decorator';

module.exports = {
  stories: ['../src/**/*.stories.[tj]s', '../projects/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-essentials',
      options: {}
    }
  ]
  //decorators: [withTheme]
};

// import { withTheme } from './theme-decorator';

// addDecorator(withTheme);
