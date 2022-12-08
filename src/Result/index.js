import "./style.css"

const result = ({amount, typeCurrency, intoPLN, result}) => (
    <div>
    <p>
      <strong className="section__currencyField">
        {amount == 0 ? "0.00" : amount} {intoPLN ? typeCurrency : "PLN"}
        </strong> jest warte:
      <strong className="section__resultField"> {result == 0 ? "0.00" : result.toFixed(2)} {intoPLN ? "PLN" : typeCurrency}</strong>
    </p>
    </div>
);

export default result;
