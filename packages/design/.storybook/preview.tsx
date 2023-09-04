import type { Preview } from '@storybook/react';
import { Global, css } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
  />
);

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({ GlobalStyles }), // Adds your GlobalStyles component to all stories
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
