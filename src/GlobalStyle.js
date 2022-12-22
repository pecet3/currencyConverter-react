import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";
import backgroundMobile from './images/background_phone.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        text-align: center;
        max-width: 1000px;
        margin: 0 auto;
        line-height: 1.3;
        font-family: 'Lato', sans-serif;
        background-image: url(${background});
    }

    @media (max-width: 768px){
    body {
        background-image: url(${backgroundMobile});
        background-size: 800px 1100px;
        background-position: 10% 0;
    }}

    #root {
        margin: 0 9px;
    }

`;