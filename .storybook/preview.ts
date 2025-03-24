import type { Preview } from '@storybook/react';
import '../src/reset.css';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      story: {
        height: '100%',
      },
    },
  },
};

export default preview;
