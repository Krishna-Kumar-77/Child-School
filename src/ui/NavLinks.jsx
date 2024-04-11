import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinks = styled(Link)`
display: ${props=> props.$display?props.$display:'block'};
gap: ${props=> props.$gap?props.$gap:'2rem'};
text-decoration: none;
color:black;
`;
