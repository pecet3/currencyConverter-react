// import currencies from "../currencies.js"
import { Container, Element } from "./styled.js";
import { useCurrencies } from "../useCurrencies.js";


const List = () => {
  const currencies = useCurrencies();
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