import "./style.css"

const FinalAmount = ({firstAmount}) => (
    <div>
    <p>
      <strong className="section__currencyField">{firstAmount}</strong>
      jest warte:
      <strong className="section__resultField"> 0.00 PLN</strong>
    </p>
    </div>
);

export default FinalAmount;
