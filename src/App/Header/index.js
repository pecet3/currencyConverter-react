import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"
import { Container, Content } from "./styled.js";

const Header = ({ title }) => (
    <ThemeProvider theme={theme}>
    <Container>
        <Content>{title}</Content>
    </Container>
    </ThemeProvider>
);

export default Header;