import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Shadow } from '../tokens/shadow';
import { Radius } from '../tokens/radiuses';

export const StyledBaseCard = styled(Link)`
  position: relative;
  display: grid;
  border-radius: ${Radius[4]};
  background-color: ${Color.GRAY_40};
  overflow: hidden;

  ${({ theme }) =>
    theme.current === Theme.ADULT
      ? css`
          background-color: ${Color.GRAY_40};
        `
      : css`
          background-color: ${Color.WHITE};
          box-shadow: ${Shadow.CARD_DEFAULT_CHILD};
        `}

  &:hover,
  &:focus {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: ${Radius[4]};
      box-shadow: ${({ theme }) =>
        theme.current === Theme.ADULT
          ? Shadow.CARD_HOVER_OR_FOCUS_ADULT
          : Shadow.CARD_HOVER_OR_FOCUS_CHILD};
      pointer-events: none;
    }
  }
`;
