import Clock from "./Clock";
import { Container, Button } from './styled.js';
import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"
import { useCurrencies } from "../useCurrencies";

const ButtonAndDate = ({ showRates, setShowRates}) => {
    const currencies = useCurrencies();
    const onClickButton = () => {
        setShowRates(!showRates);
    }
    return (
        <>
        <ThemeProvider theme={theme}>
        <Container>
        <Button
            onClick={onClickButton}
            className="buttonAndDate__button"
            disabled={
            currencies.status==="error"
            || currencies.status==="loading"
            ? true
            : false}>
            {showRates ? "Ukryj" : "Pokaż"} Kursy Walut
        </Button>
        <Clock/>
        </Container>
        </ThemeProvider>
        </>
    )
}
export default ButtonAndDate;