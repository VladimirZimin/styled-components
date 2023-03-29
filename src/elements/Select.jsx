import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { BaseField } from '../helpers/base-field';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Icon } from './Icon';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 200px;
`;

const StyledSelect = styled(BaseField).attrs({
  as: 'select',
})`
  appearance: none;
  width: 100%;
  padding: 0 26px 2px 4px;
  cursor: pointer;

  ${({ theme }) =>
    theme.current === Theme.ADULT
      ? css`
          &:hover {
            + svg {
              color: ${Color.ORANGE_20};
            }
          }

          &:focus {
            + svg {
              color: ${Color.ORANGE_40};
            }
          }
        `
      : css`
          &:hover {
            + svg {
              color: ${Color.GREEN_20};
            }
          }

          &:focus {
            + svg {
              color: ${Color.GREEN_40};
            }
          }
        `}
`;

const StyledChevron = styled(Icon).attrs({ name: IconName.CHEVRON_DOWN })`
  position: absolute;
  top: 1px;
  right: 1px;
  pointer-events: none;
`;

function Select({ className, label, children }) {
  return (
    <StyledWrapper className={className}>
      <StyledSelect aria-label={label}>{children}</StyledSelect>
      <StyledChevron />
    </StyledWrapper>
  );
}

export { Select };
