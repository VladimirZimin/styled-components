import { createGlobalStyle } from 'styled-components';
import manropeMedium from '../fonts/manrope-medium.woff2';
import manropeBold from '../fonts/manrope-bold.woff2';
import commissionerRegular from '../fonts/commissioner-regular.woff2';
import commissionerSemiBold from '../fonts/commissioner-semi-bold.woff2';
import delaGothicOneRegular from '../fonts/dela-gothic-one-regular.woff2';

const Font = {
  MANROPE: 'var(--font-manrope)',
  COMMISSIONER: 'var(--font-commissioner)',
  DELA_GOTHIC_ONE: 'var(--font-dela-gothic-one)',
};

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${manropeMedium});
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${manropeBold});
  }

  @font-face {
    font-family: 'Commissioner';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${commissionerRegular});
  }

  @font-face {
    font-family: 'Commissioner';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${commissionerSemiBold});
  }

  @font-face {
    font-family: 'Dela Gothic One';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${delaGothicOneRegular});
  }

  :root {
    --font-manrope: 'Manrope', Arial, sans-serif;
    --font-commissioner: 'Commissioner', Arial, sans-serif;
    --font-dela-gothic-one: 'Dela Gothic One', var(--font-commissioner);
  }
`;

export { GlobalFonts, Font };
