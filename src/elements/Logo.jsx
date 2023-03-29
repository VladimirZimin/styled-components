import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';
import logoAdult from '../images/logo-adult.svg';
import logoChild from '../images/logo-child.svg';

const StyledLogo = styled(Link)`
  display: inline-grid;
  width: 128px;
  height: 22px;
`;

function Logo({ className }) {
  const { current } = useTheme();
  const image = current === Theme.ADULT ? logoAdult : logoChild;

  return (
    <StyledLogo className={className} to="/">
      <img src={image} alt="Логотип магазина велосипедов «Велик»" />
    </StyledLogo>
  );
}

export { Logo };
