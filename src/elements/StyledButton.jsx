import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';

export const StyledButtonSize = {
  LARGE: 'large',
  MEDIUM: 'medium',
};

export const StyledButtonVariant = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
};

export const StyleButtonColor = {
  ORANGE: 'orange',
  GREEN: 'green',
};

const StyledButtonSizeToCSS = {
  medium: css`
    padding: 2px 4px;
  `,
  large: css`
    padding: 4px 6px;
  `,
};

const StyledButtonVariantToCSS = {
  [StyledButtonVariant.FILLED]: css`
    border-color: transparent;
    color: ${Color.WHITE};
    background-color: var(--color-button);
  `,
  [StyledButtonVariant.OUTLINED]: css`
    border-color: var(--color-button);
    color: var(--color-button);
    background-color: transparent;
  `,
};

const ButtonAdultColors = css`
  --color-button: ${Color.ORANGE_30};

  &:hover,
  &:focus {
    --color-button: ${Color.ORANGE_20};
  }

  &:active {
    --color-button: ${Color.ORANGE_40};
  }

  &:disabled {
    --color-button: ${Color.GRAY_30};
  }
`;

const ButtonChildColors = css`
  --color-button: ${Color.GREEN_30};

  &:hover,
  &:focus {
    --color-button: ${Color.GREEN_20};
  }

  &:active {
    --color-button: ${Color.GREEN_40};
  }

  &:disabled {
    --color-button: ${Color.GRAY_30};
  }
`;

// const StyleButtonColorToCSS = {
//   [StyleButtonColor.ORANGE]: css`
//     /*
//     color: ${({ outlined }) =>
//       outlined ? Color.BACKGROUND_ORANGE : Color.TEXT};

//     background-color: ${({ outlined }) =>
//       outlined ? 'transparent' : Color.BACKGROUND_ORANGE};
//     border: 1px solid ${Color.BACKGROUND_ORANGE};

//     &:hover,
//     &:focus {
//       background-color: ${({ outlined }) =>
//       outlined ? 'transparent' : Color.BACKGROUND_ORANGE_HOVER_OR_FOCUS};
//       border: 1px solid ${Color.BACKGROUND_ORANGE_HOVER_OR_FOCUS};
//       color: ${({ outlined }) =>
//       outlined ? Color.BACKGROUND_ORANGE_HOVER_OR_FOCUS : Color.TEXT};
//     }

//     &:active {
//       background-color: ${({ outlined }) =>
//       outlined ? 'transparent' : Color.BACKGROUND_ORANGE_ACTIVE};
//       border: 1px solid ${Color.BACKGROUND_ORANGE_ACTIVE};
//       color: ${({ outlined }) =>
//       outlined ? Color.BACKGROUND_ORANGE_ACTIVE : Color.TEXT};
//     }

//     &:disabled {
//       background-color: ${({ outlined }) =>
//       outlined ? 'transparent' : Color.BACKGROUND_DISABLED};
//       border: 1px solid ${Color.BACKGROUND_DISABLED};
//       color: ${({ outlined }) =>
//       outlined ? Color.BACKGROUND_DISABLED : Color.TEXT};
//     }
//   */

//     --color-button: ${Color.ORANGE_30};

//     &:hover,
//     &:focus {
//       --color-button: ${Color.ORANGE_20};
//     }

//     &:active {
//       --color-button: ${Color.ORANGE_40};
//     }

//     &:disabled {
//       --color-button: ${Color.GRAY_30};
//     }
//   `,
//   [StyleButtonColor.GREEN]: css`
//     /*
//     color: ${({ outlined }) =>
//       outlined ? Color.BACKGROUND_GREEN : Color.TEXT};

//     background-color: ${({ outlined }) =>
//       outlined ? 'transparent' : Color.BACKGROUND_GREEN};
//     border: 1px solid ${Color.BACKGROUND_GREEN};

//     &:hover,
//     &:focus {
//       background-color: ${({ outlined }) =>
//       outlined ? 'transparent' : Color.BACKGROUND_GREEN_HOVER_OR_FOCUS};
//       border: 1px solid ${Color.BACKGROUND_GREEN_HOVER_OR_FOCUS};
//       color: ${({ outlined }) =>
//       outlined ? Color.BACKGROUND_GREEN_HOVER_OR_FOCUS : Color.TEXT};
//     }

//     &:active {
//       background-color: ${({ outlined }) =>
//       outlined ? 'transparent' : Color.BACKGROUND_GREEN_ACTIVE};
//       border: 1px solid ${Color.BACKGROUND_GREEN_ACTIVE};
//       color: ${({ outlined }) =>
//       outlined ? Color.BACKGROUND_GREEN_ACTIVE : Color.TEXT};
//     }

//     &:disabled {
//       background-color: ${({ outlined }) =>
//       outlined ? 'transparent' : Color.BACKGROUND_DISABLED};
//       border: 1px solid ${Color.BACKGROUND_DISABLED};
//       color: ${({ outlined }) =>
//       outlined ? Color.BACKGROUND_DISABLED : Color.TEXT};
//     }
//   */
//     --color-button: ${Color.GREEN_30};

//     &:hover,
//     &:focus {
//       --color-button: ${Color.GREEN_20};
//     }

//     &:active {
//       --color-button: ${Color.GREEN_40};
//     }

//     &:disabled {
//       --color-button: ${Color.GRAY_30};
//     }
//   `,
// };

const StyleButtonColorToCSS = {
  [StyleButtonColor.ORANGE]: css`
    ${({ theme }) =>
      theme.current === Theme.ADULT ? ButtonAdultColors : ButtonChildColors}
  `,
  [StyleButtonColor.GREEN]: css`
    ${({ theme }) =>
      theme.current === Theme.ADULT ? ButtonChildColors : ButtonAdultColors}
  `,
};

const CSS = css`
  ${({ size }) => StyledButtonSizeToCSS[size]}
  ${({ color }) => StyleButtonColorToCSS[color]}
  ${({ variant }) => StyledButtonVariantToCSS[variant]}

  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${Radius[4]};
  font-size: 16px;
  line-height: 22px;

  svg {
    color: currentColor;
  }
`;

const attrsFactory = ({ size, variant, color }) => ({
  size: size || StyledButtonSize.MEDIUM,
  variant: variant || StyledButtonVariant.FILLED,
  color: color || StyleButtonColor.ORANGE,
});

export const StyledButton = styled(BaseButton).attrs(attrsFactory)`
  ${CSS}
`;

export const StyledLink = styled(Link).attrs(attrsFactory)`
  ${CSS}
`;

// export const StyledButton = styled(BaseButton).attrs(({ type, size }) => ({
//   type: type || 'button',
//   size: size || StyledButtonSize.MEDIUM,
// }))`
//   ${({ size }) => StyledButtonSizeToCSS[size]}
//   ${({ color }) => StyleButtonColorToCSS[color]}
//   ${({ variant }) => StyledButtonVariantToCSS[variant]}

//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   font-size: 16px;
//   line-height: 22px;
//   border-width: 1px;
//   border-style: solid;
//   border-radius: ${Radius[4]};

//   svg {
//     color: currentColor;
//   }
// `;
