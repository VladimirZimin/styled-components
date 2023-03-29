import styled, { css } from 'styled-components';

const Color = {
  TEXT: '#ffffff',
  BACKGROUND: '#56aaf7',
  BACKGROUND_HOVER_OR_FOCUS: '#8fc8fd',
  BACKGROUND_ACTIVE: '#2891f1',
  BACKGROUND_DISABLED: '#dfdfdf',
};

export const ButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ButtonSizeToCSS = {
  [ButtonSize.MEDIUM]: css`
    padding: 4px 8px;
    font-size: 14px;
    line-height: 20px;
  `,
  [ButtonSize.LARGE]: css`
    padding: 8px 16px;
    font-size: 16px;
    line-height: 22px;
  `,
};

export const Button = styled.button.attrs({
  type: 'button',
  // size: ButtonSize.MEDIUM,
})`
  ${({ size }) => ButtonSizeToCSS[size]}
  /* padding: ${({ size }) =>
    size === ButtonSize.MEDIUM ? '4px 8px' : '8px 16px'};
  font-size: ${({ size }) => (size === ButtonSize.MEDIUM ? '14px' : '16px')};
  line-height: ${({ size }) =>
    size === ButtonSize.MEDIUM ? '20px' : '22px'}; */

  color: ${Color.TEXT};
  background-color: ${Color.BACKGROUND};
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${Color.BACKGROUND_HOVER_OR_FOCUS};
  }

  &:active {
    background-color: ${Color.BACKGROUND_ACTIVE};
  }

  &:disabled {
    background-color: ${Color.BACKGROUND_DISABLED};
    cursor: not-allowed;
  }

  &::after {
    content: ' >';
  }
`;
