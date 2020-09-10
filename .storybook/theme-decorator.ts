import { withKnobs, select } from '@storybook/addon-knobs';
//import { themes, DEFAULT_THEME } from './themes';
export const DEFAULT_THEME = 'light-theme';

export const themes = {
  'Light Theme': 'light-theme',
  'Dark Theme': 'dark-theme'
};

export const withTheme = (story, context) => {
  const storyWithKnobs = withKnobs(story, context);

  return {
    ...storyWithKnobs,
    props: {
      ...storyWithKnobs.props,
      ...{
        theme: select('Theme', themes, DEFAULT_THEME)
      }
    },
    template: `<div data-theme-decorator [ngClass]="theme"><div class="content-wrapper">${storyWithKnobs.template}</div></div>`
  };
};
