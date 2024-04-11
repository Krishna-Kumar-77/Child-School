import styled, {css} from 'styled-components';

const Heading = styled.h1`
  ${(props)=> 
 props.as ==='h1' && css`
    
    font-size:  ${props=> props.fontSize? props.fontSize: '4rem'};
     color: ${props=> props.color? props.color: '#070706'};
     text-align: ${props=> props.$textalign? props.$textalign:'center'};
     font-family: Verdana;
     text-transform: uppercase;
     font-weight: ${props=> props.fontWeight? props.fontWeight:'bold'};
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
 `
}
${(props)=> 
 props.as ==='h4' && css`
    
    font-size:  ${props=> props.fontSize? props.fontSize: '2.4rem'};
     color: ${props=> props.color? props.color: '#070706'};
     text-align: ${props=> props.$textalign? props.$textalign:'center'};
     font-family: Verdana;
     font-weight: ${props=> props.fontWeight? props.fontWeight:'bold'};
    
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

`;

export default Heading
