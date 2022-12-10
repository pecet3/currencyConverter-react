import "./style.css"
import currencies from "../currencies.js"

const List = () => (
    <div className="list" >
    {currencies.map((currency => (
        <li className="list__element" key={currency.short}>
          1 {currency.short} ({currency.name}) = <strong>{currency.rate}</strong> PLN
        </li>
      )))}
    </div>
)

export default List;    