import styled from 'styled-components';

export const Li = styled.li`
display: ${props=>props.$display? props.$display:'block'};
font-size: 1.8rem;
padding: 0 1rem;

@media (max-width: 1080px){
    font-size: 1.6rem;
}
`;
