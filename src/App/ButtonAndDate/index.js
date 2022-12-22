import Clock from "./Clock";
import { Container, Button } from './styled.js';
import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"

const ButtonAndDate = ({ showRates, setShowRates}) => {
    const onClickButton = () => {
        setShowRates(!showRates);
    }
    return (
        <>
        <ThemeProvider theme={theme}>
        <Container>
        <Button
            onClick={onClickButton} className="buttonAndDate__button">
            {showRates ? "Ukryj" : "Pokaż"} Kursy Walut
        </Button>
        <Clock/>
        </Container>
        </ThemeProvider>
        </>
    )
}
export default ButtonAndDate;