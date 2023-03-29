import { useTheme } from 'styled-components';
import { MainSection } from '../helpers/section';
import { CardsList } from '../helpers/cards-list';
import { CategoryCard } from '../components/CategoryCard';
import { useMockCategories } from '../mocks/categories';

function Categories({ className }) {
  const { current } = useTheme();
  const categories = useMockCategories(current);

  return (
    <MainSection className={className} title="Категории великов">
      <CardsList>
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </CardsList>
    </MainSection>
  );
}

export { Categories };
