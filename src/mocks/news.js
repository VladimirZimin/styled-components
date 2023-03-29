import { useMemo } from 'react';
import news1 from '../images/news/1.jpg';
import news2 from '../images/news/2.jpg';
import news3 from '../images/news/3.jpg';

const useMockNews = () => {
  const news = useMemo(
    () => [
      {
        title: 'Велопробег в Москве',
        date: '02.04.2022',
        image: news1,
        imageAlt: 'Велосипедисты едут по дороге',
      },
      {
        title: 'Зимний велик',
        date: '21.01.2022',
        image: news2,
        imageAlt: 'Велик в сугробе на фоне гор',
      },
      {
        title: 'В длинную дорогу',
        date: '17.10.2021',
        image: news3,
        imageAlt: 'Велик в поле на закате',
      },
    ],
    [],
  );

  return news;
};

export { useMockNews };
