import React from 'react';
import styled from 'styled-components';
import { P } from '../ui/P';

const ServicesItem = styled.div`
  width: 88%;
  /* height: 10rem; */
  display:flex;
  background-color: var(--color-lightest);
  margin: 0 auto;
  border-radius: 1rem;
  padding: 1.5rem 1rem 0 1rem;
 margin-top: 3rem;
`;
const H1 =styled.h1`
color: #000000;
font-size: 3rem;
font-weight: bold;
line-height: normal;
margin-bottom: 3rem;
`;
const ImgDiv = styled.div`
width: 35%;
`
const Contents = styled.div`
width: 100%;
`

function ServicesItems({item,image}) {
    // console.log(item.img)
    // console.log(image)
  
  return (
    <ServicesItem>
     <ImgDiv>
     <img src={image} alt='images/img-1'/>
     </ImgDiv>
     <Contents>
     <H1>{item.title}</H1>
     <P>{item.paragraph}</P>
     </Contents>
     
    </ServicesItem>
  )
}

export default ServicesItems