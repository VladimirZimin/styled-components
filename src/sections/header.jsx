import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import { Container } from '../helpers/container';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Logo } from '../elements/Logo';
import { Icon } from '../elements/Icon';
import { IconButton, IconLink } from '../elements/IconButton';
import { TextButtonSize, TextLink } from '../elements/TextButton';
import { StyleButtonColor, StyledButton } from '../elements/StyledButton';
import { Input } from '../elements/Input';

const StyledNavigation = styled(Container).attrs({
  as: 'nav',
})`
  padding-top: 8px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    display: grid;
    gap: 8px;
  }
`;

const StyledLogoAndButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: min-content min-content;
    border-bottom: 1px solid ${Color.GRAY_20};
    padding-bottom: 8px;
  }
`;

const StyledThemeButton = styled(StyledButton).attrs({
  color: StyleButtonColor.GREEN,
})``;

const StyledMenuButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledLinksAndSearchWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr min-content min-content;
    align-items: center;
    gap: 32px;
  }
`;

const StyledTextLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const StyledTextLinksItem = styled.li`
  display: grid;
`;

const StyledTextLink = styled(TextLink).attrs({
  size: TextButtonSize.LARGE,
})``;

const StyledIconLinksList = styled.ul`
  display: flex;
  gap: 8px;
`;

const StyledIconLinksItem = styled.li`
  display: grid;
`;

const StyledSearch = styled.form`
  position: relative;
`;

const StyledSearchInput = styled(Input)`
  padding-right: 30px;
`;

const StyledSearchButton = styled(IconButton)`
  position: absolute;
  top: 4px;
  right: 4px;
`;

const StyledMenuIcon = styled(Icon).attrs({ name: IconName.MENU })``;
const StyledUserIcon = styled(Icon).attrs({ name: IconName.USER })``;
const StyledHeartIcon = styled(Icon).attrs({ name: IconName.HEART })``;
const StyledBarChartIcon = styled(Icon).attrs({ name: IconName.BAR_CHART })``;
const StyledShoppingCartIcon = styled(Icon).attrs({
  name: IconName.SHOPPING_CART,
})``;
const StyledSearchIcon = styled(Icon).attrs({ name: IconName.SEARCH })``;

function Header({ className }) {
  const { current, toggleTheme } = useTheme();
  const themeButtonIcon =
    current === Theme.ADULT ? IconName.BIKE_CHILD : IconName.BIKE_ADULT;
  const themeButtonText = current === Theme.ADULT ? 'Детям' : 'Взрослым';

  return (
    <header className={className}>
      <StyledNavigation>
        <StyledLogoAndButtonsWrapper>
          <Logo />
          <StyledThemeButton onClick={toggleTheme}>
            <Icon name={themeButtonIcon} />
            {themeButtonText}
          </StyledThemeButton>
          <StyledMenuButton aria-label="Меню">
            <StyledMenuIcon />
          </StyledMenuButton>
        </StyledLogoAndButtonsWrapper>
        <StyledLinksAndSearchWrapper>
          <StyledTextLinksList>
            <StyledTextLinksItem>
              <StyledTextLink to="/catalog">Велики</StyledTextLink>
            </StyledTextLinksItem>
            <StyledTextLinksItem>
              <StyledTextLink to="#">Новости</StyledTextLink>
            </StyledTextLinksItem>
            <StyledTextLinksItem>
              <StyledTextLink to="#">Услуги</StyledTextLink>
            </StyledTextLinksItem>
          </StyledTextLinksList>
          <StyledIconLinksList>
            <StyledIconLinksItem>
              <IconLink aria-label="Профиль" to="#">
                <StyledUserIcon />
              </IconLink>
            </StyledIconLinksItem>
            <StyledIconLinksItem>
              <IconLink aria-label="Избранные товары" to="#">
                <StyledHeartIcon />
              </IconLink>
            </StyledIconLinksItem>
            <StyledIconLinksItem>
              <IconLink aria-label="Сравнение товаров" to="#">
                <StyledBarChartIcon />
              </IconLink>
            </StyledIconLinksItem>
            <StyledIconLinksItem>
              <IconLink aria-label="Корзина" to="#">
                <StyledShoppingCartIcon />
              </IconLink>
            </StyledIconLinksItem>
          </StyledIconLinksList>
          <StyledSearch>
            <StyledSearchInput
              aria-label="Поисковой запрос"
              placeholder="Найти велик..."
            />
            <StyledSearchButton type="submit" aria-label="Поиск">
              <StyledSearchIcon />
            </StyledSearchButton>
          </StyledSearch>
        </StyledLinksAndSearchWrapper>
      </StyledNavigation>
    </header>
  );
}

export { Header };
