import React from 'react';
import Img from '../images/img-1.png'
import styled from 'styled-components';
//import Navigationbar from './Navigationbar';
import { NavLink } from 'react-router-dom';
import Heading from './Heading';
import {P} from './P';
import { BtnNavLinks } from './BtnNavLinks';
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
width: 100%;
position: relative;
display: flex;
margin: 0 auto;
justify-content: center;
padding: 0 9rem;
`;
const Content= styled.div`
 width: 100%;
 padding: 0 1.5rem;
`;

const Img1= styled.img`
width:100%;
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
  width: 90%;
  padding: 0;

  @media (max-width:1080px){
    width: 90%;
  }
`;

function Header() {
  return (
    <Head>
    {/* <Navigationbar/> */}
    <Contents>
        <Content>
         <Heading
         as='h4'
         color='#151515'
         fontSize='3.2rem'
         $margin='0 0 1.5rem 0'
         $padding='5rem 0 0 0'
         $lineheight='normal'
         fontWeight='normal'
         $textalign='start'
         >
          We Are Making Every
          </Heading>
         <Heading 
         as='h1'
         color='#000000'
         fontSize='4rem'
         $margin='0 0 3rem 0'
         $padding='5rem 0 0 0'
         fontWeight='800'
         $textalign='start'
         $fontFamily='inherit'
         >
          Child`s World Better
          </Heading>
         <P color='#444444' fontSize='1.8rem' $lineheight='2.8rem'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
        </P>
        <LinkContainer>
            <BtnNavLinks to='/about'>About Us</BtnNavLinks>
            <BtnNavLinks to='/contact'>Contact Now</BtnNavLinks>
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