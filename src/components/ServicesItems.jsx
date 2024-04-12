import React from 'react';
import styled from 'styled-components';
import { P } from '../ui/P';
import Heading from '../ui/Heading';

const ServicesItem = styled.div`
  width: 88%;
  /* height: 10rem; */
  display:flex;
  background-color: var(--color-lightest);
  margin: 0 auto;
  border-radius: 1rem;
  padding: 1.5rem 1rem 0 1rem;
 margin-top: 3rem;
 gap: 2rem;
`;
const ImgDiv = styled.div`
width: 35%;
`
const Contents = styled.div`
width: 100%;
`

function ServicesItems({item,image}) {
  
  return (
    <ServicesItem>
     <ImgDiv>
     <img src={image} alt='images/img-1'/>
     </ImgDiv>
     <Contents>
     <Heading 
     as='h1'
     color='#000000'
     $textalign='start'
     fontSize='2.8rem'
     $lineheight='normal'
     margin='0 0 3rem 0'
     >{item.title}</Heading>
     <P>{item.paragraph}</P>
     </Contents>
     
    </ServicesItem>
  )
}

export default ServicesItems