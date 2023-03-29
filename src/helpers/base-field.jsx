import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';

const StyledBaseField = styled.input`
  border: 1px solid ${Color.GRAY_20};
  border-radius: ${Radius[4]};
  font-size: 16px;
  line-height: 22px;
  ${({ theme }) =>
    theme.current === Theme.ADULT
      ? css`
          color: ${Color.WHITE};

          &:hover {
            border-color: ${Color.ORANGE_20};
          }

          &:focus {
            border-color: ${Color.ORANGE_40};
          }
        `
      : css`
          color: ${Color.GRAY_60};

          &:hover {
            border-color: ${Color.GREEN_20};
          }

          &:focus {
            border-color: ${Color.GREEN_40};
          }
        `}
`;

export { StyledBaseField as BaseField };
