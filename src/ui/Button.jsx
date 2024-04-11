import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  width: ${props => props.width?props.width: '16rem'};
  display: flex;
  height: ${props => props.height?props.height:'5rem'};
  margin: 0 auto;
  background-color: ${props => props.$backgroundcolor ? props.$backgroundcolor : '#0d7550'};
  border:none;
  border-radius: 5px;
  color: ${props => props.color ? props.color : '#ffffff'};
  font-size: ${props => props.fontsize ? props.fontsize : '1.8rem'}; 
  justify-content: center;
  align-items: center;
`;
