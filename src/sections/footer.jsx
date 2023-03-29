import styled from 'styled-components';
import { Theme } from '../theme';
import { Container } from '../helpers/container';
import { AccentBlockMixin } from '../helpers/accent-block';
import { Color } from '../tokens/colors';
import { IconName } from '../tokens/icons';
import { Logo } from '../elements/Logo';
import { Icon } from '../elements/Icon';
import { IconButton } from '../elements/IconButton';
import { TextButton } from '../elements/TextButton';
import { TypographyVariant, Typography } from '../elements/Typography';

const StyledFooter = styled.footer`
  background-color: ${Color.GRAY_60};
`;

const StyledContentWrapper = styled(Container)`
  display: grid;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    grid-template-columns: min-content 1fr;
    gap: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

const StyledContactsWrapper = styled.address`
  ${AccentBlockMixin}

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 16px;
  font-style: normal;
`;

const StyledContact = styled.div`
  display: grid;
  justify-items: start;
  gap: 4px;
`;

const StyledContactName = styled(Typography).attrs(({ theme }) => ({
  variant: TypographyVariant.TITLE_4,
  color: theme.current === Theme.ADULT ? Color.ORANGE_40 : Color.GREEN_40,
}))``;

const StyledContactLink = styled(TextButton).attrs({
  as: 'a',
})`
  color: ${Color.WHITE};
`;

const StyledSocialLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledSocialLinksItem = styled.li`
  display: grid;
`;

const StyledSocialLink = styled(IconButton).attrs({
  as: 'a',
})`
  color: ${Color.WHITE};
`;

const StyledCopyrights = styled(Typography).attrs({
  variant: TypographyVariant.TEXT_3,
  color: Color.GRAY_30,
})`
  padding-top: 2px;
  padding-bottom: 4px;
  text-align: center;
  background-color: ${Color.GRAY_70};
`;

const StyledTelegramIcon = styled(Icon).attrs({ name: IconName.TELEGRAM })``;
const StyledYouTubeIcon = styled(Icon).attrs({ name: IconName.YOUTUBE })``;
const StyledVKIcon = styled(Icon).attrs({ name: IconName.VK })``;

function Footer({ className }) {
  return (
    <StyledFooter className={className}>
      <StyledContentWrapper>
        <Logo />
        <StyledContactsWrapper>
          <StyledContact>
            <StyledContactName>Пиши</StyledContactName>
            <StyledContactLink href="mailto:hello@velik.com">
              hello@velik.com
            </StyledContactLink>
          </StyledContact>
          <StyledContact>
            <StyledContactName>Звони</StyledContactName>
            <StyledContactLink href="tel:+380637054771">
              +3 8063 705 47 71
            </StyledContactLink>
          </StyledContact>
          <StyledContact>
            <StyledContactName>Заходи</StyledContactName>
            <StyledContactLink
              href="https://goo.gl/maps/aDbDMSkMKkzaTrDj9"
              target="_blank"
            >
              вулиця Комбайнерів, 3А, Київ, 03058
            </StyledContactLink>
          </StyledContact>
          <StyledContact>
            <StyledContactName>Следи</StyledContactName>
            <StyledSocialLinksList>
              <StyledSocialLinksItem>
                <StyledSocialLink
                  aria-label="Магазин велосипедов «Велик» в Telegram"
                  href="tg://resolve?domain="
                  target="_blank"
                >
                  <StyledTelegramIcon />
                </StyledSocialLink>
              </StyledSocialLinksItem>
              <StyledSocialLinksItem>
                <StyledSocialLink
                  aria-label="Магазин велосипедов «Велик» на YouTube"
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <StyledYouTubeIcon />
                </StyledSocialLink>
              </StyledSocialLinksItem>
              <StyledSocialLinksItem>
                <StyledSocialLink
                  aria-label="Магазин велосипедов «Велик» во ВКонтакте"
                  href="https://vk.com/"
                  target="_blank"
                >
                  <StyledVKIcon />
                </StyledSocialLink>
              </StyledSocialLinksItem>
            </StyledSocialLinksList>
          </StyledContact>
        </StyledContactsWrapper>
      </StyledContentWrapper>
      <StyledCopyrights>© ООО «Володимир Зiмiн», 2023 р.</StyledCopyrights>
    </StyledFooter>
  );
}

export { Footer };
