import styled, { useTheme } from 'styled-components';
import { Container } from '../helpers/container';
import { CardsGrid } from '../helpers/cards-grid';
import { VisuallyHiddenMixin } from '../helpers/visually-hidden';
import { Banner } from '../components/Banner';
import { useMockBanners } from '../mocks/banners';

const StyledBanners = styled(Container).attrs({
  as: 'section',
})``;

const StyledTitle = styled.h2`
  ${VisuallyHiddenMixin}
`;

function Banners({ className }) {
  const { current } = useTheme();
  const banners = useMockBanners(current);

  return (
    <StyledBanners className={className}>
      <StyledTitle>Рекламные предложения</StyledTitle>
      <CardsGrid>
        {banners.map((banner, index) => (
          <Banner key={index} {...banner} />
        ))}
      </CardsGrid>
    </StyledBanners>
  );
}

export { Banners };
