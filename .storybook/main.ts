import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: ["../src//**/*.mdx", "../src/stories/components//**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-docs',
  ],
  framework: "@storybook/angular",
  /*webpackFinal: async (config) => {
    if (!config.output) {
      config.output = {};
    }
    config.output.publicPath = '/angular-components/storybook-static/';
    return config;
  },*/
};
export default config;
