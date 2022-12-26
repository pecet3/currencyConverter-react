import styled, {css} from "styled-components";

export const Container = styled.div`
    text-align:center;
    min-height: 425px;
    padding-top: 150px;

    @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
            min-height: 473.5px;
        }

    ${({ error })=> error && css`
        font-size: 18px;
        color: ${({theme})=>theme.colors.shiraz};
    `}
    ${({ list })=> list && css`
        min-height: 0;
        padding-top: 0;
        padding: 76.5px 0;
        @media(max-width:${({theme})=>theme.breakpoints.mobile}px){
            padding:153px 0;
        }
    `}
    
`;