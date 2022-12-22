import {Container} from "./styled.js";

const Result = ({ result }) => (
    <Container>
      <p>
        <strong>
          {
            result.firstAmount === undefined || result.finalAmount == 0
              ? "0.00"
              : result.firstAmount
          }&nbsp;
          {result.intoPLN ? result.typeCurrency : "PLN"}&nbsp;
        </strong>
        jest warte:&nbsp;
        <strong>
          {result.finalAmount === undefined || result.firstAmount === undefined
            ? "0.00"
            : result.finalAmount.toFixed(2)}&nbsp;
          {result.intoPLN ? "PLN" : result.typeCurrency}
        </strong>
      </p>
    </Container>
);

export default Result;
