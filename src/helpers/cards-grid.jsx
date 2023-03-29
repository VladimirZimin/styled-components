import { Children } from 'react';
import styled from 'styled-components';

const StyledCardsGrid = styled.ul`
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const StyledCardsItem = styled.li`
  display: grid;

  @media (min-width: 768px) {
    &:first-child {
      grid-row: span 2;
    }
  }
`;

function CardsGrid({ className, children }) {
  return (
    <StyledCardsGrid className={className}>
      {Children.map(children, child => (
        <StyledCardsItem>{child}</StyledCardsItem>
      ))}
    </StyledCardsGrid>
  );
}

export { CardsGrid };
