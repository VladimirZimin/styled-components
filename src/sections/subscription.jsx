import styled from 'styled-components';
import { Container } from '../helpers/container';
import { AccentBlockMixin } from '../helpers/accent-block';
import { Color } from '../tokens/colors';
import { StyledButtonSize, StyledButton } from '../elements/StyledButton';
import { Input } from '../elements/Input';
import { TypographyVariant, Typography } from '../elements/Typography';

const StyledSubscription = styled.section`
  ${AccentBlockMixin}

  display: grid;
  gap: 16px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h2',
  variant: TypographyVariant.TITLE_2,
  color: Color.WHITE,
})``;

const StyledForm = styled.form`
  display: grid;
  justify-items: start;
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: min-content min-content;
  }
`;

const StyledEmailInput = styled(Input)`
  border-color: ${Color.WHITE};
  color: ${Color.WHITE};
`;

const StyledSubmitButton = styled(StyledButton).attrs({
  size: StyledButtonSize.LARGE,
})``;

function Subscription({ className }) {
  return (
    <Container className={className}>
      <StyledSubscription>
        <StyledTitle>Подпишись на рассылку</StyledTitle>
        <StyledForm>
          <StyledEmailInput
            aria-label="Электропочта"
            placeholder="Электропочта"
          />
          <StyledSubmitButton type="submit">Подписаться</StyledSubmitButton>
        </StyledForm>
      </StyledSubscription>
    </Container>
  );
}

export { Subscription };
