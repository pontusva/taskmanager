import { defineConfig } from 'cypress';

import { MountOptions, MountReturn } from 'cypress/react';
import { MemoryRouterProps } from 'react-router-dom';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
