import { useId, useState } from 'react';
import styled from 'styled-components';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { TypographyVariant, Typography } from './Typography';

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledCheckbox = styled(IconButton)`
  box-shadow: inset 0 0 0 1px ${Color.GRAY_20};

  &:hover,
  &:focus,
  &:active {
    box-shadow: inset 0 0 0 1px currentColor;
  }

  svg {
    opacity: 0;
  }

  &[aria-checked='true'] {
    svg {
      opacity: 1;
    }
  }
`;

const StyledCheck = styled(Icon).attrs({ name: IconName.CHECK })``;

const StyledLabel = styled(Typography).attrs({
  as: 'label',
  variant: TypographyVariant.TEXT_1,
})`
  padding-left: 8px;

  cursor: pointer;
`;

function Checkbox({ className, label }) {
  const id = useId();
  const [checked, setChecked] = useState(false);
  const onCheckboxClick = () => setChecked(!checked);

  return (
    <StyledWrapper className={className}>
      <StyledCheckbox
        id={id}
        role="checkbox"
        aria-checked={checked}
        onClick={onCheckboxClick}
      >
        <StyledCheck />
      </StyledCheckbox>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledWrapper>
  );
}

export { Checkbox };
