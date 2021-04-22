// import React from 'react';
// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'light',
//     toolbar: {
//       icon: 'circlehollow',
//       // array of plain string values or MenuItem shape (see below)
//       items: ['light', 'dark']
//     }
//   }
// };
// export const parameters = {
//   backgrounds: {
//     default: 'twitter',
//     values: [
//       {
//         name: 'twitter',
//         value: '#00aced'
//       },
//       {
//         name: 'facebook',
//         value: '#3b5998'
//       }
//     ]
//   }
// };

// // const withThemeProvider = (Story) => {
// //   //const theme = getTheme(context.globals.theme);
// //   //const theme = getTheme(context.globals.theme);
// //   //console.log(theme);
// //   return (
// //     <div>
// //       <Story />
// //     </div>
// //   );
// // };
// // export const decorators = [withThemeProvider];
// //import React from 'react';

// //export const decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>];
// import { withTheme } from './theme-decorator';

// export const decorators = [withTheme];
// addDecorator(withTheme);
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light-theme',
    toolbar: {
      icon: 'circlehollow',
      items: ['light-theme', 'dark-theme']
    }
  }
};
export const decorators = [
  (storyFunc, context) => {
    const story = storyFunc();
    const theme = context.globals.theme;
    const appIframe = document.querySelector('.sb-show-main');
    if (appIframe) {
      appIframe.classList.remove(...globalTypes.theme.toolbar.items);
      appIframe.classList.add(theme);
    }

    return {
      ...story,
      template: `<div class="content-wrapper">${story.template}</div>`
    };
  }
];



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
