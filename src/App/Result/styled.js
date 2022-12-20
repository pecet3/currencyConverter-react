import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    font-size: 19px;
    background-color: ${({theme})=> theme.colors.transparentWhite};
    border-radius: 10px;
    padding: 1px;
    max-width: 400px;
    margin: 0 auto;

    @media (max-width:${({theme}) => theme.breakpoints.mobile}px){
        background-color: ${({theme})=> theme.colors.transparentGrey};
    }
`;