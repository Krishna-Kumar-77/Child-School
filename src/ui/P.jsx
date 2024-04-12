import styled from 'styled-components';

export const P = styled.p`
    font-size: ${props=> props.fontSize? props.fontSize:'1.6rem'};
    color:${props=> props.color? props.color: '#070706'};
    text-align:${props=> props.$textalign? props.$textalign: "justify"};
    font-weight: 300;
    margin-left: 0rem;
    line-height:${props=> props.$lineheight? props.$lineheight: '3rem'};
    width: ${props=> props.width? props.width:'95%'};
    letter-spacing: 0.05rem;
    margin: ${props=> props.$margin? props.$margin: ''} ;

    @media (max-width: 1270px){
        /* margin: 2rem 0 ; */
        letter-spacing: 0.02rem;
    }

    @media (max-width:1080px){
        letter-spacing:0.01rem;
        
    }

    @media (max-width:970px){
        font-size: 1.5rem ;
        
    }

`;
