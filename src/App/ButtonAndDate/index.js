import "./style.css"

const ButtonAndDate = ({ showRates, setShowRates, showDate}) => {
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
        {showDate}
        </div>
        </>
    )
}
export default ButtonAndDate;