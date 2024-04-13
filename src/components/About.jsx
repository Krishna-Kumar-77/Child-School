import React, {useEffect} from 'react'
import { UnderLineDiv } from '../ui/UnderLineDiv';
import styled from 'styled-components';
import Images from '../images/img-8.png';
import Heading from '../ui/Heading';
import { Button } from '../ui/Button';
import { ReadMore } from '../ui/ReadMore';
import { P } from '../ui/P';
const AboutComponent = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--color-dark);
  gap: 1rem;
  margin-bottom: 10rem;
`;
const ImgDiv = styled.div`
width: 50%;
display: flex;
`
const Img = styled.img`
width: 100%;
`
const ContentDiv = styled.div`
width: 50%;
padding: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <AboutComponent>
      <ImgDiv><Img src={Images} alt='about' /></ImgDiv>
      <ContentDiv>
        <div>
          <Heading as='h1' color='#ffffff' fontWeight='500' >ABOUT OUR SCHOOL</Heading>
          <UnderLineDiv $backgroundcolor='#ffffff'></UnderLineDiv>
        </div>
        <P width='75%' color='#ffffff'>It is a long established fact that a reader will be distracted by
           the readable content of a page when looking at its layout. 
           The point of using Lorem Ipsum is that it has a more-o
        </P>
        <ReadMore>
          <Button $backgroundcolor='#ffffff' color='#000000' to='/about'>Read More </Button>
        </ReadMore>
      </ContentDiv>
    </AboutComponent>
  )
}

export default About