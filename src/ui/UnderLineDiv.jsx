import styled from 'styled-components';

export const UnderLineDiv = styled.div`
    width: ${props=> props.width? props.width:'10rem'};
    height: ${props=> props.height? props.height:'1rem'};
    border-radius: 1rem;
    background-color: ${props=> props.$backgroundcolor?props.$backgroundcolor:'#0d7550'};
    justify-content: center;
    margin: 0 auto;
    /* border-bottom: 10px solid #0d7550;
    justify-content: center;
    margin: 0 auto;
    left: 0px;
    right: 0px;
    display: block;
    border-radius: 20px; */
`;
