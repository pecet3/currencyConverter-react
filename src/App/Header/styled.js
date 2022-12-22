import styled from "styled-components";
import backgroundImage from "../../images/header_background.jpg"

export const Container = styled.header`
    margin: 30px auto;
    padding: 10px;
    max-width: 330px;
    border-radius: 10px;
    background-image: url(${backgroundImage});
    background-position: 50% 90%;
    border: 1px solid;
    box-shadow: 0px 0px 40px 5px rgb(0, 0, 0);
`;

export const Content = styled.h1`
    font-family: 'Cinzel', serif;
    font-size: 40px;
    margin: 0 auto;
    text-shadow: 1px 2px rgb(246 255 229);
    text-rendering: geometricPrecision;
    outline: 1px solid
`;