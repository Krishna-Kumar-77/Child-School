import styled from 'styled-components';

export const P = styled.p`
    font-size: ${props=> props.fontSize? props.fontSize:'1.6rem'};
    color:${props=> props.color? props.color: '#070706'};
    text-align: justify;
    font-weight: 300;
    margin-left: 0rem;
    line-height: 3rem;
    width: ${props=> props.width? props.width:'95%'};
    letter-spacing: 0.05rem;
    margin: ${props=> props.$margin? props.$margin: ''} ;
`;
