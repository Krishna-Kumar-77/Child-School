import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnNavLinks = styled(NavLink)`
    width: 35%;
    float: left;
    font-size: 1.8rem;
    color: #0d7550;
    border: 2px solid #0d7550;
    text-align: center;
    padding: 0.8rem 0;
    border-radius: 3px;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 1rem;
    
    @media (max-width:1080px){
        font-size: 1.4rem;
    }
`;
