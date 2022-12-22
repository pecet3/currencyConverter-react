import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme})=>theme.colors.veryTransparentBlack};
    border-radius: 8px;
    padding: 8px;
    margin-top: 5px;

    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;

    @media(max-width:${({theme})=> theme.breakpoints.mobile}px){
        grid-template-columns: 1fr;
        grid-gap: 7px;
    }
`;

export const Button = styled.button`
    border: none;
    padding: 5px;
    background-color: ${({theme})=>theme.colors.lightGrey};
    border-radius: 7px;
    font-weight: 600;
    font-size: 12px;
    transition: .3s;
    box-shadow: 0px 0px 5px 2px gray;

    &:hover{
        cursor: pointer;
        transform: scale(1.04);
        background-color: ${({theme})=>theme.colors.veryLightGrey};
    }
`;