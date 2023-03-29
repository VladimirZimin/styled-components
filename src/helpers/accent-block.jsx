import { css } from 'styled-components';
import { Theme } from '../theme';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import bikeAdult from '../images/bike-adult.svg';
import bikeChild from '../images/bike-child.svg';

const AccentBlockMixin = css`
  border-radius: ${Radius[4]};
  padding: 4px 8px 8px;
  background-position: right 4px bottom 4px;
  background-repeat: no-repeat;

  ${({ theme }) =>
    theme.current === Theme.ADULT
      ? css`
          background-color: ${Color.ORANGE_30};
          background-image: url(${bikeAdult});
        `
      : css`
          background-color: ${Color.GREEN_30};
          background-image: url(${bikeChild});
        `}

  @media (min-width: 768px) {
    padding: 8px 16px 16px;
  }
`;

export { AccentBlockMixin };
