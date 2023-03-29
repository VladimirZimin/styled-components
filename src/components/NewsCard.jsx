import styled from 'styled-components';
import { Theme } from '../theme';
import { StyledBaseCard } from '../helpers/base-card';
import { Color } from '../tokens/colors';
import { TypographyVariant, Typography } from '../elements/Typography';

const StyledImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: end;
  gap: 8px;
  padding: 4px 8px 8px;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h3',
  variant: TypographyVariant.TITLE_4,
})``;

const StyledDate = styled(Typography).attrs(({ theme }) => ({
  variant: TypographyVariant.TEXT_2,
  color: theme.current === Theme.ADULT ? Color.ORANGE_30 : Color.GREEN_30,
}))``;

function NewsCard({ className, title, date, image, imageAlt }) {
  return (
    <StyledBaseCard className={className} to="#">
      <article>
        <StyledImage src={image} alt={imageAlt} />
        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledContent>
      </article>
    </StyledBaseCard>
  );
}

export { NewsCard };
