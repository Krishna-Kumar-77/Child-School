import styled, {css} from 'styled-components';

const Heading = styled.h1`
  ${(props)=> 
 props.as ==='h1' && css`
    
    font-size:  ${props=> props.fontSize? props.fontSize: '4rem'};
     color: ${props=> props.color? props.color: '#070706'};
     text-align: ${props=> props.$textalign? props.$textalign:'center'};
     font-family:${props=> props.$fontFamily? props.$fontFamily: 'Verdana'};
     text-transform: uppercase;
     font-weight: ${props=> props.fontWeight? props.fontWeight:'bold'};
     line-height: ${props=> props.$lineheight?props.$lineheight:'' };
 `
}
${(props)=> 
 props.as ==='h3' && css`
    
    font-size:  ${props=> props.fontSize? props.fontSize: '2.4rem'};
     color: ${props=> props.color? props.color: '#070706'};
     text-align: ${props=> props.$textalign? props.$textalign:'center'};
     font-family: Verdana;
     text-transform: uppercase;
     font-weight: ${props=> props.fontWeight? props.fontWeight:'bold'};
     line-height: ${props=> props.$lineheight?props.$lineheight:'' };
 `
}
${(props)=> 
 props.as ==='h4' && css`
    
    font-size:  ${props=> props.fontSize? props.fontSize: '2.4rem'};
     color: ${props=> props.color? props.color: '#070706'};
     text-align: ${props=> props.$textalign? props.$textalign:'center'};
     font-family: Verdana;
     font-weight: ${props=> props.fontWeight? props.fontWeight:'bold'};
     line-height: ${props=> props.$lineheight?props.$lineheight:'' };
     margin: ${props=> props.$margin? props.$margin: ''};
     padding:${props=> props.$padding? props.$padding: ''};
    
 `
}
${(props)=> 
 props.as ==='h5' && css`
    
    font-size:  ${props=> props.fontSize? props.fontSize: '1.6rem'};
     color: ${props=> props.color? props.color: '#070706'};
     text-align: ${props=> props.$textalign? props.$textalign:'center'};
     font-family: Verdana;
     font-weight: ${props=> props.fontWeight? props.fontWeight:'bold'};
    
 `
}

@media (max-width: 1270px) {
   
    ${(props) =>
      props.as === 'h1' &&
      css`
        font-size: 3.6rem;
      `}

    /* ${(props) =>
      props.as === 'h3' &&
      css`
        font-size: 2.8rem;
      `} */

    ${(props) =>
      props.as === 'h4' &&
      css`
        font-size: 3rem;
      `}

    ${(props) =>
      props.as === 'h5' &&
      css`
        /* font-size: 1.4rem; */
        width: 95%;
      `}
  }
  @media (max-width: 1160px){
    ${(props) =>
      props.as === 'h1' &&
      css`
        font-size: 3.2rem;
      `}
      ${(props) =>
      props.as === 'h4' &&
      css`
        font-size: 2.6rem;
      `}
  }
  @media (max-width:1080px){
    ${(props) =>
      props.as === 'h1' &&
      css`
        font-size: 3rem;
      `}
  }
  @media (max-width:1020px){
    ${(props) =>
      props.as === 'h1' &&
      css`
        font-size: 2.8rem;
      `}
  }
  @media (max-width:970px){
    ${(props) =>
      props.as === 'h1' &&
      css`
        font-size: 2.6rem;
      `}
      ${(props) =>
      props.as === 'h4' &&
      css`
        font-size: 2.4rem;
      `}
  }

  @media (max-width: 950px){
    ${(props) =>
      props.as === 'h1' &&
      css`
        font-size: 2rem;
      `}
      ${(props) =>
      props.as === 'h3' &&
      css`
        font-size: 1.8rem;
      `}
      ${(props) =>
      props.as === 'h4' &&
      css`
        font-size:1.6rem;
      `}
      ${(props) =>
      props.as === 'h5' &&
      css`
        font-size: 1.4rem;
      `}
  }

`;

export default Heading
