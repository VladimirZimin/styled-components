import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import { ContainerMixin } from '../helpers/container';
import { TypographyVariant, Typography } from '../elements/Typography';
import { Filters } from '../sections/filters';
import { Products } from '../sections/products';

const StyledCatalogPage = styled.main`
  padding-top: 20px;
  padding-bottom: 60px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h1',
  variant: TypographyVariant.TITLE_1,
})`
  ${ContainerMixin}

  margin-bottom: 40px;
`;

const StyledFilters = styled(Filters)`
  margin-bottom: 40px;
`;

function CatalogPage() {
  const { current } = useTheme();
  const title =
    current === Theme.ADULT ? 'Велики для взрослых' : 'Велики для детей';
  return (
    <StyledCatalogPage>
      <StyledTitle>{title}</StyledTitle>
      <StyledFilters />
      <Products />
    </StyledCatalogPage>
  );
}

export { CatalogPage };
