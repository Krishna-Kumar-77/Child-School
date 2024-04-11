import React from 'react';
import Img from '../images/img-1.png'
import styled from 'styled-components';
//import Navigationbar from './Navigationbar';
import { NavLink } from 'react-router-dom';
// import images from '../images/image.js';


const Head= styled.header`
position: relative;
display: block;
width:100%;
margin-bottom: 10rem ;
/* min-height: 100vh; */ 

/* 
if we give height to any component then it goes to up and down accourding to it's property , min-height will be set to component height, below that  height component will not shrink.
min-height specifies the minimum height that an element should have, preventing it from becoming smaller than the specified value. On the other hand, max-height sets the maximum height that an element can grow to, preventing it from exceeding the specified value.

*/
`;
const Contents = styled.div`
/* width: 60rem; */
position: relative;
display: flex;
margin: 0 auto;
flex-wrap: wrap;
/* justify-content: center; */
padding: 0 9rem;
`;
const Content= styled.div`
 width: 50%;
 padding: 0 1.5rem;
`;

const NavLinks = styled(NavLink)`
    width: 35%;
    float: left;
    font-size: 1.8rem;
    color: #0d7550;
    border: 2px solid #0d7550;
    text-align: center;
    padding: 0.8rem 0;
    border-radius: 3px;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 1rem;
`;
const Img1= styled.img`
width:100%;
/* top: 0;
float: right; */
`;
const H1 =styled.h1`
color: #000000;
font-size: 4.6rem;
font-weight: bold;
line-height: normal;
margin-bottom: 3rem;
`;

const H4 = styled.h4`
color: #151515;
  font-size: 3.2rem;
font-weight: normal;
line-height: normal;
margin-bottom: 1.5rem;
padding-top: 5rem;

`;
const P = styled.p`
text-align: justify;
color: #444444;
font-size: 1.8rem;
font-weight: 300;
margin-left: 0rem;
line-height: 2.4rem;
`;
const ControlledButton = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  font-size: 3.2rem;
  opacity: 0.5;
  
 
`
const CircularBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`
const CircularButton = styled.div`
width: 2rem;
height: 2rem;
background-color: transparent !important;
border-radius: 1rem;
border: 3px solid #0d7550;
`
const LinkContainer = styled.div`
  width: 100%;
  margin-top: 8.5rem;
`;
const NextButton = styled(NavLink)` 
  color: #09653e !important;
`
const PrevButton = styled(NavLink)`

color: #09653e !important;
  
`
const EditedContent = styled(Content)`
  padding: 0;
`;

function Header() {
  return (
    <Head>
    {/* <Navigationbar/> */}
    <Contents>
        <Content>
         <H4>We Are Making Every</H4>
         <H1>Child`s World Better</H1>
         <P>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br />
            The point of using Lorem
        </P>
        <LinkContainer>
            <NavLinks to='/AboutUs'>About Us</NavLinks>
            <NavLinks to='/ContactUs'>Contact Now</NavLinks>
        </LinkContainer>
        </Content>
        <EditedContent>
           < Img1 src= {Img} alt='img-1' />
        </EditedContent>
    </Contents>
    <ControlledButton>
      <PrevButton>02</PrevButton>
      <NextButton>01</NextButton>
    </ControlledButton>
      <CircularBtnContainer>
        <CircularButton/>
        <CircularButton/>
        <CircularButton/>
        <CircularButton/>
      </CircularBtnContainer>
    </Head>
  )
}

export default Header