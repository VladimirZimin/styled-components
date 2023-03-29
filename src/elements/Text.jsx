import styled from 'styled-components';

export const Text = styled.p`
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};

  font-size: 28px;
  line-height: 30px;
`;
