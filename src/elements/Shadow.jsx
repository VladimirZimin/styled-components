import styled from 'styled-components';

export const CardShadow = styled.div`
  display: inline-block;
  margin-left: 10px;
  width: 100px;
  height: 100px;

  box-shadow: ${props => props.shadow};
`;
