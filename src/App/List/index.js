// import currencies from "../currencies.js"
import { Container, Element } from "./styled.js";
import { useCurrencies } from "../useCurrencies.js";
import { Status } from "../Status/index.js";


const List = () => {
  const currencies = useCurrencies();
  if (currencies.status === "loading") {
    return <Status list> Proszę czekać, ładujemy dane walut 😅 </Status>
  }

  if (currencies.status === "error") {
    return <Status list error>
      Ups... wystąpiło coś nie tak. Proszę sprawdź swoje połączenie z internetem.
      Jeśli jest prawidłowe, problem leży po naszej stronie
    </Status>
  }
  return (
  <Container>
    {currencies.status === "success" && 
    Object.keys(currencies.rate).map((currency => (
      <Element key={currency}>
        1 {currency} = <strong>{(1 / (currencies.rate[currency])).toFixed(2)}</strong> PLN
      </Element>
    )))}
  </Container>
  )};

export default List;    