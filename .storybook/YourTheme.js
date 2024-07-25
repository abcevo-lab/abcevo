import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://www.w12.com.br',
  brandImage: 'https://raw.githubusercontent.com/abcevo-lab/angular-components/main/src/stories/assets/abcevo.png',
  brandTarget: '_self',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',
});

