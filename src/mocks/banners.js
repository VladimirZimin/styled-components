import { useMemo } from 'react';
import { BannerSize } from '../components/Banner';
import banners1 from '../images/banners/1.jpg';
import banners2 from '../images/banners/2.jpg';
import banners3 from '../images/banners/3.jpg';

const useMockBanners = () => {
  const banners = useMemo(
    () => [
      {
        size: BannerSize.LARGE,
        title: 'Трековые велики',
        discount: '50%',
        image: banners1,
        imageAlt: 'Чёрный трековый велик на фоне серой стены',
      },
      {
        size: BannerSize.MEDIUM,
        title: 'Цветные покрышки',
        image: banners2,
        imageAlt: 'Красная покрышка на фоне голубой стены',
      },
      {
        size: BannerSize.MEDIUM,
        title: 'Стильные велики',
        image: banners3,
        imageAlt: 'Голубой прогулочный велик на фоне красной стены',
      },
    ],
    [],
  );

  return banners;
};

export { useMockBanners };
