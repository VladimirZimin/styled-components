import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';

const TextButtonSize = {
  MEDIUM: 'medium',
  LARGE: 'large',
};

const TextButtonSizeToCSS = {
  [TextButtonSize.MEDIUM]: css`
    font-size: 14px;
    line-height: 18px;
  `,
  [TextButtonSize.LARGE]: css`
    font-size: 16px;
    line-height: 22px;
  `,
};

const CSS = css`
  ${({ size }) => TextButtonSizeToCSS[size]}

  ${({ theme }) =>
    theme.current === Theme.ADULT
      ? css`
          color: ${Color.WHITE};

          &:hover,
          &:focus {
            color: ${Color.ORANGE_20};
          }

          &:active {
            color: ${Color.ORANGE_40};
          }
        `
      : css`
          color: ${Color.GRAY_60};

          &:hover,
          &:focus {
            color: ${Color.GREEN_20};
          }

          &:active {
            color: ${Color.GREEN_40};
          }
        `}

  &:disabled {
    color: ${Color.GRAY_30};
  }
`;

const attrsFactory = ({ size }) => ({
  size: size || TextButtonSize.MEDIUM,
});

const StyledTextButton = styled(BaseButton).attrs(attrsFactory)`
  ${CSS}
`;

const StyledTextLink = styled(Link).attrs(attrsFactory)`
  ${CSS}
`;

export {
  TextButtonSize,
  StyledTextButton as TextButton,
  StyledTextLink as TextLink,
};

// const StyledTextButton = styled(BaseButton).attrs(({ size, color }) => ({
//   size: size || TextButtonSize.MEDIUM,
//   color: color || Color.WHITE,
// }))`
//   ${({ size }) => TextButtonSizeToCSS[size]}

//   color: ${({ color }) => color};

//   &:hover,
//   &:focus {
//     color: ${Color.ORANGE_20};
//   }

//   &:active {
//     color: ${Color.ORANGE_40};
//   }

//   &:disabled {
//     color: ${Color.GRAY_30};
//   }
// `;

// export { TextButtonSize, StyledTextButton as TextButton };
