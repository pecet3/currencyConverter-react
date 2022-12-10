import "./style.css"

const RatesButton = ({ showRates, setShowRates }) => {
    const onClickButton = () => {
        setShowRates(!showRates);
    }
    return (
        <button
            onClick={onClickButton} className="ratesButton">
            {showRates ? "Ukryj" : "Pokaż"} Kursy Walut
        </button>
    )
}
export default RatesButton;