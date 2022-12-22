import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: 24px auto;
    font-size: 12px;
    width: 180px;
    box-shadow: 0px 0px 20px rgb(49, 49, 49);
    text-shadow: 1px 1px rgb(255, 255, 255);
    font-size: 13px;
    background-color: ${({theme})=> theme.colors.transparentBleachWhite};
    border-radius: 8px;
    padding: 3px;
`;