import "./style.css"

const FinalAmount = ({firstAmount, typeCurrency}) => (
    <div>
    <p>
      <strong className="section__currencyField">
        {firstAmount == 0 ? "0.00" : firstAmount} {typeCurrency}
        </strong> jest warte:
      <strong className="section__resultField"> 0.00 PLN</strong>
    </p>
    </div>
);

export default FinalAmount;
