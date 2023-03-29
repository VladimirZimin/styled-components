import { createGlobalStyle } from 'styled-components';

const Shadow = {
  HEADER_LIGHT: 'var(--shadow-header-light)',
  CARD_DEFAULT_LIGHT: 'var(--shadow-card-default-light)',
  CARD_HOVER_OR_FOCUS: 'var(--shadow-card-hover-or-focus)',
  CARD_DEFAULT_CHILD: 'var(--shadow-card-default-child)',
  CARD_HOVER_OR_FOCUS_CHILD: 'var(--shadow-card-hover-or-focus-child)',
  CARD_HOVER_OR_FOCUS_ADULT: 'var(--shadow-card-hover-or-focus-adult)',
};

const GlobalShadows = createGlobalStyle`
  :root {
    --shadow-header-light: 0 2px 20px rgba(0, 0, 0, 0.08);
    --shadow-card-default-light: 0 0 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-or-focus: 0 0 10px rgba(86, 170, 247, 0.25);
    --shadow-card-default-child: 0 4px 10px rgba(0, 0, 0, 0.07);
    --shadow-card-hover-or-focus-child: inset 0 0 0 1px #ff833e;
    --shadow-card-hover-or-focus-adult: inset 0 0 0 1px #5fcb45;
  }
`;

export { Shadow, GlobalShadows };
