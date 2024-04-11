import styled from 'styled-components';



export const CardComponent = styled.div`
  width: ${props=> props.width? props.width: '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${props=> props.$borderRadius? props.$borderRadius:'2rem'};
  background-color: ${props=> props.$backgroundColor? props.$backgroundColor:'#f0f0f0'};
  padding: ${props=> props.$padding? props.$padding: '2rem'};
  margin:${props=> props.$margin? props.$margin: '0 0 3rem 0'}  ; 
  overflow:${props=> props.$overflow? props.$overflow: ''};
`;
