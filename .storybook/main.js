//import { withTheme } from './theme-decorator';

module.exports = {
  stories: ['../src/**/*.stories.[tj]s', '../projects/**/*.stories.[tj]s'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-controls',
    '@storybook/preset-scss'
  ],
  core: {
    builder: 'webpack5'
  },
  angularOptions: {
    enableIvy: true,
  },
};
