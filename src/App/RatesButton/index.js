import "./style.css"

const RatesButton = ({ showRates, setShowRates, showDate}) => {
    const onClickButton = () => {
        setShowRates(!showRates);
    }
    return (
        <>
        <div className="buttonAndDate">
        <button
            onClick={onClickButton} className="ratesButton">
            {showRates ? "Ukryj" : "Pokaż"} Kursy Walut
        </button>
        {showDate}
        </div>
        </>
    )
}
export default RatesButton;