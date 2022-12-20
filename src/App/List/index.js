import currencies from "../currencies.js"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme.js"
import { Container, Element } from "./styled.js";


const List = () => (
  <ThemeProvider theme={theme}>
    <Container>
      {currencies.map((currency => (
        <Element className="list__element" key={currency.short}>
          1 {currency.short} ({currency.name}) = <strong>{currency.rate}</strong> PLN
        </Element>
      )))}
    </Container>
  </ThemeProvider>
)

export default List;    