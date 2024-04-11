import styled from 'styled-components';

export const Imag = styled.img`
  width: ${props=> props.width? props.width:"20rem"};
  border-radius: ${props=> props.$borderRadius? props.$borderRadius:'2rem'};
  
`;
