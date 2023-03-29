import { useMemo } from 'react';
import products1 from '../images/products/1.jpg';
import products2 from '../images/products/2.jpg';
import products3 from '../images/products/3.jpg';
import products4 from '../images/products/4.jpg';
import products5 from '../images/products/5.jpg';
import products6 from '../images/products/6.jpg';

const useMockProducts = () => {
  const products = useMemo(
    () => [
      {
        name: 'Велик BMC',
        price: '94 000 грн',
        image: products1,
        imageAlt: 'Серый велик с чёрными ободами',
        hit: true,
        novelty: false,
        discount: true,
        unavailable: false,
      },
      {
        name: 'Велик Mongoose',
        price: '35 000 грн',
        image: products2,
        imageAlt: 'Синий велик с белыми ободами',
        hit: false,
        novelty: false,
        discount: true,
        unavailable: false,
      },
      {
        name: 'Велик Peugeot',
        price: '58 000 грн',
        image: products3,
        imageAlt: 'Белый велик с чёрными ободами',
        hit: true,
        novelty: false,
        discount: false,
        unavailable: false,
      },
      {
        name: 'Велик Trek',
        price: '76 000 грн',
        image: products4,
        imageAlt: 'Белый велик с чёрными ободами',
        hit: false,
        novelty: false,
        discount: false,
        unavailable: true,
      },
      {
        name: 'Велик Triban',
        price: '116 000 грн',
        image: products5,
        imageAlt: 'Серый велик с чёрными ободами',
        hit: true,
        novelty: true,
        discount: false,
        unavailable: false,
      },
      {
        name: 'Велик Norco',
        price: '62 000 грн',
        image: products6,
        imageAlt: 'Коричневый велик с синими ободами',
        hit: false,
        novelty: true,
        discount: false,
        unavailable: true,
      },
    ],
    [],
  );

  return products;
};

export { useMockProducts };
