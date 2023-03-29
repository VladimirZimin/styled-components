import styled from 'styled-components';

export const ColorsPalit = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: ${props => props.color};
`;
