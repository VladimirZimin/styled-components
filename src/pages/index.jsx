import styled from 'styled-components';
import { VisuallyHiddenMixin } from '../helpers/visually-hidden';
import { Banners } from '../sections/banners';
import { Categories } from '../sections/categories';
import { News } from '../sections/news';
import { Subscription } from '../sections/subscription';

const StyledIndexPage = styled.main`
  padding-top: 20px;
  padding-bottom: 60px;
`;

const StyledTitle = styled.h1`
  ${VisuallyHiddenMixin}
`;

const StyledBanners = styled(Banners)`
  margin-bottom: 40px;
`;

const StyledCategories = styled(Categories)`
  margin-bottom: 40px;
`;

const StyledNews = styled(News)`
  margin-bottom: 40px;
`;

function IndexPage() {
  return (
    <StyledIndexPage>
      <StyledTitle>Магазин велосипедов «Велик»</StyledTitle>
      <StyledBanners />
      <StyledCategories />
      <StyledNews />
      <Subscription />
    </StyledIndexPage>
  );
}

export { IndexPage };
