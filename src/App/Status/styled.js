import styled, {css} from "styled-components";

export const Container = styled.div`
    text-align:center;
    min-height: 420px;
    padding-top: 150px;
    ${({ error })=> error && css`
        font-size: 18px;
        color: ${({theme})=>theme.colors.shiraz}
    `}
    ${({ list })=> list && css`
        min-height: 0;
    `}
`;