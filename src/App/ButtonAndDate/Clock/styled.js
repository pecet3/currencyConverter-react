import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Martian Mono', monospace;
    font-size: 12px;
    justify-self: end;
    background-color: ${({ theme }) => theme.colors.transparentLightGrey};
    padding: 5px 8px;
    border-radius: 7px;

@media(max-width:${({ theme }) => theme.breakpoints.mobile}px){
        justify-self: center;
        width: 100%;
        text-align: center;
        background-color: ${({ theme }) => theme.colors.transparentAlmond};
};
`;