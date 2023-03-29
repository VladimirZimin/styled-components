import { createGlobalStyle } from 'styled-components';

const Color = {
  ORANGE_10: 'var(--color-orange-10)',
  ORANGE_20: 'var(--color-orange-20)',
  ORANGE_30: 'var(--color-orange-30)',
  ORANGE_40: 'var(--color-orange-40)',
  GREEN_10: 'var(--color-green-10)',
  GREEN_20: 'var(--color-green-20)',
  GREEN_30: 'var(--color-green-30)',
  GREEN_40: 'var(--color-green-40)',
  BLUE_10: 'var(--color-blue-10)',
  BLUE_20: 'var(--color-blue-20)',
  BLUE_30: 'var(--color-blue-30)',
  WHITE: 'var(--color-white)',
  GRAY_10: 'var(--color-gray-10)',
  GRAY_20: 'var(--color-gray-20)',
  GRAY_30: 'var(--color-gray-30)',
  GRAY_40: 'var(--color-gray-40)',
  GRAY_50: 'var(--color-gray-50)',
  GRAY_60: 'var(--color-gray-60)',
  GRAY_70: 'var(--color-gray-70)',
};

const GlobalColors = createGlobalStyle`
  :root {
    --color-blue-10: #8fc8fd;
    --color-blue-20: #56aaf7;
    --color-blue-30: #2891f1;

    --color-orange-10: #ffc9aa;
    --color-orange-20: #ff9f69;
    --color-orange-30: #ff833e;
    --color-orange-40: #f06314;

    --color-green-10: #bff5b1;
    --color-green-20: #86da71;
    --color-green-30: #5fcb45;
    --color-green-40: #42b026;

    --color-white: #ffffff;
    --color-gray-10: #e9e9e9;
    --color-gray-20: #dfdfdf;
    --color-gray-30: #808080;
    --color-gray-40: #323334;
    --color-gray-50: #252626;
    --color-gray-60: #151515;
    --color-gray-70: #1f1f1f;
  }
`;

export { Color, GlobalColors };
