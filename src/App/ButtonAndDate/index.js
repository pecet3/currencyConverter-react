import "./style.css"

const ButtonAndDate = ({ showRates, setShowRates, Clock}) => {
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
        {Clock}
        </div>
        </>
    )
}
export default ButtonAndDate;