import "./style.css"

const FinalAmount = ({firstAmount, typeCurrency, intoPLN}) => (
    <div>
    <p>
      <strong className="section__currencyField">
        {firstAmount == 0 ? "0.00" : firstAmount} {intoPLN ? typeCurrency : "PLN"}
        </strong> jest warte:
      <strong className="section__resultField"> 0.00 {intoPLN ? "PLN" : typeCurrency}</strong>
    </p>
    </div>
);

export default FinalAmount;
