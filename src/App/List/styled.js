import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
    }
`;

export const Element = styled.li`
    padding: 7px 5px;
`;