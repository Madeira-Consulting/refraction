import postcss from 'postcss';
import * as tailwindcss from '../tailwind.config';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss"
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  }
};
export default config;


export const addons: StorybookConfig['addons'] = [
  // other addons,
  {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: postcss,
        postcssOptions: {
          plugins: {
            tailwindcss, // or you can nest your options entirely here
            autoprefixer: {
              // autoprefixer options
            },
          },
        },
      },
    },
  },
];