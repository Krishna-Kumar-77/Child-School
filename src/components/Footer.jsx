import React from 'react'
import styled from 'styled-components'
import images from '../images/images.js';
import Heading from '../ui/Heading.jsx';
import { P } from '../ui/P.jsx';

const FooterComponent = styled.div`
  width: 100%;
  display: flex;
  background-color: #000000;
  gap: 6rem;
  padding: 10rem 6rem;
`
const LogoDiv = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
const CopyRight = styled.div`
width: 100%;
background-color: #fff;

`
const FooterParagraph = styled(P)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
`

function Footer() {
  return (<>
  
    <FooterComponent>
        <div style={{width:'100%'}}>
          <div>
            <img src={images['logo.png']} alt='company-logo'/>
          </div>
          <P $margin='3rem 2rem 2rem 0' color='#fff'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing 
             elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim</P>
            <LogoDiv>
                <img src={images['fb-icon.png']} alt="facebook"/>
                <img src={images['twitter-icon.png']} alt="tweeter"/>
                <img src={images['linkedin-icon.png']} alt="Linkedin"/>
                <img src={images['instagram-icon.png']} alt="Instagram"/>
            </LogoDiv>  
        </div>
        <div>
         <Heading as='h4' color='#fff' $textalign='start'>Information</Heading>
         <P  $margin='4rem 2rem 0 0' color='#fff'>There are many variations of passages of Lorem Ipsum available, but the majority

         </P>
        </div>
        <div>
         <Heading as='h4' color='#fff' $textalign='start' >Helpful Links</Heading>
         <P $margin='4rem 2rem 0 0' color='#fff'>There are many variations of passages of Lorem Ipsum available, but the majority

         </P>
        </div>
    </FooterComponent>
    <CopyRight>
      <FooterParagraph $margin='2rem 0' width='100%'>&copy; 2023 All Rights Reserved. By Krishna Kumar.</FooterParagraph>
    </CopyRight>
    </>
  )
}

export default Footer