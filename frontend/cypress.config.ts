import { defineConfig } from 'cypress';

import { MountOptions, MountReturn } from 'cypress/react';
import { MemoryRouterProps } from 'react-router-dom';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
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
