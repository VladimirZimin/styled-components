import { useId, useState } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../theme';
import { BaseButton } from '../helpers/base-button';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { Typography, TypographyVariant } from './Typography';

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledToggle = styled(BaseButton)`
  position: relative;
  width: 22px;
  height: 22px;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 22px;
    height: 8px;
    border-radius: ${Radius[4]};
    background-color: ${Color.GRAY_10};
  }

  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${Color.GRAY_20};
  }

  &[aria-checked='true'] {
    &::after {
      right: 0;
      left: auto;
    }

    ${({ theme }) =>
      theme.current === Theme.ADULT
        ? css`
            &::before {
              background-color: ${Color.ORANGE_10};
            }

            &::after {
              background-color: ${Color.ORANGE_30};
            }

            &:hover,
            &:focus {
              &::after {
                background-color: ${Color.ORANGE_20};
              }
            }

            &:active {
              &::after {
                background-color: ${Color.ORANGE_40};
              }
            }
          `
        : css`
            &::before {
              background-color: ${Color.GREEN_10};
            }

            &::after {
              background-color: ${Color.GREEN_30};
            }

            &:hover,
            &:focus {
              &::after {
                background-color: ${Color.GREEN_20};
              }
            }

            &:active {
              &::after {
                background-color: ${Color.GREEN_40};
              }
            }
          `}
  }
`;

const StyledLabel = styled(Typography).attrs({
  as: 'label',
  variant: TypographyVariant.TEXT_1,
})`
  padding-left: 8px;

  cursor: pointer;
`;

function Toggle({ className, label }) {
  const id = useId();
  const [checked, setChecked] = useState(false);
  const onToggleClick = () => setChecked(!checked);

  return (
    <StyledWrapper className={className}>
      <StyledToggle
        id={id}
        role="checkbox"
        aria-checked={checked}
        onClick={onToggleClick}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledWrapper>
  );
}

export { Toggle };
