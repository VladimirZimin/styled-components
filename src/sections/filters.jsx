import styled from 'styled-components';
import { Theme } from '../theme';
import { ContainerMixin } from '../helpers/container';
import { VisuallyHiddenMixin } from '../helpers/visually-hidden';
import { Color } from '../tokens/colors';
import { Radius } from '../tokens/radiuses';
import { IconName } from '../tokens/icons';
import { Icon } from '../elements/Icon';
import { StyledButton } from '../elements/StyledButton';
import { Toggle } from '../elements/Toggle';
import { Select } from '../elements/Select';
import { Filter } from '../elements/Filter';

const StyledFilters = styled.section`
  ${ContainerMixin}

  display: grid;
  gap: 8px;
`;

const StyledTitle = styled.h2`
  ${VisuallyHiddenMixin}
`;

const StyledFiltersButton = styled(StyledButton)`
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledFiltersIcon = styled(Icon).attrs({ name: IconName.FILTERS })``;

const StyledSortAndTogglesWrapper = styled.div`
  display: grid;
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: min-content min-content;
    justify-content: space-between;
    gap: 16px;
  }
`;

const StyledSort = styled(Select)`
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`;

const StyledTogglesWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 16px;
`;

const StyledFiltersList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 16px;
    border-radius: ${Radius[4]};
    padding: 4px 8px 6px;
    background-color: ${({ theme }) =>
      theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30};
  }
`;

const StyledFiltersItem = styled.li`
  display: grid;
`;

function Filters({ className }) {
  return (
    <StyledFilters className={className}>
      <StyledTitle>Фильтры</StyledTitle>
      <StyledFiltersButton>
        <StyledFiltersIcon />
        Фильтры
      </StyledFiltersButton>
      <StyledSortAndTogglesWrapper>
        <StyledSort label="Сортировка">
          <option>Сначала дешёвые</option>
          <option>Сначала дорогие</option>
          <option>Сначала старые</option>
          <option>Сначала новые</option>
        </StyledSort>
        <StyledTogglesWrapper>
          <Toggle label="В наличии" />
          <Toggle label="Со скидкой" />
        </StyledTogglesWrapper>
      </StyledSortAndTogglesWrapper>
      <StyledFiltersList>
        <StyledFiltersItem>
          <Filter label="Бренд">
            <option>Бренд</option>
            <option>BMC</option>
            <option>Mongoose</option>
            <option>Peugeot</option>
            <option>Trek</option>
            <option>Triban</option>
            <option>Norco</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label="Материал рамы">
            <option>Материал рамы</option>
            <option>Стальные</option>
            <option>Алюминиевые</option>
            <option>Карбоновые</option>
            <option>Титановые</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label="Радиус колёс">
            <option>Радиус колёс</option>
            <option>20 дюймов</option>
            <option>24 дюйма</option>
            <option>26 дюймов</option>
            <option>27 дюймов</option>
            <option>28 дюймов</option>
            <option>29 дюймов</option>
          </Filter>
        </StyledFiltersItem>
        <StyledFiltersItem>
          <Filter label="Тормоза">
            <option>Тормоза</option>
            <option>Ободные</option>
            <option>Дисковые</option>
          </Filter>
        </StyledFiltersItem>
      </StyledFiltersList>
    </StyledFilters>
  );
}

export { Filters };
