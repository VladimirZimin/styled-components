import { useTheme } from 'styled-components';
import { MainSection } from '../helpers/section';
import { CardsList } from '../helpers/cards-list';
import { NewsCard } from '../components/NewsCard';
import { useMockNews } from '../mocks/news';

function News({ className }) {
  const { current } = useTheme();
  const news = useMockNews(current);

  return (
    <MainSection className={className} title="Новости">
      <CardsList>
        {news.map((newsItem, index) => (
          <NewsCard key={index} {...newsItem} />
        ))}
      </CardsList>
    </MainSection>
  );
}

export { News };
