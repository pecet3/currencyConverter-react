import currencies from "../currencies.js"
import { Container, Element } from "./styled.js";


const List = () => (
    <Container>
      {currencies.map((currency => (
        <Element className="list__element" key={currency.short}>
          1 {currency.short} ({currency.name}) = <strong>{currency.rate}</strong> PLN
        </Element>
      )))}
    </Container>
)

export default List;    