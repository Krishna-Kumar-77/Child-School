import styled from 'styled-components';

export const ImgDiv = styled.div`
width: ${props=> props.width? props.width:'100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin: ${props=> props.$margin? props.$margin:''};
`;
