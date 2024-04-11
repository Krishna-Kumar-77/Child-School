import React from 'react'
import ServicesItems from './ServicesItems'
import images from '../images/images.js';
import styled from 'styled-components';
import { Button } from '../ui/Button.jsx';
import { UnderLineDiv } from '../ui/UnderLineDiv.jsx';
import  Heading  from '../ui/Heading.jsx';
import { ReadMore } from '../ui/ReadMore.jsx';
const items =[ 
  {
  id:1,
  title: 'GREAT FACILITIES',
  paragraph: `It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-o`
  },
  {
  id:2,
  title: 'VARIED CLASSES',
  paragraph: `It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-o`
  },
  {
    id:3,
  title: 'SCHOOL BUS',
  paragraph: `It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-o`
  },
  {
    id:4,
  title: 'SCIENCE LABS',
  paragraph: `It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-o`
  },
  {
    id:5,
  title: 'DELICIOUS MEALS',
  paragraph: `It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-o`
  },
  {
  id:6,
  title: 'FUNNY GAMES',
  paragraph: `It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-o`
  },

]

const ServicesComponent = styled.div`
  position: relative;
  width: 100%;
  display: block;
  margin-bottom: 10rem;
`
const ServicesHeading = styled.div`
   width: 100%;
   position: relative;
   
`
function Services() {
  
  return (
    <ServicesComponent>
    <ServicesHeading>
      <div><Heading as='h1'>OUR SERVICES</Heading></div>
      <UnderLineDiv></UnderLineDiv>
    </ServicesHeading>
    {items.map((item, index)=>
    
    <ServicesItems item = {item} key ={item.id} 
    image={`${images[`img-${index+2}.png`]}`}
    />
      )}
    <ReadMore>
      <Button to='/services'>Read More</Button>
    </ReadMore>
    </ServicesComponent>

  )
}

export default Services