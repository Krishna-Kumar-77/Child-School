import React from 'react'
import  Heading  from '../ui/Heading';
import { UnderLineDiv } from '../ui/UnderLineDiv';
import { P } from '../ui/P';
import styled from 'styled-components';
import { GridView } from '../ui/GridView';
import Images from '../images/img-9.png';
import { CardComponent } from '../ui/CardComponent';
import { ImgDiv } from '../ui/ImgDiv';
import { Imag } from '../ui/Imag';
import { Button } from '../ui/Button';


const ChooseComponent = styled.div`
  width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-bottom: 10rem;
`;
const Div = styled.div`
  margin-bottom: 5rem;
`
function Choose() {
  // const data ={
  //   img: {
  //     src: `${Images}`,
  //     alt: `My-Logo`
  //   },
  //   headingdata: {
  //     types: 'h3',
  //     heading: 'PURE WATER',
  //   },
  //   p : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by i',
  //   Button: 'Read More',
  // }
  return (
    <ChooseComponent>
      <Div>
        <Heading as='h1'>WHY CHOOSE OUR SCHOOL</Heading>
        <UnderLineDiv></UnderLineDiv>
         <P width ='100%' $margin='2rem 0' >It is a long established fact that a reader will be distracted by the readable content of a page</P>
      </Div>
      <GridView>
      <CardComponent >
          <ImgDiv>
            <Imag  src={Images} alt="card-img" />
          </ImgDiv>
          <Heading color="#282828" as="h3">
          PURE WATER
          </Heading>
          <P $margin="2rem 0" width="65%">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by i
          </P>
          <Button to='choose'>Read More</Button>
        </CardComponent>
        <CardComponent >
          <ImgDiv>
            <Imag  src={Images} alt="card-img" />
          </ImgDiv>
          <Heading color="#282828" as="h3">
          PURE WATER
          </Heading>
          <P $margin="2rem 0" width="65%">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by i
          </P>
          <Button to='choose'>Read More</Button>
        </CardComponent>
        <CardComponent >
          <ImgDiv>
            <Imag  src={Images} alt="card-img" />
          </ImgDiv>
          <Heading color="#282828" as="h3">
          PURE WATER
          </Heading>
          <P $margin="2rem 0" width="65%">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by i
          </P>
          <Button to='choose'>Read More</Button>
        </CardComponent>
      {/* <Card >
        {data} 
      </Card>
      <Card >{data}</Card>
      <Card >{data}</Card> */}
      </GridView>
    </ChooseComponent>
  )
}

export default Choose