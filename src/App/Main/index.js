import {ThemeProvider} from "styled-components"
import {theme} from "../theme.js"
import {Container} from "./styled.js";

const Main = (props) => (
    <ThemeProvider theme={theme}>
    <Container>
        {props.children}
    </Container>
    </ThemeProvider>
);

export default Main;