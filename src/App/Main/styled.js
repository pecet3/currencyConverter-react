import styled from "styled-components";

export const Container = styled.main`
    max-width: 650px;
    margin: 0 auto;
    background-color: ${({theme})=> theme.colors.transparentBleachWhite};
    border-radius: 15px;
    padding: 5px 15px 10px;
    text-align: left;
    border: 1px solid;
    box-shadow: 0px 0px 40px 10px rgb(0, 0, 0);

    @media (max-width:${({theme})=> theme.breakpoints.mobile}px) {
    background-color: ${({theme})=> theme.colors.lessTransparentBleachWhite};
    }

`;