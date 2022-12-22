import { StyledFooter } from './styled.js';
import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"

const Footer = () => (
    <ThemeProvider theme={theme}>
    <StyledFooter>
        Jakub Pacewicz 2022 ©
    </StyledFooter>
    </ThemeProvider>
);

export default Footer;