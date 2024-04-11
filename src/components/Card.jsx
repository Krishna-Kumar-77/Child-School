import React from 'react'
import  Heading  from '../ui/Heading'
import { P } from '../ui/P'
import { Button } from '../ui/Button'
import { Imag } from '../ui/Imag'
import { ImgDiv } from '../ui/ImgDiv'
import { CardComponent } from '../ui/CardComponent'

function Card({children}) {
  console.log(children.headingdata)
  return (
    // <CardComponent>
    //   <ImgDiv><Imag src={Images} alt='My-Logo' /> </ImgDiv>
    //   <H1 fontSize='2.4rem' color='#282828' >PURE WATER</H1>
    //   <P margin='2rem 0' width='65%'>There are many variations of passages of Lorem Ipsum available,
    //      but the majority have suffered alteration in some form, by i 
    //      </P>
    //      <Button to='choose'>Read More</Button>
    //   </CardComponent>
      <CardComponent>
      <ImgDiv><Imag src={children.img.src} alt={children.img.alt} /> </ImgDiv>
      <Heading
        color='#282828'
       as={`${children.headingdata.types?children.headingdata.types:'h1'}`} 
       
       >{children.headingdata.heading}
       
       </Heading>
      <P $margin='2rem 0' width='65%'> {children.p}   </P>
         {
          children.Button? <Button to='choose'>{children.Button}</Button>: ''
         }
         
      </CardComponent>
  )
}

export default Card