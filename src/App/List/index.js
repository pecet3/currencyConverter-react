// import currencies from "../currencies.js"
import { Container, Element } from "./styled.js";
import { useCurrencies } from "../useCurrencies.js";
import { StatusLoading, StatusError } from "../Status/index.js";


const List = () => {
  const currencies = useCurrencies();
  if (currencies.status === "loading") {
    return <StatusLoading list="true" />
  }

  if (currencies.status === "error") {
    return <StatusError list="true" error="true" />
  };
  return (
    <Container>
      {currencies.status === "success" &&
        Object.keys(currencies.rate).map((currency => (
          <Element key={currency}>
            1 {currency} = <strong>{(1 / (currencies.rate[currency])).toFixed(2)}</strong> PLN
          </Element>
        )))}
    </Container>
  )
};

export default List;    