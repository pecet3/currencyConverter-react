import {Container} from "./styled.js";
import {ThemeProvider} from "styled-components"
import {theme} from "../theme.js"

const Result = ({ result }) => (
  <ThemeProvider theme={theme}>
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
    </ThemeProvider>
);

export default Result;
