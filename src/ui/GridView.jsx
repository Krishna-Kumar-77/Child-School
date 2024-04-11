import styled from 'styled-components';

export const GridView = styled.div`
  width: ${props=> props.width? props.width:  '90%'};
  display: grid;
  grid-template-columns:${props=> props.$repeat? props.$repeat: 'repeat(3, 1fr)'};
  grid-gap: ${props=> props.$gridGap? props.$gridGap: '1.5rem'}; 
  margin:${props=> props.$margin? props.$margin: '0'};
`;
