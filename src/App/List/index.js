// import currencies from "../currencies.js"
import { Container, Element } from "./styled.js";
import { useCurrencies } from "../useCurrencies.js";
import { Status } from "../Form/styled.js";


const List = () => {
  const currencies = useCurrencies();
  if (currencies.status === "loading") {
    return <Status> Proszę czekać, strona ładuje się </Status>
  }

  if (currencies.status === "error") {
    return <Status error>
      Ups... wystąpiło coś nie tak. Proszę sprawdź swoje połączenie z internetem.
      Jeśli jest prawidłowe, problem leży po naszej stronie
    </Status>
  }
  return (
  <Container>
    {currencies.status === "success" && 
    Object.keys(currencies.rate).map((currency => (
      <Element key={currency}>
        1 PLN = <strong>{(currencies.rate[currency]).toFixed(2)}</strong> {currency}
      </Element>
    )))}
  </Container>
  )};

export default List;    