import { GlobalResets } from './tokens/resets';
import { Button, ButtonSize } from './elements/Button';
import Section from './components/Section';
import {
  StyledButton,
  StyledButtonSize,
  StyleButtonColor,
  StyledButtonVariant,
} from './elements/StyledButton';
import { GlobalFonts, Font } from './tokens/fonts';
import { GlobalColors, Color } from './tokens/colors';
import { GlobalGradients } from './tokens/gradients';
import { GlobalShadows, Shadow } from './tokens/shadow';
import { SpriteWithIcons, IconName } from './tokens/icons';
import { GlobalRadiuses } from './tokens/radiuses';
import { Text } from './elements/Text';
import { ColorsPalit } from './elements/ColorsPalit';
import { CardShadow } from './elements/Shadow';
import { Icon } from './elements/Icon';
import { Typography, TypographyVariant } from './elements/Typography';
import { IconButton } from './elements/IconButton';
import { TextButton } from './elements/TextButton';
import { Toggle } from './elements/Toggle';
import { ButtonWrap } from './components/ButtonWrap';
import { Checkbox } from './elements/Checkbox';
import { Filter } from './elements/Filter';
import { Input } from './elements/Input';
import { Select } from './elements/Select';
import { CategoryCard } from './components/CategoryCard';
import { NewsCard } from './components/NewsCard';
import { Banner, BannerSize } from './components/Banner';
import banners from './images/banners/1.jpg';
import categories from './images/categories/1.jpg';
import news from './images/news/1.jpg';
import products from './images/products/1.jpg';
import { ProductCard } from './components/ProductCard';
import { CardWrap } from './components/CardWrap';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { DefaultLayout } from './layouts/default';
import { IndexPage } from './pages';
import { CatalogPage } from './pages/catalog';
import { Theme } from './theme';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [theme, setTheme] = useState(Theme.ADULT);
  const toggleTheme = () =>
    setTheme(theme === Theme.ADULT ? Theme.CHILD : Theme.ADULT);

  return (
    <ThemeProvider theme={{ current: theme, toggleTheme }}>
      <GlobalFonts />
      <GlobalColors />
      <GlobalGradients />
      <GlobalShadows />
      <GlobalRadiuses />
      <GlobalResets />
      <SpriteWithIcons />

      <Section title={'Button'}>
        <ButtonWrap>
          <Button size={ButtonSize.MEDIUM}>button</Button>
          <Button size={ButtonSize.LARGE}>button</Button>

          <StyledButton
            color={StyleButtonColor.ORANGE}
            size={StyledButtonSize.MEDIUM}
            variant={StyledButtonVariant.FILLED}
          >
            button
          </StyledButton>

          <StyledButton
            color={StyleButtonColor.ORANGE}
            size={StyledButtonSize.MEDIUM}
            variant={StyledButtonVariant.OUTLINED}
          >
            button
          </StyledButton>

          <StyledButton
            color={StyleButtonColor.ORANGE}
            size={StyledButtonSize.LARGE}
            variant={StyledButtonVariant.FILLED}
          >
            button
          </StyledButton>

          <StyledButton
            color={StyleButtonColor.ORANGE}
            size={StyledButtonSize.LARGE}
            variant={StyledButtonVariant.OUTLINED}
          >
            button
          </StyledButton>

          <StyledButton
            color={StyleButtonColor.GREEN}
            size={StyledButtonSize.MEDIUM}
            variant={StyledButtonVariant.FILLED}
          >
            button
          </StyledButton>
          <StyledButton
            color={StyleButtonColor.GREEN}
            size={StyledButtonSize.LARGE}
            variant={StyledButtonVariant.FILLED}
          >
            button
          </StyledButton>

          <StyledButton
            color={StyleButtonColor.GREEN}
            size={StyledButtonSize.MEDIUM}
            variant={StyledButtonVariant.OUTLINED}
          >
            button
          </StyledButton>
          <StyledButton
            color={StyleButtonColor.GREEN}
            size={StyledButtonSize.LARGE}
            variant={StyledButtonVariant.OUTLINED}
          >
            button
          </StyledButton>

          <StyledButton
            color={StyleButtonColor.GREEN}
            size={StyledButtonSize.MEDIUM}
            variant={StyledButtonVariant.FILLED}
          >
            <Icon name={IconName.BIKE_ADULT} />
            button
          </StyledButton>

          <Button size={ButtonSize.MEDIUM} disabled>
            button
          </Button>
          <Button size={ButtonSize.LARGE} disabled>
            button
          </Button>
          <StyledButton
            color={StyleButtonColor.ORANGE}
            size={StyledButtonSize.MEDIUM}
            variant={StyledButtonVariant.FILLED}
            disabled
          >
            button
          </StyledButton>
          <StyledButton
            color={StyleButtonColor.ORANGE}
            size={StyledButtonSize.LARGE}
            variant={StyledButtonVariant.FILLED}
            disabled
          >
            button
          </StyledButton>

          <StyledButton
            color={StyleButtonColor.ORANGE}
            size={StyledButtonSize.MEDIUM}
            variant={StyledButtonVariant.OUTLINED}
            disabled
          >
            button
          </StyledButton>
          <StyledButton
            color={StyleButtonColor.ORANGE}
            size={StyledButtonSize.LARGE}
            variant={StyledButtonVariant.OUTLINED}
            disabled
          >
            button
          </StyledButton>

          <IconButton>
            <Icon name={IconName.MENU} />
          </IconButton>

          <TextButton color={Color.BLUE_30}>Text button</TextButton>

          <Toggle label="Toggle" />
          <Checkbox label="Checkbox" />
        </ButtonWrap>
      </Section>

      <Section title={'Fonts'}>
        <Text font={Font.COMMISSIONER} weight={400}>
          commissioner 400
        </Text>
        <Text font={Font.COMMISSIONER} weight={600}>
          commissioner 600
        </Text>
        <Text font={Font.DELA_GOTHIC_ONE} weight={400}>
          dela-gothic-one 400
        </Text>
      </Section>

      <Section title={'Colors'}>
        <ColorsPalit color={Color.ORANGE_10}></ColorsPalit>
        <ColorsPalit color={Color.ORANGE_20}></ColorsPalit>
        <ColorsPalit color={Color.ORANGE_30}></ColorsPalit>
        <ColorsPalit color={Color.ORANGE_40}></ColorsPalit>

        <ColorsPalit color={Color.GREEN_10}></ColorsPalit>
        <ColorsPalit color={Color.GREEN_20}></ColorsPalit>
        <ColorsPalit color={Color.GREEN_30}></ColorsPalit>
        <ColorsPalit color={Color.GREEN_40}></ColorsPalit>

        <ColorsPalit color={Color.GRAY_10}></ColorsPalit>
        <ColorsPalit color={Color.GRAY_20}></ColorsPalit>
        <ColorsPalit color={Color.GRAY_30}></ColorsPalit>
        <ColorsPalit color={Color.GRAY_40}></ColorsPalit>
        <ColorsPalit color={Color.GRAY_50}></ColorsPalit>
        <ColorsPalit color={Color.GRAY_60}></ColorsPalit>
        <ColorsPalit color={Color.GRAY_70}></ColorsPalit>

        <ColorsPalit color={Color.BLUE_10}></ColorsPalit>
        <ColorsPalit color={Color.BLUE_20}></ColorsPalit>
        <ColorsPalit color={Color.BLUE_30}></ColorsPalit>
      </Section>

      <Section title={'Shadow'}>
        <CardShadow shadow={Shadow.CARD_DEFAULT_CHILD}></CardShadow>
        <CardShadow shadow={Shadow.CARD_HOVER_OR_FOCUS_CHILD}></CardShadow>
        <CardShadow shadow={Shadow.CARD_HOVER_OR_FOCUS_ADULT}></CardShadow>
        <CardShadow shadow={Shadow.HEADER_LIGHT}></CardShadow>
        <CardShadow shadow={Shadow.CARD_DEFAULT_LIGHT}></CardShadow>
        <CardShadow shadow={Shadow.CARD_HOVER_OR_FOCUS}></CardShadow>
      </Section>

      <Section title={'Icons'}>
        <Icon name={IconName.BIKE_ADULT} />
        <Icon name={IconName.BIKE_CHILD} color={Color.GREEN_30} />
        <Icon name={IconName.ARROW_RIGHT} />
        <Icon name={IconName.BAR_CHART_SMALL} />
        <Icon name={IconName.BAR_CHART} color={Color.BLUE_30} />
        <Icon name={IconName.CHEVRON_DOWN} />
        <Icon name={IconName.FILTERS} color={Color.GRAY_10} />
        <Icon name={IconName.HEART_SMALL} />
        <Icon name={IconName.HEART} color={Color.GREEN_30} />
        <Icon name={IconName.MENU} />
        <Icon name={IconName.SEARCH} color={Color.GRAY_10} />
        <Icon name={IconName.SHOPPING_CART} />
        <Icon name={IconName.TELEGRAM} color={Color.BLUE_30} />
        <Icon name={IconName.USER} />
        <Icon name={IconName.VK} />
        <Icon name={IconName.YOUTUBE} />
      </Section>

      <Section title={'Typography'}>
        <Typography variant={TypographyVariant.TEXT_1} color={Color.BLUE_30}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Typography variant={TypographyVariant.TEXT_2} color={Color.BLUE_30}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Typography variant={TypographyVariant.TEXT_3} color={Color.BLUE_30}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Typography variant={TypographyVariant.TITLE_4} color={Color.BLUE_30}>
          Lorem ipsum
        </Typography>
        <Typography variant={TypographyVariant.TITLE_3} color={Color.BLUE_30}>
          Lorem ipsum
        </Typography>
        <Typography variant={TypographyVariant.TITLE_2} color={Color.BLUE_30}>
          Lorem ipsum
        </Typography>
        <Typography variant={TypographyVariant.TITLE_1} color={Color.BLUE_30}>
          Lorem ipsum
        </Typography>
      </Section>

      <Section title={'Input, Select, Filter'}>
        <Input placeholder="input" />
        <Select label={'Категория велтков'}>
          <option>Прогулочные</option>
          <option>Трековые</option>
          <option>Горные</option>
        </Select>
        <Filter label={'Категория велтков'}>
          <option>Прогулочные</option>
          <option>Трековые</option>
          <option>Горные</option>
        </Filter>
      </Section>

      <Section title={'Card'}>
        <CardWrap>
          <CategoryCard
            name="Прогулочные"
            amount="157 моделей"
            image={categories}
            imageAlt="Красный прогулочный велик"
          />

          <NewsCard
            title="Велопробег в Киев"
            date="27/03/2023"
            image={news}
            imageAlt="Велосипеды в пасмурный день"
          />

          <Banner
            title="Трековые велики"
            image={banners}
            imageAlt="Чёрный трековый велик на фоне серой стены"
          />
          <Banner
            size={BannerSize.LARGE}
            title="Трековые велики"
            discount="50%"
            image={banners}
            imageAlt="Чёрный трековый велик на фоне серой стены"
          />
          <ProductCard
            name="Оправа Seiko"
            price="15 000 грн"
            image={products}
            imageAlt="Круглая чёрная оправа с серебристыми и золотистыми элементами"
            hit
            novelty
          />
        </CardWrap>
      </Section>

      <Section title={'Сайт по продаже волосипедов "Велик"'}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<IndexPage />} />
            <Route path="catalog" element={<CatalogPage />} />
          </Route>
        </Routes>
      </Section>
    </ThemeProvider>
  );
}
