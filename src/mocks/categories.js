import { useMemo } from 'react';
import categories1 from '../images/categories/1.jpg';
import categories2 from '../images/categories/2.jpg';
import categories3 from '../images/categories/3.jpg';

const useMockCategories = () => {
  const categories = useMemo(
    () => [
      {
        name: 'Прогулочные',
        amount: '189 моделей',
        image: categories1,
        imageAlt: 'Красный прогулочный велик',
      },
      {
        name: 'Трековые',
        amount: '156 моделей',
        image: categories2,
        imageAlt: 'Белый трековый велик',
      },
      {
        name: 'Горные',
        amount: '125 моделей',
        image: categories3,
        imageAlt: 'Серый горный велик',
      },
    ],
    [],
  );

  return categories;
};

export { useMockCategories };
