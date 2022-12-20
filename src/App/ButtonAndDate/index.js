import "./style.css";
import Clock from "./Clock";

const ButtonAndDate = ({ showRates, setShowRates}) => {
    const onClickButton = () => {
        setShowRates(!showRates);
    }
    return (
        <>
        <div className="buttonAndDate">
        <button
            onClick={onClickButton} className="buttonAndDate__button">
            {showRates ? "Ukryj" : "Pokaż"} Kursy Walut
        </button>
        <Clock/>
        </div>
        </>
    )
}
export default ButtonAndDate;