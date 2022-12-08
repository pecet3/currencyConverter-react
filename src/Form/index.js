import { useState } from "react";
import "./style.css"

const Form = ( {firstAmount, typeCurrency, intoPLN, setTypeCurrency, setFirstAmount, setFinalAmount,setIntoPLN }) => {

  const [fromPLN, setFromPLN] = useState(false);


  const onSelectChange = ({target}) => {setTypeCurrency(target.value)};

  const onInputChange = ({target})  => {setFirstAmount(target.value)};

  const onRadioChange = () => {
    setIntoPLN(intoPLN => !intoPLN) 
    setFromPLN(fromPLN => !fromPLN)
  };


  const calculateIntoPLN = (amount, rate) => {
    setFinalAmount(amount * rate)
  };

  const calculateFromPLN = (amount, rate) => {
    setFinalAmount(amount / rate)
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    recognizeThenInit();
  };
  
  const recognizeThenInit = () => {
    const rateEUR = 4.69;
    const rateGBP = 5.44;
    const rateUSD = 4.48;

    if (intoPLN) {
      switch (typeCurrency) {
        case "USD":
          return calculateIntoPLN(firstAmount, rateUSD);
        case "EUR":
          return calculateIntoPLN(firstAmount, rateEUR);
        case "GBP":
          return calculateIntoPLN(firstAmount, rateGBP);
      }
    } else if (fromPLN) {
      switch (typeCurrency) {
        case "USD":
          return calculateFromPLN(firstAmount, rateUSD);
        case "EUR":
          return calculateFromPLN(firstAmount, rateEUR);
        case "GBP":
          return calculateFromPLN(firstAmount, rateGBP);
      }
    }
  };
  return (
    <>
      <form className="form" onSubmit={onSubmitForm}>

        <fieldset className="form__fieldset">
          <legend className="form__legend">Wybierz walutę do obliczeń</legend>
          <p>
            <div className="form__container">
              <span className="form__labelText">Waluta:</span>
              <select
                className="form__field"
                name="currency"
                value={typeCurrency}
                onChange={onSelectChange}>

                <option className="form__option" value="USD">
                  Dolar Amerykański
                </option>
                <option className="form__option" value="EUR" select="true">Euro</option>
                <option className="form__option" value="GBP">Funt Angielski</option>
              </select>
            </div>
          </p>
        </fieldset>

        <fieldset className="form__fieldset">
          <legend className="form__legend">
            Wpisz swój kapitał do przeliczenia
          </legend>
          <div className="form__container form__container--currency">
            <div className="form__containerElement">
              <span className="form__labelText form__labelText--curency">
                Jaką walutę posiadasz?
              </span>
            </div>
            <div className="form__containerElement">
              <label className="form__label form__label--radio">
                <span className="form__radioElement">
                  <input
                    type="radio"
                    name="operationType"
                    onChange={onRadioChange}
                    checked={fromPLN}
                  />
                  PLN
                </span>
                <span className="form__radioElement">
                  <input
                    type="radio"
                    name="operationType"
                    onChange={onRadioChange}
                    checked={intoPLN}
                  />
                  {typeCurrency}
                </span>
              </label>
            </div>
          </div>
          <label className="form__label">
            <div className="form__container">
              <div className="form__containerElement">
                <span className="form__labelText">Ilość:</span>
              </div>
              <div className="form__containerElement">
                <input type="number" className="form__field" min="0.00"
                  step="0.01" value={firstAmount} onChange={onInputChange} />
              </div>
              <button className="form__submitButton">Policz Wynik</button>
            </div>
          </label>
        </fieldset>
        <p className="form__textDataInfo">*kursy pochodzą z dnia 06.12.2022</p>
        <div className="form__containerButton">
        </div>
      </form>
    </>
  )

};

export default Form;