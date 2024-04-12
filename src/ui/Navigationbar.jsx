import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import { Link} from 'react-router-dom';
import Logo from '../images/logo.png';
import styled from 'styled-components';
import { Ul } from './Ul';
import { Li } from './Li';
import { NavLinks } from './NavLinks';

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
background-color: transparent;
padding: 0.8rem 1.6rem;
margin-bottom: 9rem;
@media (max-width:970px){
  margin-bottom:5rem ;
}
`;
const ImgLink = styled(Link)`
background-color: transparent !important;
width:50%;
`;
const SideHeader = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
`;
const SvgButton = styled.button`
   width: 5rem;
   height: 3rem;
   font-size: 2rem;
   background-color: transparent;
   align-items: center;
   justify-content: center;
   border: none;
`;
function Navigationbar() {
  return (
   <Navbar >
    <ImgLink to='/dashboard' >
      <img src={Logo} alt="company-logo" />
    </ImgLink>
    <SideHeader>
      <Ul>
        <Li>
          <NavLinks to='tel:+01 1234567890'>Call: +01 1234567890</NavLinks>
        </Li>
        <Li>
          <NavLinks to='mailto: demo@gmail.com'>demo@gmail.com</NavLinks>
        </Li>
      </Ul>
    </SideHeader>
<SvgButton>
      <HiBars3 />
</SvgButton>
      
   </Navbar>
    
  );
}

export default Navigationbar